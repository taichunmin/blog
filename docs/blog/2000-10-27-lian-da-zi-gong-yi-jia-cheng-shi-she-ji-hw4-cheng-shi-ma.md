---
title: 聯大資工一甲-程式設計hw4（程式碼）
date: 2000-10-27T21:04:00+08
tags:
  - CMD程式
---
# 聯大資工一甲-程式設計hw4（程式碼）

[回提示頁](http://taichunmin.pixnet.net/blog/post/29651684)

204-4

```cpp
/*
學號：U9824017
姓名：戴均民
日期：981024

根據給定的顏色代碼，輸出壓縮汽缸裡的內容物，若非指定顏色，輸出未知的內容物。 
*/
#include<stdio.h>
#include<stdlib.h>

int main()
{
  char ca;
  while(scanf("%c",&ca)!=EOF)
  {
    if('a'<=ca && ca<='z')ca-=32;
    if(ca==10)continue;
    switch(ca)
    {
      case 'O':
        printf("  Ammonia.\n");
        break;
      case 'B':
        printf("  Carbon monoxide.\n");
        break;
      case 'Y':
        printf("  Hydrogen.\n");
        break;
      case 'G':
        printf("  Oxygen.\n");
        break;
      default:
        printf("Contents unknown.\n");
        break;
    }
  }
  system("pause");
}
```

204-5

```cpp
/*
學號：U9824017
姓名：戴均民
日期：981024

Could you handle this problem with a "switch" statement?
-> No, I couldn't.

If so, use a switch statment; if not, explain why.
-> Switch quantity cannot be a double or a float.
*/
#include<stdio.h>
#include<stdlib.h>

int main()
{
  double da;
  while(scanf("%lf",&da)!=EOF)
  {
    if(da<5.0)printf("Little ot no damage.");
    else if(da<5.5)printf("Some damage.");
    else if(da<6.5)printf("Serious damage: walls may crack or fall.");
    else if(da<7.5)printf("Disaster: houses and buildings may collapse.");
    else printf("Catastrophe: most buildings destroyed.");
    printf("\n");
  }
  system("pause");
}
```