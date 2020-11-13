---
title: 第一次程式設計小考
date: 2009-10-16T17:40:00+08
tags:
  - Diary
---
# 第一次程式設計小考

今天程式設計上完之後的四點  
有程式設計的小考  
這種考法效率超級差  
我在第一次跟拉拉中建議的東西  
他根本就完全不採用...  
其實這樣也是有優點的啦  
就是  
助教會忙到看不到我在做壞事xd  
因為我把程式碼抓回來了![](//s.pixfs.net/f.pixnet.net/images/emotions/b06.gif)  
  
老實說  
在禮拜四  
有一堆人在找我臨時抱佛腳  
但是  
讓人洩氣的是  
幾乎大家問的問題都是大同小異...  
過半的人  
都是寫一寫之後輸出0.0000  
天阿....  
可見一堆人上課都沒在聽  
考慮使用群組來發話xd  
省得一直講...  
  
謎之聲：你自己也沒在聽阿....  
我：嘿嘿～你有聽到什麼嗎？ （裝傻  
  
對於我來說  
寫C語言也是一個新的挑戰  
學過C++的我  
註定會走得比其他人輕鬆  
但是  
伴之而來的  
是孤單  
因為不知道到時候  
誰可以跟我一起出去組隊比賽...  
政維 宗翰 敬顏 孟軒 董孟 韋智 老莫 都要加油阿  
  
最後  
我決定把我寫的程式碼放上來  
希望  
有人可以真的認真來弄懂  
不想孤單  

```cpp
#define PRO 1
//把上面 PRO 後面的 1 改成 2 就可以執行第 2 題（記得空格不要不見）

#if PRO==1

#include<stdio.h>
#include<stdlib.h>
int main()
{
  int ia,ib;
  double ic,id;
  printf("請分別輸入 a,b,c -> ");
  scanf("%d %d %lf",&ia,&ib,&ic);
  id=ia+ib*ic;
  printf("%d + %d * %lf = %lf\n",ia,ib,ic,id);
  system("pause");
}
#endif

#if PRO==2

#include<stdio.h>
#include<stdlib.h>
int main()
{
  double da;
  printf("請輸入攝氏溫度 -> ");
  scanf("%lf",&da);
  printf("攝氏 %lf 度 = 華氏 %lf 度\n",da,da*9/5+32);
  system("pause");
}
#endif
```
