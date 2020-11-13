---
title: 發問者： 淡 ( 初學者 5 級)
date: 2008-09-13T07:22:00+08
tags:
  - CMD程式
---
# 發問者： 淡 ( 初學者 5 級)

/\*[直接下載檔案](http://163.23.148.11/sManage/upIT/510809/970913-1.cpp)\*/  
#include  
using namespace std;

inline int f(char ch){return ch-'A';}  
inline bool r(){cout<<"請依序輸入 A,H,G (請隔空格) -> "; return true;}

int main()  
{  
  int a\[8\];  
  while(r() && cin>>a\[f('A')\]>>a\[f('H')\]>>a\[f('G')\])  
  {  
    a\[ f('D') \] = a\[ f('A') \] + 1;  
    a\[ f('C') \] = a\[ f('G') \] + a\[ f('A') \] - a\[ f('D') \];  
    a\[ f('B') \] = a\[ f('H') \] - a\[ f('A') \] - a\[ f('C') \];  
    a\[ f('E') \] = a\[ f('A') \] + a\[ f('B') \];  
    a\[ f('F') \] = a\[ f('B') \] + a\[ f('C') \];  
    for(int i=0;i<8;i++)  
      cout<<(char)('A'+i)<<": "< cout< }  
}  
/\*如何使用cpp檔案?  
CPP 檔案是 C++ 程式語言(C with Class)的原始檔。

若要編譯須找尋 C++ 的編譯器(用途：把原始碼變成可以執行的程式)。

雖說都是 C++ 語言，但是每家廠商的編譯器仍有些許不同，我本身是用符合 Dev-C++ 的編譯器的寫法，所以請去下載 Dev-C++。

在這裡提供一個下載點-> [http://163.23.148.11/computer/dl/devcpp-4.9.9.2\_setup.exe](http://163.23.148.11/computer/dl/devcpp-4.9.9.2_setup.exe)

安裝過程就不多說了。安裝好之後，打開原始碼，按下F9即可進行編譯。  
/\*