---
date: "2021-04-09T00:00:00+08"
title: "在網頁上使用開源專案預覽 LINE Flex 訊息"
description: 泰國的 LAE PamornT 在 LINE Developers Thailand 上發佈了一個開源專案，可以讓我們在網頁上預覽 LINE 的 Flex 訊息！
image: https://i.imgur.com/jLN8xLH.png
tags:
  - LINE
meta:
  - property: og:image:width
    content: 1280
  - property: og:image:height
    content: 640
---

# 在網頁上使用開源專案預覽 LINE Flex 訊息

2021/04/07，泰國的 LAE PamornT 在 [LINE Developers Thailand](https://medium.com/linedevth) 上發佈了一個[開源專案 PamornT/flex2html](https://github.com/PamornT/flex2html)，可以讓我們在網頁上預覽 LINE 的 Flex 訊息！

自從 LINE 發佈了 Flex 訊息格式以及 `liff.shareTargetPicker()` 這兩個功能以後，相信應該不少人嘗試使用這兩大功能來讓使用者分享很酷炫的內容給好友，就像我之前做的[「LINE 數位版名片」](https://taichunmin.idv.tw/liff-businesscard/)一樣。

因為 Flex 訊息是一個很複雜的 JSON，相信很多人也都和我一樣有一個困擾，就是在透過 `liff.shareTargetPicker()` 真的把訊息分享出去以前，沒辦法在網頁上面先預覽分享的訊息，而是必須真的分享到任一好友或群組以後，才能夠看到傳送出來的訊息。

但現在只要使用這個 PamornT/flex2html 開源專案，就可以在網頁上面預覽 LINE 的 Flex 訊息囉！

## 使用教學

1. 請在 HTML 的 `<head>` 標籤中，引用以下的 CSS：

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/PamornT/flex2html@main/css/flex2html.css">
```

2. 請在 HTML 的 `<body>` 標籤中，引用以下的 JS：

```html
<script src="https://cdn.jsdelivr.net/gh/PamornT/flex2html@main/js/flex2html.min.js">
```

3. 請在 HTML 的 `<body>` 標籤中，放上一個 `div` 來顯示 Flex 訊息，這個 `div` 的 `id` 屬性是可以自由定義的：

```html
<div id="flex2html"></div>
```

4. 最後，透過 JS 程式碼呼叫這個開源套件所提供的 `flex2html` 函式，並且給予指定的參數，來把 Flex 訊息顯示在指定的 `div` 裡面：

```js
flex2html('flex2html', flexJson)
```

## 範例

我自己製作了一個範例網頁，網址是：<https://taichunmin.idv.tw/pug/line-flex2html.html>，歡迎大家可以從[「Flex 訊息模擬器」](https://developers.line.biz/flex-simulator/)上面複製 JSON 然後貼到我的網頁去預覽訊息！

![](https://i.imgur.com/sMoCBeN.png)

在 PamornT/flex2html 的專案中也有提供一個範例，網址是 <https://pamornt.github.io/flex2html/sample.html>，打開之後會看到以下的畫面：

| ![](https://i.imgur.com/pb8HUuU.png) | ![](https://i.imgur.com/9hhHtHT.png) | ![](https://i.imgur.com/utxHQs1.png) | ![](https://i.imgur.com/BhgbbW2.png) | ![](https://i.imgur.com/ivNI2xE.png) |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## 原始碼與相關連結

::: tip
本文範例程式的原始碼授權為 MIT License，如果有疑問可以透過 [Facebook](https://www.facebook.com/taichunmin) 跟我交流。
:::

1. [泰國的 LAE PamornT 在 LINE Developers Thailand 發佈的文章](https://medium.com/linedevth/cb8d32ece92a)
2. [GitHub PamornT/flex2html](https://github.com/PamornT/flex2html)
3. [Flex 訊息模擬器](https://developers.line.biz/flex-simulator/)
