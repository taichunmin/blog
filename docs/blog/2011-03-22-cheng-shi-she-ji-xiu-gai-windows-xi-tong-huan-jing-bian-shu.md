---
title: "[程式設計] 修改Windows系統環境變數"
date: 2011-03-22T17:12:00+08
tags:
  - 其他資料
---
# [程式設計] 修改Windows系統環境變數

文章引用自<http://demonchang.blogspot.com/2007/08/modify-system-environment-variables-on.html>

因為前一陣子某個案子需要，上網找了一些修改Windows系統環境變數的方法，不知道有沒有別人會需要用到，所以就寫在這邊順便當作自己的筆記好了。

修改Windows系統環境有很多種作法，如下：

1.  最簡單也最直接的就是利用Windows自己本身的修改方式，在桌面的"我的電腦(My Computer)"上按滑鼠右鍵→"內容(Properties)"→選擇"進階(Advanced)"的Tab→點下"環境變數(Environment Variables)"的按鈕，再找到自己要修改的環境變數上，點滑鼠左鍵兩下就可以修改了。(以上為XP使用，但其他的系統也差不多)
2.  利用Windows內建的GUI程式修改，點下左下角的"開始(Start)"→"執行(Run)"，輸入"msconfig"，就可以利用msconfig進行修改。
3.  利用安裝程式來進行系統環境變數的修改，可用InstallShield此類的程式來做到。
4.  利用batch file的執行方式來修改系統環境變數，因為這就是我所選擇的方式，所以接下來會稍微介紹如何使用batch file來修改環境變數。

以往我們在利用batch file設定環境變數的時候，通常是用set這個指令來做設定，語法如下：

`set 變數名稱=變數內容`

但是用set所修改的環境變數內容效用範圍僅止於執行程式的DOS視窗，其他重新開啟的DOS視窗都沒有辦法取得此修改後的變數內容，更不用說其他的程式了。所以如果要永久的變更系統環境變數的話，那就只能透過修改註冊表(registry)的參數內容了。要修改的地方就是在\[HKEY\_LOCAL\_MACHINE\\SYSTEM\\ControlSet001\\Control\\Session Manager\\Environment\]之下，有各個變數的名稱及對應的內容，只要對內容進行修改，就可以達到永久修改變數內容的結果。

但是並不是所有的Windows系統都可以利用這樣的方式來修改環境變數，但是此種做法僅能使用於Win NT系統，對於早期的Win 98/95並不適用。雖然現在M$早就已經不再支援Win98，甚至連Win 2000明年都不再支援更新，可是因為我們就是有客戶在使用Win98，所以我們也只好想辦法找出在Win 98修改環境變數的方式。

為什麼說Win 98並不支援這樣的作法呢？因為Win 98並不像Win NT一樣，有將環境變數寫在registry裡面，Win 98的作法是在系統每次啟動的時候，都去run Autoexec.bat這個檔案，然後環境變數就寫在這個檔案裡面。本來的想法是去修改這個Autoexec.bat，不過後來找到比較好的作法，就是利用Win 98 Resource Kit裡面的一個小工具 - winset.exe，它的功用就是用來達到永久修改環境變數的目的，使用的指令跟原本的set完全一樣，也就是

`winset 變數名稱=變數內容`

以上就是在Windows平台上修改環境變數的作法，有需要的人可以自己參考看看。
