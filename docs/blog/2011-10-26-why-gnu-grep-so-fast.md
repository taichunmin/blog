---
date: "2011-10-26 20:14"
categories: Reprint
---
# 好文: 為什麼 GNU grep 這麼快

資料取自：<http://blog.longwin.com.tw/2011/10/paper-gnu-grep-fast-2011/>  

Linux shell 常常會用到 grep, 為何 grep 可以那麼快的找到我們要的資料?
這篇文章有清楚的說明: [為什麼 GNU grep 這麼快](http://heikezhi.com/2011/08/18/why-gnu-grep-is-fast/) (下述摘錄自此文), 詳細討論原文: [why GNU grep is fast](http://lists.freebsd.org/pipermail/freebsd-current/2010-August/019310.html)  

為什麼 GNU grep 這麼快? GNU grep 有使用下述技巧:  

* 技巧1： GNU grep之所以快是因為它並不會去“檢查”輸入中的每一個位元組
* 技巧2： GNU grep之所以快是因為它只對每個它要檢查的位元組執行非常少的操作
* GNU grep使用了非常著名的 Boyer-Moore 演算法，它會從目標字元串的最後一個字元開始查找，並且配合一個查找表，它可以在發現一個不匹配字元之後，計算出應該跳過後續輸入中的多少個字元並繼續查找
