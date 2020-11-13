---
title: 程式設計作業8
date: 2009-12-18T12:53:00+08
tags:
  - CMD程式
---
# 程式設計作業8

```cpp
/*
學號 U9824017 
姓名 戴均民 
日期 981225 
題號 p497-5
*/
#include<stdio.h>
#include<string.h>
int main()
{
  char ca[1000];
  while(scanf("%s",ca)!=EOF)
  {
    int strl=strlen(ca);
    if(ca[strl-1]=='s' || (ca[strl-1]=='h' && (ca[strl-2]=='s' || ca[strl-2]=='c')))
    {
      ca[strl]='e';
      ca[strl+1]='s';
      ca[strl+2]='\0';
    }
    else if(ca[strl-1]=='y')
    {
      ca[strl-1]='i';
      ca[strl]='e';
      ca[strl+1]='s';
      ca[strl+2]='\0';
    }
    else
    {
      ca[strl]='s';
      ca[strl+1]='\0';
    }
    printf("%s\n",ca);
  }
}
```

  

```cpp
/*
學號 U9824017 
姓名 戴均民 
日期 981218 
題號 p498-7
*/
#include<stdio.h>
#include<string.h>
int main()
{
  char ca[1000],cb[1000],cc[1000];
  while(scanf("%s %s %s",ca,cb,cc)!=EOF)
    printf("%s %s %s\n",cc,cb,ca);
}
```