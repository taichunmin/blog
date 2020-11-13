---
title: 解決Firefox視窗下方出現紅字「＜menuitem」的問題
date: 2009-09-12T00:02:00+08
tags:
  - 其他資料
---
# 解決Firefox視窗下方出現紅字「＜menuitem」的問題

本文轉自重灌狂人 <http://briian.com/?p=2849>

最近朋友的Firefox視窗下面出現一個很奇怪的錯誤畫面，視窗下方出現一大塊空白，還有兩行紅字，寫「＜menuitem」這樣，相信網路上一堆人也都遇到這問題了吧 ？

![2007-09-11-00-41-56](http://orzhd.com/briian/2007/09/2007-09-11-00-41-56.png)

剛好我最近都用Opera，就沒遇到這狀況，聽說這東西是因為Java虛擬機器的程式更新所造成的BUG，我也不太知道是啥狀況，後來從黑米上看到一個程式可以解決這問題，順便紀錄一下，給也遇到同樣問題的網友修補一下。

## **修補方法：**

> 1.下載「[這個](http://www.box.net/shared/static/xqqldinjly.exe)」檔案。  
> 2.關閉Firefxo  
> 3.執行「firefox\_menuitem\_fix.exe」檔案。  
> 4.完成。

感謝「[阿榮技術學院](http://azo-edu.blogspot.com/2007/09/firefox-menuitem.html)」網站的站展提供此一修補程式，原文在[這邊](http://azo-edu.blogspot.com/2007/09/firefox-menuitem.html)。

這程式主要是將一個名為「**chrome.manifest**」的檔案複製到下面資料夾中：

> C:\\Program Files\\Mozilla Firefox\\extensions\\  
> {CAFEEFAC-0016-0000-0001-ABCDEFFEDCBA}

**「chrome.manifest」檔案裡面的內容為：**

> content    javaconsole1.6.0\_01    chrome/content/ffjcext/  
> overlay    chrome://browser/content/browser.xul    chrome://javaconsole1.6.0\_01/content/ffjcext.xul  
> locale        javaconsole1.6.0\_01    en-US    chrome/locale/en-US/ffjcext/  
> locale        javaconsole1.6.0\_01    de-DE    chrome/locale/de-DE/ffjcext/  
> locale        javaconsole1.6.0\_01    es-ES    chrome/locale/es-ES/ffjcext/  
> locale        javaconsole1.6.0\_01    fr-FR    chrome/locale/fr-FR/ffjcext/  
> locale        javaconsole1.6.0\_01    it-IT    chrome/locale/it-IT/ffjcext/  
> locale        javaconsole1.6.0\_01    ja-JP    chrome/locale/ja-JP/ffjcext/  
> locale        javaconsole1.6.0\_01    ko-KR    chrome/locale/ko-KR/ffjcext/  
> locale        javaconsole1.6.0\_01    sv-SE    chrome/locale/sv-SE/ffjcext/  
> locale        javaconsole1.6.0\_01    zh-CN    chrome/locale/zh-CN/ffjcext/  
> locale        javaconsole1.6.0\_01    zh-TW    chrome/locale/zh-TW/ffjcext/

不知道是啥意思，只知道跟Java虛擬機器有關就是了，也遇到一樣狀況的人，可以試試看。
