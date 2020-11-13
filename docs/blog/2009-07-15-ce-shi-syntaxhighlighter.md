---
title: 測試SyntaxHighlighter
date: 2009-07-15T23:50:00+08
tags:
  - CMD程式
---
# 測試SyntaxHighlighter

```cpp
//10891：Game of sum
#include<iostream>
using namespace std;
int na[101][101];
int main()
{
  //freopen("","r",stdin);
  //freopen("","w",stdout);
  int ta;
  while(cin>>ta,ta)
  {
    for(int i=1;i<=ta;i++)
    {
      cin>>na[i][i];
      for(int j=1;j<i;j++)na[i][j]=na[i][i];
    }
    for(int i=2;i<=ta;i++)
      for(int j=1;j<i;j++)
        na[i][j]+=na[i-1][j];
    /*
    for(int i=1;i<=ta;i++)
    {
      for(int j=1;j<=ta;j++)
        cout<<na[i][j]<<' ';
      cout<<endl;
    }
    system("pause");
    */
    for(int i=2;i<=ta;i++)
      for(int j=0;i+j<=ta;j++)
      {
        int max=-2147483647;
        for(int k=0;k<i-1;k++)//範圍 (j+1)~(i+j) 
        {
          if(na[1+j+k][1+j]-na[2+j+k][i+j]>max)max=na[1+j+k][1+j]-na[2+j+k][i+j];//左到右 
          if(na[i+j][i+j-k]-na[1+j][i+j-k-1]>max)max=na[i+j][i+j-k]-na[1+j][i+j-k-1];//右到左 
        }
        if(na[i+j][1+j]>max)max=na[i+j][1+j];//全選 
        na[1+j][i+j]=max;
      }
    cout<<na[1][ta]<<endl;
  }
  //system("pause");
}
```