---
title: 整數的大數相乘
date: 2008-10-01T12:56:00+08
tags:
  - CMD程式
---
# 整數的大數相乘

![](http://creativecommons.org.tw/files/icon_by.gif) **姓名標示**、 **![](http://creativecommons.org.tw/files/icon_nc.gif)　非商業性**、  
/\*  
花了許多腦力寫成的程式~~  
雖然方法並不是最好的  
答案正確就是了  
可以算一萬位的乘法喔  
(一萬位成以一萬位等於兩萬位)  
  
至於它的使用方法呢  
就是隨便找一個C++的編譯程式(例如Dev-C++)  
編譯完成之後  
在出來的程式框框內  
直接打進兩個你要乘的數就行了  
(打完一個數字就要按 Enter 喔)  
\*/

#include<iostream>  
using namespace std; int main()  
{  
  //freopen("input.txt","r",stdin);  
  //freopen("output-1.txt","w",stdout);  
  int ca\[10000\],cb\[10000\],cc\[20000\];  
  char input\[10000\];  
  while(cin>>input)  
  {  
 int la=strlen(input),lb=0,lc=0;  
    for(int i=0;i<la/2;i++)  
      input\[la-1-i\]^=input\[i\]^=input\[la-1-i\]^=input\[i\];  
    for(int i=0;i<la;i++)ca\[i\]=input\[i\]-'0';  
    for(int i=0;i<20000;i++)cc\[i\]=0;  
    cin>>input;  
    lb=strlen(input);  
    for(int i=0;i<lb/2;i++)  
      input\[lb-1-i\]^=input\[i\]^=input\[lb-1-i\]^=input\[i\];  
    for(int i=0;i<lb;i++)cb\[i\]=input\[i\]-'0';  
        if(la==1 && lb==1 && ca\[0\]==0 && cb\[0\]==0)  
        {  
          cout<<0<<endl; continue;  
        }  
    int ta;  
    for(int i=0;i<la;i++)  
      for(int j=0;j<lb && ca\[i\]!=0;j++)  
      {  
        ta=ca\[i\]\*cb\[j\];  
        if(i+j+1>lc && ta%10!=0)lc=i+j+1;  
        cc\[i+j\]+=ta%10;  
        if(i+j+2>lc && ta/10!=0)lc=i+j+2;  
        cc\[i+j+1\]+=ta/10;  
      }  
    for(int i=0;i<lc;i++)  
    {  
      if(i==lc-1 && cc\[i\]/10!=0)lc++;  
      cc\[i+1\]+=cc\[i\]/10;  
      cc\[i\]%=10;  
    }  
    //for(int i=0;i<lc/2;i++)  
      //cc\[i\]^=cc\[lc-1-i\]^=cc\[i\]^=cc\[lc-1-i\];  
    for(int i=lc-1;i>-1;i--)cout<<cc\[i\];  
    cout<<endl;  
  }  
}