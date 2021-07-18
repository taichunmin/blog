(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{506:function(t,a,e){"use strict";e.r(a);var o=e(8),n=Object(o.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"shen-wei-chatbot-kai-fa-zhe-wo-gai-gai-yong-google-analytics-4-ma"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shen-wei-chatbot-kai-fa-zhe-wo-gai-gai-yong-google-analytics-4-ma"}},[t._v("#")]),t._v(" 身為 Chatbot 開發者我該改用 Google Analytics 4 嗎？")]),t._v(" "),e("p",[t._v("2020/10/14 時，Google 發佈了第 4 版 Analytics，整個後台的介面也大更新，那麼，身為 Chatbot 開發者的我們，要馬上改用第 4 版 Analytics 嗎？")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.imgur.com/KkGBpVt.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"da-jia-tong-chang-du-zen-mo-yong-google-analytics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#da-jia-tong-chang-du-zen-mo-yong-google-analytics"}},[t._v("#")]),t._v(" 大家通常都怎麼用 Google Analytics？")]),t._v(" "),e("p",[t._v("為了分析產品的好壞，我們勢必要記錄使用者的行為，但是自己從頭做起實在是太辛苦了，所以通常大家都直接選擇一些現有的服務，例如網頁可以選擇 "),e("code",[t._v("gtag.js")]),t._v("，Android 和 iOS 的 APP 可以選擇 "),e("code",[t._v("Firebase")]),t._v("，在 Chatbot 我選擇使用 Google Analytics 的 "),e("a",{attrs:{href:"https://developers.google.com/analytics/devguides/collection/protocol/v1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Measurement Protocol"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("在發佈第 4 版 Analytics 後，Measurement Protocol 也同時發佈了 "),e("a",{attrs:{href:"https://developers.google.com/analytics/devguides/collection/protocol/ga4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Measurement Protocol (Google Analytics 4)"),e("OutboundLink")],1),t._v("，但由於該新版 API 還有一些問題存在：")]),t._v(" "),e("h2",{attrs:{id:"wen-ti-1-mu-qian-api-huan-zai-alpha-ban-ben"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wen-ti-1-mu-qian-api-huan-zai-alpha-ban-ben"}},[t._v("#")]),t._v(" 問題 #1: 目前 API 還在 Alpha 版本")]),t._v(" "),e("img",{staticStyle:{width:"480px"},attrs:{src:"https://i.imgur.com/wIvgfP4.png"}}),t._v(" "),e("p",[t._v("雖然 Google Analytics 4 已經正式發佈，但是相對應的 Measurement Protocol 還在 Alpha 版本，代表說還有可能有重大修改，不適合使用在正式產品上。")]),t._v(" "),e("h2",{attrs:{id:"wen-ti-2-wu-fa-qu-de-bi-tian-lan-wei-client_id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wen-ti-2-wu-fa-qu-de-bi-tian-lan-wei-client_id"}},[t._v("#")]),t._v(" 問題 #2: 無法取得必填欄位 "),e("code",[t._v("client_id")])]),t._v(" "),e("p",[t._v("使用 Measurement Protocol 時，他都會要求你傳送 "),e("code",[t._v("client_id")]),t._v(" 以便識別使用者的裝置，在舊版中對於 "),e("code",[t._v("client_id")]),t._v(" 的要求是只要符合 UUID 的規範即可，但是在新版的 API 中，被改成了這個流程：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.imgur.com/IsbAHq7.png",alt:""}})]),t._v(" "),e("p",[t._v("在這個流程中，呼叫 "),e("code",[t._v("gtag.js('get')")]),t._v(" 取得 "),e("code",[t._v("client_id")]),t._v(" 的動作必須在有載入 "),e("code",[t._v("gtag.js")]),t._v(" 的環境下執行（也就是瀏覽器）。但是對於 Chatbot 來說，新使用者通常不是在瀏覽器中，沒辦法在純後端伺服器中幫新使用者建立一個新的 "),e("code",[t._v("client_id")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"zong-jie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zong-jie"}},[t._v("#")]),t._v(" 總結")]),t._v(" "),e("p",[t._v("如果想要追蹤 chatbot 上面的使用者行為，目前只能先用回舊版的通用 Analytics，只能希望以後正式版的 Measurement Protocol (Google Analytics 4) 可以支援自訂的 "),e("code",[t._v("client_id")]),t._v("。")]),t._v(" "),e("p",[t._v("如果你想要改用舊版的通用 Google Analytics，你必須在建立時，選擇「建立通用 Analytics (分析) 資源」如下圖：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.imgur.com/b7nsqX5.jpg",alt:""}})]),t._v(" "),e("p",[t._v("That's all!")]),t._v(" "),e("h2",{attrs:{id:"qi-ta-xiang-guan-wen-zhang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qi-ta-xiang-guan-wen-zhang"}},[t._v("#")]),t._v(" 其他相關文章")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://taichunmin.idv.tw/blog/2020-04-28-lintbot-google-analytics.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("讓聊天機器人也能看 Google Analytics (1)"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://taichunmin.idv.tw/blog/2020-05-25-linebot-google-analytics.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("讓聊天機器人也能看 Google Analytics (2)"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://taichunmin.idv.tw/blog/2020-06-17-linebot-google-analytics.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("追蹤使用者有沒有看 LINE 訊息 (開信率)"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://taichunmin.idv.tw/blog/2020-06-29-linebot-google-analytics.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("追蹤 LINE Notify 的閱讀率 (開信率)"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://coscup.org/2020/zh-TW/agenda/UR7WGZ",target:"_blank",rel:"noopener noreferrer"}},[t._v("在 LINE Chatbot 中串接 Google Analytics 的經驗分享"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);