---
title: 981127程式設計第三次上機考試
date: 2009-11-28T08:35:00+08
tags:
  - CMD程式
---
# 981127程式設計第三次上機考試

這是這一次的小考程式碼  
希望可以增進各位同學的程式實力

```cpp
#include<stdio.h>
#include<stdlib.h>
int main()
{
  int ia,ib;
  while(scanf("%d %d",&ia,&ib)!=EOF)
  {
    if(ia==0 && ib==0)printf("原點\n");
    else if(ia==0)printf("Y 軸\n"); 
    else if(ib==0)printf("X 軸\n");
    else if(ib>0)
    {
      if(ia>0)printf("第一象限\n");
      else if(ia<0)printf("第二象限\n");
    }
    else
    {
      if(ia>0)printf("第四象限\n");
      else if(ia<0)printf("第三象限\n");
    }
  }
}
```

  

```cpp
#include<stdio.h>
#include<stdlib.h>
int max(int ia,int ib,int ic)
{
  if(ia<ib)ia=ib;
  if(ia<ic)ia=ic;
  return ia;
}
int min(int ia,int ib,int ic)
{
  if(ia>ib)ia=ib;
  if(ia>ic)ia=ic;
  return ia;
}
int main()
{
  int ia,ib,ic;
  while(scanf("%d %d %d",&ia,&ib,&ic)!=EOF)
  {
    printf("max = %d , min = %d\n",
            max(ia,ib,ic),min(ia,ib,ic));
  }
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
    for(int k=0;k<=2*i;k++)printf("*  ");
    printf("\n");
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
    for(int k=0;k<=2*i;k++)printf("%3d",k+1);
    printf("\n");
  }
  system("pause");
}
```