---
title: 程式設計作業6
date: 2009-12-04T15:57:00+08
tags:
  - CMD程式
---
# 程式設計作業6

p320-1  

```cpp
#include<stdio.h>
#include<stdlib.h>

int main()
{
    int a;
    while(printf("你要領的金額 -> "),scanf("%d",&a) !=EOF)
    {
        printf("50元鈔票 %d 張 20元鈔票 %d 張 10元鈔票 %d 張\n",a/50,a%50/20,a%50%20/10);
    }
    system("pause");
}
```

  
  
p323-3  

```cpp
#include<stdio.h>
//dollors=1,quarters=1/4,dimes=1/10,nickels=1/20,pennies=1/100 

int main()
{
  double da,db;
  while(printf("請輸入應付金額及實付金額 -> "),scanf("%lf %lf",&da,&db)!=EOF)
  {
    int ia=(int)(db*100+.500001)-(int)(da*100+.500001);
    printf("dollar(s)\t = %d\n",ia/100);
    printf("quarter(s)\t = %d\n",ia%100/25);
    printf("dime(s)\t\t = %d\n",ia%100%25/10);
    printf("nickel(s)\t = %d\n",ia%25%10/5);
    printf("pennie(s)\t = %d\n\n",ia%5);
  }
}
```

  
  
p325-5  

```cpp
#include<stdio.h>
#include<stdlib.h>
int fa(int a)
{
    if(a%7 && a%11 && a%13) return false;
    return true;
}

int fb(int a)
{
    int b=0;
    while(a>0)
    {
        b+=a%10;
        a/=10;
    }
    return b%2;
}

int fc(int a)
{
    if(a%2==0) return false; 
    for(int i=3;i*i<=a;i+=2)
      if(a%i) return false;
    return true;
}

int main()
{
    int a;
    while(scanf("%d\n",&a) !=EOF)
    {
        printf("%s\n\n",(fa(a))?"是 7, 11 或 13 的倍數":"不是 7, 11 或 13 的倍數");
        printf("%s\n\n",(fb(a))?"每一位數字相加是奇數":"每一位數字相加是偶數");
        printf("%s\n\n",(fc(a))?"質數":"非質數");
    }
    system("pause");
}
```

  
  
p328-11  

```cpp
#include<stdio.h>
#include<stdlib.h>
#include<math.h>

int main()
{
    int ia;
    printf("請輸入數量 -> ");
    scanf("%d",&ia);
    printf("Power of 2\tFraction  \tDecimal Value\n\n");
    for(int i=0;i<ia;i++)
    {
      printf("          \t     1\n");
      printf("%10d\t----------\t%.25lf\n",-i-1,pow(2.0,-i-1));
      printf("          \t%.0lf\n\n",pow(2.0,i+1));
    }
    system("pause");
}
```