var name = localStorage.getItem("name");
var desc = localStorage.getItem("desc");
var brief = localStorage.getItem("brief");
var sourceLangSelector = localStorage.getItem("sourceLangSelector");

$("#inputName").val(name);
$("#inputIntroduction").val(desc);
$("#inputBriefIntroduction").val(brief);
// $("#sourceLangSelector").val(sourceLangSelector);

$(document).ready(function() {
  $("#inputName").trigger("keyup");
  $("#inputIntroduction").trigger("keyup");
  $("#inputBriefIntroduction").trigger("keyup");
});

$("#inputName").change(function() {
  var selected = $("#inputName", this);
  var valueSelected = this.value;
  console.log(valueSelected);
  localStorage.setItem("name", valueSelected);
});

$("#inputIntroduction").change(function() {
  var selected = $("#inputIntroduction", this);
  var valueSelected = this.value;
  console.log(valueSelected);
  localStorage.setItem("desc", valueSelected);
});

$("#inputBriefIntroduction").change(function() {
  var selected = $("#inputBriefIntroduction", this);
  var valueSelected = this.value;
  console.log(valueSelected);
  localStorage.setItem("brief", valueSelected);
});

$("#sourceLangSelector").change(function() {
  var selected = $("#sourceLangSelector");
  var valueSelected = selected.val();
  console.log(valueSelected);
  localStorage.setItem("sourceLangSelector", valueSelected);
});

var supportedLanguage = {
  Afrikaans: "af",
  Albanian: "sq",
  Amharic: "am",
  Arabic: "ar",
  Armenian: "hy",
  Azerbaijani: "az",
  Basque: "eu",
  Belarusian: "be",
  Bengali: "bn",
  Bosnian: "bs",
  Bulgarian: "bg",
  Catalan: "ca",
  Cebuano: "ceb",
  "Chinese (Simplified)": "zh-CN",
  "Chinese (Traditional)": "zh-TW",
  Corsican: "co",
  Croatian: "hr",
  Czech: "cs",
  Danish: "da",
  Dutch: "nl",
  English: "en",
  "English (US)": "en",
  "English (UK)": "en",
  Esperanto: "eo",
  Estonian: "et",
  Finnish: "fi",
  French: "fr",
  Frisian: "fy",
  Galician: "gl",
  Georgian: "ka",
  German: "de",
  Greek: "el",
  Gujarati: "gu",
  "Haitian Creole": "ht",
  Hausa: "ha",
  Hawaiian: "haw",
  Hindi: "hi",
  Hmong: "hmn",
  Hungarian: "hu",
  Icelandic: "is",
  Igbo: "ig",
  Indonesian: "id",
  Irish: "ga",
  Italian: "it",
  Japanese: "ja",
  Javanese: "jw",
  Kannada: "kn",
  Kazakh: "kk",
  Khmer: "km",
  Korean: "ko",
  Kurdish: "ku",
  Kyrgyz: "ky",
  Lao: "lo",
  Latin: "la",
  Latvian: "lv",
  Lithuanian: "lt",
  Luxembourgish: "lb",
  Macedonian: "mk",
  Malagasy: "mg",
  Malay: "ms",
  Malayalam: "ml",
  Maltese: "mt",
  Maori: "mi",
  Marathi: "mr",
  Mongolian: "mn",
  "Myanmar (Burmese)": "my",
  Nepali: "ne",
  Norwegian: "no",
  "Nyanja (Chichewa)": "ny",
  Pashto: "ps",
  Persian: "fa",
  Polish: "pl",
  "Portuguese (Brazil)": "pt",
  Punjabi: "pa",
  Romanian: "ro",
  Russian: "ru",
  Samoan: "sm",
  "Scots Gaelic": "gd",
  Serbian: "sr",
  Sesotho: "st",
  Shona: "sn",
  Sindhi: "sd",
  Sinhala: "si",
  Slovak: "sk",
  Slovenian: "sl",
  Somali: "so",
  Spanish: "es",
  Sundanese: "su",
  Swahili: "sw",
  Swedish: "sv",
  "Tagalog (Filipino)": "tl",
  Tajik: "tg",
  Tamil: "ta",
  Telugu: "te",
  Thai: "th",
  Turkish: "tr",
  Ukrainian: "uk",
  Urdu: "ur",
  Uzbek: "uz",
  Vietnamese: "vi",
  Welsh: "cy",
  Xhosa: "xh",
  Yiddish: "yi",
  Yoruba: "yo",
  Zulu: "zu"
};
var supportedLanguage2 = {
  Amharic: "am",
  Arabic: "ar",
  Azerbaijani: "az",
  Basque: "eu",
  Belarusian: "be",
  Bengali: "bn",
  Bosnian: "bs",
  Bulgarian: "bg",
  Burmese: "my",
  Catalan: "ca",
  "Chinese (PRC)": "zh-CN",
  Croatian: "hr",
  Czech: "cs",
  Danish: "da",
  Dutch: "nl",
  Estonian: "et",
  "English (US)": "en",
  "English (UK)": "en",
  Filipino: "tl",
  Finnish: "fi",
  "French (France)": "fr",
  Galician: "gl",
  Georgian: "ka",
  German: "de",
  Greek: "el",
  Gujarati: "gu",
  Hindi: "hi",
  Hungarian: "hu",
  Indonesian: "id",
  Italian: "it",
  Japanese: "ja",
  Javanese: "jw",
  Kannada: "kn",
  Kazakh: "kk",
  Kiswhaili: "sw",
  Khmer: "km",
  "Korean (South Korea)": "ko",
  Lao: "lo",
  Latvian: "lv",
  Lithuanian: "lt",
  Macedonian: "mk",
  Malay: "ms",
  Malayalam: "ml",
  Maori: "mi",
  Marathi: "mr",
  "Mongolian Cyrillic": "mn",
  Nepali: "ne",
  Norwegian: "no",
  Persian: "fa",
  Polish: "pl",
  "Portuguese (Brazil)": "pt",
  "Portuguese (Portugal)": "pt",
  Punjabi: "pa",
  Romanian: "ro",
  Russian: "ru",
  Serbian: "sr",
  Sinhala: "si",
  Slovak: "sk",
  Slovenian: "sl",
  "Spanish (Latin America)": "es",
  "Spanish (Spain)": "es",
  Swedish: "sv",
  Tamil: "ta",
  Telugu: "te",
  Thai: "th",
  "Traditional Chinese (Taiwan, China)": "zh-TW",
  "Traditional Chinese (Hong Kong, China)": "zh-TW",
  Turkish: "tr",
  Vietnamese: "vi",
  Ukrainian: "uk",
  Urdu: "ur",
  Uzbek: "uz"
};

$(document).ready(function() {
  optionSourceLang = $("#sourceLangSelector");

  $.each(supportedLanguage2, function(key, value) {
    console.log(key);
    console.log(value);

    if (sourceLangSelector == value) {
      optionSourceLang.append(
        $('<option  selected="selected" />')
          .val(value)
          .text(key)
      );
    } else {
      optionSourceLang.append(
        $("<option />")
          .val(value)
          .text(key)
      );
    }
  });

  // function translate(text, targetLang) {
  //   var settings = {
  //     async: false,
  //     crossDomain: true,
  //     url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
  //     method: "POST",
  //     headers: {
  //       "x-rapidapi-host": "google-translate1.p.rapidapi.com",
  //       "x-rapidapi-key": "407e38fc61msh9aa66a9888202ecp1eb0f4jsn21e3b5654c7a",
  //       "content-type": "application/x-www-form-urlencoded"
  //     },
  //     data: {
  //       source: "en",
  //       q: text,
  //       target: targetLang
  //     }
  //   };
  //   data = $.ajax(settings).responseJSON.data;
  //   if (data) {
  //     return data.translations[0].translatedText;
  //   } else {
  //     return text;
  //   }
  // }

  function translate(text, targetLang) {
    var settings = {
      async: false,
      crossDomain: true,
      url:
        "https://script.google.com/macros/s/AKfycbwkoI0O5yPWlkLiCDVd9W-2lgsJvjudJ8tJFiMZBzaXheeX7b9o/exec",
      method: "GET",
      data: {
        // source: "en",
        source: $("#sourceLangSelector").val(),
        q: text,
        target: targetLang
      }
    };
    data = $.ajax(settings).responseJSON;
    console.log("json");
    console.log(data);
    if (data) {
      console.log("translatedText");
      console.log(data.translatedText);

      return decodeFormating(decode(data.translatedText));
    } else {
      return text;
    }
  }

  var decode = function(str) {
    return str.replace(/&#(\d+);/g, function(match, dec) {
      return String.fromCharCode(dec);
    });
  };

  function encodeFormating(text) {
    var encodedText = text.replace(/[\n]+/g, "<n>");
    encodedText = encodedText.replace(/[\r]+/g, "<r>");
    return encodedText;
  }

  function decodeFormating(text) {
    var encodedText = text.replace(/[<n>]+/g, "\n");
    encodedText = encodedText.replace(/[<r>]+/g, "\r");
    return encodedText;
  }

  function popupToForm() {
    return new Promise(function(resolve, reject) {
      var lang = $("#inputSupported").val();
      var message = {
        intent: "import",
        name: translate($("#inputName")[0].value, lang),
        description: translate($("#inputIntroduction")[0].value, lang),
        brief: translate($("#inputBriefIntroduction")[0].value, lang)
      };
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true
        },
        function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
            console.log(`popupToForm resolving : ${response}`);
            resolve(response);
          });
        }
      );
    }); // end promisse
  }

  function nextLang() {
    return new Promise(function(resolve, reject) {
      var message = {
        intent: "nextlang"
      };
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true
        },
        function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
            console.log(`nextLang getting : ${response}`);
            resolve(response);
          });
        }
      );
    }); // end promisse
  }

  function previousLang() {
    return new Promise(function(resolve, reject) {
      var message = {
        intent: "previouslang"
      };
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true
        },
        function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
            console.log(`nextLang getting : ${response}`);
            resolve(response);
          });
        }
      );
    }); // end promisse
  }

  function getLangAndTranslate() {
    getlang().then(popupToForm());
  }

  /**
   * select all languages supported by the program
   */

  function selectSupportedLang() {
    return new Promise(function(resolve, reject) {
      var message = {
        intent: "selectSupportedLang",
        lang: supportedLanguage2
      };
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true
        },
        function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
            console.log(`selectSupportedLang get : ${response}`);
            resolve(response);
          });
        }
      );
    }); // end promisse
  }

  function getlang() {
    return new Promise(function(resolve, reject) {
      var message = {
        intent: "getlang"
      };
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true
        },
        function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
            console.log(`getlang get : ${response}`);
            $("#inputLang").val(response);
            $("#inputSupported").val(supportedLanguage2[response]);
            console.log(
              `getlang resolving : ${!!supportedLanguage2[response]}`
            );
            resolve(!!supportedLanguage2[response]);
          });
        }
      );
    });
  }

  $("#btnImport").on("click", getLangAndTranslate);

  $("#nextlang").on("click", nextLang);
  $("#previouslang").on("click", previousLang);

  $("#selectLang").on("click", selectSupportedLang);

  $("#inject").on("click", function() {
    var message = {
      intent: "inject"
    };
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true
      },
      function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
          console.log(response);
        });
      }
    );
  });

  $("#translateAll").on("click", async function() {
    // var message = {
    //   intent: "translateAll"
    // }
    // chrome.tabs.query({
    //   active: true,
    //   currentWindow: true
    // }, function (tabs) {
    //   chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
    //     console.log(response);
    //   });
    // });
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    // getlang();
    // await sleep(200);
    // popupToForm();

    // while (nextLang()) {
    //   await sleep(500);
    //   getlang();
    //   await sleep(500);
    //   popupToForm();
    // }
    var end = false;
    while (!end) {
      await getlang();
      await popupToForm();
      // await sleep(500);

      var isNext = await nextLang();
      if (!isNext) {
        end = true;
      }
    }

    console.log("translate is over");
  });
  $("#getlang").on("click", getlang); // end promisse
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
