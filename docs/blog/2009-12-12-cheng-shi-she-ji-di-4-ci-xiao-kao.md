---
title: 程式設計第4次小考
date: 2009-12-12T01:22:00+08
tags:
  - CMD程式
---
# 程式設計第4次小考

考完之後  
我又是依照慣例的  
在外面討論題目  
有一個學長出來之後就說「我恨星星題」  
然後餅乾也很快就出來了  
敬顏居然不敢進去考  
忽然發現涵雅是高手xd  
她還蠻快出來的  
顧孟解了兩題，gcd 居然給我忘記 = =  
政維拖到時間到才解了一題  
奕達說要下定決心來跟我練程式  
聽說我的第2題造福了3個人  
  
Programming (I) Quiz 4  
Date:2009/12/11

```cpp
#include<stdio.h>
#include<stdlib.h>

void fa(int ia)
{
  int ib=1;
  if(ia%15==0)
  {
    printf("%d 是 3 和 5 的倍數。\n",ia);
    ib=0;
  }
  if(ia%35==0)
  {
    printf("%d 是 5 和 7 的倍數。\n",ia);
    ib=0;
  }
  if(ib)printf("%d 不是 3 和 5 的倍數，也不是 5 和 7 的倍數。\n",ia);
}

int main()
{
  int ia;
  while(scanf("%d",&ia)!=EOF)
  {
    fa(ia);
  }
  system("pause");
}
```

  

```cpp
#include<stdio.h>
#include<stdlib.h>

void fa(int &ia,int &ib)
{
  printf("呼叫 swap 函式\n");
  ia^=ib^=ia^=ib;
}

int main()
{
  int ia,ib;
  while(scanf("%d %d",&ia,&ib)!=EOF)
  {
    printf("交換前：ia= %d, ib= %d\n",ia,ib);
    fa(ia,ib);
    printf("交換後：ia= %d, ib= %d\n\n",ia,ib);
  }
  system("pause");
}
```

  

```cpp
#include<stdio.h>
#include<stdlib.h>

int fa(int &ia,int &ib)
{
  if(ia<0)ia=-ia;
  if(ib<0)ib=-ib;
  while(ib>0)
  {
    ia%=ib;
    ia^=ib^=ia^=ib;
  }
  return ia;
}

int main()
{
  int ia,ib;
  while(scanf("%d %d",&ia,&ib)!=EOF)
  {
    printf("%d\n",fa(ia,ib));
  }
  system("pause");
}
```

  

```cpp
#include<stdio.h>
#include<stdlib.h>
int main()
{
  for(int i=0;i<5;i++)
  {
    for(int k=i;k<4;k++)printf("   ");
    for(int k=5-i;k<=5;k++)printf("%3d",k);
    printf("\n");
  }
  for(int i=3;i>-1;i--)
  {
    for(int k=i;k<4;k++)printf("   ");
    for(int k=5-i;k<=5;k++)printf("%3d",k);
    printf("\n");
  }
  system("pause");
}
```