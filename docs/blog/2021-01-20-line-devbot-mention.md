---
date: "2021-01-20T00:00:00+08"
title: Flex 開發人員工具支援 mention 新功能
description: 教你怎麼用這個開發人員工具快速測試 LINE Messaging API 新發佈的 mention 功能！
image: https://i.imgur.com/WmxVU0S.png
tags:
  - LINE
meta:
  - property: og:image:width
    content: 1280
  - property: og:image:height
    content: 640
---

# 「Flex 開發人員工具」支援 mention 新功能

在 [LINE 官方部落格 2021/01/20 的新聞中](https://developers.line.biz/zh-hant/news/2021/01/20/messaging-api-update-january-2021/) 發佈了一個 LINE Messaging API 的新功能，就是會告訴 chatbot 有關使用者標記使用者的資料：

<img src="https://i.imgur.com/FI7I5y5.png" style="width: 480px">

![](https://i.imgur.com/PiwDDOW.png)

你可以透過筆者所開發的「Flex 開發人員工具」來測試這項功能。

## 加入好友並建立多人群組

[![](https://i.imgur.com/cP5purz.png)](https://line.me/R/ti/p/%40736cebrk)

加入好友: <https://line.me/R/ti/p/@736cebrk>

加入「Flex 開發人員工具」好友以後，你接下來就會需要建立一個群組，並且把「Flex 開發人員工具」邀請到群組內：

| ![](https://i.imgur.com/LVTRaoU.png) | ![](https://i.imgur.com/plD2mw6.png) |
| -------- | -------- |
|  |  |

如果加入成功以後，你應該就會看到「Flex 開發人員工具」會回覆 `join` 事件的 JSON。

<img src="https://i.imgur.com/Ivjpjlu.png" style="width: 480px">

## 直接回傳 JSON 內容

「Flex 開發人員工具」能夠直接把你傳送的 event 轉成 JSON 直接回傳給你，所以你可以**再多邀請一個朋友加入這個群組**，然後直接使用這個功能來顯示 mention 的資料格式：

<img src="https://i.imgur.com/td0yVGW.png" style="width: 480px">

## 在 Messaging API 指令中透過 mention 指定使用者

有了 mention 功能，就可以很方便的指定使用者，所以筆者幫「Flex 開發人員工具」新增了大多數的 Messaging API 支援，讓你可以以指令的方式呼叫 Messaging API：

| 沒用 mention 時預設顯示自己的資料 | 有 mention 時可以顯示別人的資料 |
| -------- | -------- |
| ![](https://i.imgur.com/sBiA2et.png) | ![](https://i.imgur.com/FOhuwg6.png) |

> 如果想要知道全部支援的指令列表，請查看[「Flex 開發人員工具」的原始碼](https://github.com/taichunmin/gcf-line-devbot/tree/master/line/handler/cmd)。

部分指令也支援多人 mention：

<table>
  <tr>
    <th><code>/getProfile</code></th>
    <th><code>/getGroupMemberProfile</code></th>
  </tr>
  <tr>
    <td width="48%"><img src="https://i.imgur.com/6CUimdt.png"></td>
    <td width="52%"><img src="https://i.imgur.com/xmgAHWu.png"></td>
  </tr>
</table>

## 原始碼與相關連結

::: tip
本文範例程式的原始碼授權為 MIT License，如果有疑問可以透過 [Facebook](https://www.facebook.com/taichunmin) 跟我聊聊。
:::

* [新聞: LINE 2021/01/20 發佈的新聞](https://developers.line.biz/zh-hant/news/2021/01/20/messaging-api-update-january-2021/) by LINE
* [原始碼: Flex 開發人員工具](https://github.com/taichunmin/gcf-line-devbot)
* [文章: 輔助開發 LINE Flex 訊息的工具](https://taichunmin.idv.tw/blog/2020-04-06-line-devbot.html)
* [文章: LINE Simple Beacon for ESP32 工作坊](https://taichunmin.idv.tw/blog/2020-07-13-line-simple-beacon-workshop.html)
* [投影片: 如何在 LIFF 傳送隱藏資料給機器人](https://hackmd.io/@taichunmin/chatbot-tw-202005#/26)
* [文章: 如何在 LIFF 傳送隱藏資料給機器人](https://taichunmin.idv.tw/blog/2020-04-07-line-liff-send-hidden-data.html)
