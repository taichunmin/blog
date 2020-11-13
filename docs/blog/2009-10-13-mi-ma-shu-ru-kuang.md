---
title: 密碼輸入框
date: 2009-10-13T00:38:00+08
tags:
  - CMD程式
---
# 密碼輸入框

```cpp
//981013-1 
/*
輸入密碼時僅顯示輸入的字數 
*/ 
#include<iostream>
#include<conio.h>
#include<windows.h>
using namespace std;

COORD scrn;
HANDLE hOuput;

void gotoxy(int xpos, int ypos)
{
  scrn.X = xpos; scrn.Y = ypos;
  SetConsoleCursorPosition(hOuput,scrn);
}

int main()
{
  hOuput = GetStdHandle(STD_OUTPUT_HANDLE); 
  string usrname,usrpwd;
  string rightname,rightpwd;
  bool login=false;
  char remain='3';
  
  //這裡可以設定讀取紀錄檔裡的密碼 
  rightname="1234";
  rightpwd="4321";
  
  while(remain>'0' && login==false)
  {
    usrname="title 使用者登入                                                                                                              剩 ";
    usrname+=remain;
    usrname+=" 次機會";
    system(usrname.c_str()); 
    usrname="";
    usrpwd="";
    while(usrname==""/* && rightname!=""*/)
    { 
      cout<<" 請輸入帳號 -> ";
      getline(cin,usrname);
      gotoxy(0,0);
    }
    cout<<endl; 
    cout<<" 請輸入密碼 (已輸入  0 個字)"<<endl;
    cout<<" 按方向鍵會誤讀，密碼輸入錯誤只能以Back Space刪除。";
    gotoxy(22,1);
  
    char tempc;
    int tempdel=0,strl=0;
    while(tempc=getch())
    {
      if(tempc==13)break;
      //if(tempc<0 || tempc>127)continue;
      if(tempc==8)
      {
        if(strl-tempdel>0)
        {
          tempdel++;
          gotoxy(20,1);
          cout.width(2);
          cout<<strl-tempdel;
        }
        continue;
      }
      else if(tempdel>0)
      {
        usrpwd[strl-tempdel]=tempc;
        tempdel--;
      }
      else if(strl<99) 
      {
        usrpwd+=tempc;
        strl++;
      }
      //20,1 
      gotoxy(20,1);
      cout.width(2);
      cout<<strl-tempdel;
    }
    usrpwd.resize(strl-tempdel);
    cout<<endl<<endl<<endl;
    if(usrname==rightname && usrpwd==rightpwd)
    {
      cout<<" login!";
      login=true;
    }
    else{
      cout<<" 帳號或密碼有誤!";
      login=false;
    }
    Sleep(1500);
    system("cls");
    remain--;
  }
  return login+0;
}
```