(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{470:function(e,t,r){"use strict";r.r(t);var a=r(8),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"yong-docker-lai-zhi-zuo-you-ya-de-mongodb-seeder"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yong-docker-lai-zhi-zuo-you-ya-de-mongodb-seeder"}},[e._v("#")]),e._v(" 用 Docker 來製作優雅的 MongoDB Seeder")]),e._v(" "),r("blockquote",[r("p",[e._v("本篇是原文 "),r("a",{attrs:{href:"https://ardoq.com/delightful-database-seeding-with-docker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Delightful Database Seeding with Docker"),r("OutboundLink")],1),e._v(" 的摘要")])]),e._v(" "),r("p",[e._v("流程總共區分為三個階段：")]),e._v(" "),r("ul",[r("li",[e._v("複製正式伺服器的資料並清理")]),e._v(" "),r("li",[e._v("打包並發佈 Seeder")]),e._v(" "),r("li",[e._v("使用 Seeder 匯入資料")])]),e._v(" "),r("h2",{attrs:{id:"qing-li-zheng-shi-si-fu-qi-de-zi-liao"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qing-li-zheng-shi-si-fu-qi-de-zi-liao"}},[e._v("#")]),e._v(" 清理正式伺服器的資料")]),e._v(" "),r("ol",[r("li",[e._v("首先，假設我們正式伺服器的 dump 資料為 "),r("code",[e._v("prod-dump.tar.gz")])]),e._v(" "),r("li",[e._v("啟動一個 MongoDB Docker 並將 "),r("code",[e._v("prod-dump.tar.gz")]),e._v(" 以 volumn 掛載入 container")]),e._v(" "),r("li",[e._v("於 container 中執行清除資料用腳本 "),r("code",[e._v("clean.js")])]),e._v(" "),r("li",[e._v("將清理過的資料再 dump 到 "),r("code",[e._v("clean-dump.tar.gz")])])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://i.imgur.com/0SAmBE9.png",alt:"Imgur"}})]),e._v(" "),r("h2",{attrs:{id:"da-bao-bing-fa-bu-seeder"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#da-bao-bing-fa-bu-seeder"}},[e._v("#")]),e._v(" 打包並發佈 Seeder")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("撰寫一個 Seeder 的 Dockerfile 如下")]),e._v(" "),r("div",{staticClass:"language-docker extra-class"},[r("pre",{pre:!0,attrs:{class:"language-docker"}},[r("code",[r("span",{pre:!0,attrs:{class:"token instruction"}},[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" mongo:3.0.1")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token instruction"}},[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ADD")]),e._v(" clean-dump.tar.gz /work")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token instruction"}},[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ADD")]),e._v(" attachments.tar.gz /work")]),e._v("\n")])])]),r("p",[r("img",{attrs:{src:"https://i.imgur.com/3hZiQ6g.png",alt:"Imgur"}})])]),e._v(" "),r("li",[r("p",[e._v("自動 build 以後放到 registry (私人的 Docker Hub) 上\n"),r("img",{attrs:{src:"https://i.imgur.com/m6509Me.png",alt:"Imgur"}})])])]),e._v(" "),r("h2",{attrs:{id:"shi-yong-seeder-hui-ru-zi-liao"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#shi-yong-seeder-hui-ru-zi-liao"}},[e._v("#")]),e._v(" 使用 Seeder 匯入資料")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("使用兩個指令來分別匯入 db 資料和 attachments 如下：")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("docker run --rm --link ardoq_mongodb_1:mongodb ardoq/demo-seed:latest mongorestore -h mongodb /work/demo_seed\ndocker run --rm --volumes-from ardoq_mongodb_1 ardoq/demo-seed:latest "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" -r /work/attachments /data\n")])])]),r("p",[r("img",{attrs:{src:"https://i.imgur.com/oZjJklp.png",alt:"Imgur"}})])])])])}),[],!1,null,null,null);t.default=s.exports}}]);