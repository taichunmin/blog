---
title: 程式設計作業7
date: 2009-12-15T10:59:00+08
tags:
  - CMD程式
---
# 程式設計作業7

p361-1  

```cpp
/*
學號 U9824017 
姓名 戴均民 
日期 981218 
題號 p361-1
*/
#include<stdio.h>
#include<stdlib.h>

int main()
{
  float  sf = 0, xf = 0.1f;//題目指定 
  double sd = 0, xd = 0.1; //題目指定 
  for(int i=0;i<1000;i++)
  {
    sf+=xf;
    sd+=xd;
  }
  printf("sf = %.25f\n",100.0f-sf);
  printf("sd = %.25lf\n",100.0-sd);
  system("pause");
}
```

  
p429-13  

```cpp
/*
學號 U9824017
姓名 戴均民
日期 981218
題號 p429-13
*/
#include<stdio.h>
#include<stdlib.h>

int main()
{
  int aa[10]={95,27,90,49,80,58,6,9,18,50};
  for(int i=0;i<10;i++)printf("%d ",aa[i]);
  printf("\n");
  for(int i=0;i<10-1;i++)
    for(int j=0;j<10-i-1;j++)
      if(aa[j]>aa[j+1])
        aa[j]^=aa[j+1]^=aa[j]^=aa[j+1];
  for(int i=0;i<10;i++)printf("%d ",aa[i]);
  system("pause");
}
```