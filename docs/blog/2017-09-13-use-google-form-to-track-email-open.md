---
date: "2017-09-13 15:48"
categories: Tutorial
tags: [Google, Form, Tutorial]
---
# 使用 Google 表單來追蹤電子郵件開啟

## 開一個新的 Google 表單

1. 新增試算表
2. 建立表單
3. 建立好欄位 （如：信件標題、電子郵件）
4. 確認把表單設定成不需登入即可填寫

## 取得預先填入的連結

1. 表單右上的 **更多選項**
2. 選取 **取得預先填入的連結**
3. 隨便填入資料
4. 取得網址如下

```
https://docs.google.com/a/program.com.tw/forms/d/e/1FAIpQLScNQoGD721EOtMhAyP2GE5lsqfDGIueAngYfp1DkSsDX3sDeg/viewform?usp=pp_url&entry.78754924=%E6%B8%AC%E8%A9%A6&entry.572144534=test@example.com
```

5. 將網址中的 `viewform` 換成 `formResponse`

```
https://docs.google.com/a/program.com.tw/forms/d/e/1FAIpQLScNQoGD721EOtMhAyP2GE5lsqfDGIueAngYfp1DkSsDX3sDeg/formResponse?usp=pp_url&entry.78754924=%E6%B8%AC%E8%A9%A6&entry.572144534=test@example.com
```

## 將連結放入電子郵件

```html
<img src="https://docs.google.com/a/program.com.tw/forms/d/e/1FAIpQLScNQoGD721EOtMhAyP2GE5lsqfDGIueAngYfp1DkSsDX3sDeg/formResponse?usp=pp_url&entry.78754924=%E6%B8%AC%E8%A9%A6&entry.572144534=test@example.com">
```

* 將後面的欄位內容使用資料替換 (建議使用程式帶入收件者的電子郵件以及郵件標題)
