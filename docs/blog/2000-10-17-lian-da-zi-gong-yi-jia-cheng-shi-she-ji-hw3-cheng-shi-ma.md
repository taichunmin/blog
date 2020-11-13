---
title: 聯大資工一甲-程式設計hw3（程式碼）
date: 2000-10-17T00:58:00+08
tags:
  - CMD程式
---
# 聯大資工一甲-程式設計hw3（程式碼）

[回主頁](http://taichunmin.pixnet.net/blog/post/29570183)

p142\_5

```cpp
/*
學號：U9824017
姓名：戴均民
日期：981017

讀入一個小數大於兩位的正小數，將其四捨五入到小數以下第二位後輸出。 
*/ 
#include<stdio.h>
#include<stdlib.h>
#include<math.h>

int main()
{
  double da;
  while(1)
  {
    printf("請輸入一個小數大於兩位的正小數 -> ");
    scanf("%lf",&da);
    printf(" %lf 四捨五入到小數第二位後等於 %.2lf\n",da,floor(da*100+0.5)/100.0);
    //printf(" %lf 四捨五入到小數第二位後等於 %.2lf\n",da,(int)(da*100+0.5)/100.0);
    //printf(" %lf 四捨五入到小數第二位後等於 %.2lf\n",da,floor(da*100+0.5000001)/100.0);
    //printf(" %lf 四捨五入到小數第二位後等於 %.2lf\n",da,(int)(da*100+0.5000001)/100.0);
  }
  system("pause");
}
```

p143\_10

```cpp
/*
學號：U9824017
姓名：戴均民
日期：981017
*/
#include<stdio.h>
#include<stdlib.h>

double celsius_at_depth(double da)
{
  return 10*da+20;
}
double fahrenheit(double da)
{
  return da*1.8+32;
}

int main()
{
  double da;
  printf("Enter a depth(in kilometers) inside the earth -> ");
  scanf("%lf",&da);
  printf("\nAt %lf inside the earth:\n",da);
  printf("Celsius = %lf\n",celsius_at_depth(da));
  printf("Fahrenheit = %lf\n",fahrenheit(celsius_at_depth(da)));
  system("pause");
}
```