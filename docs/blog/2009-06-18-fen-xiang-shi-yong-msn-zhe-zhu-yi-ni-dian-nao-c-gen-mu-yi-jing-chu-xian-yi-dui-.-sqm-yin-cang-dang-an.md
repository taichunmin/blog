---
title: "[分享] 使用MSN者注意! 你電腦C:\\ 根目已經出現一堆 .sqm 隱藏檔案"
date: 2009-06-18T14:15:00+08
tags:
  - 其他資料
---
# [分享] 使用MSN者注意! 你電腦C:\ 根目已經出現一堆 .sqm 隱藏檔案

轉自：<http://tw.myblog.yahoo.com/onlyone59420/article?mid=49710&next=49590&l=f&fid=38>

  
**Windows Live Messenger客戶經驗改進計畫**  
在C:\\目錄一直會自動增加 sqmdata00.sqm這不明隱藏檔案的數量,檔案大小約1KB  
例如：sqmdata??.sqm 或 sqmnoopt??.sqm  
上網查詢後發現原來這些都是即時通訊軟體 Windows Live Messenger客戶經驗改善計畫的產物...  
  
  
**如何檢視 .sqm類型檔案**  
Widows XP的預設是「不顯示隱藏的檔案和資料夾」，若想解除隱藏，  
在工具＞資料夾選項＞檢視內，將「顯示所有檔案和資料夾」打勾即可。  
  
  
  
**請問是 .sqm何類型檔案(會是病毒的一種嗎?)**  
.sqm(讀作 skwim) 是微軟在內部稱為 service quality monitoring (或者 software quality mertics)，亦即「客戶經驗改進計畫(Microsoft Customer Experience Improvement Program)」的內容專門用來監視及收集WLM資料當WLM有錯誤、不正常關閉等等問題發生，都會記錄在這些檔中然後會回報發送給微軟，讓他們可以針對這些回報的錯誤進行修改更新WLM  
也就是說如果你有點選客戶經驗改進計劃 就會自動產生這些檔案，以做為有錯誤時自動回報

  
  
  
**要避免以後繼續產生這些 .sqm 檔案**  
可以經由以下兩個步驟在 Windows Live Messenger 做設定：  
工具 > 選項 > 一般頁面 > 不要勾選「品質提升」  
說明 > 客戶經驗改進計畫 > 勾選「目前沒有意願」  
  
至於 C:\\ 目錄底下的 .sqm 檔案則可以全數刪除...  
  
「C:\\Documents and Settings\\使用者名稱\\Application Data\\Microsoft\\MSN Messenger\\亂數」內也有Windows Live Messenger自動生成的SQM檔，可手動刪除了。
