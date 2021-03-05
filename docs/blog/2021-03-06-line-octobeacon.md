---
date: "2021-03-06T00:00:00+08"
title: 用 ESP32 自製八合一 LINE Beacon
description: 把 ESP32 變成能輪播 8 個 LINE Beacon 訊號，並支援防偽機制以及工程模式。
image: https://i.imgur.com/ccsm0RH.png
tags:
  - LINE
meta:
  - property: og:image:width
    content: 1280
  - property: og:image:height
    content: 640
---

# 用 ESP32 自製八合一 LINE Beacon

![](https://i.imgur.com/kdwP0nC.jpg)

筆者最近做了一個嘗試，在 ESP32 這塊開發版上面開發了一個八合一的 LINE Beacon，所以特地寫了一篇文章來分享。

## 把程式燒到 ESP32

::: tip
* 程式碼: <https://github.com/taichunmin/line-simplebeacon-esp32/tree/master/octobeacon>
* 燒錄教學: <https://taichunmin.idv.tw/blog/2020-07-13-line-simple-beacon-workshop.html>

本文範例程式的原始碼授權為 MIT License，如果有疑問可以透過 [Facebook](https://www.facebook.com/taichunmin) 跟我聊聊。
:::

這篇文章會需要你自行使用 Arduino 把程式燒錄到 esp32devkit 開發板之中，如果之前有參加過筆者在台中開的工作坊，相信要燒錄程式應該不是問題，如果不會燒錄需要燒錄教學的人也可以[點選我之前所寫的教學文章](https://taichunmin.idv.tw/blog/2020-07-13-line-simple-beacon-workshop.html)。

這次提供的程式碼做了一些新的改進以及嘗試，筆者將在接下來的文章一一說明。

## 支援 LINE Beacon 防偽機制

LINE Simple Beacon 沒有支援防偽機制，換句話說，只要複製藍牙廣播訊號後，就可以複製一顆 Simple Beacon，LINE 其實有提供另一版有防偽功能的 LINE Beacon，會去驗證藍牙所廣播的訊號內容，[詳細文件可以點此](https://developers.line.biz/zh-hant/docs/messaging-api/beacon-device-spec/)。

![](https://i.imgur.com/JO66YlB.png)

這種防偽版的 LINE Beacon 程式碼其實我很久之前就寫過了，只不過這種版本需要先跟 LINE 申請成為 LINE Bussiness 合作夥伴後才能拿到所需的設定值，所以我原本沒有打算把這份程式碼分享出來給大家，但是這次我想到了一個不用重新燒錄就能設定資料的方法，所以就特地把程式碼公開了！

## 工程模式讀寫設定免重燒

[在我之前的工作坊](https://taichunmin.idv.tw/blog/2020-07-13-line-simple-beacon-workshop.html)所分享的 Simple Beacon 原始碼中，如果需要更換 Simple Beacon 的 HWID，就需要拿回來重新燒錄程式，這對於放在外面的 Beacon 來說通常是一件勞師動眾的事情，這次改成八合一 LINE Beacon 以後，這個問題會更加嚴重！

我從公司專門寫嵌入式設備的同仁身上學到，他們通常都會幫嵌入式設備加上工程模式，因為在量產嵌入式設備時，通常會直接交給工廠處理，如果希望工廠在每次燒錄程式之前，都去程式碼修改這些設定值真的是一件強人所難的事情。

所幸我想到在之前研究 LINE Things 的時候，曾經玩過藍牙 4.0 BLE 的 GATT 協定。我可以讓 ESP32 支援 GATT 讀寫一個二進位的資料，來做到讀寫 LINE Beacon 裡面的設定值。

至於讀寫 LINE Beacon 的工具程式，由於我不會寫 APP，我想到可以使用 Chrome 所支援的 Web Bluetooth API，這可以允許我在 Windows、macOS 和 Android 上，透過 Chrome 開網頁來讀寫 LINE Beacon 的資料！

![](https://i.imgur.com/dayrHNN.jpg)

至於工程模式的權限控制問題，我想到 esp32devkit 這塊開發板上面有一個實體按鈕，我可以透過這顆按鈕來切換工程模式的開啟或關閉，在工程模式沒有開啟時，要禁止 Beacon 的資料被讀取或修改，這樣的方式應該就足夠了。

::: tip
* 我所製作的工程模式設定網頁: <https://taichunmin.idv.tw/pug/line-octobeacon.html>

本文範例程式的原始碼授權為 MIT License，如果有疑問可以透過 [Facebook](https://www.facebook.com/taichunmin) 跟我聊聊。
:::

## 八合一廣播訊號

接下來要討論 LINE Beacon 的廣播訊號問題，在 LINE Beacon 的規格文件上原本是要求每 150 ms 進行 LINE Beacon 和 iBeacon (iOS 專屬) 訊號的切換，但是這份程式我先嘗試寫成每 0.5 秒切換下一個 Beacon 訊號，並且讓 LINE Beacon 和 iBeacon 交錯，然後找了公司幾個同事 (包括 Android 和 iOS) 來測試，實測 8 個 Simple Beacon 都成功收到 Enter 訊息，於是就決定按照這個規則下去開發，並且把 timestamp 改成每 16 秒遞增一次。

![](https://i.imgur.com/U2yIodO.png)

至於實測 8 個 Simple Beacon 訊號的部份，我是直接開啟了一個 LINE 官方帳號，然後把 Webhook 設定給「Flex 開發人員工具」，詳細的設定方式可以點選[我之前所寫的教學文章](https://taichunmin.idv.tw/blog/2020-07-13-line-simple-beacon-workshop.html)，然後發行 8 個 Simple Beacon 的 HWID，透過網頁寫入到 ESP32 裡面。由於 Simple Beacon 沒有防偽資料，所以 timestamp、vendorkey、lotkey 這三個欄位都全部填 `0` 即可。

## 後記

距離上次我用 ESP32 製作 LINE Beacon 至少也超過一年，在這期間經歷了一些 LINE Beacon 的修改，我這次就有觀察到，收到 LINE Beacon 的 Enter 的時間點，跟之前有很明顯的差距，大概是因為 Beacon 現在移除了 Leave 訊息和多了 Stay 訊息的緣故吧。

另外這次的程式也是想要驗證公司同事提出的一個疑問，就是 LINE APP 到底會不會根據藍牙 MAC Address 來限制 LINE Beacon 只能發送一個 HWID，後來實測結果是現在沒有限制，但是以後會不會有就沒辦法掛保證了。
