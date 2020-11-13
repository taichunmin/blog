---
title: 97年嘉中資訊第三題
date: 2008-11-12T15:33:00+08
tags:
  - CMD程式
---
# 97年嘉中資訊第三題

給你2個桶子A、B和無限供應的水，你可以做3個動作：  
（1）把一個桶子裝滿水（2）把一個桶子的水倒光（3）把一個桶子的水倒到另一個桶子中。  
  
把水從一個桶子倒到另一個桶子的動作停止有2個可能的原因：  
第一個桶子的水倒光了或第二個桶子的水滿了。例如：A有5公升的水，B有6公升的水且B的容量為8公升，則當把A的水倒到B後，B就滿了（8公升）而A中還剩3公升。  
  
在本問題中，給你Ca,Cb,N。Ca,Cb分別代表A桶子和B桶子的容量，而N是我們要求的目標。若到不出此水量，請輸出"NO"。若可以得到N公升的水（以A加B的水量判定），則請輸出水桶水量歷程紀錄。  
  
範例輸入：  
8 5 4  
4 2 3  
6 9 11  
4 5 8  
  
範例輸出：  
(0,0) -> (8,0) -> (3,5) -> (3,0) -> (0,3) -> (8,3) -> (6,5) -> (6,0) -> (1,5) -> (1,0) -> (0,1) -> (8,1) -> (4,5) -> (4,0)或  
(0,0) -> (0,5) -> (5,0) -> (5,5) -> (8,2) -> (0,2) -> (2,0) -> (2,5) -> (7,0) ->(7,5) -> (8,4) -> (0,4)  
NO  
NO  
(0,0) -> (4,0) -> (0,4) -> (4,4)或  
(0,0) -> (0,5) -> (4,1) -> (0,1) -> (1,0) -> (1,5) -> (4,2) -> (0,2) -> (2,0) -> (2,5) -> (4,3) -> (0,3) -> (3,0) -> (3,5)  
  
（以上輸出的 "或" 只需輸出其中一組）  
  
以下是我的程式碼，若要觀看請反白  
#include  
#include  
using namespace std;  
  
int fa(int,char,char,char);  
int fb(int,char,char,char);  
int fc(int,char,char,char);  
int ff(int,char,char,char);  
  
int fa(int ia,char ib='a',char ic='b',char id='c')  
{  
 if(ia<1)return 0;  
 int total=0;  
 total+=ff(ia-1,ib,id,ic);  
 cout<<"ring "< "< total++;  
 total+=fb(ia-2,ib,ic,id);  
 return total;  
}  
  
int fb(int ia,char ib='a',char ic='b',char id='c')  
{  
 if(ia<1)return 0;  
 int total=0;  
 total+=ff(ia-1,ic,id,ib);  
 cout<<"ring "< "< total++;  
 total+=ff(ia-2,ib,ic,id);  
 cout<<"ring "< "< total++;  
 total+=fc(ia-2,ib,ic,id);  
 return total;  
}  
  
int fc(int ia,char ib='a',char ic='b',char id='c')  
{  
 if(ia<1)return 0;  
 int total=0;  
 total+=ff(ia-2,id,ic,ib);  
 cout<<"ring "< "< total++;  
 total+=fa(ia-2,ib,ic,id);  
 return total;  
}  
  
int ff(int ia,char ib,char ic,char id)  
{//           來源     暫存     目標  
 if(ia<1)return 0;  
 int total=0;  
 total+=ff(ia-1,ib,id,ic);  
 cout<<"ring "< "< total++;  
 total+=ff(ia-1,ic,ib,id);  
 return total;  
}  
  
int main()  
{  
 int ia;  
 while(cin>>ia)  
 cout<<"共移動了 "<  
}