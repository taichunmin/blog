---
title: ACM-10763 Foreign Exchange
date: 2009-06-26T10:17:00+08
tags:
  - CMD程式
---
# ACM-10763 Foreign Exchange

<http://luckycat.kshs.kh.edu.tw/homework/q10763.htm>

題目

有一個非營利性的國際性機構執行一項國際交換學生計畫。這幾年來執行得相當好，有越來越多的學生想要參與這項計畫，所以現在請你來幫忙這個機構。

每個提出交換學生申請的人有2項資料：他來自哪一國，他想要交換到哪一國。這個計畫只有在每個學生都可以找到一個交換對象的時候才算成功。換句話 說，假如有一個學生想要從A國到B國，那麼一定要有另一個學生從B國到A國。如果只有50個學生提出申請，要判斷這計畫是否可行相當簡單，然而現在最多已 經有 **500000** 個學生了。

一開始我看到這個題目，我馬上想到用規規矩矩的方法，首先程式讀到a學生的兩個數字之後，讓程式去找資料庫，看看有沒有一個b學生剛好想去他的國家，然後將b想去的國家改成a想去的國家，然後在繼續找。如果都找不到，就把這筆資料丟入資料庫。只要最後資料庫還有剩下的資料，就代表配對不成功。  
這樣的程式上傳之後是 TLE...於是，我又靈光一現的想到，把所有學生的資料讀完之後，再把兩個數字分別排序，這樣的話只要比較同一個 i 值時兩邊的數字有沒有一樣就好了，我把程式改成用選排之後，上傳的結果還是 TLE...  
不得已，只好用現成的qsort函式了，雖然用起來心裡不是很踏實（我沒有背快排的程式碼....）改過之後再傳就 AC 了。

//10763 AC  
#include<iostream>  
#include<cstdlib>  
using namespace std;  
  
int na\[1000000\];  
int comp(const void\* a,const void\* b)  
{  
  return \*(int\*)a-\*(int\*)b;  
}  
  
int main()  
{  
    int t1,ia,ib;  
    while(cin>>t1,t1)  
    {  
        for(int i=0;i<t1;i++)cin>>na\[i\]>>na\[i+500000\];  
        qsort(&na\[0\],t1,sizeof(int),comp);  
        qsort(&na\[500000\],t1,sizeof(int),comp);  
        bool ba=true;  
        for(int i=0;i<t1 && ba;i++)  
          if(na\[i\]!=na\[i+500000\])ba=false;  
        if(ba)cout<<"YES"<<endl;  
        else cout<<"NO"<<endl;  
    }  
}
