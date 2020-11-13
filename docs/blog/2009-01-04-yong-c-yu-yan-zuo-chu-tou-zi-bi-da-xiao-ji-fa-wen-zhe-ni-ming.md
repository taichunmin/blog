---
title: 用”C語言”做出骰子比大小 (急) ， 發問者：匿名
date: 2009-01-04T07:46:00+08
tags:
  - CMD程式
---
# 用”C語言”做出骰子比大小 (急) ， 發問者：匿名

/\*  http://tw.knowledge.yahoo.com/question/question?qid=1608123002894  
發問者：  
 用”C語言”做出骰子比大小 (急)  
   
 我需要一個用"C語言"做的程式  
 題目:兩顆骰子比大小的遊戲 然後要有得分  
 有內掛尤佳!  
 程式設計不須太複雜!!  
  
以下是他提供的一個同學寫的程式  
  
發問者說  
 上面是我同學做的 可以做成這樣嗎?  
 (請幫忙加以修改)  
  
這個程式我怎麼看都好像是猜一個點數的大或小而已  
所以我就動手把它改一下  
  
甚至 如果在懶一點  
亂數直接生產在 1~2 的範圍就好了  
根本不必生產 1~6  
\*/  
  
/\*  
#include  
#include  
#include  
int main(int argc, char \*argv\[\])  
{  
 int x,y,z=100;  
 srand(time(NULL));//整個程式裡面這個函式最好只執行一次  
 while(z>0)  
 {  
 x=rand()%6+1;  
 do{  
 printf("請猜你所骰出的點數 (1)小(2)大 -> ");  
 scanf("%d",&y);  
 }while(y>2 || y<1);  
 if((x-1)/3+1==y)  
 {  
 printf("您贏了\\n");  
 z=z+10;  
 }  
 else  
 {  
 printf("您輸了\\n");  
 z=z-10;  
 }  
 printf("您的得分為%d\\n",z);  
 }  
 system("PAUSE");  
 return 0;  
}  
//\*/  
  
/\*  
我覺得其他兩個人回答的東西都還算不錯  
  
發問者：  
 最後一個問題:輸入英文會掛點 要怎克服阿?  
  
第一個回答者阿茂 ：  
 那就不要輸入英文阿(開玩笑的 @\_@!!)  
 不過通常問幾分的話應該都會輸入數字不會說想到要輸入英文  
 還有我沒想過這問題所以也沒研究過  
 你等高手回答吧  
   
我就來回答這個曾經困擾過我的問題吧  
\*/  
#include  
#include  
  
int special\_scanf()//雖然這樣做功能會受限，可是這樣輸入英文就不會掛點  
{  
 char ca\[100\];  
 scanf("%s",ca);  
 if(strlen(ca)==1 && ca\[0\]>='1' && ca\[0\]<='2')  
 return ca\[0\]-'0'+0;  
 else return -1;  
}  
  
int main()  
{  
 int ia,ib,in,score=0,i;  
 srand(time(NULL));  
 for(i=0;i<5;i++) //比幾次  
 {  
 system("cls");  
 ia = rand() %6+1;  
 ib = rand() %6+1;  
 printf("第 %d 回合",i+1);  
 do{  
 printf("請選比小還是比大 (1)小(2)大 -> ");  
 in=special\_scanf();  
 }while(in==-1);  
 printf("你的點數 : %d  電腦的點數 : %d\\n", ia, ib);  
 if(ia == ib)printf("平手\\n");  
 else if((ia > ib) ^ (2-in))  
 {  
 printf("你贏了\\n");  
 score += 100;  
 }  
 else  
 {  
 printf("你輸了\\n");  
 score -= 100;  
 }  
 printf("你的分數:%d\\n", score);  
 system("PAUSE");  
 }  
}  
  
  
//以下是於980104下午1點多新增的內容  
#include  
#include  
  
int special\_scanf()  
{  
 char ca\[100\];  
 scanf("%s",ca);  
 if(strlen(ca)==1 && ((ca\[0\]>='1' && ca\[0\]<='3') || ca\[0\]=='5'))  
 return ca\[0\]-'0'+0;  
 else return -1;  
}  
  
int main(int argc, char \*argv\[\])  
{  
 int x,y,z=0;  
 srand(time(NULL));//整個程式裡面這個函式最好只執行一次  
 while(1)  
 {  
 do{  
 printf("請猜你所骰出的點數 (1)小(2)大(3)離開遊戲 -> ");  
 y=special\_scanf();  
 }while(y>5 || y<1);  
   
 x=rand()%6+1;  
 if(y==3)break;  
 else if(y==5)z+=1000000000;  
 else if((x-1)/3+1==y)  
 {  
 printf("您贏了\\n");  
 z=z+100;  
 }  
 else  
 {  
 printf("您輸了\\n");  
 z=z-100;  
 }  
 printf("您的得分為%d\\n",z);  
 }  
 system("PAUSE");  
 return 0;  
}