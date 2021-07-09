---
date: "2020-07-12T00:00:00+08"
title: 看起來很專業的 LINE 數位版名片
description: 可以用這種方式來幫公司做名片，讓公司的同事都可以有看起來很強大很專業的 LINE 數位版名片！
image: https://i.imgur.com/PqLcIKj.png
tags:
  - 電子名片
  - LINE
  - LIFF
  - businesscard
meta:
  - property: og:image:width
    content: 1200
  - property: og:image:height
    content: 630
---

# 看起來很專業的 LINE 數位版名片

有一天看到有人做了 Kotlin 讀書會的宣傳並分享到 LINE 的 chatbot 相關群組內，於是我就靈機一動，因為台灣用 LINE 的人實在是很多，所以可以用這種方式來幫公司做名片，讓公司的同事都可以有看起來很強大很專業的 LINE 數位版名片！

::: warning
因時空環境變遷，本文僅作為歷史留存之用，本文中的範例程式可能無法正常運作，建議您可以參閱以下同系列的文章，或者您也可以直接透過 [Facebook](https://facebook.com/taichunmin) 直接跟我聯繫。

1. [「不用寫程式也能做 LINE 數位版名片」](https://taichunmin.idv.tw/blog/2020-07-21-liff-businesscard.html)
1. [「LINE 數位版名片工作坊」](https://taichunmin.idv.tw/blog/2020-10-14-liff-businesscard-workshop.html)
:::

## 準備名片的資料

為了要讓同一個名片樣板給不同同事使用，所以要準備一個 csv 檔案當作資料來源： (在本文範例中把這個 csv 放在 GitHub Gist 上面)

![](https://i.imgur.com/jLSOm4o.png)

> 取得 GitHub Gist 的 Raw 網址 (右上角「Raw」按鈕) 時，請記得把網址內的版本參數 `VERSION_ID` 刪除，也就是將 `https://gist.githubusercontent.com/taichunmin/{GIST_ID}/raw/{VERSION_ID}/microprogram.csv` 改成 `https://gist.githubusercontent.com/taichunmin/{GIST_ID}/raw/microprogram.csv` 就行了。

在準備這份名單的時候，有幾個需要注意的地方：

1. 在 CSV 的第一行會被當成是變數名稱，所以需要遵守 JavaScript 的變數名稱規則 (中文字沒問題)。
2. 程式要求一定要有一個欄位名為 uuid，因為程式需要用 uuid 作為判斷依據，而且如果你想要追蹤有多少人看過你的名片，也能用 uuid 來辨識是誰的名片被看過！

> CSV 的範例請點選文章底下的範例網址。

## 製作名片樣板

直接使用 LINE 提供的 [Flex Message Simulator](https://developers.line.biz/flex-simulator/) 來製作名片：

<img src="https://i.imgur.com/eZSX3yP.png" style="width: 480px">

製作完成以後，就要來把相關的資料欄位換成變數：

<img src="https://i.imgur.com/sSHSEUa.png" style="width: 480px">

在把資料更換成變數的時候，有幾個需要注意的地方：

1. 程式第一步會使用 [Lodash 的 `_.template` 函式](https://lodash.com/docs/4.17.15#template) 來處理變數，所以你必須使用這個函式所支援的語法。
2. 程式會額外將 [`_` (Lodash)](https://lodash.com/docs/) 以及 [`Qs`](https://github.com/ljharb/qs) 函式庫放到名片樣板的環境變數中，所以你也能在名片樣板中使用這兩個函式庫。
3. 名片樣板在經過 `_.template` 函式處理過後，會使用 `JSON5.parse` 解析，所以你可以放心使用 [JSON5 的語法](https://json5.org/)喔！
4. 程式會讀取 CSV 網址中的資料，然後找出相同的 `uuid`，並將筆資料放到 `vcard` 這個環境變數中，所以如果你要取得 CSV 網址中的 `uuid` 欄位，你需要輸入 `${vcard.uuid}`，其他欄位依此類推。

## 改善使用者體驗

數位版名片跟紙本最不一樣的地方就是，可以放超連結！我們可以在合適的地方放上相對應的超連結，以增加使用者體驗：

1. 公司名稱放上官網連結，如果要強制外部瀏覽器開啟可以多加上 `?openExternalBrowser=1` 參數。
2. 手機放上可以直接撥打手機的超連結：`tel:0900000000`
3. 公司電話如果有分機，可以在超連結上用逗號代表分機號碼：`tel:04-23692699,000`
4. 電子郵件加上可以直接寄信的超連結：`mailto:admin@example.com`
5. 公司地址加上 Google Maps 的超連結，[請點此查看詳細文件](https://developers.google.com/maps/documentation/urls/guide)，並加上 `?openExternalBrowser=1` 強制使用外部瀏覽器開啟。

## 產生可以分享名片的連結

在準備好了 CSV 資料和名片樣板以後，接下來我們就是要把這幾個東西組合起來，讓同事可以用一個網址來開啟 LIFF，並透過 LINE 來傳送數位版名片給好友囉！

請開啟這個 [數位版名片 LIFF 網頁程式](https://taichunmin.idv.tw/pug/liff-businesscard.html)：

![](https://i.imgur.com/jdvdxu7.png)

然後填上 CSV 資料以及名片樣板的網址，並且填上 CSV 資料中其中一筆資料的 `uuid`。

UUID 這個欄位是用來決定要使用哪一筆名片資料，這讓你只需要更換 UUID 就能指定帶入不同的名片資料喔。

> 如果你 CSV 資料以及名片樣板的網址遇到 [CORS 的問題](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS) (如 GitHub Gist 以及 Google Sheets CSV)，可以嘗試在前面直接加上 `https://cors-anywhere.herokuapp.com/` 來繞過這個限制。

## 分享名片給 LINE 好友

把三個欄位的資料都填完，並且測試過以後，就可以把網址複製給同事使用啦：

<img src="https://i.imgur.com/syZ2sZ3.jpg" style="width: 480px">

假設沒有錯誤發生的話，當對方打開連結，就會看到兩個按鈕可以選擇，一個是「選擇分享對象」，另一個是「傳送到目前聊天視窗」。這兩個網址所需要的權限不同，所以需要視情況使用。

<img src="https://i.imgur.com/pTURnWX.jpg" style="width: 480px">

「選擇分享對象」這個按鈕能夠一次分享名片給許多好友，但是他沒辦法傳送給社群 (OpenChat)，而且如果好友沒有給予「外部應用程式存取」權限的話，也沒辦法傳送給對方。

<img src="https://i.imgur.com/vl94CHp.jpg" style="width: 480px">

「傳送到目前聊天視窗」則是可以把名片傳送到目前的聊天視窗，換句話說，你需要先把連結貼到聊天視窗內，然後才能打開網址送出名片，這可以用來突破 OpenChat 以及好友沒有「外部應用程式存取」權限的問題，但是如果你不希望別人拿到網址，就要記得趕快把訊息收回喔！

<img src="https://i.imgur.com/bZS9V2y.jpg" style="width: 480px">

> 如果要分享資料到社群 (OpenChat)，訊息裡面還是不能帶有任何個人資訊喔，不然訊息還是會被刪除。

通常我把名片連結給同事以後，還會順便提醒對方記得把連結放到 LINE Keep 中，以便隨時可以分享名片喔！

## 如何追蹤有多少裝置看過？

因為我們的名片可以使用 Flex 訊息格式來製作，所以也可以用[我寫過的 Google Analytics 文章](https://taichunmin.idv.tw/blog/2020-06-17-linebot-google-analytics.html)來追蹤到底有多少人看過你的名片，由於使用 GA 的 Measurement Protocol，所以需要一個 uuid 當作裝置 ID，在此建議直接使用 CSV 欄位中的 UUID 來當作裝置 ID，由於 LINE 會幫圖片進行快取，所以我們只要看瀏覽次數就能知道到底有多少裝置看過名片喔！

![](https://i.imgur.com/mZyF9z6.png)

我們可以在名片樣板的最上面使用 `<% %>` 來定義一個函式：

```js
function gaScreenView (vcard) {
  return `https://www.google-analytics.com/collect?${Qs.stringify({
    an: 'LINE 數位版名片',
    cd: `微程式一般版-2020/07/12-${vcard.mobile}`, // 畫面名稱，在此用來紀錄數位版名片的版本
    cid: vcard.uuid, // uuid
    ds: 'app', // 資料來源，填寫為 app
    t: 'screenview',
    tid: 'UA-xxxxxxxx-1', // GA 追蹤代碼
    ul: 'zh-tw', // locale
    v: 1, // api version
  })}`
}
```

並且在名片樣板中，使用一個 `1x1` 的透明圖來隱藏追蹤連結：

```json
{
  "height": "1px",
  "layout": "vertical",
  "offsetStart": "0px",
  "offsetTop": "0px",
  "position": "absolute",
  "type": "box",
  "width": "1px",
  "contents": [
    {
      "aspectMode": "fit",
      "aspectRatio": "1:1",
      "size": "full",
      "type": "image",
      "url": "${gaScreenView(vcard)}"
    }
  ]
}
```

你可以看底下的微程式數位版名片範例來看到底要怎麼寫喔！

## 原始碼與相關連結

::: tip
本文範例程式的原始碼授權為 MIT License。
:::

* 程式及原始碼
  * [免費樣版網站 - LINE 數位版名片](https://taichunmin.idv.tw/liff-businesscard/)
  * [原始碼 - LINE 數位版名片](https://github.com/taichunmin/liff-businesscard)
  * [微程式數位版名片範例 (CSV 及名片樣板)](https://gist.githubusercontent.com/taichunmin/e6123d3ece7c8c88c6064fb9a69857bf)
  * [不用寫程式也能做 LINE 數位版名片](https://taichunmin.idv.tw/blog/2020-07-21-liff-businesscard.html)
  * [LINE 數位版名片工作坊](https://taichunmin.idv.tw/blog/2020-10-14-liff-businesscard-workshop.html)
  * [免費製作電子傳單 (多頁訊息) - LINE 數位版名片](https://taichunmin.idv.tw/blog/2021-07-09-line-card-create-carousel-1.html)
* 相關連結
  * [跨來源資源共用（CORS）](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS)
  * [Flex Message Simulator 工具](https://developers.line.biz/flex-simulator/)
  * [Google Maps Universal cross-platform URL](https://developers.google.com/maps/documentation/urls/guide)
  * [JSON5 的語法文件](https://json5.org/)
  * [Lodash 函式庫文件](https://lodash.com/docs/)
  * [Qs 函式庫文件](https://github.com/ljharb/qs)
  * [shareTargetPicker 文件](https://developers.line.biz/en/reference/liff/#share-target-picker)
