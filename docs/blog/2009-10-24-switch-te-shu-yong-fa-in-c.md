---
title: switch 特殊用法 in C++！
date: 2009-10-24T00:57:00+08
tags:
  - CMD程式
---
# switch 特殊用法 in C++！

今天在寫程式設計的題目時  
題目問是否可以用switch來表示一段範圍  
就好奇的上網查查看  
結果就是挖到寶啦：）  
原來還有這種寫法阿？！  
以前都沒學過xd  
  

```cpp
如果您比對的是一個數值範圍，在gcc的C++編譯器中還允許這樣的比對方式：
代碼:
switch(i) {
case 1 ... 30:
// statements
case 31 ... 1000:
// statements
default:
// statements
}

如上所示範的，我們可以使用...來比對一個範圍的數值，而不用連續的撰寫case來比對。
```