---
title: 聯大資工一甲-程式設計hw2
date: 2009-10-09T18:17:00+08
tags:
  - CMD程式
---
# 聯大資工一甲-程式設計hw2

p91-4

```cpp
#include<stdio.h>
#include<stdlib.h>
int main()
{
  int ia;
  printf("請輸入華氏溫度 -> ");
  scanf("%d",&ia);
  printf("華氏溫度 %d 度 = 攝氏溫度 %.2f 度\n",ia,(ia-32.0)*5/9);
  system("pause");
}
```

p92-6

```cpp
#include<stdio.h>
#include<stdlib.h>
int main()
{
  int ia;
  double da,db;
  char ca[10000];
  printf("Enter desired grade -> ");
  scanf("%s",ca);
  printf("Enter minimum average required -> ");
  scanf("%lf",&da);
  printf("Enter current average in course -> ");
  scanf("%lf",&db);
  printf("Enter how much the final counts as a percentage of the course grade -> ");
  scanf("%d",&ia);
  printf("You need a score of %.2lf on the final to get a %s.\n",(da*100-db*(100-ia))/ia,ca);
  system("pause");
}
```

p92-10

```cpp
#include<stdio.h>
#include<stdlib.h>
int main()
{
  int ia,ib,ic,id;
  printf("請輸入兩個分數(a/b c/d) -> "); 
  scanf("%d/%d %d/%d",&ia,&ib,&ic,&id);
  printf("(%d/%d) * (%d/%d) = %.2f\n",ia,ib,ic,id,(ic+0.0)*ia/id/ib);
  system("pause");
}
```

p93-12

```cpp
#include<stdio.h>
#include<stdlib.h>
int main()
{
  int ia,ib;
  printf("請輸入生成直角三角形的 m 和 n -> ");
  scanf("%d %d",&ia,&ib);
  if(ia<ib)ia^=ib^=ia^=ib;
  printf("Side1 = %d , Side2 = %d , Hypotenuse = %d\n",ia*ia-ib*ib,2*ia*ib,ia*ia+ib+ib);
  system("pause");
}
```