(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{495:function(t,s,a){"use strict";a.r(s);var e=a(8),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"yong-localtunnel-bang-chatbot-shang-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yong-localtunnel-bang-chatbot-shang-https"}},[t._v("#")]),t._v(" 用 localtunnel 幫 chatbot 上 https")]),t._v(" "),a("p",[t._v("在開發聊天機器人的時候，各大聊天機器人平台都會要求要使用 https 的 webhook，在開發環境上面要幫伺服器加上 domain 和憑證實在不是一件簡單的事情，大家最常使用 ngrok 來幫助你把開發伺服器加上 https，但是 ngrok 對於免費版的限制很多：")]),t._v(" "),a("ul",[a("li",[t._v("隨機產生 Domain")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/vLPfn4Y.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("一次只能開一個 tunnel")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/Ybg9Gu0.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("存取頻率限制")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/UALY6aS.png",alt:""}})]),t._v(" "),a("p",[t._v("為了破除這個免費版的限制，之前我曾經去研究了 "),a("a",{attrs:{href:"https://serveo.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SERVEO"),a("OutboundLink")],1),t._v(" 這個軟體，並且也去研究了如何架設自己的 SERVEO 伺服器，並且寫成了 docker-compose 版本 "),a("a",{attrs:{href:"https://github.com/taichunmin/docker-serveo",target:"_blank",rel:"noopener noreferrer"}},[t._v("(client)"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/taichunmin/docker-serveo-server",target:"_blank",rel:"noopener noreferrer"}},[t._v("(server)"),a("OutboundLink")],1),t._v("，然後用這個主題"),a("a",{attrs:{href:"https://hackmd.io/@taichunmin/slide-coscup-2019",target:"_blank",rel:"noopener noreferrer"}},[t._v("在 COSCUP 上面分享過"),a("OutboundLink")],1),t._v("。但是 SERVEO 雖然暫時解決了開發上的問題，但是也還有一些不完美的地方：")]),t._v(" "),a("ul",[a("li",[t._v("免費伺服器 server.net 很常壞掉")]),t._v(" "),a("li",[t._v("非 Open Source")]),t._v(" "),a("li",[t._v("自己架設的 server 有連線數量限制 (上限 3)")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/usO2g8v.png",alt:""}})]),t._v(" "),a("p",[t._v("後來我在偶然之下接觸到了 "),a("a",{attrs:{href:"https://github.com/localtunnel/localtunnel",target:"_blank",rel:"noopener noreferrer"}},[t._v("localtunnel"),a("OutboundLink")],1),t._v("，這個專案有開放原始碼，然後如果自己架設伺服器時，也沒有數量限制，另外還支援 websocket。所以我也把它寫成 docker-compose 的版本囉！")]),t._v(" "),a("h2",{attrs:{id:"jia-she-si-fu-qi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jia-she-si-fu-qi"}},[t._v("#")]),t._v(" 架設伺服器")]),t._v(" "),a("p",[t._v("由於 localtunnel 所提供的免費伺服器也很常壞掉，所以建議大家直接架設自己的伺服器。")]),t._v(" "),a("p",[t._v("我在比較過各大雲端主機的價位後，選擇使用 DigitalOcean 來架設，每月費用是 USD $5，所以這篇文章也會用這個示範，如果你用底下的優惠連結可以有免費 USD $100 試用。當然如果你有自己熟悉的雲端主機平台也可以用自己熟悉的。")]),t._v(" "),a("blockquote",[a("p",[t._v("如果覺得我寫的文章很不錯，你可以透過 "),a("a",{attrs:{href:"https://m.do.co/c/81327b020798",target:"_blank",rel:"noopener noreferrer"}},[t._v("這個邀請連結來申請 DigitalOcean"),a("OutboundLink")],1),t._v(" 取得 USD $100 的免費額度，並且還能給我一點回饋喔！")])]),t._v(" "),a("p",[t._v("首先，先在雲端平台上面開好一個 Ubuntu 18.04 的伺服器：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/m1Yy5fE.png",alt:""}})]),t._v(" "),a("p",[t._v("建立完成以後，就去 DNS 設定固定 IP 對應，注意這裡需要先建立一個 A Record 然後再設定一個 Wildcard 的 CNAME Record：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("localtunnel     IN      A       xxx.xxx.xxx.xxx\n*.localtunnel   IN      CNAME   localtunnel.example.com.\n")])])]),a("p",[a("img",{attrs:{src:"https://i.imgur.com/rdEqcpo.png",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("如果沒有自己的 Domain，非常推薦可以去買一個，然後交給 CloudFlare 代管，拿來架設自己的部落格，或是開發時都可以拿來用。")])]),t._v(" "),a("p",[t._v("接下來就透過 SSH 連線到主機中：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/aqeOnGs.jpg",alt:""}})]),t._v(" "),a("p",[t._v("接下來安裝 docker 和 docker-compose，如果已經安裝過就可以跳過：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" upgrade -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sSL get.docker.com "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/docker/compose/releases/download/'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sL https://api.github.com/repos/docker/compose/releases/latest "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" tag_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cut")]),t._v(" -d"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"'")]),t._v(" -f "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/docker-compose-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" -s"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" -m"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" -o /usr/local/bin/docker-compose\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x /usr/local/bin/docker-compose\n")])])]),a("p",[t._v("接下來把我建立好的 docker-compose 環境抓下來，並且複製設定檔：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/taichunmin/docker-localtunnel-server.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docker-localtunnel-server\n")])])]),a("p",[t._v("接下來就是要去申請 letsencrypt 憑證：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" dns-cloudflare\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" docker-compose.yml.example docker-compose.yml\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" cloudflare.ini.example cloudflare.ini\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" root:root cloudflare.ini\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),t._v(" cloudflare.ini\n")])])]),a("p",[t._v("修改 "),a("code",[t._v("docker-compose.yml")]),t._v("，改成自己的 E-mail 和自己的 domain：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/Tg3xBeT.jpg",alt:""}})]),t._v(" "),a("p",[t._v("修改 "),a("code",[t._v("cloudflare.ini")]),t._v(" 設定 cloudflare 的帳號及金鑰：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/9iqGC0c.jpg",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/HXYnpsp.png",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("如果 dns 不是設定在 cloudflare 可以採用手動驗證 "),a("a",{attrs:{href:"https://certbot.eff.org/docs/using.html#manual",target:"_blank",rel:"noopener noreferrer"}},[t._v("(文件請點此)"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("p",[t._v("設定檔都設定好以後，就可以繼續取得憑證的步驟：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" docker-compose run --rm certbot\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 成功取得後，回到上層目錄")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n")])])]),a("p",[t._v("接下來就是要設定 localtunnel 的伺服器了，先複製一下設定檔：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" docker-compose.yml.example docker-compose.yml\n")])])]),a("p",[t._v("然後修改 "),a("code",[t._v("docker-compose.yml")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/23TWbEw.png",alt:""}})]),t._v(" "),a("p",[t._v("修改完成以後，就可以開啟伺服器了：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" docker-compose up -d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" docker-compose logs -f\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以透過 Ctrl+C 離開查看 log 模式")]),t._v("\n")])])]),a("h2",{attrs:{id:"jiang-ben-di-duan-de-si-fu-qi-jia-shang-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jiang-ben-di-duan-de-si-fu-qi-jia-shang-https"}},[t._v("#")]),t._v(" 將本地端的伺服器加上 https")]),t._v(" "),a("p",[t._v("接下來要來安裝本地端的 localtunnel 指令 "),a("a",{attrs:{href:"https://github.com/localtunnel/localtunnel",target:"_blank",rel:"noopener noreferrer"}},[t._v("(安裝文件在此)"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("安裝好後，就可以在本地端透過這個指令建立連線：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("lt --port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v(" --print-requests --subdomain taichunmin --host https://example.com\n")])])]),a("p",[t._v("如果你在執行這個指令後看到這個就代表你連線成功啦：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("your url is: http://taichunmin.example.com\n")])])]),a("p",[t._v("由於這個指令不會結束，所以你可以搭配 tmux：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("tmux\nlt --port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v(" --print-requests --subdomain taichunmin --host https://example.com\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 輸入 Ctrl+b, d 離開 tmux")]),t._v("\n")])])]),a("p",[t._v("如果覺得指令太長，我還會在 node 的 package.json 中加入指令快捷鍵：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"localtunnel"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lt --port 3000 --print-requests --subdomain taichunmin --host https://example.com"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("設定完以後，就可以用 "),a("code",[t._v("yarn run localtunnel")]),t._v(" 來執行囉，這個指令會跟著專案，所以在 LINE Developers 中的 webhook 就不用一直修改囉！")]),t._v(" "),a("p",[t._v("如果需要更多 localtunnel 的參數說明"),a("a",{attrs:{href:"https://github.com/localtunnel/server",target:"_blank",rel:"noopener noreferrer"}},[t._v("請點此"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"geng-xin-letsencrypt-ping-zheng"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#geng-xin-letsencrypt-ping-zheng"}},[t._v("#")]),t._v(" 更新 letsencrypt 憑證")]),t._v(" "),a("p",[t._v("letsencrypt 的憑證有效期限只有三個月，如果你收到 letsencrypt 的通知信，記得去更新一下憑證：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/lgFD6Vt.jpg",alt:""}})]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docker-localtunnel-server\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" docker-compose down\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" dns-cloudflare\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" docker-compose run --rm certbot\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" docker-compose up -d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" docker-compose logs -f\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以透過 Ctrl+C 離開查看 log 模式")]),t._v("\n")])])]),a("h2",{attrs:{id:"shi-yong-xin-de-fen-xiang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shi-yong-xin-de-fen-xiang"}},[t._v("#")]),t._v(" 使用心得分享")]),t._v(" "),a("p",[t._v("自從我開始換用 localtunnel 到現在，已經超過兩個禮拜了，目前用起來的心得是，雖然有一些小 bug 存在，例如說斷線後有時候沒辦法用上次的 subdomain，但是優點是，開源專案能看得到裡面的程式碼，可以找時間好好看裡面是怎麼實做的，說不定有機會可以研究怎麼把 bug 修正，並且加上一些新的功能。")]),t._v(" "),a("h2",{attrs:{id:"yuan-shi-ma-ji-can-kao-lian-jie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yuan-shi-ma-ji-can-kao-lian-jie"}},[t._v("#")]),t._v(" 原始碼及參考連結")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("本文範例程式的原始碼授權為 MIT License。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);