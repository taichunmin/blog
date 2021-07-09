---
date: "2020-07-21T00:00:00+08"
title: 不用寫程式也能做 LINE 數位版名片
description: 不用寫程式也能輕鬆製作數位版名片，會寫 LINE Flex 訊息的人也能自己做名片樣板
image: https://i.imgur.com/ME1YLcg.png
tags:
  - 電子名片
  - LINE
  - LIFF
  - businesscard
meta:
  - property: og:image:width
    content: 1280
  - property: og:image:height
    content: 640
---

# 不用寫程式也能做 LINE 數位版名片

由於[上次的文章](https://taichunmin.idv.tw/blog/2020-07-12-liff-businesscard.html)需要有一點程式基礎，所以這次我改成不用寫程式也能輕鬆製作數位版名片，並讓有研究 LINE Flex 訊息的進階使用者可以自己做名片樣板，還可以提 Pull Request 分享給大家使用喔！

## 開始建立名片

請先開啟「LINE 數位版名片網站」，並且選擇一個喜歡的樣板：

::: tip
建立 LINE 數位版名片網站：<https://taichunmin.idv.tw/liff-businesscard/>
:::

![](https://i.imgur.com/o1F36rT.png)

在此以「Chatbot 台灣開發者」這個名片樣板為例，點選「點此建立名片」這個按鈕後，就會進到輸入資料的畫面：

<img src="https://i.imgur.com/NrjyYPg.png" style="width: 480px">

然後請輸入「頭銜」及「暱稱」，並點一下「建立名片」：

<img src="https://i.imgur.com/jb27GYN.png" style="width: 480px">

「選擇分享對象」這個按鈕能夠一次分享名片給許多好友，但是他沒辦法傳送給社群 (OpenChat)，而且如果好友沒有給予「外部應用程式存取」權限的話，也沒辦法傳送給對方。

<img src="https://i.imgur.com/vl94CHp.jpg" style="width: 480px">

「傳送到目前聊天視窗」則是可以把名片傳送到目前的聊天視窗，換句話說，你需要先把連結貼到聊天視窗內，然後才能打開網址送出名片，這可以用來突破 OpenChat 以及好友沒有「外部應用程式存取」權限的問題，但是如果你不希望別人拿到網址，就要記得趕快把訊息收回喔！

<img src="https://i.imgur.com/bZS9V2y.jpg" style="width: 480px">

> 如果要分享資料到社群 (OpenChat)，訊息裡面還是不能帶有任何個人資訊喔，不然訊息還是會被刪除。

「複製本頁網址」可以幫助你快速複製這個頁面的網址，方便以後可以快速分享這個名片給朋友！非常推薦你可以製作一個名片，然後把網址放到「LINE Keep」裡面保存喔！

<img src="https://i.imgur.com/o4YVG4s.jpg" style="width: 480px">

> 這次的免費樣板全部都有使用 Google Analytics 進行追蹤，為了辨識是誰的名片，所以會把免費樣板內的姓名傳送到 Google Analytics 中，如果有想要查看自己的追蹤數據可以私下跟我索取！

## 自行製作名片樣板

請先去 GitHub 專案中 Fork 一份原始碼：

::: tip
GitHub 原始碼：<https://github.com/taichunmin/liff-businesscard>
:::

![](https://i.imgur.com/JumZmVc.png)

然後把程式碼使用 `git` 下載到本地，然後透過 `yarn install` 來安裝所需的相依性套件：

![](https://i.imgur.com/grMRd57.png)

```bash
git clone <your-repo-url>
cd liff-businesscard
yarn install
```

名片樣板可以直接使用 LINE 提供的 [Flex Message Simulator](https://developers.line.biz/flex-simulator/) 來製作：

<img src="https://i.imgur.com/eZSX3yP.png" style="width: 480px">

製作完成以後，就要來把相關的資料欄位換成變數：

<img src="https://i.imgur.com/sSHSEUa.png" style="width: 480px">

在把資料更換成變數的時候，有幾個需要注意的地方：

1. 程式第一步會使用 [Lodash 的 `_.template` 函式](https://lodash.com/docs/4.17.15#template) 來處理變數，所以你必須使用這個函式所支援的語法。
2. 程式會額外將 [`_` (Lodash)](https://lodash.com/docs/) 以及 [`Qs`](https://github.com/ljharb/qs) 函式庫放到名片樣板的環境變數中，所以你也能在名片樣板中使用這兩個函式庫。
3. 名片樣板在經過 `_.template` 函式處理過後，會使用 `JSON5.parse` 解析，所以你可以放心使用 [JSON5 的語法](https://json5.org/)喔！

然後將建立完成的名片樣板儲存在 `public/cards/example.txt` 中，其中 `example` 請換成你自己喜歡的名字。

![](https://i.imgur.com/Y9blyua.png)

接下來需要幫你的名片樣板製作一個預覽圖，為了美觀，預覽圖的尺寸限制為 `1280x640` 像素。你可以透過 [Flex 開發人員工具](https://www.line-community.me/product_detail?botid=5efadf20851f74ab9c189ff6) 來幫助你製作名片樣板預覽圖。

::: tip
Flex 開發人員工具：<https://www.line-community.me/product_detail?botid=5efadf20851f74ab9c189ff6>
:::

接下來要製作表單，請去 `src/forms/` 資料夾中複製其中一個程式碼，並改成 `src/forms/example.pug`，其中 `example` 請換成你自己喜歡的名字。

![](https://i.imgur.com/kxt3Us3.png)

::: tip
* pugjs 語法教學：<https://pugjs.org/api/getting-started.html>
* vue.js 語法教學：<https://vuejs.org/v2/guide/>
* Bootstrap 語法教學：<https://getbootstrap.com/>
* 本地開發用 livereload 伺服器指令：`yarn dev`
:::

你需要幫這個表單連結填上「標題」、「描述」、「預覽圖」以及「永久網址」。

![](https://i.imgur.com/qhRt0KU.png)

並且加上可輸入的表單欄位：

![](https://i.imgur.com/G3Ehjda.png)

你還要在 js 裡面幫表單欄位填上相對應的變數：

![](https://i.imgur.com/86hpCof.png)

由於分享名片的 `share.html` 程式是共用的，所以你需要額外填上你剛剛建立的名片樣板網址：

![](https://i.imgur.com/c4dJBXF.png)

專案的「免費樣板列表」首頁的資料是讀取 `public/businesscards.csv`，所以請在這個檔案填上你製作的名片樣板的資料：

![](https://i.imgur.com/eVCs4Jo.png)

在提出 Pull Request 之前，有兩個指令可以先執行：

* Coding Style 檢查：`yarn lint`
* 將 pug 編譯成 html：`yarn build`

歡迎大家製作自己的名片樣板並提出 Pull Request 給別人使用喔！

## 原始碼與相關連結

::: tip
本文範例程式的原始碼授權為 MIT License，若您提出 Pull Request，代表您也同意將您的程式碼以 MIT License 授權釋出。
:::

* 程式及原始碼
  * [免費樣版網站 - LINE 數位版名片](https://taichunmin.idv.tw/liff-businesscard/)
  * [原始碼 - LINE 數位版名片](https://github.com/taichunmin/liff-businesscard)
  * [看起來很專業的 LINE 數位版名片](ttps://taichunmin.idv.tw/blog/2020-07-12-liff-businesscard.html)
  * [LINE 數位版名片工作坊](https://taichunmin.idv.tw/blog/2020-10-14-liff-businesscard-workshop.html)
  * [免費製作電子傳單 (多頁訊息) - LINE 數位版名片](https://taichunmin.idv.tw/blog/2021-07-09-line-card-create-carousel-1.html)
* 相關連結
  * [Flex Message Simulator 工具](https://developers.line.biz/flex-simulator/)
  * [Google Maps Universal cross-platform URL](https://developers.google.com/maps/documentation/urls/guide)
  * [JSON5 的語法文件](https://json5.org/)
  * [Lodash 函式庫文件](https://lodash.com/docs/)
  * [Qs 函式庫文件](https://github.com/ljharb/qs)
  * [shareTargetPicker 文件](https://developers.line.biz/en/reference/liff/#share-target-picker)
  * [Flex 開發人員工具](https://www.line-community.me/product_detail?botid=5efadf20851f74ab9c189ff6)
