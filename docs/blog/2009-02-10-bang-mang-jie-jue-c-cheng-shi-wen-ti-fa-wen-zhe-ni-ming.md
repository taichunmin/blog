---
title: 幫忙解決C++程式問題 發問者：匿名
date: 2009-02-10T15:58:00+08
tags:
  - CMD程式
---
# 幫忙解決C++程式問題 發問者：匿名

#define PRO 1  
//http://tw.knowledge.yahoo.com/question/question?qid=1509021006091  
/\*  
1\. 搜尋失竊車輛的車牌資料  
假設：失竊車輛的號碼為AA0000、FF8888、BB1111、CC9999、DD4444  
  
執行結果:  
請輸入車牌號碼  
AA4444  
無相符號碼，不是失竊車輛  
  
失竊車輛查詢系統  
AA0000  
資料吻合!此車牌可能為失竊車輛  
\*/  
#if PRO==1  
#include  
#define NUM 5  
using namespace std;  
  
int main()  
{  
  string sa\[ NUM \]={"AA0000","FF8888","BB1111","CC9999","DD4444"};  
  string sb;  
  while(cout<<"請輸入車牌號碼 -> ",cin>>sb)  
  {  
    bool ba=true;  
    for(int i=0;i< NUM ;i++)  
      if(sa\[i\]==sb)cout<<"資料吻合!此車牌可能為失竊車輛"< if(ba)cout<<"無相符號碼，不是失竊車輛"< }  
}  
#endif  
/\*    
2\. 購物車程式  
  
書本目錄:  
1西遊記 290元  
2紅羅夢 250元  
3水滸傳280元  
4三國演義230元  
5老殘遊記220元  
請選擇你想購買的書:  
  
1  
請輸入付款的金額或交易0結束交易  
500  
找你210元  
拾圓 21 個  
伍元 0 個  
一元 0 個  
\*/  
#if PRO==2  
#include  
#define BOOKNUM 5  
using namespace std;  
  
struct bookdata  
{  
  string name;  
  int cost;  
};  
  
void show\_book(bookdata ba)  
{  
  for(int i=0;i }  
  
int main()  
{  
  bookdata ba\[\]={"西遊記",290,"紅樓夢",250,"水滸傳",280,"三國演義",230,"老殘遊記",220};  
  int ia;  
  while(show\_book(),cout<<"請選擇你想購買的書 -> ",cin>>ia)  
  {  
    cout<<"請輸入付款的金額或輸入0結束交易"< int ib;  
    cin>>ib;  
    ib-=ba.cost\[ib-1\];  
    cout<<"找你 "< cout<<"拾圓 "< ib%=10;  
    cout<<"伍元 "< ib%=5;  
    cout<<"一元 "< }  
}  
#endif