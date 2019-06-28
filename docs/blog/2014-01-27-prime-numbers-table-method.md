---
date: "2014-01-27 09:36"
categories: CPP
tags: [CPP, reference]
---
# 產生質數 (建表法)

這個只是自用的代碼庫。

```cpp
#include<iostream>
#include<cmath>
using namespace std;

/*
 * p: 質數表
 * p_cnt: 質數數量計算
 */
int p[10000] = {2,3,5,7}, p_cnt =4;

/*
 * Is Prime Function
 * @param ia 需要檢測是否為質數的數字
 * @return bool 是否為質數
 */
bool is_prime( int ia )
{
    for(int i=0;i<p_cnt && p[i]*p[i]<=ia;i++)
        if( ia % p[i] == 0 )
            return false;
    return true;
}

/*
 * Build Prime Function
 * @param prime_max 這個是質數的最大值，須設定為 最大範圍的 開根號，例如 sqrt( 2147483647 ) = 46340，函式會自動建表到比這個數字大的一個質數
 * @return void
 */
void build_prime( int prime_max = 46340 )
{
    for( int i=11, j=2; p[p_cnt-1]<=prime_max; i+=j, j=6-j )
        if( is_prime(i) )
            p[ p_cnt++ ] = i;
}

int main()
{
    build_prime();
    cout<<p_cnt<<' '<<p[p_cnt-1]<<endl;
}
```
