---
title: c++ 二進位換八進位 十六進位 發問者： 唉唉唉︿！
date: 2008-11-05T17:30:00+08
tags:
  - CMD程式
---
# c++ 二進位換八進位 十六進位 發問者： 唉唉唉︿！

/\*  
[http://tw.knowledge.yahoo.com/question/question?qid=1608110403995  
](http://tw.knowledge.yahoo.com/question/question?qid=1608110403995)程式語言 c++ 二進位換八進位 十六進位  
發問者： 唉唉唉︿！ ( 實習生 5 級)  
  
設計一程式算出一四位小數的二進位換八進位和十六進位  
例如我打一四位小數  0.6587    他會列印出他的八進位和十六進位  
然後就結束程式  
至於換二進位的方法  
0.6587\*2="1".3174  
0.3174\*2="0".6348  
0.6348\*2=...........以此類推  
取 " " 內的數字 由上往下取  0.1010101  
八進位就\*8  十六進位就\*16  
請進量簡單點 我怕我看不懂 最好成解釋一下主程式碼  
謝謝各位了!!!!  
  
知識加會吃程式碼，所以我把程式碼貼在了部落格  
網址 <http://www.wretch.cc/blog/taichunmin/12818161>  
有問題直接在我部落格回覆就行了  
  
我偷懶了一下  
這個程式只能用純小數  
哪裡看不懂就問喔  
  
部落格上面有即時可以跟我對話的  
\*/  
  
#include  
using namespace std;

int main()  
{  
    char ca,cb\[10\];  
    int ia;  
    while(cin>>ca>>ca)  
    {  
      ia=0;  
      cin.getline(cb,10);  
      int ib=strlen(cb);  
      if(ib>4)continue;  
      for(int i=0;i<4;i++)  
      {  
        ia\*=10;  
        if(i }  
      //cout<<"ca "< cout<<"0.";  
      int ic=0,id=ia;  
      while(ia>0 && ic<20)  
      {  
        ia\*=2;  
        cout< ia%=10000;  
        ic++;  
      }  
      cout< ic=0;  
      ia=id;  
      while(ia>0 && ic<20)  
      {  
        ia\*=8;  
        cout< ia%=10000;  
        ic++;  
      }  
      cout< ic=0;  
      ia=id;  
      char cc\[\]="0123456789ABCDEF";  
      while(ia>0 && ic<20)  
      {  
        ia\*=16;  
        cout< ia%=10000;  
        ic++;  
      }  
      cout< }  
}
