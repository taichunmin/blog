---
title: 97年嘉中資訊第五題
date: 2008-11-14T16:05:00+08
tags:
  - CMD程式
---
# 97年嘉中資訊第五題

一個必有偶數層的河內塔，有a b c三根柱子，假設所有的環原本在a柱上，請將奇數號的環移到b柱上，偶數號的環移到c柱上，大的環不能疊在小的環上，請輸出移動過程和最少步驟。

範例輸入：  
4

範例輸出：  
ring 1 : a -> b  
ring 2 : a -> c  
ring 1 : b -> c  
ring 3 : a -> b  
ring 1 : c -> a  
ring 2 : c -> b  
ring 1 : a -> b  
ring 4 : a -> c  
ring 1 : b -> a  
ring 2 : b -> c  
ring 1 : a -> b  
總共需要 11 步

以下是我的程式碼，若要看請反白

#include  
using namespace std;  
  
int ia,ib,ic;  
  
string fb(int ia)  
{  
 char ca\[15\];  
 string sa="";  
 int ib=0;  
 while(ia>0)  
 {  
 ca\[ib++\]=ia%10+'0';  
 ia/=10;  
 }  
 if(ib>0)  
 for(int i=ib-1;i>-1;i--)sa+=ca\[i\];  
 else sa="0";  
 return sa;  
}  
  
int fa(int xa=0,int xb=0,string sa="",int fn=0)  
{  
 if(sa.length())sa+=" -> ";  
 sa+="("+fb(xb)+","+fb(xa)+")";  
 if((xa+xb)==ic)  
 {  
 cout< return 1;  
 }  
 int na,nb;  
 switch(fn)  
 {  
 case 0:  
 na=ia;  
 nb=xb;  
 fn=1;  
 break;  
 case 1:  
 if(xa==ia && xb==ib)return 0;  
 if(xa>ib-xb)  
 {  
 na=xa-ib+xb;  
 nb=ib;  
 fn=2;  
 }  
 else  
 {  
 na=0;  
 nb=xa+xb;  
 fn=0;  
 }  
 break;  
 case 2:  
 na=xa;  
 nb=0;  
 fn=1;  
 break;  
 }  
 if(fa(na,nb,sa,fn))return 1;  
 else return 0;  
}  
  
int main()  
{  
 while(cin>>ia>>ib>>ic)  
 {  
 bool ba=true;  
 if(ia+ib if(ia%2==0 && ib%2==0 && ic%2==1)ba=false;  
 if(ba)ba=fa();  
 if(!ba)cout<<"NO"< }  
}