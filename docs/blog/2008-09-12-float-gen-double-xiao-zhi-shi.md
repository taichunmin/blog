---
title: float跟double小知識
date: 2008-09-12T14:37:00+08
tags:
  - CMD程式
---
# float跟double小知識

C++語言的浮點數表示法有  
單倍精確度float與雙倍精確度double兩種，  
此兩種是由IEEE 754來規範的。  
其中雙倍精確度會比單倍精確度來的精準，  
單倍精確度可表示的範圍在(重要:不是 2^32-1變化!)  
1.2\*10的-38次方到3.4\*10的38次方  
雙倍精確度可表示的範圍在(不是2^64-1變化)  
2.2\*10的-308次方到1.8\*10的308次方  
\->2^32-1變化來表達數那只適用於"整數!"  
  
IEEE 754則是把浮點數分成三個部份:  
Sign/Exponent/Significand  
1.Sign bits:用來表示該浮點數是正or負  
(float:1 bit/double:1 bit)  
2.Exponent:用來表示該浮點數正規化後的"次方數"  
(float:8 bits/double:11 bits)  
\[Note\]:正規化:讓所有的實數表示成1.xxxx\*10的n次方  
例如:20.0正規化後會變成2.0\*10的1次方  
3.Significand:用來儲存小數位數(二進位後)!  
(float:23bits/double:52bits)  
所以使用雙倍精確度的程式乙會叫來的精確!   
  
想知的更詳細的IEEE 754規範可以看這兩個參考資料  
<http://twins.ee.nctu.edu.tw/~tjlin/courses/co01/IEEE754.pdf>  
<http://www.cs.berkeley.edu/~wkahan/ieee754status/IEEE754.PDF>
