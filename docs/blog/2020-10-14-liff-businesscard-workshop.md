---
date: '2020-10-14T00:00:00+08'
title: LINE 數位版名片工作坊
description: 加入新朋友的 LINE 帳號以後，要傳數位版名片才夠潮，來工作坊教你現場製作！
image: https://i.imgur.com/nswDEvY.png
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

# LINE 數位版名片工作坊

::: tip 相關連結
* 開場投影片：<https://hackmd.io/@taichunmin/chatbot-tw-202010>
* 共筆：<https://hackmd.io/@chatbot-tw/chatbots-meetup-in-central-taiwan-010>
* 作者：戴均民 [(taichunmin)](https://taichunmin.idv.tw/)
:::

在你認識一個新朋友，並且加入對方的 LINE 帳號以後，應該要打招呼還是傳貼圖呢？都不對！要傳數位版名片才夠潮，讓對方點一下就能直接「打開網站」、「開地圖導航」、「撥電話」還有「傳電子郵件」！

在這工作坊內你將學會：

1. 透過講者的免費樣板網站製作數位版名片
2. 透過 Flex 訊息模擬器製作 LINE 數位版名片

## 目錄

[[TOC]]

## 透過講者的免費樣板網站製作名片

::: tip 數位版名片 免費樣版網站
<https://taichunmin.idv.tw/liff-businesscard/>
:::

在這個章節中，將會教你如何使用數位版名片。請先開啟上方連結，就能看到講者所提供的免費樣板清單，在此我們以「Chatbot 台灣開發者」這個名片樣板為例。

請按一下這個樣板下方的「點此建立名片」按鈕：

![](https://i.imgur.com/2arwiAS.png)

接下來就會開啟填寫資料的畫面（如圖 1-1），請填寫你想要顯示的「頭銜」和「暱稱」，填完以後請點一下「建立名片」按鈕，打開分享頁面（如圖 1-2）：

|                圖 1-1                |                圖 1-2                |
|:------------------------------------:|:------------------------------------:|
| ![](https://i.imgur.com/sRcKcCQ.png) | ![](https://i.imgur.com/KAhQtXB.png) |

在成功建立名片以後，接下來要教你如何分享名片給好友。

請點一下圖 1-2 的「分享好友」按鈕，你就能看到圖 1-3 的畫面。你也可以在圖 1-4 上方的輸入框中輸入好友的帳號搜尋：

|                圖 1-3                |                圖 1-4                |
|:------------------------------------:|:------------------------------------:|
| ![](https://i.imgur.com/2VLo9T7.png) | ![](https://i.imgur.com/pcox3VS.png) |

如果在這畫面中找不到好友的帳號，很有可能是好友沒有打開「外部應用程式存取」的權限（如圖 1-4 中間灰色文字），這時你也可以考慮點一下圖 1-2 中的「複製網址」按鈕，然後把網址貼到聊天視窗內（如圖 1-5），就可以按一下圖 1-2 的「直接傳送」按鈕來把名片傳送到聊天視窗內。傳送完成後，就可以在網址上長按來收回名片網址（如圖 1-6）。

|                圖 1-5                |                圖 1-6                |
|:------------------------------------:|:------------------------------------:|
| ![](https://i.imgur.com/Af8BnFM.png) | ![](https://i.imgur.com/dZLl980.png) |

為了讓你可以快速的分享名片，接下來會教你把名片網址儲存在 LINE Keep 中。

請前往 LINE 應用程式的「主頁」，然後點一下圖 1-7 右上方的 Keep 按鈕。在開啟 LINE Keep 畫面後，點一下圖 1-8 右上角的「+」按鈕：

|                圖 1-7                |                圖 1-8                |
|:------------------------------------:|:------------------------------------:|
| ![](https://i.imgur.com/n044iq2.png) | ![](https://i.imgur.com/3WYS4mP.png) |

因為名片分享網址上沒有辦法辨識名片，為了要能夠新增自己能看得懂的說明，我們可以新增文字到 LINE Keep 中。

接下來點一下圖 1-9 中的「文字」選項，然後輸入名片說明、貼上名片網址、並且選擇一個底色（如圖 1-10）：

|                圖 1-9                |               圖 1-10                |
|:------------------------------------:|:------------------------------------:|
| ![](https://i.imgur.com/y1CKloR.png) | ![](https://i.imgur.com/TQIcGiE.png) |

在儲存文字到 LINE Keep 後，就能夠很方便的辨識名片（如圖 1-11）以及分享給好友囉！如果你和我一樣有很多數位版名片，你也可以選擇把名片全部新增到特輯中（如圖 1-12）。

|               圖 1-11                |               圖 1-12                |
|:------------------------------------:|:------------------------------------:|
| ![](https://i.imgur.com/qp7RfX2.png) | ![](https://i.imgur.com/ygty7QH.png) |

## 製作範例名片並帶入自己的 CSV 資料

### 準備 CSV 資料

::: tip 相關連結
* [議程資料 CSV](https://taichunmin.idv.tw/liff-businesscard/csv/chatbot-tw-coscup-2020.csv): `https://taichunmin.idv.tw/liff-businesscard/csv/chatbot-tw-coscup-2020.csv`
:::

在上一個章節中，資料都是放在網址內，如果你幫公司同事製作名片後，需要更新名片裡面的資料（例如修改職稱），你就需要請你的同事更新名片的分享連結，如果改成準備一個 csv 檔案當作資料來源，你就能直接在 CSV 內更新資料，不用幫同事更新網址喔！

首先，請先把「議程資料 CSV」下載到電腦中，再來開啟一個新的 [Google 試算表](https://docs.google.com/spreadsheets/)，點一下「檔案」→「匯入」→「上傳」：

![](https://i.imgur.com/y0qrBrL.png)

選取剛剛下載的 CSV 檔案後，會出現匯入選項的視窗，請選擇「取代目前工作表」、「逗號」、「否」，然後點一下「匯入資料」按鈕：

<img src="https://i.imgur.com/gxtlhNy.png" style="width: 480px">

匯入完成以後，你應該會看到以下的資料內容，在 CSV 的第一行會被當成是變數名稱，所以需要遵守 JavaScript 的變數名稱規則 (中文字也能用)：

![](https://i.imgur.com/I5BRFeS.png)

接下來你可以嘗試修改 CSV 裡面的資料，修改完成後，點一下「檔案」→「下載」→「逗號分隔值檔案 (.csv，目前工作表)」來把資料匯出成 UTF-8 字元編碼的 CSV 檔案：

![](https://i.imgur.com/Q6vaH0C.png)

### 把 CSV 上傳到 GitHub Gist 上

::: tip 相關連結
* [GitHub](https://github.com/)
* [新增 GitHub Gist](https://gist.github.com/)
:::

CSV 檔案匯出以後，我們需要把這個 CSV 檔案放到網路上可以公開存取的地方，在此我們以 GitHub Gist 為例。請先前往 [GitHub](https://github.com/) 註冊一個帳號：

![](https://i.imgur.com/E11zsED.png)

註冊完成以後，請點一下[新增 GitHub Gist](https://gist.github.com/) 連結如下：

![](https://i.imgur.com/uQRbjl3.png)

然後把 CSV 檔案直接拖曳到 GitHub Gist 的網頁上面如下：

![](https://i.imgur.com/WdlJQ6s.png)

然後你就能看到 csv 的內容已經被填到網頁中了，接下來按一下下圖中的「Create secret gist」按鈕，來建立一個 GitHub Gist。

![](https://i.imgur.com/WXCRUaW.png)

接下來我們要取得這個 CSV 檔案的公開連結，請點一下 CSV 檔案右上方的「Raw」的按鈕：

![](https://i.imgur.com/n4gGPWW.png)

然後你應該就會看到如下圖的畫面，然後去複製網址列的網址即可。（不要直接對 Raw 按鈕按右鍵複製連結網址喔，那個連結不能用）

![](https://i.imgur.com/rHSNykM.png)

你複製下來的網址會長的像是下面的「修改前網址」，為了要讓 CSV 資料能夠自動抓到最新的內容，你需要把 `/raw/` 後面的那段 `{version-id}` 刪除：

* 修改前: `https://gist.githubusercontent.com/{username}/{gist-id}/raw/{version-id}/chatbot-tw-coscup-2020.csv`
* 修改後: `https://gist.githubusercontent.com/{username}/{gist-id}/raw/chatbot-tw-coscup-2020.csv`

恭喜你已經成功拿到一個公開的 CSV 網址啦！把這個網址先存下來，我們等等就會用到喔！

### 填寫 CSV 網址並製作範例名片

::: tip 相關連結
* [製作 CSV 名片](https://taichunmin.idv.tw/liff-businesscard/forms/csv.html)
* [COSCUP 議程名片樣板](https://taichunmin.idv.tw/liff-businesscard/cards/chatbot-tw-coscup-2020.txt): `https://taichunmin.idv.tw/liff-businesscard/cards/chatbot-tw-coscup-2020.txt`
:::

請打開上方的「製作名片網頁」連結，打開以後你應該會看到這個畫面：

![](https://i.imgur.com/rBKalmp.png)

在此來介紹一下這幾個欄位要填什麼資料。

* 名片樣板：這欄要填一個純文字檔案的網址，裡面是可以傳送到 LINE Message API 的訊息 JSON，這個下一個段落會詳細教學，在此我們使用預設值即可。
* CSV：這個欄位要填一個 CSV 檔案的網址，程式會讀取這個 CSV 檔案然後選出符合條件的那一筆資料，然後帶入名片樣板作為變數使用。
* 「比對欄位」和「比對資料」：這兩個欄位需要一起看，代表程式會從 CSV 第一筆開始往下尋找「指定的欄位」之中等於「指定資料」的那筆資料，在此就是找到 `id=1` 的那筆資料。你可以自由修改這兩欄的內容來找到 CSV 中你想要的那筆資料。

資料填寫完畢後，點一下「建立名片」按鈕，就可以成功建立名片啦！

## 製作客製化名片樣版

這一個部份的練習會需要比較多的程式基礎，如果不是程式背景出身的可以快速看過就好。

### 客製化 Flex 訊息

::: tip 相關連結
* [Flex 訊息官方文件](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/)
* [Flex 訊息模擬器](https://developers.line.biz/flex-simulator/)
:::

LINE 所支援的 Flex 訊息可以做出千變萬化的版面，但由於每個人的設計都不盡相同，而且 LINE 也很常會改版更新，所以如果你想要製作更客製化的名片樣板，建議你可以直接去參考[官方文件](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/)或直接使用 LINE 提供的 [Flex 訊息模擬器](https://developers.line.biz/flex-simulator/) 來製作，在這篇教學中不會涉略到這個部分。

<img src="https://i.imgur.com/eZSX3yP.png" style="width: 480px">

### 改善使用者體驗

::: tip 相關連結
* [Google Maps 網址文件](https://developers.google.com/maps/documentation/urls/guide)
:::

數位版名片跟紙本最不一樣的地方就是，可以放超連結！我們可以在合適的地方放上相對應的超連結，以增加使用者體驗：

1. 公司名稱放上官網連結，如果要強制外部瀏覽器開啟可以多加上 `?openExternalBrowser=1` 參數。
2. 手機放上可以直接撥打手機的超連結：`tel:0900000000`
3. 公司電話如果有分機，可以在超連結上用逗號代表分機號碼：`tel:04-23692699,000`
4. 電子郵件加上可以直接寄信的超連結：`mailto:admin@example.com`
5. 公司地址加上 Google Maps 的超連結，[請點此查看詳細文件](https://developers.google.com/maps/documentation/urls/guide)，並加上 `?openExternalBrowser=1` 強制使用外部瀏覽器開啟。

### 將資料填到 CSV 中

假設我們今天要做的名片樣板，就是這個預設開啟 [Flex 訊息模擬器](https://developers.line.biz/flex-simulator/)時會顯示的「Restaurant」範例，接下來我們需要把卡片中的欄位建立到一個 CSV 中。

![](https://i.imgur.com/uLqsZ6z.png)

這張卡片有的欄位有「圖片 `image`」、「圖片比例 `image_ratio`」、「名稱 `name`」、「評等 `rating`」、「位置 `place`」、「營業時間 `time`」、「電話 `tel`」、「網站 `website`」。另外，建議多加一個額外的「資料編號 `id`」以便用來指定是哪一筆資料。

照前一個章節的步驟，建立一個新的 Google Sheets 來填上這些資料：

```
id,name,image,image_ratio,rating,place,time,tel,website
1,Brown Cafe,https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png,20:13,4.0,"Miraina Tower, 4-1-6 Shinjuku, Tokyo",10:00 - 23:00,https://linecorp.com,https://linecorp.com
```

### 將資料使用變數替換

::: tip 相關連結
* 完整範例：[card1](https://gist.github.com/taichunmin/ce55953ba0199052cd6e871b61b60cdb)、[card2](https://gist.github.com/taichunmin/6b8138bca07224dc560ca7711dbe3797)
* [Lodash 的 `_.template` 函式](https://lodash.com/docs/4.17.15#template)
* [JSON5 的語法](https://json5.org/)
:::

CSV 製作完成後，我們就要把樣板中的資料使用變數替換掉。

<img src="https://i.imgur.com/sSHSEUa.png" style="width: 480px">

在把資料更換成變數的時候，有幾個需要注意的地方：

1. 程式第一步會使用 [Lodash 的 `_.template` 函式](https://lodash.com/docs/4.17.15#template)來處理樣板中的變數，語法很類似 [ES6 的 Template Literals 語法](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Template_literals)，所以你必須使用這個函式所支援的語法。
2. 程式會額外將 [`_` (Lodash)](https://lodash.com/docs/)、[`Qs`](https://github.com/ljharb/qs)、[`CryptoJS`](https://cryptojs.gitbook.io/docs/)、[`dayjs`](https://github.com/iamkun/dayjs) 函式庫放到名片樣板的環境變數中，所以你也能在名片樣板中使用這幾個函式庫。
3. 名片樣板在經過 `_.template` 函式處理過後，會使用 `JSON5.parse` 解析，所以你可以放心使用 [JSON5 的語法](https://json5.org/)！
4. 程式會將 CSV 檔案中的第一行視為變數名稱，然後將資料放到 `vcard` 變數中，所以如果你需要把 `name` 欄位寫到變數中，你就要寫 `${vcard.name}` 在 Flex 訊息的文字內容中，其他欄位依此類推：

```json
{
  "type": "text",
  "text": "${vcard.name}"
}
```

### 透過 JS 的函式讓樣板更彈性

::: tip 相關連結
* 完整範例：[card3](https://gist.github.com/taichunmin/fd6c330f77c611d31558ccba1c9c6f21)
:::

這個 `_.template` 函式也支援 JS 函式與運算式，為了要處理這個樣板中的星星，我們可以在樣板中透過 JS 函式來實現這功能：

```javascript
<%
function imgStar (isGold) {
  return `https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_${isGold ? 'gold' : 'gray'}_star_28.png`
}
%>
{
  "size": "sm",
  "type": "icon",
  "url": "${imgStar(vcard.rating > 0)}"
}
```

## 原始碼與相關連結

::: tip
本文範例程式的原始碼授權為 MIT License，若您有任何疑惑，你可以直接舉手發問或是透過 [Facebook](https://www.facebook.com/taichunmin) 與我聯繫。
:::

* [免費樣版網站 - LINE 數位版名片](https://taichunmin.idv.tw/liff-businesscard/)
* [原始碼 - LINE 數位版名片](https://github.com/taichunmin/liff-businesscard)
* [看起來很專業的 LINE 數位版名片](https://taichunmin.idv.tw/blog/2020-07-12-liff-businesscard.html)
* [不用寫程式也能做 LINE 數位版名片](https://taichunmin.idv.tw/blog/2020-07-21-liff-businesscard.html)
* [免費製作電子傳單 (多頁訊息) - LINE 數位版名片](https://taichunmin.idv.tw/blog/2021-07-09-line-card-create-carousel-1.html)
