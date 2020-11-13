---
title: 前置處理器的預設變數和C語言的清空緩衝
date: 2010-10-12T09:40:00+08
tags:
  - CMD程式
---
# 前置處理器的預設變數和C語言的清空緩衝

學到新東西總是讓人雀躍不已阿  
特別是曾經困擾過我的問題:)

```cpp
#include<iostream>
using namespace std;
int main()
{
  cout<< __LINE__ <<endl; // 這一行的行號 
  cout<< __FILE__ <<endl; // 原始檔的檔名 
  cout<< __DATE__ <<endl; // 編譯時的日期 
  cout<< __TIME__ <<endl; // 編譯時的時間 
  cout<< __cplusplus <<endl; // 可以使用C++函式 
  cout<< __STDC__ <<endl; // 可以使用C函式 
  cout<< __func__ <<endl; // 顯示現在所在的函式 
  cout<< __FUNCTION__ <<endl; // 顯示現在所在的函式 
  cout<< __PRETTY_FUNCTION__ <<endl; // 顯示現在所在的函式宣告 
  system("pause");
}
```

上面這個是個很好玩的小知識  
再來的這個  
就是我剛剛所講困擾過我許久的問題  
就是 scanf("%c",&ca); 會讀取到換行字元的問題  
以前在大一的時候上C語言沒學到  
沒想到在大二自願去當助教的時候學到了= =  
原來有兩種方式可以處理阿  
第一種是用 fflush(stdin); //清空緩衝區  
第二種方法是在讀取%c之前加一個空格  
scanf("\_%c",&ca); // 要在那個底線的位置空格  
學到這個用法我還是比較高興的  
因為我之前只會笨笨的用C++的cin.get()來讀掉多餘的換行符號= =  
  
還有還有  
就是在C++裡面判斷型態的方法  

```cpp
#include<iostream>
#include<typeinfo>
using namespace std;
int main()
{
  cout<<"The type of int is "<<typeid(int).name()<<endl;
  cout<<"The type of bool is "<<typeid(bool).name()<<endl;
  cout<<"The type of char is "<<typeid(char).name()<<endl;
  cout<<"The type of float is "<<typeid(float).name()<<endl;
  cout<<"The type of double is "<<typeid(double).name()<<endl;
  cout<<"The type of long long is "<<typeid(long long).name()<<endl;
  cout<<"The type of short int is "<<typeid(short int).name()<<endl;
  cout<<"The type of const int is "<<typeid(const int).name()<<endl;
  cout<<"The type of unsigned int is "<<typeid(unsigned int).name()<<endl;
  //typeid 是一種 class，非函式!!  故無法 cout << typeid(int) ;
  system("pause");
}
```

  
  
相信接下來再學了視窗程式設計  
會讓我程式設計的功力更上一層樓吧:)