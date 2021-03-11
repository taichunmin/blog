---
date: "2021-03-11T00:00:00+08"
title: "LINE 新功能測試: Quick Reply 支援 URI Action"
description: 除了網址以外，還可以在 Quick Reply 放上電話、電子郵件、LIFF 網頁還有 LINE 專屬網址。
image: https://i.imgur.com/snshczc.png
tags:
  - LINE
meta:
  - property: og:image:width
    content: 1280
  - property: og:image:height
    content: 640
---

# LINE 新功能測試: Quick Reply 支援 URI Action

<img src="https://i.imgur.com/STe1TJo.png" style="width: 480px">

在 [LINE 官方部落格 2021/03/10 的新聞](https://developers.line.biz/en/news/2021/03/10/messaging-api-update-march-2021/)中，發佈了 Quick Reply 中支援 URI Action 的新功能，大家可以用筆者所開發的「Flex 開發人員工具」快速進行測試。

## 加入好友

[![](https://i.imgur.com/cP5purz.png)](https://line.me/R/ti/p/@736cebrk)

加入好友: <https://line.me/R/ti/p/@736cebrk>

## 透過「Flex 開發人員工具」測試

你只要在 LINE 電腦版上傳送一個 JSON 訊息，這個工具就會嘗試回傳：

| ![](https://i.imgur.com/V3VMRrm.jpg) | ![](https://i.imgur.com/eLoVtjr.png) |
| :-----: | :-: |
| Android | iOS |

除了網址以外，還可以在 Quick Reply 放上電話、電子郵件、LIFF 網頁還有 LINE 專屬網址。

以下是圖片中筆者寫來測試 Quick Reply 的 JSON 原始碼：

```json
{
  "text": "請在手機中點選下方 quickReply",
  "type": "text",
  "quickReply": {
    "items": [
      {
        "type": "action",
        "action": {
          "label": "URL",
          "type": "uri",
          "uri": "https://www.google.com.tw"
        }
      },
      {
        "type": "action",
        "action": {
          "label": "tel",
          "type": "uri",
          "uri": "tel:0423692699,000"
        }
      },
      {
        "type": "action",
        "action": {
          "label": "Email",
          "type": "uri",
          "uri": "mailto:nobody@example.com"
        }
      },
      {
        "type": "action",
        "action": {
          "label": "LIFF",
          "type": "uri",
          "uri": "https://liff.line.me/1654046335-DzXpM8mx"
        }
      },
      {
        "type": "action",
        "action": {
          "label": "Maps",
          "type": "uri",
          "uri": "https://www.google.com/maps/search/?api=1&query_place_id=ChIJAaZEqCYWaTQRMv6fuIsJEuo&query=%E5%BE%AE%E7%A8%8B%E5%BC%8F%E8%B3%87%E8%A8%8A&openExternalBrowser=1"
        }
      }
    ]
  }
}
```

## 使用情境分享

筆者有試著設想一些可能的使用情境，在此分享給大家。

### 隱藏失效的連結

有時候，我們會傳送一次性的連結給使用者，然後在連結失效以後，我們可以透過額外傳送一則訊息來隱藏 Quick Reply，以增加使用者體驗，避免使用者會誤點失效連結。

| ![](https://i.imgur.com/OAzDgbp.jpg) | ![](https://i.imgur.com/8VxBi4h.png) |
| :-----: | :-: |
|  |  |

### 避免 LINE 電腦版開啟連結

由於在 LINE 電腦版中，Quick Reply 和 Rich Menu 一樣都不會顯示，我們可以利用這個特性，來避免使用者在電腦版開啟我們所傳送的 LIFF 網址，還可以進一步避免網址被使用者複製。

![](https://i.imgur.com/j48W8Jx.png)

### 客製化輸入網頁

原本 Quick Reply 的用途是為了讓使用者快速恢復訊息，為了增加使用者體驗，我們可以提供客製化輸入網頁來方便使用者輸入資訊，然後呼叫 [`liff.sendMessages()`](https://developers.line.biz/en/reference/liff/#send-messages) 來傳送訊息到聊天視窗內。

| ![](https://i.imgur.com/v5kqtly.jpg) | ![](https://i.imgur.com/4UdN0yI.png) |
| :-----: | :-: |
|  |  |

### 給予即時資料

有時後我們所傳送的訊息可能具有時效性，這時後我們就可以提供一個網址來讓使用者透過網頁取得最新的資訊。

<img src="https://i.imgur.com/K9lObtj.png" style="width: 320px">

### 在群組中使用時避免打擾他人

這個使用情境是跟同樣身為 LINE API Expert 的溫明輝教授交流時學到的，由於原本 Quick Reply 都一定會強制回傳一個文字，如果在群組中使用時，這個文字就會吵到其他群組中的使用者，如果改用網址以後，就可以引導使用者開啟網頁，不會送出文字。

<img src="https://i.imgur.com/PMtS0S7.png" style="width: 320px">

## 原始碼與相關連結

::: tip
本文範例程式的原始碼授權為 MIT License，如果有疑問可以透過 [Facebook](https://www.facebook.com/taichunmin) 跟我交流。
:::

> 1. [輔助開發 LINE Flex 訊息的工具](https://taichunmin.idv.tw/blog/2020-04-06-line-devbot.html)
> 2. [如何在 LIFF 傳送隱藏資料給機器人](https://taichunmin.idv.tw/blog/2020-04-07-line-liff-send-hidden-data.html)
> 3. [「Flex 開發人員工具」支援 mention 新功能](https://taichunmin.idv.tw/blog/2021-01-20-line-devbot-mention.html)
