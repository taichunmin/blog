---
title: 玩心大起之OOXX
date: 2011-03-29T01:31:00+08
tags:
  - CMD程式
---
# 玩心大起之OOXX

之前在網路上認識的聯合大學的學弟，說他被要求做一個OOXX的程式，我一時玩心大起，就寫了一個可以用方向鍵操控的O，並希望藉此引導那個學弟寫出足以拿出來炫耀的壓箱寶。

備註：一定要用Dev-C++編譯喔~

俊佑也看一下~李威誼加油。

```cpp
#include<iostream>
#include<conio.h>
using namespace std;
int show(int va[][3])
{
  char sign[3][9]={"        ","╭╮╰╯","╲╱╱╲"};
  system("cls");
  cout<<endl;
  for(int i=0;i<8;i++)
  {
    cout<<' ';
    for(int j=0;j<8;j++)
    {
      if(i%3!=2 && j%3!=2)
        cout<<sign[ va[i/3][j/3] ][ (i%3)*4 + (j%3)*2   ]
            <<sign[ va[i/3][j/3] ][ (i%3)*4 + (j%3)*2+1 ];
      else if(i%3==2)
      {
        if(j%3!=2)cout<<"─";
        else cout<<"┼";
      }
      else if(j%3==2)cout<<"│";
    } 
    cout<<endl;
  }
  cout<<endl;
}
int main()
{
  int va[3][3];
  for(int i=0;i<3;i++)
    for(int j=0;j<3;j++)
      va[i][j]=0;
  int pos_x=0,pos_y=0;
  char key;
  va[0][0]=1;
  show(va);
  while(true)
  {
    if(!kbhit())continue;
    key=getch();
    if(key==-32)
    {
      key=getch();
      if(key!=72 && key!=80 && key!=75 && key!=77)continue; //上下左右 
    }
    else continue;
    va[pos_y][pos_x]=0;
    pos_x=(pos_x+(key==77)-(key==75)+3)%3;
    pos_y=(pos_y+(key==80)-(key==72)+3)%3;
    va[pos_y][pos_x]=1;
    show(va);
  }
  system("pause");
}
```

真的比XX的學弟認真多了 = =