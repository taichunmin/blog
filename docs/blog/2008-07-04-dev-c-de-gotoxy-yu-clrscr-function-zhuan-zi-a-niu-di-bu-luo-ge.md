---
title: Dev-C++ 的gotoxy與clrscr Function(轉自阿牛滴部落格)
date: 2008-07-04T11:00:00+08
tags:
  - CMD程式
---
# Dev-C++ 的gotoxy與clrscr Function(轉自阿牛滴部落格)

gotoxy與clrscr這兩個function在TurboC++編譯器內可以正常的使用!但是用DevC++卻發生未定義的Error....![](http://tw.yimg.com/i/tw/blog/smiley/2.gif) 今天上網找到人家寫好的function...試過的確可以使用~

`#include`

`**void gotoxy(int xpos, int ypos);**`

`**void clrscr(void);**  
//////////////////////////////////////////////////////////////////`

`**void gotoxy(int xpos, int ypos)  
{  
  COORD scrn;     
  
  HANDLE hOuput = GetStdHandle(STD_OUTPUT_HANDLE);  
  
  scrn.X = xpos; scrn.Y = ypos;  
  
  SetConsoleCursorPosition(hOuput,scrn);  
}**`

`//////////////////////////////////////////////////////////////////  
**void clrscr(void)  
{  
    CONSOLE_SCREEN_BUFFER_INFO sbinf;  
    int size;  
    COORD scrn = {0, 0};  
    HANDLE hStdOut = GetStdHandle(STD_OUTPUT_HANDLE);  
    GetConsoleScreenBufferInfo(hStdOut, &sbinf);  
    size = (sbinf.srWindow.Right-sbinf.srWindow.Left+1)*  
        (sbinf.srWindow.Bottom-sbinf.srWindow.Top+1);  
    FillConsoleOutputCharacter(hStdOut, 32, size, scrn, NULL);  
}**`

`//////////////////////////////////////////////////////////////////`

`資料來源:<http://tw.myblog.yahoo.com/josh-chang/article?mid=98&sc=1>  
` `<http://www.prog.hu/tudastar/57830/A+gotoxy+c+-ban.html>`

`關鍵字: DevC++ + gotoxy`
