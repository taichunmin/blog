---
title: 程式設計作業九
date: 2009-12-25T14:11:00+08
tags:
  - CMD程式
---
# 程式設計作業九

```cpp
/*
學號:U9824017 
姓名:戴均民 
題號:p548-3
日期:981225
*/ 
#include<stdio.h>

int fa(int ia,int ib)
{
  if(ia<0 || ib<0)return ia-ib;
  return fa(ia-1,ib)+fa(ia,ib-1);
}

int main()
{
  int ia,ib;
  while(scanf("%d %d",&ia,&ib)!=EOF)
  {
    printf("%d\n",fa(ia,ib));
  }
}
```

  

```cpp
/*
學號:U9824017 
姓名:戴均民 
題號:p548-4
日期:981225
*/ 
#include<stdio.h>
#include<string.h>

int two_ele_subs(char ca[10000],int ia=-1,int ib=0)
{
  ib++;
  for(int i=ia+1; i<strlen(ca); i++)
  {
    if(ib==2)printf("{%c , %c}\n",ca[ia] ,ca[i] );
    else two_ele_subs(ca,i,ib);
  }
}

int main()
{
  char ca[10000];
  while( scanf("%s",ca )!=EOF )
    two_ele_subs(ca);
}
```