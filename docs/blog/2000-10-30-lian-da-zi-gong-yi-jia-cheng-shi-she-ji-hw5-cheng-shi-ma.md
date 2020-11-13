---
title: 聯大資工一甲-程式設計hw5（程式碼）
date: 2000-10-30T15:09:00+08
tags:
  - CMD程式
---
# 聯大資工一甲-程式設計hw5（程式碼）

[回提示頁](http://taichunmin.pixnet.net/blog/post/29669855)

273-3

```cpp
/*
學號:U9824017
姓名:戴均民 
日期:981030
頁數題號:273-3
*/ 
#include<stdio.h>

int main()
{
  int ia,ib;
  while(scanf("%d %d",&ia,&ib)!=EOF)
  {
    if(ia<0)ia=-ia;
    if(ib<0)ib=-ib;
    while(ib>0)
    {
      ia%=ib;
      ia^=ib^=ia^=ib;
    }
    printf("%d\n",ia);
  }
}
```

278-12

```cpp
/*
學號:U9824017
姓名:戴均民 
日期:981030
頁數題號:278-12
*/ 
#include<stdio.h>
#include<math.h>

int main()
{
  int ia,ib;
  while(scanf("%d %d",&ia,&ib)!=EOF)
  {
    double da=0,db,pi=2.0*acos(0.0);
    for(int i=0;i<ib;i++,da+=ia)
    {
      //printf("%f\n",sin(da*pi/180)+1);
      db=(sin(da*pi/180)+1)*39;
      for(int j=1;j<db+0.50001;j++)printf(" ");
      printf("*\n");
      
    }
  }
}
```