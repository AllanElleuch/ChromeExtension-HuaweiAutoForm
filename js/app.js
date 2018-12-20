(function () {
    /*
     * MAIN
     **/

    var init = {

        checkAuth: function (callback) {
            var authPageId = localStorage.getItem("$ApiExpressExt.authentificated");
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {data: 'checkPageType', tabId: tabs[0].id}, function (response) {
                    $('.menu-container .card').hide();
                    $('.menu-container .advanced-card').hide();
                    $('.menu-container .infoBull').hide();
                    $('.menu-container .authentificate').hide();
                    console.log("XXXXXXXXXX response")

                    if(response){
                      console.log("There is a response")
                    }else {
                        console.log("there is no response")
                    }

                    if (response && response.error) {
                        console.log(" response error : ")

                        if (authPageId) {
                            $('.menu-container .card').hide();
                            $('.menu-container .advanced-card').hide();
                            $('.infoBull').addClass('alert-danger');
                            $('.infoBull img.product-img').hide();
                            $('.menu-container .infoBull .description').html(response.data.errorMsg);
                            $('.menu-container .infoBull').show();
                        } else {
                            $('.menu-container .authentificate').show();
                            $('.menu-container .error-auth').show();
                            $('.menu-container .auth-succ').hide();
                        }
                        return true;
                    }
                    if (response && response.type === 'aliexpress_page') {
                      console.log(" response aliexpress_page : hide menu-container authentificate")
                        $('.menu-container .authentificate').hide();
                        callback(tabs[0].id);
                    } else if (response && response.type === 'module_page') {
                      console.log(" response module_page : hide menu-container authentificate")

                        localStorage.setItem("$ApiExpressExt.authentificated", tabs[0].id);
                        $('.menu-container .authentificate').show();
                        $('.menu-container .error-auth').hide();
                        $('.menu-container .auth-succ').show();
                    } else {
                      //console.log(" response else : hide menu-container authentificate")

                        $('.menu-container .card').hide();
                        $('.menu-container .advanced-card').hide();
                        $('.infoBull img').attr('src', './images/error-icon.png');

                        $('.menu-container .infoBull').show();
                    }
                });
            });
        },
        prepareProduct: function (tabId) {
            var authPageId = parseInt(localStorage.getItem("$ApiExpressExt.authentificated"));
            console.log(authPageId)
            var callback =  function (response) {
                if (!response.error) {
                  console.log(response.data)

                  /*
                    chrome.tabs.sendMessage(authPageId,  {
                        data: 'getBackendUrl'
                    }, function (response) {
                        $M.common.getCategoriesList();
                    });
                    chrome.tabs.sendMessage(authPageId, {
                        data: 'checkProductIfExist',
                        productId: response.data.productId
                    }, function (response) {
                        console.log('checkProductIfExist', response);
                    });

                    */
                    $('.cover img').attr('src', response.data.imgUrl);
                    $('#inputTitle').val(response.data.title);
                    if(isNaN(response.data.shippingCost)){
                        $('#inputShippingCost').val(0);
                    }else{
                        $('#inputShippingCost').val(response.data.shippingCost);
                    }
                    $('#inputPrice').val(response.data.price);
                    $('#inoputTitle').val(response.data.title);
                    $('#inputReference').val(response.data.productId);
                    $('#inputQuantity').val(response.data.quantity);
                    $('.menu-container .card').show();
                } else {
                    $('.menu-container .card').hide();
                    $('.menu-container .advanced-card').hide();
                    $('.infoBull img').attr('src', './images/error-icon.png');
                    $('.menu-container .infoBull .description').html(response.data.errorMsg);
                    $('.menu-container .infoBull').show();
                }
            };
            chrome.tabs.sendMessage(tabId, {data: 'toSet'}, callback);




        },
        importProduct: function () {
            var authPageId = parseInt(localStorage.getItem("$ApiExpressExt.authentificated"));
            $('.footer').hide();
            $('.import-loading').show();


            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {


              /*  chrome.tabs.sendMessage(tabs[0].id, {
                    data: 'toImport',
                    authPageId: authPageId
                }, function (productToImport) {
                  */
                  var productToImport = {data : {}}
                    //productToImport.data.imageUrl = $('.cover img').attr('src');
                    productToImport.data.active = $('#active_on').is(':checked');
                    productToImport.data.price = parseFloat($('#inputPrice').val());
                    productToImport.data.quantity = $('#inputQuantity').val();
                    productToImport.data.title =  $('#inputTitle').val();
                    //productToImport.data.name =  productToImport.data.name.replace(/( )/g, " ").slice(0, 110);
                    productToImport.data.shippingCost = $('#inputShippingCost').val();
                    productToImport.data.id_category = $('#inputCategoryId').val();
                    productToImport.shopurl = $('#shopurl').val();


                    if(!$('#description_on').is(':checked')){
                        productToImport.data.detailDescriptionUrl = false;
                    }
                    console.log("Product " )
                    console.log(productToImport)

                    var currentImport = JSON.stringify(productToImport.data);
                    localStorage.setItem("$ApiExpressExt.currentImport", currentImport);

                    $.ajax({
    url: "http://127.0.0.1:8080/prestashop_1.7.2.4/restapimodule/login",
    type: 'POST',

    data: {
        ajax: true,
        action: 'checkProductIfExist',
	      product: currentImport,
        shopurl: productToImport.shopurl
    },
    success: function (data) {
        console.log(data);
    },
    fail: function () {
      console.log("failled");
    }
});


                    chrome.tabs.sendMessage(tabs[0].id, {
                        data: 'print',
                        product: currentImport,
                        shopurl: productToImport.shopurl
                    }, function (response) {
                        console.log(response);
                    });

                    /*  chrome.tabs.get(authPageId, function (tab) {
                     chrome.windows.get(tab.windowId, function (win) {
                     win.$M.common.insertProductDb(request.product, {}, function () {
                     console.log('prooooduct inserted');
                     });
                     });
                     });*/
                    console.log('success');
              //  });
            });
        },
        getCategoriesList: function (event, parentCategory) {
            if (parentCategory && parentCategory.id_category) {
                $('#inputCategoryId').val(parentCategory.id_category);
            }

            $.ajax({
                url: window.ajax_php_request,
                type: 'POST',
                timeout: 10000,
                data: {
                    ajax: true,
                    action: 'GetCategories',
                    parentCategoryId: parentCategory && parentCategory.id_category ? parentCategory.id_category : null
                },
                success: function (data) {
                    if (data) {
                        data = JSON.parse(data);
                        if (!data.failure) {
                            if (data.length > 0) {
                                window.categoriesListParent.push(data);
                                $('.back-cat-btn').show();
                                $('#treeCategories').treeview({
                                    data: data,
                                    onNodeSelected: $M.common.getCategoriesList,
                                    enableLinks: true
                                });
                            }
                        } else {
                            console.log({type: 'getCategoriesList', error: true});
                        }
                    } else {
                        console.log({type: 'getCategoriesList', error: true});
                    }
                },
                fail: function () {
                    console.log({type: 'getCategoriesList', error: true});
                }
            });

        },
        backToParent: function () {
            if (window.categoriesListParent.length > 1) {
                window.categoriesListParent.splice(-1, 1);
                if (window.categoriesListParent.length - 1 === 0) {
                    $('.back-cat-btn').hide();
                }
            }
            $('#treeCategories').treeview({
                data: window.categoriesListParent[window.categoriesListParent.length - 1],
                onNodeSelected: $M.common.getCategoriesList,
                enableLinks: true
            });
        }

    };


    if (typeof $M === 'undefined') {
        $M = {};
    }

    $M.common = init;
})();

window.categoriesListParent = [];

$(document).ready(function () {
    $M.common.checkAuth($M.common.prepareProduct);
    $('.btn-import, .btn-updateImport').on('click', function () {
        $M.common.importProduct();
    });

    $('.btn-advanced').on('click', function () {
        $('.card').hide();
        $('.btn-advanced').hide();
        $('.back-to-card').show();
        $('.advanced-card').show();
    });
    $('.back-to-card').on('click', function () {
        $('.card').show();
        $('.btn-advanced').show();
        $('.back-to-card').hide();
        $('.advanced-card').hide();
    });
    $('.back-cat-btn').on('click', function () {
        $M.common.backToParent()
    });

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        console.log("something happening in the page script", request);
        $('.import-loading').hide();
        if (request.type == 'succeful-import') {
            console.log('sendprouct', request.data);
            $('.menu-container .card').hide();
            $('.menu-container .advanced-card').hide();
            $('.infoBull img.product-img').attr('src', $('.card .cover img').attr('src'));
            $('.infoBull img.success-img').show();
            $('.infoBull').addClass('succ-import');
            var msg = 'product inserted succeffuly';
            if (!$('.btn-updateImport').hasClass('hidden')) {
                msg = 'product updated succeffuly';
            }
            $('.menu-container .infoBull .description').html(msg);
            $('.menu-container .infoBull').show();
        }
        if (request.type == 'checkProductIfExist') {
            if (!request.error) {
                $('.btn-updateImport').removeClass('hidden');
                $('.btn-import').addClass('hidden');
            } else {
                $('.btn-import').removeClass('hidden');
                $('.btn-updateImport').addClass('hidden');
            }
        }

        if (request.type == 'getBackendUrl') {
            window.ajax_php_request = request.url;
        }
        sendResponse();
    });
});
