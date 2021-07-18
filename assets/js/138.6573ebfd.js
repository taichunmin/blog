(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{511:function(t,a,s){"use strict";s.r(a);var e=s(8),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"zai-wang-ye-shang-shi-yong-kai-yuan-zhuan-an-yu-lan-line-flex-xun-xi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zai-wang-ye-shang-shi-yong-kai-yuan-zhuan-an-yu-lan-line-flex-xun-xi"}},[t._v("#")]),t._v(" 在網頁上使用開源專案預覽 LINE Flex 訊息")]),t._v(" "),s("p",[t._v("2021/04/07，泰國的 LAE PamornT 在 "),s("a",{attrs:{href:"https://medium.com/linedevth",target:"_blank",rel:"noopener noreferrer"}},[t._v("LINE Developers Thailand"),s("OutboundLink")],1),t._v(" 上發佈了一個"),s("a",{attrs:{href:"https://github.com/PamornT/flex2html",target:"_blank",rel:"noopener noreferrer"}},[t._v("開源專案 PamornT/flex2html"),s("OutboundLink")],1),t._v("，可以讓我們在網頁上預覽 LINE 的 Flex 訊息！")]),t._v(" "),s("p",[t._v("自從 LINE 發佈了 Flex 訊息格式以及 "),s("code",[t._v("liff.shareTargetPicker()")]),t._v(" 這兩個功能以後，相信應該不少人嘗試使用這兩大功能來讓使用者分享很酷炫的內容給好友，就像我之前做的"),s("a",{attrs:{href:"https://taichunmin.idv.tw/liff-businesscard/",target:"_blank",rel:"noopener noreferrer"}},[t._v("「LINE 數位版名片」"),s("OutboundLink")],1),t._v("一樣。")]),t._v(" "),s("p",[t._v("因為 Flex 訊息是一個很複雜的 JSON，相信很多人也都和我一樣有一個困擾，就是在透過 "),s("code",[t._v("liff.shareTargetPicker()")]),t._v(" 真的把訊息分享出去以前，沒辦法在網頁上面先預覽分享的訊息，而是必須真的分享到任一好友或群組以後，才能夠看到傳送出來的訊息。")]),t._v(" "),s("p",[t._v("但現在只要使用這個 PamornT/flex2html 開源專案，就可以在網頁上面預覽 LINE 的 Flex 訊息囉！")]),t._v(" "),s("h2",{attrs:{id:"shi-yong-jiao-xue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shi-yong-jiao-xue"}},[t._v("#")]),t._v(" 使用教學")]),t._v(" "),s("ol",[s("li",[t._v("請在 HTML 的 "),s("code",[t._v("<head>")]),t._v(" 標籤中，引用以下的 CSS：")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/gh/PamornT/flex2html@main/css/flex2html.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("請在 HTML 的 "),s("code",[t._v("<body>")]),t._v(" 標籤中，引用以下的 JS：")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/gh/PamornT/flex2html@main/js/flex2html.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("請在 HTML 的 "),s("code",[t._v("<body>")]),t._v(" 標籤中，放上一個 "),s("code",[t._v("div")]),t._v(" 來顯示 Flex 訊息，這個 "),s("code",[t._v("div")]),t._v(" 的 "),s("code",[t._v("id")]),t._v(" 屬性是可以自由定義的：")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("flex2html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("最後，透過 JS 程式碼呼叫這個開源套件所提供的 "),s("code",[t._v("flex2html")]),t._v(" 函式，並且給予指定的參數，來把 Flex 訊息顯示在指定的 "),s("code",[t._v("div")]),t._v(" 裡面：")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("flex2html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex2html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" flexJson"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"fan-li"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fan-li"}},[t._v("#")]),t._v(" 範例")]),t._v(" "),s("p",[t._v("我自己製作了一個範例網頁，網址是："),s("a",{attrs:{href:"https://taichunmin.idv.tw/pug/line-flex2html.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://taichunmin.idv.tw/pug/line-flex2html.html"),s("OutboundLink")],1),t._v("，歡迎大家可以從"),s("a",{attrs:{href:"https://developers.line.biz/flex-simulator/",target:"_blank",rel:"noopener noreferrer"}},[t._v("「Flex 訊息模擬器」"),s("OutboundLink")],1),t._v("上面複製 JSON 然後貼到我的網頁去預覽訊息！")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/sMoCBeN.png",alt:""}})]),t._v(" "),s("p",[t._v("在 PamornT/flex2html 的專案中也有提供一個範例，網址是 "),s("a",{attrs:{href:"https://pamornt.github.io/flex2html/sample.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pamornt.github.io/flex2html/sample.html"),s("OutboundLink")],1),t._v("，打開之後會看到以下的畫面：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("img",{attrs:{src:"https://i.imgur.com/pb8HUuU.png",alt:""}})]),t._v(" "),s("th",[s("img",{attrs:{src:"https://i.imgur.com/9hhHtHT.png",alt:""}})]),t._v(" "),s("th",[s("img",{attrs:{src:"https://i.imgur.com/utxHQs1.png",alt:""}})]),t._v(" "),s("th",[s("img",{attrs:{src:"https://i.imgur.com/BhgbbW2.png",alt:""}})]),t._v(" "),s("th",[s("img",{attrs:{src:"https://i.imgur.com/ivNI2xE.png",alt:""}})])])]),t._v(" "),s("tbody",[s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td")])])]),t._v(" "),s("h2",{attrs:{id:"yuan-shi-ma-yu-xiang-guan-lian-jie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yuan-shi-ma-yu-xiang-guan-lian-jie"}},[t._v("#")]),t._v(" 原始碼與相關連結")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("本文範例程式的原始碼授權為 MIT License，如果有疑問可以透過 "),s("a",{attrs:{href:"https://www.facebook.com/taichunmin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Facebook"),s("OutboundLink")],1),t._v(" 跟我交流。")])]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://medium.com/linedevth/cb8d32ece92a",target:"_blank",rel:"noopener noreferrer"}},[t._v("泰國的 LAE PamornT 在 LINE Developers Thailand 發佈的文章"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/PamornT/flex2html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub PamornT/flex2html"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developers.line.biz/flex-simulator/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flex 訊息模擬器"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);