---
date: "2021-01-19T00:00:00+08"
title: LIFF v2 的 replace 模式即將被移除及建議程式寫法
description: LIFF v2 的 Replace 模式即將於 2021/03/01 被移除，快檢查你的程式吧！
image: https://i.imgur.com/sPSb3Tl.png
tags:
  - LINE
  - LIFF
meta:
  - property: og:image:width
    content: 1280
  - property: og:image:height
    content: 640
---

# LINE LIFF v2 的 replace 模式即將被移除及建議程式寫法

在 [LINE 官方 2021/01/18 的公告](https://developers.line.biz/zh-hant/news/2021/01/18/remind-discontinue-replace-mode-announcement/) 中，再次提醒 LIFF 的 Replace 模式即將於 **2021/03/01** 被移除：

![](https://i.imgur.com/YxN1Pv9.png)

所以你需要確保你的 LIFF 程式都已經改成 Concatenate 模式並確認程式可以正常運作，不然到時候你的程式就會壞掉。

## 什麼是 Method for converting additional information in the LIFF URL？

如果你想要開發 LINE LIFF 的程式時，你需要去 LINE Login 的開發者後台，輸入你的網站路徑等資料，然後它就會發給你一個隨機的 LIFF ID 如下：

```
1234567890-abcdefgh
```

當你拿到這個 LIFF ID 以後，你可以用這個 ID 組成一個網址，這樣就能夠把這個網址給使用者使用：

```
https://liff.line.me/1234567890-abcdefgh/
```

但是 LIFF ID 的新增數量有上限 (目前最多 50 個)，你沒辦法無限新增 LIFF ID，所以 LIFF SDK 有提供一個功能，它會幫你把網址後面額外的參數傳遞給你的程式。

假設你給了使用者以下的網址：

```
https://liff.line.me/1234567890-abcdefgh/share.html?a=1&b=2
```

LIFF SDK 就會幫你把後面額外的參數接到 Endpoint 後面，然後使用者最後就會跳轉到以下網址（以 `Concatenate` 模式為例）：

```
# 假設你的 Endpoint 是設定成這個
# https://taichunmin.idv.tw/liff-businesscard/liff-full/
https://taichunmin.idv.tw/liff-businesscard/liff-full/share.html?a=1&b=2
```

## 詳細跳轉步驟 (以 v2.7.0 為例)

當使用者開啟 `https://liff.line.me/1234567890-abcdefgh/share.html?a=1&b=2` 時，LIFF 會讓使用者進行第一次跳轉至以下網址：

```
# 假設你的 Endpoint 是設定成這個
# https://taichunmin.idv.tw/liff-businesscard/liff-full/
https://taichunmin.idv.tw/liff-businesscard/liff-full/?liff.state=%2Fshare.html%3Fa%3D1%26b%3D2
```

如果仔細看這個網址，應該不難發現所有額外的參數都在 `liff.state` 裡面，而且資料是經過 js 的 `encodeURIComponent()` 處理：

```
?liff.state=%2Fshare.html%3Fa%3D1%26b%3D2
```

當使用者前往這個網頁後，LIFF SDK 發現網址中有 `liff.state` 就會進行二次跳轉到以下網址（以 `Concatenate` 模式為例）：

```
https://taichunmin.idv.tw/liff-businesscard/liff-full/share.html?a=1&b=2
```

在這裡需要注意的地方是，第一次跳轉固定是跳轉到你所設定的 Endpoint，然後第二次跳轉才會跳轉到你所指定的網頁。

> 如果你開發的 LIFF 程式要求使用者要登入 `liff.login()`，LIFF 就會跳轉更多次，但是這不在這篇文章的討論範圍之內，如果有疑問歡迎跟我聊聊。

## 筆者建議程式寫法

先確保 LINE Login 後台把 LIFF ID 設定為使用 **Concatenate**：

![](https://i.imgur.com/hE2O8X2.png)

確認 LIFF SDK 的版本大於 `2.3.0`:

```js
console.log(liff.getVersion())
```

為了讓第一次跳轉越快越好，建議在 Endpoint 那個網頁不要寫太多的程式：

```html
<!-- 原始碼來自: https://github.com/taichunmin/liff-businesscard/blob/master/src/liff-full/index.pug -->

<!doctype html>
<html><head>
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,viewport-fit=cover,user-scalable=no"
    name="viewport">
  <title>分享 LINE 數位版名片</title>
</head>

<body>
  <script src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
  <script>
    liff.init({ liffId: "1234567890-abcdefgh" });
  </script>
</body></html>
```

把實際上所需的程式邏輯寫到第二次跳轉會抵達的網頁中，如果發現網址中有 `liff.state` 就要避免你自己所寫的 js 程式碼干擾到 LIFF SDK 的跳轉，程式的建議作法可以參考我所寫的 [LINE 數位版名片](https://taichunmin.idv.tw/liff-businesscard/) 的 [原始程式碼](https://github.com/taichunmin/liff-businesscard/blob/master/src/liff-full/share.pug)。

如果你還想知道如何[透過三個 LINE LIFF ID 創造出無限的 LIFF 網頁的技巧，你可以看我之前所寫的文章](https://taichunmin.idv.tw/blog/2020-09-18-line-three-size-liff.html)，如果有疑問也歡迎跟我聊聊。

## 原始碼與相關連結

::: tip
本文範例程式的原始碼授權為 MIT License，如果有疑問可以透過 [Facebook](https://www.facebook.com/taichunmin) 跟我聊聊。
:::

* [原始碼: LINE 數位版名片](https://github.com/taichunmin/liff-businesscard/)
* [文章: 轉移你的 LIFF 從 Replace 到 Concatenate 模式](https://engineering.linecorp.com/zh-hant/blog/liff-replace-to-concatenate/) by LINE
* [文章: 透過三個 LINE LIFF ID 創造出無限的 LIFF](https://taichunmin.idv.tw/blog/2020-09-18-line-three-size-liff.html)
* [文章: 您需要了解有關新 LIFF URL 的所有資訊](https://engineering.linecorp.com/zh-hant/blog/new-liff-url-infomation/) by LINE
* [文章: The Best Practice Of LIFF](https://etrexkuo.medium.com/the-best-practice-of-liff-fd89f2e612fc) by 卡米哥
* [程式: LINE 數位版名片](https://taichunmin.idv.tw/liff-businesscard/)
* [公告: LINE 2021/01/18 的英文公告](https://developers.line.biz/zh-hant/news/2021/01/18/remind-discontinue-replace-mode-announcement/) by LINE
* [公告: LINE 2020/11/20 的英文公告](https://developers.line.biz/en/news/2020/11/20/discontinue-replace-mode-announcement/) by LINE
