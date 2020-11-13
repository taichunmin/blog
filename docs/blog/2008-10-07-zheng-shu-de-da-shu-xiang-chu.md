---
title: 整數的大數相除
date: 2008-10-07T11:31:00+08
tags:
  - CMD程式
---
# 整數的大數相除

 **![](http://creativecommons.org.tw/files/icon_by.gif)　姓名標示**、 **![](http://creativecommons.org.tw/files/icon_nc.gif)　非商業性**、

/\*  
它的使用方法呢  
就是隨便找一個C++的編譯程式(例如Dev-C++)  
編譯完成之後  
在出來的程式框框內  
直接打進兩個你要除的數就行了  
(打完一個數字就要按 Enter 喔)  
\*/

#include  
#define LENGTH 10000  
//你可以改變上面的數字來修改程式處理的位數  
//數字越小程式越快  
using namespace std;

int main()  
{  
  char ca\[LENGTH\],cb\[LENGTH\],cc\[LENGTH\];  
  int la,lb,lc;  
  while(cin>>ca>>cb)  
  {  
    la=strlen(ca);  
    lb=strlen(cb);  
     
    bool bb=false;  
    for(int i=0;i if(cb\[i\]!='0')bb=true;  
    if(!bb)  
    {  
      cout<<"錯誤的輸入 除數不可為零"< continue;  
    }  
     
    lc=0;  
    cout< }  
}