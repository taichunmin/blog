---
title: 可以出現一串字左右跑來跑去的程式
date: 2008-07-30T13:40:00+08
tags:
  - CMD程式
---
# 可以出現一串字左右跑來跑去的程式

#include  
#include  
**using namespace** std;

**void** gotoxy(int xpos, int ypos)  
{  
  COORD scrn;  
  HANDLE hOuput = GetStdHandle(STD\_OUTPUT\_HANDLE);  
  scrn.X = xpos; scrn.Y = ypos;  
  SetConsoleCursorPosition(hOuput,scrn);  
}

**int** main()  
{  
    string s="Hello!";  
    **int** len=s.length();  
    **while**(1)  
    {  
        gotoxy(0,0);  
        cout< **for**(**int** i=0;i<80-len;i++)  
        {  
            Sleep(150);  
            gotoxy(i,0);  
            cout<<' '< }  
        **for**(**int** i=80-len;i>-1;i--)  
        {  
            Sleep(50);  
            gotoxy(i,0);  
            cout< }  
    }  
}