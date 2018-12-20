function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}
injectScript(chrome.extension.getURL('js/injectScript.js'), 'body');

(function () {
    /*
     * MAIN
     **/

    var init = {
        insertProductDb: function (apiProductDetails,ajax_url) {
            var ajax_php_request = ajax_url;
            var formkey = $('body').find('[name="form_key"]').val();
            $.ajax({
                url: ajax_php_request,
                type: 'POST',
                indexValue: {
                    productDetails: apiProductDetails
                },
                timeout: 20000,
                data: {
                    ajax: true,
                    action: 'InsertProductExtension',
                    form_key: formkey,
                    product: JSON.stringify(apiProductDetails)
                },
                success: function (data) {
                  console.log(data);
                    chrome.runtime.sendMessage({type: 'succeful-import', data: data, success: true});
                },
                fail: function () {
                  console.log(data);

                    chrome.runtime.sendMessage({error: true});
                }
            });
        },
        getBackendUrl : function(){
            var ajax_php_request = $("#importProductText").data('url');
            chrome.runtime.sendMessage({type: 'getBackendUrl', url: window.location.href.split('index.php')[0]+ajax_php_request, success: true});
            return ajax_php_request;
        },
        checkProductIfExist: function (productId) {
            var ajax_php_request = $("#importProductText").data('url');
            var formkey = $('body').find('[name="form_key"]').val();
            $.ajax({
                url: ajax_php_request,
                type: 'POST',
                indexValue: {
                    reference: productId
                },
                timeout: 10000,
                data: {
                    ajax: true,
                    action: 'checkProductIfExist',
                    form_key: formkey,
                    productData: productId
                },
                success: function (data) {
                    if (data) {
                        data = JSON.parse(data);
                        if (!data.failure) {
                            chrome.runtime.sendMessage({type: 'checkProductIfExist', data: data.result, success: true});
                        } else {
                            chrome.runtime.sendMessage({type: 'checkProductIfExist', error: true});
                        }
                    } else {
                        chrome.runtime.sendMessage({type: 'checkProductIfExist', error: true});
                    }
                },
                fail: function () {
                    chrome.runtime.sendMessage({type: 'checkProductIfExist', error: true});
                }
            });
        }
    };


    if (typeof $M === 'undefined') {
        $M = {};
    }

    $M.common = init;
})();

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("something happening from the extension", request);


    switch (request.data) {
        case 'toSet' :
            if (localStorage.getItem("aliexpressdata") != 'undefined') {
                var aliProductData = JSON.parse(localStorage.getItem("aliexpressdata"));
                var name = document.querySelectorAll('.product-name') && document.querySelectorAll('.product-name')[0] ? document.querySelectorAll('.product-name')[0].innerHTML : null;
                name = name.replace(/"/g, "");
                var shippingCost = $('.logistics-cost').html();
                shippingCost = shippingCost.replace(aliProductData.currencySymbol,'');
                var product = {
                    imgUrl: aliProductData.mainBigPic,
                    productId: aliProductData.productId,
                    quantity: aliProductData.quantityLimit.quantityNum,
                    price: aliProductData.minPrice,
                    title : name,
                    shippingCost : shippingCost
                };

                sendResponse({data: product, success: true});
            } else {
                sendResponse({data: {errorMsg: 'This product may not be uploaded'}, error: true});
            }
            return true;

            break;
        case 'checkPageType' :
        sendReponse({
            type: 'unknown_page',
            data: {errorMsg: 'This is not an Aliexpress product page'},
            error: true
        });

        break;
        case 'checkPageType' :
            if ($('#aliexpressapi_block_home').length == 0) {
                if (localStorage.getItem("aliexpressdata") != 'undefined') {
                  console.log("checkPageType success aliexpress_page")

                    sendResponse({type: 'aliexpress_page', success: true});
                } else {
                  console.log("checkPageType unknown_page This is not an Aliexpress product page")

                    sendResponse({
                        type: 'unknown_page',
                        data: {errorMsg: 'This is not an Aliexpress product page'},
                        error: true
                    });
                    return true;
                }
            } else {
              console.log("checkPageType success module_page")

                sendResponse({type: 'module_page', success: true});
            }
            break;
        case 'sendProduct' :
             sendResponse({type: 'importing', success: true});
           $M.common.insertProductDb(request.product,request.shopurl);
            return true;
            break;
        case 'checkProductIfExist' :
            $M.common.checkProductIfExist(request.productId);
            sendResponse();
            break;
        case 'getBackendUrl' :
            $M.common.getBackendUrl();
            sendResponse();
            break;
        default :
            var aliProductData = JSON.parse(localStorage.getItem("aliexpressdata"));
            var skuProducts = JSON.parse(localStorage.getItem("skuProducts"));
            var name = document.querySelectorAll('.product-name') && document.querySelectorAll('.product-name')[0] ? document.querySelectorAll('.product-name')[0].innerHTML : null;
            name = name.replace(/"/g, "");
            var meta_keywords = document.querySelector('meta[name="keywords"]') && document.querySelector('meta[name="keywords"]').content ? document.querySelector('meta[name="keywords"]').content : 'empty';
            var meta_description = document.querySelector('meta[name="description"]') && document.querySelector('meta[name="description"]').content ? document.querySelector('meta[name="description"]').content : name;

            var meta_title = document.title.replace(/Aliexpress.com/g, "");
            meta_title = meta_title.replace(/Alibaba Group/g, "");
            meta_title = meta_title.replace(/"/g, "");

            var skuProductsAttr = {
                Color: 14,
                Size: 5,
                ShoesSize: 200000124,
                ShipsFrom: 200007763,
                Bundle: 200000828,
                memorySize: 91,
                StrechedLength :200000703,
                gemColor : 200000226,
                ringSize : 200000369
            };
            var combinations = [];
            var listAttr,
                attrId,
                attrElm,
                attrCouple,
                attrColor = [],
                listAttrColors = {},
                listAttrAll = {},
                attrSize = [],
                attrShoesSize = [],
                attrShipsFrom = [],
                attrBundle = [],
                listAttrSizes = {},
                listAttrShoesSizes = {},
                listAttrShipsFrom = {},
                listAttrBundles = {};

            skuProducts.forEach(function (skuProduct, index) {
                if (skuProduct.skuAttr) {
                    listAttr = skuProduct.skuAttr.split(';');

                    var j = aliProductData.imageBigViewURL.length;
                    var defaultImagesNb = aliProductData.imageBigViewURL.length;
                    for (var i = 0; i < listAttr.length; i++) {

                        Object.keys(skuProductsAttr).map(function(objectKey, index) {
                            var element = skuProductsAttr[objectKey];
                            if (listAttr[i].indexOf(element + ':') != -1 && ( objectKey == 'Color' || objectKey == 'gemColor' ) ) {
                                j = j + 1;
                                var title;
                                attrCouple = listAttr[i].split('#');
                                attrId = attrCouple[0].split(':')[1];
                                if (!attrColor[attrId]) {
                                    attrElm = document.querySelector("[data-sku-id='" + attrId + "']");
                                    if (attrCouple[1]) {
                                        title = attrCouple[1].toLowerCase();
                                    } else {
                                        title = attrElm.title.toLowerCase();
                                    }

                                    if(!listAttrAll[objectKey]){
                                        listAttrAll[objectKey] = {};
                                    }
                                    if (!listAttrAll[objectKey][title]) {
                                        listAttrAll[objectKey][title] = attrElm.children[0].getAttribute('bigpic');
                                    }

                                    aliProductData.imageBigViewURL.push(attrElm.children[0].getAttribute('bigpic'));
                                }
                                skuProduct.skuVal[objectKey] = {
                                    title: title,
                                    defaultImagesNb: defaultImagesNb,
                                    imagePosition: j
                                };

                            }else if (listAttr[i].indexOf(element + ':') != -1) {
                                attrId = listAttr[i].split(':')[1];
                                if (attrId.indexOf('#') != -1) {
                                    attrId = attrId.split('#')[0];
                                }
                                attrElm = document.querySelector("[data-sku-id='" + attrId + "']");
                                if(!listAttrAll[objectKey]){
                                    listAttrAll[objectKey] = {};
                                }
                                var title = attrElm.children[0].innerText.toLowerCase();
                                if (!listAttrAll[objectKey][title]) {
                                    listAttrAll[objectKey][title] = true;
                                }
                                skuProduct.skuVal[objectKey] = {
                                    title: title
                                };
                            }
                        });

                    }
                }

                delete skuProduct.skuVal.isActivity;
                delete skuProduct.skuVal.actSkuMultiCurrencyDisplayPrice;
                delete skuProduct.skuVal.actSkuMultiCurrencyCalPrice;
                delete skuProduct.skuVal.skuMultiCurrencyCalPrice;
                delete skuProduct.skuVal.skuMultiCurrencyDisplayPrice;

                skuProduct.skuVal.id = skuProduct.skuPropIds;
                combinations.push(skuProduct.skuVal);
            });

            console.log(listAttrColors);
            console.log(listAttrSizes);
            console.log(combinations);


            var data = {
                productId: aliProductData.productId,
                link_rewrite: name.replace(/[ ]/g, "-").slice(0, 100).replace(/[éèê]/g, "e").toLowerCase(),
                name: name.replace(/( )/g, " ").slice(0, 100),
                discountPrice: aliProductData.actMinPrice,
                discountRate: $('.p-discount-rate').text(),
                discountTime : aliProductData.discountTime,
                currency: aliProductData.currencyCode,
                price: aliProductData.minPrice.toString(),
                salePrice: aliProductData.minPrice.toString(),
                quantity: parseInt(aliProductData.quantityLimit.quantityNum),
                originalQuantity: parseInt(aliProductData.quantityLimit.quantityNum),
                meta_title: meta_title.replace(/[  ]/g, " ").replace(/"/g, "").slice(0, 124),
                meta_description: meta_description.replace(/"/g, "").slice(0, 247) + '...',
                meta_keywords: meta_keywords.replace(/"/g, "").slice(0, 250),
                description_short: meta_description.replace(/"/g, ""),
                detailDescriptionUrl: aliProductData.detailDesc,
                category: aliProductData.categoryId,
                topCategoryId: aliProductData.topCategoryId,
                imageUrl: aliProductData.mainBigPic,
                imagesList: aliProductData.imageBigViewURL,
                evaluateScore: $('.percent-num').text(),
                shopName: $('.shop-name a').text(),
                shopUrl: $('.shop-name a').attr('href'),
                productUrl: document.location.href,
                shippingCost: $('.logistics-cost').val(),
                shippingCompany: $('#j-shipping-company').val(),
                metaDescription: $('meta[name=description]').attr("content").replace(/"/g, ""),
                metaKeywords: $('meta[name=keywords]').attr("content").replace(/"/g, ""),
                metaTitle: document.getElementsByTagName("title")[0].innerHTML.replace(/"/g, ""),
                combinations: combinations,
                attributesGroup : {
                    Color: {
                        name : 'Color',
                        public_name: 'Color',
                        is_color : true,
                        type : 'color',
                        items : listAttrAll['Color'] ? listAttrAll['Color'] : []
                    },
                     Size: {
                        name : 'Size',
                        public_name: 'Size',
                        is_color : 0,
                        type : 'select',
                        items : listAttrAll['Size'] ? listAttrAll['Size'] : []
                    },
                    ShoesSize: {
                        name : 'ShoesSize',
                        public_name: 'Size',
                        is_color : 0,
                        type : 'select',
                        items : listAttrAll['ShoesSize'] ? listAttrAll['ShoesSize'] : []
                    },
                    ShipsFrom: {
                        name : 'ShipsFrom',
                        public_name: 'ShipsFrom',
                        is_color : 0,
                        type : 'select',
                        items : listAttrAll['ShipsFrom'] ? listAttrAll['ShipsFrom'] : []
                    },
                    Bundle: {
                        name : 'Bundle',
                        public_name: 'Bundles',
                        type : 'select',
                        is_color : false,
                        items : listAttrAll['Bundle'] ? listAttrAll['Bundle'] : []
                    },
                    memorySize: {
                        name : 'MemorySize',
                        public_name: 'memory Size',
                        type : 'select',
                        is_color : false,
                        items : listAttrAll['memorySize'] ? listAttrAll['memorySize'] : []
                    },
                    StrechedLength: {
                        name : 'StrechedLength',
                        public_name: 'streched Length',
                        type : 'select',
                        is_color : false,
                        items : listAttrAll['StrechedLength'] ? listAttrAll['StrechedLength'] : []
                    },
                    ringSize: {
                        name : 'ringSize',
                        public_name: 'Ring Size',
                        type : 'select',
                        is_color : false,
                        items : listAttrAll['ringSize'] ? listAttrAll['ringSize'] : []
                    },
                    gemColor: {
                        name : 'gemColor',
                        public_name: 'gem Color',
                        type : 'color',
                        is_color : true,
                        items : listAttrAll['gemColor'] ? listAttrAll['gemColor'] : []
                    }
                },
                features : {
                    'weight' : $('#product-prop-200005984').data('title'),
                    'brand Name' :  $('#product-prop-2').data('title'),
                    'type' :  $('#product-prop-351').data('title'),
                    'style' :  $('#product-prop-326').data('title'),
                    'material' :  $('#product-prop-10').data('title'),
                    'gender' :  $('#product-prop-284').data('title'),
                    'clothing Length' :  $('#product-prop-200000303').data('title'),
                    'supporting Language' :  $('#product-prop-200001071').data('title'),
                    'Package' :  $('#product-prop-200000941').data('title'),
                    'Display resolution' :  $('#product-prop-200000560').data('title'),
                    'Feature' :  $('#product-prop-217').data('title'),
                    'Camera' :  $('#product-prop-200001068').data('title'),
                    'Item Type' :  $('#product-prop-200000137').data('title'),
                    'Season' :  $('#product-prop-281').data('title')
                }
            };

            console.log('data', data);

            sendResponse({data: data, authPageId: request.authPageId, success: true});
    }
});
/*TODO
 chrome.browserAction.onClicked.addListener(function(activeTab){
 var newURL = "http://stackoverflow.com/";
 chrome.tabs.create({ url: newURL });
 });*/
