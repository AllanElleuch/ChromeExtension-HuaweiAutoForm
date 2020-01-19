chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {
        console.log(request);
        console.log(sender);
        console.log("RECEIVE EXTERNAL")

  
     
    });