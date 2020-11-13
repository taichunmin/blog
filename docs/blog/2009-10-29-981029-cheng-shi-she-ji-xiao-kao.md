---
title: 981029程式設計小考
date: 2009-10-29T21:46:00+08
tags:
  - CMD程式
---
# 981029程式設計小考

```cpp
#define PRO 1

#if PRO==1
#include<stdio.h>
#include<math.h>
#include<stdlib.h>

double fa(int ia,int ib,int ic,int id)
{
    ia-=ic;
    ib-=id;
    return sqrt(0.0+ia*ia+ib*ib);
}

int main()
{
  int ia,ib,ic,id;
  while(scanf("%d %d %d %d",&ia,&ib,&ic,&id)!=EOF)
  {
    printf("%lf\n",fa(ia,ib,ic,id));
  }
  system("pause");
}
#endif

#if PRO==2
#include<stdio.h>
#include<math.h>
#include<stdlib.h>
int main()
{
  double da;
  while(scanf("%lf",&da)!=EOF)
  {
    printf("%.3lf\n",floor(da*1000+0.5)/1000.0);
  }
  system("pause");
}
#endif

#if PRO==3
#include<stdio.h>
#include<stdlib.h>
int main()
{
  int ia;
  while(scanf("%d",&ia)!=EOF)
  {
    switch(ia)
    {
      case -2147483647 ... 24:
        printf("not a strong wind");
        break;
      case 25 ... 38:
        printf("strong wind");
        break;
      case 39 ... 54:
        printf("gale");
        break;
      case 55 ... 72:
        printf("whole gale");
        break;
      case 73 ... 2147483647:
        printf("hurricane");
        break;
    }
    printf("\n");
  }
  system("pause");
}
#endif

#if PRO==4
#include<stdio.h>
#include<stdlib.h>
int main()
{
  char ca;
  while(scanf("%c",&ca)!=EOF)
  {
    if(ca==10)continue;
    if('a'<=ca && ca<='z')ca-=32;
    switch(ca)
    {
      case 'B':
        printf("Battleship");
        break;
      case 'C':
        printf("Cruiser");
        break;
      case 'D':
        printf("Destoryer");
        break;
      case 'F':
        printf("Frigate");
        break;
      default:
        printf("你輸入錯了喔");
        break;
    }
    printf("\n");
  }
  system("pause");
}
#endif
```