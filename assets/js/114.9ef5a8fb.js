(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{490:function(t,e,a){"use strict";a.r(e);var s=a(8),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ru-he-zai-liff-chuan-song-yin-cang-zi-liao-gei-ji-qi-ren"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ru-he-zai-liff-chuan-song-yin-cang-zi-liao-gei-ji-qi-ren"}},[t._v("#")]),t._v(" 如何在 LIFF 傳送隱藏資料給機器人")]),t._v(" "),a("p",[t._v("Hi 大家好，我今天來分享一個小技巧，讓你可以在 LIFF 中傳送隱藏資料給聊天機器人，並且還可以免費回覆訊息，很適合做出很漂亮的 LIFF 給使用者選擇東西喔！")]),t._v(" "),a("p",[t._v("在 LINE 的聊天機器人中，如果你希望使用者按下按鈕後看不到你傳的資料，你可以使用 postback 這個 action 來傳送隱藏資料，同時你也會拿到一個 replyToken 讓你回傳訊息。")]),t._v(" "),a("p",[t._v("但是在 LIFF 中該怎麼做到類似的事情呢？我們直接先用範例程式來試玩看看吧！")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://line.me/R/ti/p/%40336zwcug",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.imgur.com/VsOitU7.png",alt:""}}),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("由於後端採用 Google Cloud Function，為了避免用量過高被收錢，所以有鎖執行上限，如果無回應的話，可以重新傳送訊息試試喔！")])]),t._v(" "),a("h2",{attrs:{id:"fan-li-cheng-shi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fan-li-cheng-shi"}},[t._v("#")]),t._v(" 範例程式")]),t._v(" "),a("p",[t._v("加入這個聊天機器人後，你應該就能看到這個畫面：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Android")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("iOS")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"https://i.imgur.com/iOLMwZo.jpg",alt:""}})]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"https://i.imgur.com/5wwTX3o.png",alt:""}})])])])]),t._v(" "),a("p",[t._v("然後請點選第一個選擇 sender 的 LIFF 連結，點下去以後就會出現 Brown、Cony 和 Sally 給你選擇：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Android")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("iOS")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"https://i.imgur.com/mA9LzOn.jpg",alt:""}})]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"https://i.imgur.com/7peCe3Q.png",alt:""}})])])])]),t._v(" "),a("p",[t._v("如果我們點選 Brown 以後，你就會看到聊天機器人用"),a("a",{attrs:{href:"https://engineering.linecorp.com/zh-hant/blog/chatbot-icon-switch/",target:"_blank",rel:"noopener noreferrer"}},[t._v("最新的 Icon Switch 功能"),a("OutboundLink")],1),t._v("來跟你打招呼囉！")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Android")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("iOS")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"https://i.imgur.com/eFTDnjy.jpg",alt:""}})]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"https://i.imgur.com/cuNeo7l.png",alt:""}})])])])]),t._v(" "),a("p",[t._v("如果你把這段文字複製到"),a("a",{attrs:{href:"https://taichunmin.idv.tw/blog/2020-04-06-line-devbot.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("「輔助開發 LINE Flex 訊息的工具」"),a("OutboundLink")],1),t._v("文章裡面所介紹的「DEMO 開發 Flex」機器人中：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Android")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("iOS")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"https://i.imgur.com/yDPv0rG.jpg",alt:""}})]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"https://i.imgur.com/c4nkN1J.png",alt:""}})])])])]),t._v(" "),a("p",[t._v("並且在這個工具裡面打開 LIFF 選擇 sender 的話，你就可以成功看到這個 LIFF 到底送出了什麼隱藏內容喔！")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Android")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("iOS")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"https://i.imgur.com/G43kCFA.jpg",alt:""}})]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"https://i.imgur.com/ejkdQkt.png",alt:""}})])])])]),t._v(" "),a("h2",{attrs:{id:"yun-zuo-yuan-li"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yun-zuo-yuan-li"}},[t._v("#")]),t._v(" 運作原理")]),t._v(" "),a("p",[t._v("首先，我們需要準備一張 "),a("code",[t._v("3x1")]),t._v(" 的透明 png 圖：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://i.imgur.com/MwS42AE.png\n")])])]),a("p",[t._v("然後把隱藏資料放在 Image 的網址中：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://i.imgur.com/MwS42AE.png?sender=Brown\n")])])]),a("p",[t._v("接著，就可以在 LIFF 中呼叫 "),a("code",[t._v("liff.sendMessages()")]),t._v(" 來把 Image 送給機器人：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" liff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMessages")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  originalContentUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://i.imgur.com/MwS42AE.png?sender=Brown'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  previewImageUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://i.imgur.com/MwS42AE.png?sender=Brown'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("然後在聊天機器人中就會收到類似這樣的 Event：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"replyToken"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bfd16af576304062931ee39249d1c362"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"source"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"userId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Udeadbeefdeadbeefdeadbeefdeadbeef"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1586196950201")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"active"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"image"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11738027154079"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contentProvider"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"external"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"originalContentUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://i.imgur.com/MwS42AE.png?sender=Brown"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"previewImageUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://i.imgur.com/MwS42AE.png?sender=Brown"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("這時候聊天機器人就可以把 "),a("code",[t._v("event.message.contentProvider.originalContentUrl")]),t._v(" 資料解析出來處理，並且還有 replyToken 可以使用喔！")]),t._v(" "),a("h2",{attrs:{id:"yuan-shi-ma-ji-can-kao-lian-jie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yuan-shi-ma-ji-can-kao-lian-jie"}},[t._v("#")]),t._v(" 原始碼及參考連結")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("本文範例程式的原始碼授權為 MIT License。")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://gist.github.com/taichunmin/684839958fed6ff9b4f368c3d23a385b",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webhook 原始碼"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://taichunmin.idv.tw/pug/line-liff-20200406.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("LIFF 原始網址"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://hackmd.io/@taichunmin/chatbot-tw-202005",target:"_blank",rel:"noopener noreferrer"}},[t._v("2020/05 在台中 chatbot.tw 分享的投影片"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://youtu.be/PuGOObhI5oA",target:"_blank",rel:"noopener noreferrer"}},[t._v("2020/05 在台中 chatbot.tw 分享的錄影檔"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://taichunmin.idv.tw/blog/2020-04-06-line-devbot.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("輔助開發 LINE Flex 訊息的工具"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://engineering.linecorp.com/zh-hant/blog/chatbot-icon-switch/",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 Icon Switch 來變更聊天機器人的暱稱與圖示"),a("OutboundLink")],1),t._v(" by Evan Lin")])])])}),[],!1,null,null,null);e.default=n.exports}}]);