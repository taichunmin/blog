---
title: 用SyntaxHighlighter在Blog做程式語法高亮度顯示
date: 2009-07-15T23:42:00+08
tags:
  - 其他資料
---
# 用SyntaxHighlighter在Blog做程式語法高亮度顯示

若存檔後再做編修，語法因為字元重組之後，  
就會有錯誤的狀況產生，加上不好排版，不好閱讀。  
  
還好有google到許多大大的Blog上都有用[syntaxhighlighter](http://code.google.com/p/syntaxhighlighter/)，  
順便整理一篇留著以後複製貼上用。  
在這先以JavaScript為例，步驟如下：  

1.  先放這一段，檔案請到[syntaxhighlighter下載](http://code.google.com/p/syntaxhighlighter/downloads/list)，  
    放到自己的主機，記得要修改路徑。  
    然後將此段語法放到Blog的自訂欄位，就不用每次都要貼。
    
    [view plain](http://blog.xuite.net/joy715/blog/13350414#)[copy to clipboard](http://blog.xuite.net/joy715/blog/13350414#)[print](http://blog.xuite.net/joy715/blog/13350414#)[?](http://blog.xuite.net/joy715/blog/13350414#)
    
    1.  <link type="text/css" rel="stylesheet" href="http://joy715.googlepages.com/SyntaxHighlighter.css"\></link> 
    2.  <script language="javascript" src="http://joy715.googlepages.com/shCore.js"\></script> 
    3.  <script language="javascript" src="http://joy715.googlepages.com/shBrushJScript.js"\></script> 
    4.  <script language="javascript" src="http://joy715.googlepages.com/shBrushXml.js"\></script> 
    
    ```js
    <link type="text/css" rel="stylesheet" href="http://joy715.googlepages.com/SyntaxHighlighter.css"></link>
    <script language="javascript" src="http://joy715.googlepages.com/shCore.js"></script>
    <script language="javascript" src="http://joy715.googlepages.com/shBrushJScript.js"></script>
    <script language="javascript" src="http://joy715.googlepages.com/shBrushXml.js"></script>
    ```
    
2.  這裡放您要顯示的JavaScript。
    
    [view plain](http://blog.xuite.net/joy715/blog/13350414#)[copy to clipboard](http://blog.xuite.net/joy715/blog/13350414#)[print](http://blog.xuite.net/joy715/blog/13350414#)[?](http://blog.xuite.net/joy715/blog/13350414#)
    
    1.  <textarea name="code" class\="javascript"\> 
    2.  <SCRIPT LANGUAGE="JavaScript"\> 
    
    4.  </SCRIPT> 
    5.  </textarea> 
    
    ```js
    <SCRIPT LANGUAGE="JavaScript">
    
    </SCRIPT>
    ```
    
3.  這裡放另一段，一定要放在要顯示的JavaScript之下。
    
    [view plain](http://blog.xuite.net/joy715/blog/13350414#)[copy to clipboard](http://blog.xuite.net/joy715/blog/13350414#)[print](http://blog.xuite.net/joy715/blog/13350414#)[?](http://blog.xuite.net/joy715/blog/13350414#)
    
    1.  <script language="javascript"\> 
    2.  dp.SyntaxHighlighter.ClipboardSwf = 'http://joy715.googlepages.com/clipboard.swf'; 
    3.  dp.SyntaxHighlighter.HighlightAll('code'); 
    4.  </script> 
    
    ```js
    <script language="javascript">
    dp.SyntaxHighlighter.ClipboardSwf = 'http://joy715.googlepages.com/clipboard.swf';
    dp.SyntaxHighlighter.HighlightAll('code');
    </script>
    ```
    
4.  若程式不只一段，只要貼2與3，把code改成code1，改兩個地方。  
    再增加一個就改成code2，以此類推，  
    記得要兩個code一起改，同一網頁內容name的名稱不能重複。
  
6.  補充[syntaxhighlighter支援程式語言列表](http://code.google.com/p/syntaxhighlighter/wiki/Languages)。  
    以使用C#為例，  
    要把1的shBrushJScript.js改成shBrushCSharp.js，class="javascript"改成class="c#"。