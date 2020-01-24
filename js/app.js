var name = localStorage.getItem('name');
var desc = localStorage.getItem('desc');
var brief = localStorage.getItem('brief');
$("#inputName").val(name)
$("#inputIntroduction").val(desc)
$("#inputBriefIntroduction").val(brief)

$("#inputName").change(function () {
  var selected = $("#inputName", this);
  var valueSelected = this.value;
  console.log(valueSelected)
  localStorage.setItem('name', valueSelected);
});


$("#inputIntroduction").change(function () {
  var selected = $("#inputIntroduction", this);
  var valueSelected = this.value;
  console.log(valueSelected)
  localStorage.setItem('desc', valueSelected);
});


$("#inputBriefIntroduction").change(function () {
  var selected = $("#inputBriefIntroduction", this);
  var valueSelected = this.value;
  console.log(valueSelected)
  localStorage.setItem('brief', valueSelected);
});

var supportedLanguage = {

  'Afrikaans': 'af',
  'Albanian': 'sq',
  'Amharic': 'am',
  'Arabic': 'ar',
  'Armenian': 'hy',
  'Azerbaijani': 'az',
  'Basque': 'eu',
  'Belarusian': 'be',
  'Bengali': 'bn',
  'Bosnian': 'bs',
  'Bulgarian': 'bg',
  'Catalan': 'ca',
  'Cebuano': 'ceb',
  'Chinese (Simplified)': 'zh-CN',
  'Chinese (Traditional)': 'zh-TW',
  'Corsican': 'co',
  'Croatian': 'hr',
  'Czech': 'cs',
  'Danish': 'da',
  'Dutch': 'nl',
  'English': 'en',
  'English (US)': 'en',
  'English (UK)': 'en',
  'Esperanto': 'eo',
  'Estonian': 'et',
  'Finnish': 'fi',
  'French': 'fr',
  'Frisian': 'fy',
  'Galician': 'gl',
  'Georgian': 'ka',
  'German': 'de',
  'Greek': 'el',
  'Gujarati': 'gu',
  'Haitian Creole': 'ht',
  'Hausa': 'ha',
  'Hawaiian': 'haw',
  'Hebrew': 'he',
  'Hindi': 'hi',
  'Hmong': 'hmn',
  'Hungarian': 'hu',
  'Icelandic': 'is',
  'Igbo': 'ig',
  'Indonesian': 'id',
  'Irish': 'ga',
  'Italian': 'it',
  'Japanese': 'ja',
  'Javanese': 'jw',
  'Kannada': 'kn',
  'Kazakh': 'kk',
  'Khmer': 'km',
  'Korean': 'ko',
  'Kurdish': 'ku',
  'Kyrgyz': 'ky',
  'Lao': 'lo',
  'Latin': 'la',
  'Latvian': 'lv',
  'Lithuanian': 'lt',
  'Luxembourgish': 'lb',
  'Macedonian': 'mk',
  'Malagasy': 'mg',
  'Malay': 'ms',
  'Malayalam': 'ml',
  'Maltese': 'mt',
  'Maori': 'mi',
  'Marathi': 'mr',
  'Mongolian': 'mn',
  'Myanmar (Burmese)': 'my',
  'Nepali': 'ne',
  'Norwegian': 'no',
  'Nyanja (Chichewa)': 'ny',
  'Pashto': 'ps',
  'Persian': 'fa',
  'Polish': 'pl',
  'Portuguese (Brazil)': 'pt',
  'Punjabi': 'pa',
  'Romanian': 'ro',
  'Russian': 'ru',
  'Samoan': 'sm',
  'Scots Gaelic': 'gd',
  'Serbian': 'sr',
  'Sesotho': 'st',
  'Shona': 'sn',
  'Sindhi': 'sd',
  'Sinhala': 'si',
  'Slovak': 'sk',
  'Slovenian': 'sl',
  'Somali': 'so',
  'Spanish': 'es',
  'Sundanese': 'su',
  'Swahili': 'sw',
  'Swedish': 'sv',
  'Tagalog (Filipino)': 'tl',
  'Tajik': 'tg',
  'Tamil': 'ta',
  'Telugu': 'te',
  'Thai': 'th',
  'Turkish': 'tr',
  'Ukrainian': 'uk',
  'Urdu': 'ur',
  'Uzbek': 'uz',
  'Vietnamese': 'vi',
  'Welsh': 'cy',
  'Xhosa': 'xh',
  'Yiddish': 'yi',
  'Yoruba': 'yo',
  'Zulu': 'zu',

}
var supportedLanguage2 = {
  'Amharic': 'am',
  'Arabic': 'ar',
  'Basque': 'eu',
  'Bulgarian': 'bg',
  'Catalan': 'ca',
  'Chinese (PRC)': 'zh-CN',
  'Croatian': 'hr',
  'Czech': 'cs',
  'Danish': 'da',
  'Dutch': 'nl',
  'Estonian': 'et',
  'Filipino': 'tl',
  'Finnish': 'fi',
  'French': 'fr',
  'Galician': 'gl',
  'Georgian': 'ka',
  'German': 'de',
  'Greek': 'el',
  'Gujarati': 'gu',
  'Hebrew': 'he',
  'Hindi': 'hi',
  'Hungarian': 'hu',
  'Indonesian': 'id',
  'Japanese': 'ja',
  'Javanese': 'jw',
  'Kannada': 'kn',
  'Kazakh': 'kk',
  'Khmer': 'km',
  'Korean (South Korea)': 'ko',
  'Lao': 'lo',
  'Latvian': 'lv',
  'Lithuanian': 'lt',
  'Macedonian': 'mk',
  'Malay': 'ms',
  'Malayalam': 'ml',
  'Maori': 'mi',
  'Marathi': 'mr',
  'Mongolian Cyrillic': 'mn',
  'Nepali': 'ne',
  'Norwegian': 'no',
  'Persian': 'fa',
  'Polish': 'pl',
  'Portuguese (Brazil)': 'pt',
  'Punjabi': 'pa',
  'Romanian': 'ro',
  'Russian': 'ru',
  'Serbian': 'sr',
  'Sinhala': 'si',
  'Slovak': 'sk',
  'Slovenian': 'sl',
  'Spanish (Latin America)': 'es',
  'Spanish (Spain)': 'es',
  'Swedish': 'sv',
  'Tamil': 'ta',
  'Telugu': 'te',
  'Thai': 'th',
  'Traditional Chinese (Taiwan, China)': 'zh-TW',
  'Traditional Chinese (Hong Kong, China)': 'zh-TW',
  'Turkish': 'tr',
  'Vietnamese': 'vi',
  'Ukrainian': 'uk',
  'Urdu': 'ur',
  'Uzbek': 'uz',

}

$(document).ready(function () {


  function translate(text, targetLang) {
    var settings = {
      "async": false,
      "crossDomain": true,
      "url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
      "method": "POST",
      "headers": {
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        "x-rapidapi-key": "407e38fc61msh9aa66a9888202ecp1eb0f4jsn21e3b5654c7a",
        "content-type": "application/x-www-form-urlencoded"
      },
      "data": {
        "source": "en",
        "q": text,
        "target": targetLang
      }
    }

    return res = $.ajax(settings).responseJSON.data.translations[0].translatedText
  }



  $('#btnImport').on('click', function () {

    var lang = $("#inputSupported").val()
    var message = {
      intent: "import",
      name: translate($("#inputName")[0].value, lang),
      description: translate($("#inputIntroduction")[0].value, lang),
      brief: translate($("#inputBriefIntroduction")[0].value, lang)
    }
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
        console.log(response);
      });
    });

  });

  $('#selectLang').on('click', function () {
    document.getElementById("AppInfoManageLanguageButton").click();
    var langBtn = $('.ngdialog div.dialog-content.pt-2 .list-container label')

    langBtn.each((id, element) => {
      console.log(element.innerText);
      if (element.innerText in supportedLanguage) {
        $(element).click()
      }
    });


    $('.ngdialog .dialog-footer .btn-primary').click()



  });

  $('#inject').on('click', function () {
    var message = {
      intent: "inject"
    }
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
        console.log(response);
      });
    });

  })


  $('#getlang').on('click', function () {
    var message = {
      intent: "getlang"
    }
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
        console.log(response);
        $("#inputLang").val(response)
        $("#inputSupported").val(supportedLanguage2[response])

      });
    });

  })

});


// var port = chrome.tabs.connect({name: "knockknock"});
// port.postMessage({joke: "Knock knock"});
// port.onMessage.addListener(function(msg) {
//   if (msg.question == "Who's there?")
//     port.postMessage({answer: "Madame"});
//   else if (msg.question == "Madame who?")
//     port.postMessage({answer: "Madame... Bovary"});
// });


// chrome.runtime.onMessageExternal.addListener(
//     function(request, sender, sendResponse) {
//         console.log(request);
//         console.log(sender);
//         console.log("RECEIVE EXTERNAL")

//         var message = {intent: "inject"
//     }
//         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
//               console.log(response);
//             });
//           });

//     });


// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       console.log(sender.tab ?
//                   "from a content script:" + sender.tab.url :
//                   "from the extension");
//       if (request.greeting == "hello")
//         sendResponse({farewell: "goodbye"});
//     });

//     chrome.runtime.onConnect.addListener(function(port) {
//         console.assert(port.name == "knockknock");
//         port.onMessage.addListener(function(msg) {
//           if (msg.joke == "Knock knock")
//             port.postMessage({question: "Who's there?"});
//           else if (msg.answer == "Madame")
//             port.postMessage({question: "Madame who?"});
//           else if (msg.answer == "Madame... Bovary")
//             port.postMessage({question: "I don't get it."});
//         });
//       });