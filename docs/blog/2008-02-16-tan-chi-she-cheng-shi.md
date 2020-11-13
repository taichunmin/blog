---
title: 貪吃蛇程式
date: 2008-02-16T11:56:00+08
tags:
  - CMD程式
---
# 貪吃蛇程式

/\*  
這是我最近的成果喔  
請各位大大玩過之後給我點意見   多謝大家  
這是原始碼   要自己編譯  
到 <http://gogobox.com.tw/taichunmin> 可以下載執行檔  
\*/  
#include  
#include  
#include  
#include  
#include "reciprocal.h" //倒數時顯示數字用的函式在此 (自訂)  
#define degree\_of\_difficulty 10000  
using namespace std;

int velocity=200;//速度 用於 Sleep() 函式的變數 越大越慢

char bodysign\[3\]="▉",headsign\[3\]="○",foodsign\[3\]="☆";  
int move\_head(int \*head,int direction,char board\[\],int va\[\])  
{  
  int x=\*head%80,y=\*head/80;  
  bool eat\_food=false;  
  if(direction==2 && y>=24)return 0;  
  else if(direction==4 && x<=0)return 0;  
  else if(direction==6 && x>=78)return 0;//因為使用雙字元 ■▉  
  else if(direction==8 && y<=0)return 0;  
   
  if(direction==2)\*head+=80;  
  else if(direction==4)\*head-=2;  
  else if(direction==6)\*head+=2;  
  else if(direction==8)\*head-=80;  
   
  if(board\[\*head\]==foodsign\[0\] && board\[\*head+1\]==foodsign\[1\])eat\_food=true;  
  else if(board\[\*head\]!=' ' && board\[\*head+1\]!=' ')return 0;//撞到身體  
   
  int temp=va\[40\*y+x/2\],vb=(\*head/80)\*40+\*head%80/2;  
  if(temp< degree\_of\_difficulty )va\[vb\]=temp+1;  
  else  
  {  
    va\[vb\]=1;  
    if(velocity>60)velocity-=10;//速度遞減  
  }  
   
  board\[80\*y+x\]=bodysign\[0\],board\[80\*y+x+1\]=bodysign\[1\];  
  board\[\*head\]=headsign\[0\],board\[\*head+1\]=headsign\[1\];  
   
  if(eat\_food)return 1;  
  return 2;  
}

bool move\_tail(int \*tail,char board\[\],int va\[\])  
{  
  int x=\*tail%80,y=\*tail/80;  
  int direction=0;//標示移動的方向  
   
  //找尋方向  
  if(va\[40\*y+x/2\]+1==va\[40\*(y-1)+x/2\] ||  
    (va\[40\*y+x/2\]+1== degree\_of\_difficulty && va\[40\*(y-1)+x/2\]==1))  
    direction=8;  
  else if(va\[40\*y+x/2\]+1==va\[40\*(y+1)+x/2\] ||  
         (va\[40\*y+x/2\]+1== degree\_of\_difficulty && va\[40\*(y+1)+x/2\]==1))  
         direction=2;  
  else if(va\[40\*y+x/2\]+1==va\[40\*y+(x/2-1)\] ||  
         (va\[40\*y+x/2\]+1== degree\_of\_difficulty && va\[40\*y+(x/2-1)\]==1))  
         direction=4;  
  else if(va\[40\*y+x/2\]+1==va\[40\*y+(x/2+1)\] ||  
         (va\[40\*y+x/2\]+1== degree\_of\_difficulty && va\[40\*y+(x/2+1)\]==1))  
         direction=6;  
   
  if(direction==2)\*tail+=80;  
  else if(direction==8)\*tail-=80;  
  else if(direction==6)\*tail+=2;  
  else if(direction==4)\*tail-=2;  
   
  board\[80\*y+x\]=' ',board\[80\*y+x+1\]=' ';  
  va\[40\*y+x/2\]=0;  
}

int main()  
{  
    srand(time(NULL));//設定亂數種子  
     
    //以下是變數宣告  
    int direction=6;//方向 up8 down2 left4 right6  
    char ca;//用於接收按鍵  
    int head=4;//持久性的蛇頭座標 使用 head % 80 即為 x 座標 , 使用 head / 80 即為 y 座標  
    //這個變數的值必須位於 0 ~ 24\*80 ( 1920 ) 之間 , 不開放最後一行  
    int tail=0;//持久性的蛇尾座標  
    char board\[1921\]={"▉▉○"};//盤面顯示  
    int va\[960\]={1,2,3};//盤面紀錄  
    int food;//給蛇吃的食物 ☆  
    bool f\_exist=false;  
    int vc=2;//儲存  move\_tail() 所傳回的值  
     
    //程式開場  
    //    "0         1         2         3         4         5         6         7        8"  
    //    "123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 "  
    cout<<"╔══════════════  << 貪吃蛇遊戲 >>  ══════════════╗";  
    cout<<"║                                                                            ║";  
    cout<<"║                                                                            ║";  
    cout<<"║                                                                            ║";  
    cout<<"║                                                                            ║";  
    cout<<"║                                                                            ║";  
    cout<<"║                              1 . 開 始 遊 戲                               ║";  
    cout<<"║                                                                            ║";  
    cout<<"║                                                                            ║";  
    cout<<"║                                                                            ║";  
    cout<<"║                                                                            ║";  
    cout<<"║                              2 . 結 束 程 式                               ║";  
    cout<<"║                                                                            ║";  
    cout<<"║                                                                            ║";  
    cout<<"║                                                                            ║";  
    cout<<"║                                                                            ║";  
    cout<<"║              ┌─ 請注意 ──────────────────┐            ║";  
    cout<<"║                                                                            ║";  
    cout<<"║                 請務必按 Ctrl + 空白鍵 將輸入法改回英數模式                ║";  
    cout<<"║                                                                            ║";  
    cout<<"║              └───────────────────────┘            ║";  
    cout<<"║                                                                            ║";  
    cout<<"╚══════════════════════════════════════╝";  
    int choice=0;  
    cout<<"請輸入 -> ";  
    cin>>choice; cin.get();  
    if(choice==2)return 0;  
    /\*  
    ╔═╦═╗  
    ╠═╬═╣ ╔╦╗╠═╬╣╓╥╖╒╤╕║╚╩╝╟╫╢╙╨╜╞╪╡╘╧╛  
    ╚═╩═╝  
    \*/  
     
    //倒數  
    system("cls");  
    for(int i=3;i>0;i--)  
    {  
      show\_num(i);  
      Sleep(750);  
      system("cls");  
    }  
     
    //The game's source field  
    for(int i=6;i<1920;i++)board\[i\]=' ';//重設盤面  
    while(1)  
    {  
      if(kbhit())//接收所按的按鍵  
      {  
        ca=getch();  
        if(ca==13)  
        {  
          system("cls");  
          cout<<"╔══════════════   << 遊戲暫停 >>   ══════════════╗";  
          cout<<"║                                                                            ║";  
          cout<<"║                                                                            ║";  
          cout<<"║                                                                            ║";  
          cout<<"║                                                                            ║";  
          cout<<"║                                                                            ║";  
          cout<<"║                              1 . 結 束 程 式                               ║";  
          cout<<"║                                                                            ║";  
          cout<<"║                                                                            ║";  
          cout<<"║                                                                            ║";  
          cout<<"║                                                                            ║";  
//因為貼不下 換下一篇文章
