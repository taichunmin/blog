---
title: "[分享] C++顏色的使用(轉自淡江資工地上站)"
date: 2008-07-04T11:23:00+08
tags:
  - CMD程式
---
# [分享] C++顏色的使用(轉自淡江資工地上站)

 作者  allenwang15 (王學仁)                                 站內  cs99b  
 標題  \[分享\] C++顏色的使用  
 時間  2008/06/04 Wed 23:49:11

C++的DOS介面也可以加顏色進去

製作期末作業  我為了讓畫面更美觀

就加了一些控制顏色的函式進去

在這邊跟大家分享一下

\-----------------------以下為程式碼-----------------------

#include  
#include//需要使用到此標頭檔

using namespace std;

void SetColor(unsigned short ForeColor=4,unsigned short BackGroundColor=0)  
//給予參數默許值，使它可以接受0/1/2個參數  
{  
    HANDLE hCon = GetStdHandle(STD\_OUTPUT\_HANDLE); //本例以輸出為例  
    SetConsoleTextAttribute(hCon,ForeColor|BackGroundColor);  
};

int ColorCode(int f,int b)  
{  
    return f + 16\*b;  
}

  
int main()  
{

   for(int i=0;i<16;i++)  
   {  
       SetColor(ColorCode(i,0));  
       cout<<"△▲☆★◆◇ ColorCode("< }

  
   for(int j=0;j<16;j++)  
   {  
       SetColor(ColorCode(0,j));  
       cout<<"△▲☆★◆◇ ColorCode(0,"< }

    system("pause");  
}

\---------------------------結束---------------------------

簡單的說就是在SetColor的函式裡放入指定的色碼就可以了

SetColor(前項為字的顏色,後項為底的顏色)

ColorCode的函式是拿來計算色碼在傳給SetColor用的

我用的時候沒有去宣告的ColorCode函式

直接把兩個數據丟給SetColor也是能用

不過我今天要貼文前試了一下

發現不用的話  只輸出字是不會有問題的

不過要輸出底色的話就會亂掉

所以想要使用完善就兩個函式都宣告吧

以上若有誤  煩請更正了

\--  
 ◤                ▁▁──────────────────────╮  
                 淡江資工地上站      ▁▁     Author: allenwang15                    ●│  
         ◣  bbs.cs.tku.edu.tw    From: 218-167-164-137.dynamic.hinet.net  │