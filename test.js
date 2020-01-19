var listLanguage = $('[id="testst"] ul.ui-select-choices li')[0]


for (var i = 0; i < listLanguage.children.length; i++) {
    // console.log(listLanguage.children[i])
    var lang = $(listLanguage.children[i]).find('span div:first-child div:first-child')[0]
    console.log(lang)
    if(lang){
        console.log(lang.innerText)

    }
}


import function (params) {
$("#AppInfoAppNameInputBox").val("name");
$("#AppInfoAppIntroduceInputBox").val("name");
$("#AppInfoAppBriefInputBox").val("name");
}


function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    getElementByXpath("/html/body/div/div/div/div/div/div/div[4]/div[2]")
    var l = $( getElementByXpath("/html/body/div/div/div/div/div/div/div[4]/div[1]/div[2]"))

    l.children()[7].firstElementChild.className ="ucd-check ucd-check-checkbox ucd-checked"
//*[@id="testst"]/div[4]/div[3]/div[1]/div/div/div[2]/div[1]/div/div/div[1]/span/span[2]


faire en sorte qu'on peut importer 

faire en sorte que ca traduit en anglais

faire en sorte que ca traduit en selectionnant une listLanguage

faire scroller sur toute al list 



var supportedLanguage={
    
    'Afrikaans': 'af',
    'Albanian': 'sq',
    'Amharic': 'am',
    'Arabic': 'ar',
    'Armenian' :'hy',
    'Azerbaijani' :'az',
    'Basque': 'eu',
    'Belarusian': 'be',
    'Bengali': 'bn',
    'Bosnian': 'bs',
    'Bulgarian': 'bg',
    'Catalan': 'ca',
    'Cebuano': 'ceb'  ,
    'Chinese (Simplified)': 'zh-CN'  ,
    'Chinese (Traditional)': 'zh-TW'  ,
    'Corsican': 'co',
    'Croatian': 'hr',
    'Czech': 'cs',
    'Danish': 'da',
    'Dutch': 'nl',
    'English': 'en',
    'Esperanto': 'eo',
    'Estonian': 'et',
    'Finnish': 'fi',
    'French': 'fr',
    'Frisian': 'fy',
    'Galician': 'gl',
    'Georgian' :'ka',
    'German': 'de',
    'Greek': 'el',
    'Gujarati' :'gu',
    'Haitian Creole':  'ht',
    'Hausa': 'ha',
    'Hawaiian': 'haw' ,
    'Hebrew': 'he',
    'Hindi': 'hi',
    'Hmong': 'hmn' ,
    'Hungarian': 'hu',
    'Icelandic' :'is',
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
    'Nyanja (Chichewa)':  'ny',
    'Pashto': 'ps',
    'Persian': 'fa',
    'Polish': 'pl',
    'Portuguese (Brazil)':  'pt',
    'Punjabi': 'pa',
    'Romanian': 'ro',
    'Russian': 'ru',
    'Samoan': 'sm',
    'Scots Gaelic':  'gd',
    'Serbian': 'sr',
    'Sesotho': 'st',
    'Shona': 'sn',
    'Sindhi': 'sd',
    'Sinhala':  'si',
    'Slovak': 'sk',
    'Slovenian': 'sl',
    'Somali': 'so',
    'Spanish': 'es',
    'Sundanese': 'su',
    'Swahili': 'sw',
    'Swedish': 'sv',
    'Tagalog (Filipino)':  'tl',
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
    