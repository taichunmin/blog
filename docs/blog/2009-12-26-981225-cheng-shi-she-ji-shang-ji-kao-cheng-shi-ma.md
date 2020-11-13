---
title: 981225程式設計上機考程式碼
date: 2009-12-26T02:18:00+08
tags:
  - CMD程式
---
# 981225程式設計上機考程式碼

現在的我  
非常寂寞  
因為  
來留言的人  
小貓兩三隻  
弄的我現在發文都欠缺動力  
在我心裡的，只有無奈  
這四個程式碼  
是答應要給佑任董孟的  
所以我還是發上來了  
  
從現在的成效看來  
我發程式碼給同學參考  
沒能讓人駐足留言  
說不定還製造了反效果  
  
雖然說  
這個世界上的人千千萬萬種  
總有在意你的人  
可想而知的是  
我的那些人還沒出現  
或許  
發程式碼的作法  
應該要暫時停息一陣子了  
希望300篇的目標能讓我驅散壞心情  

```cpp
/* Sample Input
1.41 0
100 98.59

*/
#include<stdio.h>
#include<stdlib.h>

int fa(int ia)
{
  printf("dollars\t\t=\t%d\n",ia/100);
  printf("quarters\t=\t%d\n",ia%100/25);
  printf("dimes\t\t=\t%d\n",ia%25/10);
  printf("nickels\t\t=\t%d\n",ia%25%10/5);
  printf("pennies\t\t=\t%d\n\n",ia%5);
}

int main()
{
  double da,db;
  while(scanf("%lf %lf",&da,&db)!=EOF)
  {
    int ia=(da-db)*100+0.000001;
    fa(ia);
  }
  system("pause");
}
```

  

```cpp
/* Sample Input
1 2 3 4 5 6 7 8 9 10
10 9 8 7 6 5 4 3 2 1

*/
#include<stdio.h>
#include<stdlib.h>

int fa(int aa[])
{
  for(int i=0;i<9;i++)
    for(int k=0;k<9-i;k++)
      if(aa[k]>aa[k+1])
        aa[k]^=aa[k+1]^=aa[k]^=aa[k+1];
}

int main()
{
  int aa[10];
  while(scanf("%d",&aa[0])!=EOF)
  {
    for(int i=1;i<10;i++)scanf("%d",&aa[i]);
    fa(aa);
    for(int i=0;i<10;i++)printf("%8d",aa[i]);
  }
  system("pause");
}
```

  

```cpp
/* Sample Input
y
s
ch
sh
ah
a

*/
#include<stdio.h>
#include<stdlib.h>
#include<string.h>
int main()
{
  char ca[1000];
  while(scanf("%s",ca)!=EOF)
  {
    int za=strlen(ca);
    if(ca[za-1]=='y')
    {
      ca[za-1]=0;
      strcat(ca,"ies");
    }
    else if(ca[za-1]=='s' || (ca[za-1]=='h' && (ca[za-2]=='c' || ca[za-2]=='s')))
      strcat(ca,"es");
    else strcat(ca,"s");
    printf("%s\n",ca);
  }
  system("pause");
}
```

  

```cpp
/* Sample Input
taichunmin
no problem
birds and bees
as soon as possible
the words of a line.

*/
#include<stdio.h>
#include<stdlib.h>
#include<string.h>
int main()
{
  char ca[1000000];
  while(gets(ca) && strlen(ca)!=0)
  {
    for(int i=strlen(ca)-1;i>-2;i--)
    {
      bool ba=false;
      if(i==-1 || ca[i]==' ')
        for(int k=i+1;k<strlen(ca) && ca[k]!=' ';k++,ba=true)printf("%c",ca[k]);
      if(ba)printf(" ");
    }
    printf("\n");
  }
  system("pause");
}
```