---
title: system函數 - cls
date: 2000-01-02T12:02:00+08
tags:
  - CMD程式
---
# system函數 - cls

基本用法：  
  

system("cls");  

  
說明：  
  

在命令提示字元中，打這個敘述的功能是把已經輸出的文字清掉，然後再把游標移回到第一行最前面的位置。這個敘述應該是最方便使用的吧，可是這個敘述的速度不是很快，雖然說也不會超過1秒啦。  

  
備註：  
  

如同上面所說，這個敘述的速度很慢，雖然偶爾用一次時不會有什麼感覺，但是，像作一些比較即時性的遊戲（ex：貪吃蛇），你就會發現螢幕會閃的非常厲害，因為要用這種清空螢幕的敘述，等於是在洗畫面，然後這個敘述又會受到電腦硬體設備的影響，快慢是無法決定的，所以用這種敘述作一些即時性遊戲，品質會非常的差。若想要自己寫清空螢幕的函式，可以使用類似於 gotoxy() 功能的函式，先把游標用 gotoxy() 移到最開始的地方，然後輸出能覆蓋整個螢幕的空白，在用 gotoxy() 移回到一開始的地方即可。可是 gotoxy() 好像只有 Turbo-C++ 的編譯程式裡面有內建，如果是和我一樣使用 Dev-C++ 的話，必須要自行宣告這個 gotoxy() 函式。下面我附上這個 gotoxy() 函式給大家參考使用。  
  
gotoxy() 函式範例：  
  

void gotoxy(int xpos, int ypos)  
{  
 COORD scrn;  
 HANDLE hOuput = GetStdHandle(STD\_OUTPUT\_HANDLE);  
 scrn.X = xpos; scrn.Y = ypos;  
 SetConsoleCursorPosition(hOuput,scrn);  
}  
  

這個函式如果需要大量使用時還可以把 hOuput 變數宣告到全域變數去，而且也不需要多次使用 GetStdHandle()，只需要在 main() 函式裡使用一次即可。  
  
這裡再提供一個我不太知道怎麼寫的清空螢幕自定函式：  
  

void clrscr(void)  
{  
 CONSOLE\_SCREEN\_BUFFER\_INFO sbinf;  
 int size=80\*300;  
 COORD scrn = {0, 0};  
 HANDLE hStdOut = GetStdHandle(STD\_OUTPUT\_HANDLE);  
 GetConsoleScreenBufferInfo(hStdOut, &sbinf);  
 FillConsoleOutputCharacter(hStdOut, 32, size, scrn, NULL);  
 SetConsoleCursorPosition(hStdOut,scrn);  
 gotoxy(0,0);  
}  

  
但是，如果有 gotoxy() 函式的話，我的自訂函式寧願這樣寫：  
  

void clrscr(void)  
{  
 gotoxy(0,0);  
 for(int i=0;i<80\*300;i++)printf(" ");  
 gotoxy(0,0);  
}  

  
最後，提醒一下，這三個函式都是要多加一個標頭檔：  
  

#include  

  

[回到總覽](../../taichunmin/20966680)