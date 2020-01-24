// https://developer.chrome.com/extensions/messaging#simple 
function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}
injectScript(chrome.extension.getURL('js/injectScript.js'), 'body');

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }





$(document).ready(function () {



chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("background.js got a message2")
        console.log(request);
        console.log(sender);
        // sendResponse("bar");

        if(request.intent == "import"){
            console.log("START IMPORT");
            console.log($('#AppInfoAppNameInputBox'));
            console.log($('#AppInfoAppIntroduceInputBox'));
            console.log($('#AppInfoAppBriefInputBox'));
            // injectScript(chrome.extension.getURL('js/injectScript.js'), 'body');

            $('#AppInfoAppNameInputBox').val(request.name);
            $('#AppInfoAppIntroduceInputBox').val(request.description);
            $('#AppInfoAppBriefInputBox').val(request.brief); //.val("name")
        }

        if(request.intent == "inject"){
            console.log("START inject");
            injectScript(chrome.extension.getURL('js/injectScript.js'), 'body');

 
        }


        if(request.intent == "getlang"){
            console.log("START getlang");
            sendResponse(getElementByXpath('/html/body/main/section/div[1]/div[4]/div[3]/div[1]/div/div/div[2]/div[1]/div/div/div[1]/span/span[2]').innerText)
 
        }

    }
);

console.log("Script loaded")
 



window.addEventListener("message", function(event) {
    this.console.log("event");
    this.console.log(event.data.text);
    // We only accept messages from ourselves
    if (event.source != window)
        return;

    if (event.data.type && (event.data.type == "FROM_PAGE")) {
        console.log("Content script received message: " + event.data.text);
    }
});

document.addEventListener('RW759_connectExtension', function(e) {
    // e.detail contains the transferred data (can be anything, ranging
    // from JavaScript objects to strings).
    // Do something, for example:
    alert(e.detail);
});


// var port = chrome.runtime.connect({name: "knockknock"});
// port.postMessage({joke: "Knock knock"});
// port.onMessage.addListener(function(msg) {
//   if (msg.question == "Who's there?")
//     port.postMessage({answer: "Madame"});
//   else if (msg.question == "Madame who?")
//     port.postMessage({answer: "Madame... Bovary"});
// });

chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "knockknock");
    port.onMessage.addListener(function(msg) {
      if (msg.joke == "Knock knock")
        port.postMessage({question: "Who's there?"});
      else if (msg.answer == "Madame")
        port.postMessage({question: "Madame who?"});
      else if (msg.answer == "Madame... Bovary")
        port.postMessage({question: "I don't get it."});
    });
  });
})

 
// chrome.runtime.onMessage.addListener (
//     function (request, sender, sendResponse) {
//         console.log("Reached Background.js");
//         if (request.Message == "getTextFile") {
//             console.log("Entered IF Block");
//             $.get("http://localhost:63342/Projects/StackOverflow/ChromeEXT/helloWorld1", function(response) {
//                 console.log(response);

//                 // to send back your response  to the current tab
//                 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//                     chrome.tabs.sendMessage(tabs[0].id, {fileData: response}, function(response) {
//                         ;
//                     });
//                 });


//             })
//         }
//         else {
//             console.log("Did not receive the response!!!")
//         }
//     }
// );