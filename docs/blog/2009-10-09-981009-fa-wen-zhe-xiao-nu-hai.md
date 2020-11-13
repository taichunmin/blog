---
title: 981009 發問者：小女孩
date: 2009-10-09T00:56:00+08
tags:
  - CMD程式
---
# 981009 發問者：小女孩

原程式碼：

```cpp
#include<stdio.h>
#include<stdlib.h>
int ans=1;
int n;
int cou(int);

int main()
{
  printf("請寫一個C程式,");
  printf("使用遞迴函數列印出2的n次方式值\n");
  printf("Enter an integer:");
  scanf("%d",&n);
  cou(n);
  printf("The answer is:%d\n",ans);
  system("pause");
}
int cou(int n)
{
  if(n==0)return 1;
  else ans=cou(n-1)*2;
}
```

錯誤是錯在你的 cou() 在 n!=0 時沒有傳回值，所以不可以用成 ans=cou(n-1)\*2;，這樣傳回來的值是未定義的數字。正確的改法如下：

```cpp
#include<stdio.h>
#include<stdlib.h>
int ans=1;
int n;
int cou(int);

int main()
{
  printf("請寫一個C程式,");
  printf("使用遞迴函數列印出2的n次方式值\n");
  printf("Enter an integer:");
  scanf("%d",&n);
  cou(n);
  printf("The answer is:%d\n",ans);
  system("pause");
}
int cou(int n)
{
  if(n==0)return 1;
  else
  {
    ans*=2;
    cou(n-1);
  }
}
```