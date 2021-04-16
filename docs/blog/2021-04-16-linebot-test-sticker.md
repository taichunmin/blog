---
date: "2021-04-16T00:00:00+08"
title: "快速測試 LINE 能傳送的貼圖"
description: 現在可以用「Flex 開發人員工具」快速測試能不能傳送貼圖！
image: https://i.imgur.com/YhRKaGL.png
tags:
  - LINE
meta:
  - property: og:image:width
    content: 1280
  - property: og:image:height
    content: 640
---

# 快速測試 LINE 官方帳號及 Notify 能傳送的貼圖

LINE 官方帳號每過一段時間後，就會更換一次 Messaging API 可以傳送的貼圖列表，但是以前在 LINE Notify 中，可以傳送的貼圖列表一直都有跟 Messaging API 不一樣的問題，在 [LINE 官方部落格 2021/04/07 發佈的新聞](https://developers.line.biz/en/news/2021/04/07/list-of-available-stickers/)中，終於把兩個服務可以傳送的貼圖列表統一了，並且還把之前貼圖的 PDF 列表改成網頁版本，於是筆者也在自己所開發的[「Flex 開發人員工具」](https://line.me/R/ti/p/@736cebrk)新增了快速測試貼圖的功能！

## 加入官方帳號「Flex 開發人員工具」

[![](https://i.imgur.com/cP5purz.png)](https://line.me/R/ti/p/%40736cebrk)

加入好友: <https://line.me/R/ti/p/@736cebrk>

## 去貼圖清單中選擇一個貼圖

::: tip
可以傳送的貼圖清單: <https://developers.line.biz/en/docs/messaging-api/sticker-list/>
:::

這次 LINE 把官方帳號可以傳送的貼圖做成網頁版本，我們要傳送貼圖，需要在這個頁面取得 `packageId` 和 `stickerId` 如下：

![](https://i.imgur.com/H4YhuUt.png)

## 輸入指令進行測試

這次筆者幫「Flex 開發人員工具」加上了兩個新的指令 `/replySticker` 和 `/notifySticker`，在此以 `packageId=11538, stickerId=51626507` 為例：

![](https://i.imgur.com/bx4cZh2.png)

你可以在「Flex 開發人員工具」輸入 `/replySticker 11538 51626507` 或是 `/notifySticker 11538 51626507` 來進行測試：

<img src="https://i.imgur.com/O4Y2zeT.png" style="width: 480px">

如果輸入錯誤的資料，`/replySticker` 就不會回傳訊息，`/notifySticker` 會回傳錯誤訊息：

<img src="https://i.imgur.com/Sr9vexL.png" style="width: 480px">

你也可以一次測試多個貼圖，最多 5 個：

| ![](https://i.imgur.com/fNSinyn.jpg) | ![](https://i.imgur.com/sLPSzch.png) |
| :-----: | :-: |
|  |  |

如果想要測試你自己擁有的貼圖，你只要直接傳貼圖給「Flex 開發人員工具」，它就會透過 quickReply 快速提供你這兩個指令：

<img src="https://i.imgur.com/UjR56Jp.png" style="width: 480px">

## 後記

筆者在 2/25 的時候，發現 LINE Notify 能傳送的貼圖和 Messaging API 能傳送的貼圖不同，於是我就以 LINE API Expert 的身份跟 LINE 回報問題，原本想說 LINE Notify 是個免費的佛心服務，可能不會很快修正這個問題，沒想到 4/7 就修正這個問題，然後還把以前那個很不好用的 PDF 貼圖清單改成網頁版，真的好用很多！

## 原始碼與相關連結

::: tip
本文範例程式的原始碼授權為 MIT License，如果有疑問可以透過 [Facebook](https://www.facebook.com/taichunmin) 跟我交流。
:::

* [新聞: LINE 2021/04/07 發佈的新聞](https://developers.line.biz/en/news/2021/04/07/list-of-available-stickers/) by LINE
* [原始碼: Flex 開發人員工具](https://github.com/taichunmin/gcf-line-devbot)
* [文章:「Flex 開發人員工具」支援 mention 新功能](https://taichunmin.idv.tw/blog/2021-01-20-line-devbot-mention.html)
* [文章: 輔助開發 LINE Flex 訊息的工具](https://taichunmin.idv.tw/blog/2020-04-06-line-devbot.html)
* [文章: LINE Simple Beacon for ESP32 工作坊](https://taichunmin.idv.tw/blog/2020-07-13-line-simple-beacon-workshop.html)
* [投影片: 如何在 LIFF 傳送隱藏資料給機器人](https://hackmd.io/@taichunmin/chatbot-tw-202005#/26)
* [文章: 如何在 LIFF 傳送隱藏資料給機器人](https://taichunmin.idv.tw/blog/2020-04-07-line-liff-send-hidden-data.html)
