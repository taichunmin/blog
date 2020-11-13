---
title: "[程式設計] 定範圍內亂數 by 呆呆"
date: 2009-09-02T17:42:00+08
tags:
  - CMD程式
---
# [程式設計] 定範圍內亂數 by 呆呆

//原題目網址<http://tw.knowledge.yahoo.com/question/question?qid=1509090204291>

#define PROBLEM 1  
//這裡把 1 更改成 2 就會執行第 2 題  
#include<iostream>  
using namespace std;  
  
#if PROBLEM==1  
int main()  
{  
  srand(time(NULL));  
  float fa,fb;  
  while(cin>>fa,cin.get(),cin>>fb)  
  {  
    int ia=fa\*10000,ib=fb\*10000;  
    for(int i=0;i<6;i++)cout<<((rand()\*10000+rand())%(ib-ia+1)+ia)\*0.0001<<endl;  
  }  
  system("pause");  
}  
#endif  
#if PROBLEM==2  
int main()  
{  
  float fa\[10\];  
  while(cin>>fa\[0\])  
  {  
    for(int i=1;i<10;i++)cin>>fa\[i\];  
    for(int i=0;i<10;i++)  
    {  
      fa\[i\]-=(rand()%5+1);  
      cout<<fa\[i\]<<'\\t';  
    }  
    cout<<endl;  
  }  
  system("pause");  
}  
#endif
