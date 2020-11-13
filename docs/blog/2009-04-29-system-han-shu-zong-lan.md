---
title: system函數 - 總覽
date: 2009-04-29T20:19:00+08
tags:
  - CMD程式
---
# system函數 - 總覽

在 windows 系統上，C++ 的 system 函數就等同在 cmd 輸入指令，如果你對 cmd 的使用有所涉獵的話，就可以寫一些實用性較高的程式喔！我會陸續打出一些我曾經碰過的用法，若有錯誤請不吝指教，也希望大家分享一下自己的知識喔。

想要在 C++ 的程式碼裡使用 system 函式時，參數部分可以放入

\[ 1.字串常數 / 2.字元陣列名稱 / 3.字串指標的名稱 / 4.string 變數 \]。範例如下：

> 1.  system("pause");
> 
> 2.  char ca\[100\]="dir /s";
> 
>     system(ca);
> 
> 3.  char\* cb="cd /d c:\\\\";     //跳脫字元
> 
>     system(cb);
> 
> 4.  string sa="測試";
> 
>     sa="title "+sa;
> 
>     system(sa.c\_str());

注意：因為C++跳脫字元的規則，所以在遇到有('\\')、('"')...等字元的時候需額外加上反斜線('\\')。

以下為用法連結，這個方面我都是偶然接觸到的，請各位不吝指教。

> 1.[system函數 - pause (用途：暫停)](http://taichunmin.pixnet.net/blog/post/27827743)
> 
> 2.[system函數 - cls (用途：清空視窗)](http://taichunmin.pixnet.net/blog/post/27827742)
> 
> 3.system函數 - title (用途：更換視窗標題)
> 
> 4.system函數 - dir (用途：檢視檔案)
> 
> 5.system函數 - cd (用途：切換或查看路徑)
> 
> 6.system函數 - move (用途：移動檔案)
> 
> 7.system函數 - del (用途：刪除檔案)
> 
> 8.system函數 - ren (用途：重新命名)
> 
> 9.system函數 - md (用途：新建資料夾)
> 
> 10.system函數 - rd (用途：移除資料夾)
> 
> 11.system函數 - comp (用途：比較檔案)
> 
> 12.system函數 - start (用途：開啟或執行檔案)
> 
> 13.system函數 - 大於小於符號 (用途：由檔案輸入或輸出)

(等我文章打好再補上超連結)