---
title: "gmnxix(果凍)、看板: C_and_CPP"
date: 2011-06-18T11:02:00+08
tags:
  - CMD程式
  - gmnxix
  - c
---
# gmnxix(果凍)、看板: C_and_CPP

題目: 
![](http://pic.pimg.tw/taichunmin/1308366340-ddf909bc1d748655f524517a1315e213.jpg)

題目的意思應該是輸入 123456789
然後就會分別輸出下面的東西
我目前只想到輸出三角形的這個程式碼@@
(輸出的部分先用 `\*` 表示)
可是答案當然不是長這樣= =

```cpp
#include <stdio.h>
#include <stdlib.h>
int main(void)
{
  int i,j,n=5;
  for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++)
      printf("\*");
    printf("\\n");
  }
  system("pause"); return(0);
}
```

然後我程式學的也不是很好,
剛剛一直把學過的東西在腦理想一遍
不知道要怎樣才能用所學的東西拼出這個程式> <
現在完全屬於卡住的狀態@@
P.S不瞞各位說這是期末作業,然後這題占總成績10%這樣QAQ
有請高手指點Q\_Q

- - -

程式碼如下，請務必看懂，不懂請留言發問。

```cpp
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int main(void)
{
  int i,j;
  char cNUM[10]="123456789";
  for(i=0;i<9;i+=2)
    printf("%9s\n",&cNUM[i]);
  printf("\n\n");
  for(i=0;i<9;i+=2)
  {
    for(j=0;j<strlen(cNUM);j++)
      printf("%c",(j>=i)?cNUM[j]:' ');
    printf("\n");
  }
  printf("\n\n");
  for(i=0;i<9;i+=2)
  {
    for(j=strlen(cNUM)-1;j>=i;j--)
      printf("%c",cNUM[j]);
    printf("\n");
  }
  printf("\n\n");
  system("pause");
}
```
