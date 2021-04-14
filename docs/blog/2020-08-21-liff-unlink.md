---
date: "2020-08-21T00:00:00+08"
title: 如何重新看到 LINE LIFF v2 的授權畫面
description: 在開發 LIFF 的 bot link 功能時，如何才能重新顯示授權畫面，方便測試或截圖？
image: https://i.imgur.com/olKIvVH.png
tags:
  - LINE
  - LIFF
meta:
  - property: og:image:width
    content: 1280
  - property: og:image:height
    content: 640
---

# 如何重新看到 LINE LIFF v2 的授權畫面？

在 LINE 的聊天機器人中，可以透過一個名為 LIFF 的功能，使用 HTML 等相關技術大幅度改善使用者的體驗，在 LIFF 升級 v2 以後，身為一個 LINE 聊天機器人的開發者，難免需要開發 LIFF v2 新支援的「Bot link」功能，也就是當使用者第一次打開 LIFF 時，可以在授權畫面上問使用者要不要加入 LIFF 所綁定的聊天機器人。

但是授權畫面只要同意過一次後，就不會再次顯示，每次在開發跟這個有關的功能時，為了要測試或是截圖，就要去騷擾公司內的其他同事，問他們有沒有加過聊天機器人，如果沒有的話，就跟他們借手機來測試，真的是很不方便。這篇文章就是要來教大家如何取消 LIFF 的授權，讓自己可以重新看到 LIFF 的授權畫面。

順帶一提，這功能通常是為了追蹤使用者的加入管道，所以才會採用 LIFF 來吸引新用戶，而不是透過 LINE 原本給予的 bot 加入連結 `https://line.me/R/ti/p/{LINE ID}`，我也有寫過一篇相關的文章，是當初舉辦好友邀請活動所做的 LIFF 網頁，[請點此查看這篇文章](https://taichunmin.idv.tw/blog/2020-04-19-line-offical-account-referral.html)。

## 解除連動中的應用程式

::: tip 2021/04/14 補充：
現在有一個 LINE URL Scheme 網址可以快速開啟這個頁面，網址是：<https://line.me/R/nv/connectedApps> (請在手機上開啟這個連結)
:::

首先，打開 LINE 以後，請點下方的「主頁」按鈕，然後在點上方的「齒輪」按鈕進到設定畫面：

| Android | iOS |
| :-----: | :-: |
| ![](https://i.imgur.com/zEurtMx.jpg) | ![](https://i.imgur.com/5S6pp9c.png) |

然後點一下「我的帳號」：

| Android | iOS |
| :-----: | :-: |
| ![](https://i.imgur.com/vRNBCV1.jpg) | ![](https://i.imgur.com/ktGn40F.png) |

然後點一下「連動中的應用程式」：

| Android | iOS |
| :-----: | :-: |
| ![](https://i.imgur.com/0ZEnGJ2.jpg) | ![](https://i.imgur.com/xaxBTEP.png) |

然後找到你想要解除連動的應用程式：

| Android | iOS |
| :-----: | :-: |
| ![](https://i.imgur.com/rWndx4A.jpg) | ![](https://i.imgur.com/Sj6JKir.png) |

然後點一下畫面最下面的「解除連動」：

| Android | iOS |
| :-----: | :-: |
| ![](https://i.imgur.com/7XFC1oW.jpg) | ![](https://i.imgur.com/KIAaTbb.png) |

這樣就成功解除連動囉！

| Android | iOS |
| :-----: | :-: |
| ![](https://i.imgur.com/iXAPOOV.jpg) | ![](https://i.imgur.com/ZC5frT3.png) |

剛好最近在測試「Bot link」功能中，到底會不會預設勾選「加入好友」或是「解除封鎖」的問題，原本不知道可以取消連動，所以騷擾了不少同事，後來發現可以取消連動，這樣以後在開發時，就不用再麻煩同事啦！

| 「WeMo」預設勾選 | 「停車大檸檬」預設沒有勾選 |
| :-----: | :-: |
| ![](https://i.imgur.com/EE9MmRu.jpg) | ![](https://i.imgur.com/3efsMmM.png) |
| ![](https://i.imgur.com/HGymOLf.jpg) | ![](https://i.imgur.com/fLWs8bq.png) |

> [點此前往該問題的臉書討論串](https://www.facebook.com/groups/linebot/permalink/2582938952036675/)
