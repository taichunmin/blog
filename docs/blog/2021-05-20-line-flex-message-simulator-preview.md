---
date: "2021-05-20T00:00:00+08"
title: "傳送測試訊息新功能 (LINE Flex 訊息模擬器)"
description: LINE 在 2021/05/20 發佈了一個在「Flex 訊息模擬器」中「把 Flex 測試訊息傳送到手機上預覽」的新功能。
image: https://i.imgur.com/17HftPw.png
tags:
  - LINE
meta:
  - property: og:image:width
    content: 1280
  - property: og:image:height
    content: 640
---

# 傳送測試訊息新功能 (LINE Flex 訊息模擬器)

在 [LINE 官方部落格 2021/05/20 發佈的新聞](https://developers.line.biz/en/news/2021/05/20/send-test-message-flex-message-simulator/)中，發佈了一個在「Flex 訊息模擬器」中「把 Flex 測試訊息傳送到手機上預覽」的新功能。

## 測試訊息傳送教學

::: tip
* Flex 訊息模擬器：<https://developers.line.biz/flex-simulator/>
:::

Flex 訊息是 LINE 的一個特殊訊息格式，在訊息的客製化上，它給開發者提供很大的彈性。現在在[「Flex 訊息模擬器」](https://developers.line.biz/flex-simulator/)的網頁右上角，多了一顆「Send…」按鈕，可以直接把 Flex 訊息傳送到目前登入的 LINE 帳號上面。

![](https://i.imgur.com/mCAsdod.png)

點了這個按鈕以後，就會有一個彈出視窗，讓你選擇傳送的對象：

![](https://i.imgur.com/vlGAWNz.png)

然後請把「Flex Message Sim」這個官方帳號加為好友：

::: tip
如果沒有把「Flex Message Sim」這個官方帳號加為好友，就會收不到測試訊息。

* Flex Message Sim：<https://line.me/R/ti/p/@flexmessagesim>

![](https://i.imgur.com/K8uNN4I.png)
:::

成功把官方帳號加為好友以後，就可以「選擇傳送對象」並按下「Send」來傳送測試訊息：

![](https://i.imgur.com/2uCizaO.png)

當訊息傳送成功後，你就能看到以下的 tooltip：

![](https://i.imgur.com/B7xYhGY.png)

然後在「Flex Message Sim」這個官方帳號中就會看到你傳送的測試訊息：

<img src="https://i.imgur.com/Ho412Ka.png" style="width: 480px">

## 新增額外的傳送對象

這個新功能的傳送對象除了自己之外，還可以額外加入一個 LINE 帳號來進行測試，很適合分別設定一個 iOS 和 Android 的手機進行測試。你可以點選「Register destination」按鈕：

![](https://i.imgur.com/EkI53rA.png)

點選這個按鈕以後，網頁上就會出現一個 QRCode，這時請用另一台手機進行掃碼：

![](https://i.imgur.com/lO5w35i.png)

掃描之後就會開啟一個 LIFF 授權頁面，請選取「加入好友」並點選「許可」：

<img src="https://i.imgur.com/2FC5vBK.png" style="width: 480px">

許可之後，就會開啟一個 LIFF 頁面，請點選「Issue verification code」來取得驗證碼：

| ![](https://i.imgur.com/GdKL8MA.jpg) | ![](https://i.imgur.com/FuvWSXy.png) |
| :-----: | :-: |
|  |  |

然後把驗證碼回填到「Flex 訊息模擬器」網頁上然後按下「Next」：

![](https://i.imgur.com/cdvYrOq.png)

然後你就會看到確認視窗，請點選「Register destination」：

![](https://i.imgur.com/J7VZGDK.png)

接下來就能選擇額外的傳送對象發送測試訊息：

![](https://i.imgur.com/DhuOA51.png)

## 相關連結

::: tip
若有疑問可以透過 [Facebook](https://www.facebook.com/taichunmin) 跟我交流。
:::

* [新聞: LINE 2021/05/20 發佈的新聞](https://developers.line.biz/en/news/2021/05/20/send-test-message-flex-message-simulator/) by LINE
* [輔助開發 LINE Flex 訊息的工具](https://taichunmin.idv.tw/blog/2020-04-06-line-devbot.html)
* [如何在 LIFF 傳送隱藏資料給機器人](https://taichunmin.idv.tw/blog/2020-04-07-line-liff-send-hidden-data.html)
* [「Flex 開發人員工具」支援 mention 新功能](https://taichunmin.idv.tw/blog/2021-01-20-line-devbot-mention.html)
* [Quick Reply 支援 URI Action](https://taichunmin.idv.tw/blog/2021-03-11-line-quickreply-uri.html)
