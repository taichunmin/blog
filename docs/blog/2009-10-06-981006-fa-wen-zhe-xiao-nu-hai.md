---
title: 981006 發問者：小女孩
date: 2009-10-06T19:56:00+08
tags:
  - CMD程式
---
# 981006 發問者：小女孩

我前三題都回答不太出來。  
我對 C++ 比較熟，所以就用 C++ 寫給你啦：）  
  
第四題：請寫一個C程式,使用遞迴函數列印出2的n次方式值

```cpp
#include<iostream>
using namespace std;

double fa(int ia)
{
  if(ia>0)return 2*fa(ia-1);
  if(ia<0)return 0.5*fa(ia+1);
  if(ia==0)return 1.0;
} 

int main()
{
  cout<<"使用遞迴函數列印出2的n次方式值"<<endl;
  int ia;
  while(cout<<"請輸入 n -> ",cin>>ia)
  {
    cout<<fa(ia)<<endl;
  }
  system("pause");
}
```

第五題：請使用C語言寫出程式來計算下列無窮序列前n項的和, 如:1+1/2根號2+1/3根號3+...  

```cpp
#include<iostream>
#include<cmath>
using namespace std;

int main()
{
  cout<<"請使用C語言寫出程式來計算右列無窮序列前n項的和：1+1/2根號2+1/3根號3+..."<<endl;
  long long ia;
  double da;
  while(cout<<"請輸入 n -> ",cin>>ia)
  {
    da=1.0;
    for(int i=1;i<ia;i++)
      da+=pow(1.0/ia,1.0/ia);
    cout.setf(ios::fixed,ios::floatfield);
    cout<<da<<endl;
  }
  system("pause");
}
```