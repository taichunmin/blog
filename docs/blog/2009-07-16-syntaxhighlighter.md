---
title: SyntaxHighlighter
date: 2009-07-16T09:18:00+08
tags:
  - 其他資料
---
# SyntaxHighlighter

前就有看過講解SyntaxHighlighter的文章，  
這對於想在部落格上面放程式碼的我，  
是的不錯的javascript程式。  
只是，就是找不到好用的網路空間，  
可以讓我放置這些js檔...  
前幾天，我突然靈光一現，  
把歪腦筋動到了Zerojudge上，  
因為Zerojudge也是用這個程式碼來顯示的。  
當然，想到之後就馬上去做啦！  
SyntaxHighlighter是用以下程式碼引入所有的js檔，  
所以我就用PIXNET管理後台的側邊欄位設定，  
在亂貼小站公告欄裡加入了這段程式碼：

<link type="text/css" rel="stylesheet" href="http://zerojudge.tw/jscripts/dp.SyntaxHighlighter/Styles/SyntaxHighlighter.css"></link>  
<script language="javascript" src="http://zerojudge.tw/jscripts/dp.SyntaxHighlighter/Scripts/shCore.js"></script>  
<script language="javascript" src="http://zerojudge.tw/jscripts/dp.SyntaxHighlighter/Scripts/shBrushCSharp.js"></script>  
<script language="javascript" src="http://zerojudge.tw/jscripts/dp.SyntaxHighlighter/Scripts/shBrushCpp.js"></script>  
<script language="javascript" src="http://zerojudge.tw/jscripts/dp.SyntaxHighlighter/Scripts/shBrushDelphi.js"></script>  
<script language="javascript" src="http://zerojudge.tw/jscripts/dp.SyntaxHighlighter/Scripts/shBrushJava.js"></script>  
<script language="javascript" src="http://zerojudge.tw/jscripts/dp.SyntaxHighlighter/Scripts/shBrushXml.js"></script>

然後，以後只要想加程式碼，  
只需要以html方式貼上以下這段程式碼就好了。

// 這個標籤處可以加上其他文字  
<p>  
<textarea name="code980715" class="C++">  
// 這個標籤處請貼上程式碼  
// 然後請更改上面的name  
// 最後請將class更改成你欲顯示的語言  
</textarea>  
</p>  
// 這個標籤處可以加上其他文字  
<p>  
<script type="text/javascript"></script>  
</p>