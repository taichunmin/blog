---
title: 程設期末考前的補充題目
date: 2010-01-07T21:09:00+08
tags:
  - CMD程式
---
# 程設期末考前的補充題目

[![](http://pic.pimg.tw/taichunmin/4b45dd4c3b046.jpg)](http://taichunmin.pixnet.net/album/photo/139897485)  
  
這個題裡面是在99/01/05資訊素養時  
老師在課堂上出的補充題目  
一共是兩題  
都是簡單的遞迴題  
要做遞迴  
一定要找出這個遞迴式的結束條件  
要不然會Stack Overflow  
第一題的結束條件已經給你了  
第二題的結束條件要自己找  
找不到就不用寫啦  
在這裡在偷偷說一下  
這張圖的筆跡不是我的  
看不懂的話不要來怪我喔xd  

```cpp
/*
#include<stdio.h>
#include<stdlib.h>

int fa(int ia)
{
  if(ia<0)return 0;
  if(ia==0)return 10;
  if(ia==1)return 20;
  if(ia<=5)return fa(ia-1)+fa(ia-2);
  return fa(ia-1)+fa(ia-2)+fa(ia-3);
}

int main()
{
  int ia;
  while(scanf("%d",&ia)!=EOF)
    printf("fa ( %d ) = %d\n",ia,fa(ia));
  system("pause");
}
```

  

```cpp
#include<stdio.h>
#include<stdlib.h>

int fa(int ia,int ib)
{
  if(ia==ib || ib==0)return 1;
  return fa(ia-1,ib)+fa(ia-1,ib-1);
}

int main()
{
  int ia,ib;
  while(scanf("%d %d",&ia,&ib)!=EOF)
    printf(" C ( %d , %d ) = %d\n",ia,ib,fa(ia,ib));
  system("pause");
}
```
