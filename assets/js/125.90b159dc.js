(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{501:function(t,a,s){"use strict";s.r(a);var e=s(8),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"kan-qi-lai-hen-zhuan-ye-de-line-shu-wei-ban-ming-pian"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kan-qi-lai-hen-zhuan-ye-de-line-shu-wei-ban-ming-pian"}},[t._v("#")]),t._v(" 看起來很專業的 LINE 數位版名片")]),t._v(" "),s("p",[t._v("有一天看到有人做了 Kotlin 讀書會的宣傳並分享到 LINE 的 chatbot 相關群組內，於是我就靈機一動，因為台灣用 LINE 的人實在是很多，所以可以用這種方式來幫公司做名片，讓公司的同事都可以有看起來很強大很專業的 LINE 數位版名片！")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("因時空環境變遷，本文僅作為歷史留存之用，本文中的範例程式可能無法正常運作，建議您可以參閱以下同系列的文章，或者您也可以直接透過 "),s("a",{attrs:{href:"https://facebook.com/taichunmin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Facebook"),s("OutboundLink")],1),t._v(" 直接跟我聯繫。")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://taichunmin.idv.tw/blog/2020-07-21-liff-businesscard.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("「不用寫程式也能做 LINE 數位版名片」"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://taichunmin.idv.tw/blog/2020-10-14-liff-businesscard-workshop.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("「LINE 數位版名片工作坊」"),s("OutboundLink")],1)])])]),t._v(" "),s("h2",{attrs:{id:"zhun-bei-ming-pian-de-zi-liao"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zhun-bei-ming-pian-de-zi-liao"}},[t._v("#")]),t._v(" 準備名片的資料")]),t._v(" "),s("p",[t._v("為了要讓同一個名片樣板給不同同事使用，所以要準備一個 csv 檔案當作資料來源： (在本文範例中把這個 csv 放在 GitHub Gist 上面)")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/jLSOm4o.png",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("取得 GitHub Gist 的 Raw 網址 (右上角「Raw」按鈕) 時，請記得把網址內的版本參數 "),s("code",[t._v("VERSION_ID")]),t._v(" 刪除，也就是將 "),s("code",[t._v("https://gist.githubusercontent.com/taichunmin/{GIST_ID}/raw/{VERSION_ID}/microprogram.csv")]),t._v(" 改成 "),s("code",[t._v("https://gist.githubusercontent.com/taichunmin/{GIST_ID}/raw/microprogram.csv")]),t._v(" 就行了。")])]),t._v(" "),s("p",[t._v("在準備這份名單的時候，有幾個需要注意的地方：")]),t._v(" "),s("ol",[s("li",[t._v("在 CSV 的第一行會被當成是變數名稱，所以需要遵守 JavaScript 的變數名稱規則 (中文字沒問題)。")]),t._v(" "),s("li",[t._v("程式要求一定要有一個欄位名為 uuid，因為程式需要用 uuid 作為判斷依據，而且如果你想要追蹤有多少人看過你的名片，也能用 uuid 來辨識是誰的名片被看過！")])]),t._v(" "),s("blockquote",[s("p",[t._v("CSV 的範例請點選文章底下的範例網址。")])]),t._v(" "),s("h2",{attrs:{id:"zhi-zuo-ming-pian-yang-ban"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zhi-zuo-ming-pian-yang-ban"}},[t._v("#")]),t._v(" 製作名片樣板")]),t._v(" "),s("p",[t._v("直接使用 LINE 提供的 "),s("a",{attrs:{href:"https://developers.line.biz/flex-simulator/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flex Message Simulator"),s("OutboundLink")],1),t._v(" 來製作名片：")]),t._v(" "),s("img",{staticStyle:{width:"480px"},attrs:{src:"https://i.imgur.com/eZSX3yP.png"}}),t._v(" "),s("p",[t._v("製作完成以後，就要來把相關的資料欄位換成變數：")]),t._v(" "),s("img",{staticStyle:{width:"480px"},attrs:{src:"https://i.imgur.com/sSHSEUa.png"}}),t._v(" "),s("p",[t._v("在把資料更換成變數的時候，有幾個需要注意的地方：")]),t._v(" "),s("ol",[s("li",[t._v("程式第一步會使用 "),s("a",{attrs:{href:"https://lodash.com/docs/4.17.15#template",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lodash 的 "),s("code",[t._v("_.template")]),t._v(" 函式"),s("OutboundLink")],1),t._v(" 來處理變數，所以你必須使用這個函式所支援的語法。")]),t._v(" "),s("li",[t._v("程式會額外將 "),s("a",{attrs:{href:"https://lodash.com/docs/",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("_")]),t._v(" (Lodash)"),s("OutboundLink")],1),t._v(" 以及 "),s("a",{attrs:{href:"https://github.com/ljharb/qs",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Qs")]),s("OutboundLink")],1),t._v(" 函式庫放到名片樣板的環境變數中，所以你也能在名片樣板中使用這兩個函式庫。")]),t._v(" "),s("li",[t._v("名片樣板在經過 "),s("code",[t._v("_.template")]),t._v(" 函式處理過後，會使用 "),s("code",[t._v("JSON5.parse")]),t._v(" 解析，所以你可以放心使用 "),s("a",{attrs:{href:"https://json5.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON5 的語法"),s("OutboundLink")],1),t._v("喔！")]),t._v(" "),s("li",[t._v("程式會讀取 CSV 網址中的資料，然後找出相同的 "),s("code",[t._v("uuid")]),t._v("，並將筆資料放到 "),s("code",[t._v("vcard")]),t._v(" 這個環境變數中，所以如果你要取得 CSV 網址中的 "),s("code",[t._v("uuid")]),t._v(" 欄位，你需要輸入 "),s("code",[t._v("${vcard.uuid}")]),t._v("，其他欄位依此類推。")])]),t._v(" "),s("h2",{attrs:{id:"gai-shan-shi-yong-zhe-ti-yan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gai-shan-shi-yong-zhe-ti-yan"}},[t._v("#")]),t._v(" 改善使用者體驗")]),t._v(" "),s("p",[t._v("數位版名片跟紙本最不一樣的地方就是，可以放超連結！我們可以在合適的地方放上相對應的超連結，以增加使用者體驗：")]),t._v(" "),s("ol",[s("li",[t._v("公司名稱放上官網連結，如果要強制外部瀏覽器開啟可以多加上 "),s("code",[t._v("?openExternalBrowser=1")]),t._v(" 參數。")]),t._v(" "),s("li",[t._v("手機放上可以直接撥打手機的超連結："),s("code",[t._v("tel:0900000000")])]),t._v(" "),s("li",[t._v("公司電話如果有分機，可以在超連結上用逗號代表分機號碼："),s("code",[t._v("tel:04-23692699,000")])]),t._v(" "),s("li",[t._v("電子郵件加上可以直接寄信的超連結："),s("code",[t._v("mailto:admin@example.com")])]),t._v(" "),s("li",[t._v("公司地址加上 Google Maps 的超連結，"),s("a",{attrs:{href:"https://developers.google.com/maps/documentation/urls/guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("請點此查看詳細文件"),s("OutboundLink")],1),t._v("，並加上 "),s("code",[t._v("?openExternalBrowser=1")]),t._v(" 強制使用外部瀏覽器開啟。")])]),t._v(" "),s("h2",{attrs:{id:"chan-sheng-ke-yi-fen-xiang-ming-pian-de-lian-jie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chan-sheng-ke-yi-fen-xiang-ming-pian-de-lian-jie"}},[t._v("#")]),t._v(" 產生可以分享名片的連結")]),t._v(" "),s("p",[t._v("在準備好了 CSV 資料和名片樣板以後，接下來我們就是要把這幾個東西組合起來，讓同事可以用一個網址來開啟 LIFF，並透過 LINE 來傳送數位版名片給好友囉！")]),t._v(" "),s("p",[t._v("請開啟這個 "),s("a",{attrs:{href:"https://taichunmin.idv.tw/pug/liff-businesscard.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("數位版名片 LIFF 網頁程式"),s("OutboundLink")],1),t._v("：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/jdvdxu7.png",alt:""}})]),t._v(" "),s("p",[t._v("然後填上 CSV 資料以及名片樣板的網址，並且填上 CSV 資料中其中一筆資料的 "),s("code",[t._v("uuid")]),t._v("。")]),t._v(" "),s("p",[t._v("UUID 這個欄位是用來決定要使用哪一筆名片資料，這讓你只需要更換 UUID 就能指定帶入不同的名片資料喔。")]),t._v(" "),s("blockquote",[s("p",[t._v("如果你 CSV 資料以及名片樣板的網址遇到 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("CORS 的問題"),s("OutboundLink")],1),t._v(" (如 GitHub Gist 以及 Google Sheets CSV)，可以嘗試在前面直接加上 "),s("code",[t._v("https://cors-anywhere.herokuapp.com/")]),t._v(" 來繞過這個限制。")])]),t._v(" "),s("h2",{attrs:{id:"fen-xiang-ming-pian-gei-line-hao-you"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fen-xiang-ming-pian-gei-line-hao-you"}},[t._v("#")]),t._v(" 分享名片給 LINE 好友")]),t._v(" "),s("p",[t._v("把三個欄位的資料都填完，並且測試過以後，就可以把網址複製給同事使用啦：")]),t._v(" "),s("img",{staticStyle:{width:"480px"},attrs:{src:"https://i.imgur.com/syZ2sZ3.jpg"}}),t._v(" "),s("p",[t._v("假設沒有錯誤發生的話，當對方打開連結，就會看到兩個按鈕可以選擇，一個是「選擇分享對象」，另一個是「傳送到目前聊天視窗」。這兩個網址所需要的權限不同，所以需要視情況使用。")]),t._v(" "),s("img",{staticStyle:{width:"480px"},attrs:{src:"https://i.imgur.com/pTURnWX.jpg"}}),t._v(" "),s("p",[t._v("「選擇分享對象」這個按鈕能夠一次分享名片給許多好友，但是他沒辦法傳送給社群 (OpenChat)，而且如果好友沒有給予「外部應用程式存取」權限的話，也沒辦法傳送給對方。")]),t._v(" "),s("img",{staticStyle:{width:"480px"},attrs:{src:"https://i.imgur.com/vl94CHp.jpg"}}),t._v(" "),s("p",[t._v("「傳送到目前聊天視窗」則是可以把名片傳送到目前的聊天視窗，換句話說，你需要先把連結貼到聊天視窗內，然後才能打開網址送出名片，這可以用來突破 OpenChat 以及好友沒有「外部應用程式存取」權限的問題，但是如果你不希望別人拿到網址，就要記得趕快把訊息收回喔！")]),t._v(" "),s("img",{staticStyle:{width:"480px"},attrs:{src:"https://i.imgur.com/bZS9V2y.jpg"}}),t._v(" "),s("blockquote",[s("p",[t._v("如果要分享資料到社群 (OpenChat)，訊息裡面還是不能帶有任何個人資訊喔，不然訊息還是會被刪除。")])]),t._v(" "),s("p",[t._v("通常我把名片連結給同事以後，還會順便提醒對方記得把連結放到 LINE Keep 中，以便隨時可以分享名片喔！")]),t._v(" "),s("h2",{attrs:{id:"ru-he-zhui-zong-you-duo-shao-zhuang-zhi-kan-guo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ru-he-zhui-zong-you-duo-shao-zhuang-zhi-kan-guo"}},[t._v("#")]),t._v(" 如何追蹤有多少裝置看過？")]),t._v(" "),s("p",[t._v("因為我們的名片可以使用 Flex 訊息格式來製作，所以也可以用"),s("a",{attrs:{href:"https://taichunmin.idv.tw/blog/2020-06-17-linebot-google-analytics.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("我寫過的 Google Analytics 文章"),s("OutboundLink")],1),t._v("來追蹤到底有多少人看過你的名片，由於使用 GA 的 Measurement Protocol，所以需要一個 uuid 當作裝置 ID，在此建議直接使用 CSV 欄位中的 UUID 來當作裝置 ID，由於 LINE 會幫圖片進行快取，所以我們只要看瀏覽次數就能知道到底有多少裝置看過名片喔！")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/mZyF9z6.png",alt:""}})]),t._v(" "),s("p",[t._v("我們可以在名片樣板的最上面使用 "),s("code",[t._v("<% %>")]),t._v(" 來定義一個函式：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gaScreenView")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vcard")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("https://www.google-analytics.com/collect?")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("Qs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    an"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'LINE 數位版名片'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    cd"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("微程式一般版-2020/07/12-")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("vcard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mobile"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 畫面名稱，在此用來紀錄數位版名片的版本")]),t._v("\n    cid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vcard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uuid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// uuid")]),t._v("\n    ds"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 資料來源，填寫為 app")]),t._v("\n    t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'screenview'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    tid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UA-xxxxxxxx-1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GA 追蹤代碼")]),t._v("\n    ul"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zh-tw'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// locale")]),t._v("\n    v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// api version")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("並且在名片樣板中，使用一個 "),s("code",[t._v("1x1")]),t._v(" 的透明圖來隱藏追蹤連結：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"height"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1px"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"layout"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vertical"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"offsetStart"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0px"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"offsetTop"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0px"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"position"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"absolute"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"box"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"width"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1px"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contents"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"aspectMode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fit"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"aspectRatio"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1:1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"size"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"full"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"image"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${gaScreenView(vcard)}"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("你可以看底下的微程式數位版名片範例來看到底要怎麼寫喔！")]),t._v(" "),s("h2",{attrs:{id:"yuan-shi-ma-yu-xiang-guan-lian-jie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yuan-shi-ma-yu-xiang-guan-lian-jie"}},[t._v("#")]),t._v(" 原始碼與相關連結")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("本文範例程式的原始碼授權為 MIT License。")])]),t._v(" "),s("ul",[s("li",[t._v("程式及原始碼\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://taichunmin.idv.tw/liff-businesscard/",target:"_blank",rel:"noopener noreferrer"}},[t._v("免費樣版網站 - LINE 數位版名片"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/taichunmin/liff-businesscard",target:"_blank",rel:"noopener noreferrer"}},[t._v("原始碼 - LINE 數位版名片"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://gist.githubusercontent.com/taichunmin/e6123d3ece7c8c88c6064fb9a69857bf",target:"_blank",rel:"noopener noreferrer"}},[t._v("微程式數位版名片範例 (CSV 及名片樣板)"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://taichunmin.idv.tw/blog/2020-07-21-liff-businesscard.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("不用寫程式也能做 LINE 數位版名片"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://taichunmin.idv.tw/blog/2020-10-14-liff-businesscard-workshop.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("LINE 數位版名片工作坊"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://taichunmin.idv.tw/blog/2021-07-09-line-card-create-carousel-1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("免費製作電子傳單 (多頁訊息) - LINE 數位版名片"),s("OutboundLink")],1)])])]),t._v(" "),s("li",[t._v("相關連結\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("跨來源資源共用（CORS）"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developers.line.biz/flex-simulator/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flex Message Simulator 工具"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developers.google.com/maps/documentation/urls/guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Maps Universal cross-platform URL"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://json5.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON5 的語法文件"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://lodash.com/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lodash 函式庫文件"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/ljharb/qs",target:"_blank",rel:"noopener noreferrer"}},[t._v("Qs 函式庫文件"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developers.line.biz/en/reference/liff/#share-target-picker",target:"_blank",rel:"noopener noreferrer"}},[t._v("shareTargetPicker 文件"),s("OutboundLink")],1)])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);