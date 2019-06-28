---
date: "2014-01-18 23:09"
categories: Diary
tags: [C, CPP, diary]
---
# 吳永輝老師培訓

## 第一章 程式設計技巧

 1. 簡單計算題
    * 輸入處理輸出
 2. 解題技巧
    * 離線計算方法
    * 實數精度處理
    * 二分法

### 浮點數精確度處理

```cpp
int dzero( double da )
{
    const double delta = 1e-8;
    return ( da < -delta ) ? -1 : ( da > delta );
}
```

### 建表求質數

```cpp
int p[100000] = {2,3,5,7}, p_cnt =4;

bool is_prime( int ia )
{
    for(int i=0;i<p_cnt && p[i]*p[i]<=ia;i++)
        if( ia % p[i] == 0 )
            return false;
    return true;
}

void build_prime()
{
    for( int i=11, j=2; i<1000000; i+=j, j=6-j )
        if( is_prime(i) )
            p[ p_cnt++ ] = i;
}
```

### 網站

 * [http://poj.org/](http://poj.org/)
 * [http://acm.zju.edu.cn/onlinejudge/](http://acm.zju.edu.cn/onlinejudge/)
 * [http://acm.hdu.edu.cn/](http://acm.hdu.edu.cn/)

### 實戰練習

 1. [\[POJ 1004\]](http://poj.org/problem?id=1004) Financial Management
 2. [\[POJ 1552\]](http://poj.org/problem?id=1552) Doubles
 3. [\[POJ 2739\]](http://poj.org/problem?id=2739) Sum of Consecutive Prime Numbers
 4. [\[POJ 1005\]](http://poj.org/problem?id=1005) I Think I Need a Houseboat
 5. [\[POJ 1003\]](http://poj.org/problem?id=1003) Hangover
 6. [\[POJ 2262\]](http://poj.org/problem?id=2262) Goldbach's Conjecture
 7. [\[POJ 3299\]](http://poj.org/problem?id=3299) Humidex
 8. [\[POJ 3518\]](http://poj.org/problem?id=3518) Prime Gap

- - -

### POJ 1004 Financial Management

<http://poj.org/problem?id=1004>

這一題看似簡單，但是卻讓我 WA 了很多次，最後猜測很有可能是因為 Judge 的資料是用 %.2f 產生的，像我習慣使用 double，所以都會用 %.2lf 就吃了一大堆 WA (float 溢位)，改用純 C 的 Code 才終於 AC 了。

```cpp
#include<iostream>
#include<cstdio>
#include<cmath>
using namespace std;

int main()
{
    float dsum = 0, da;
    for(int i=0;i<12;i++)
    {
        cin>>da;
        dsum += da;
    }
    cout<<"$"<<dsum/12<<endl;
}

```

### POJ 1552 Doubles

<http://poj.org/problem?id=1552>

這一題比較奇怪的就是它的測資終止條件，很多人卡在這個奇怪的條件，這題的數字極少，所以倒是不需要考慮排序法，實作排序法反而會引此增加題目的 AC 時間，得不償失。

```cpp
#include<iostream>
#include<cstdio>
#include<sstream>
using namespace std;

int arr1[15];

int main()
{
    int ia,cnt1=0,ans=0;
    while(cin>>ia,ia+1)
    {
        if(ia==0)
        {
            cout<<ans<<endl;
            cnt1=ans=0;
            continue;
        }
        arr1[cnt1++] = ia;
        for(int i=0;i<cnt1-1;i++)
        {
            if( ia%2==0 && arr1[i] == ia/2 )
                ans++;
            if( arr1[i] == ia*2 )
                ans++;
        }
    }
}
```

### POJ 2739 Sum of Consecutive Prime Numbers

<http://poj.org/problem?id=2739>

這一題由於題目範圍不高，所以就考慮直接預先建表，然後在查表輸出。比較難的部分，可能就是要怎麼樣列舉出所有的區間的和。我是採用很像選擇排序法的迴圈，只不過改成計算加總就是了。

```cpp
#include<iostream>
using namespace std;

int arr1[10001] = {};
int p[10000] = {2,3,5,7}, p_cnt =4;

bool is_prime( int ia )
{
    for(int i=0;i<p_cnt && p[i]*p[i]<=ia;i++)
        if( ia % p[i] == 0 )
            return false;
    return true;
}

void build_prime()
{
    for( int i=11, j=2; i<10000; i+=j, j=6-j )
        if( is_prime(i) )
            p[ p_cnt++ ] = i;
}

int main()
{
    build_prime();
    for(int i=0;i<p_cnt;i++)
    {
        int sum = p[i];
        arr1[ sum ]++;
        for(int j=i+1;j<p_cnt;j++)
        {
            sum += p[j];
            if(sum>10000)break;
            arr1[ sum ]++;
        }
    }
    int ia;
    while(cin>>ia,ia)
        cout<<arr1[ia]<<endl;
}
```

### POJ 1005 I Think I Need a Houseboat

<http://poj.org/problem?id=1005>

這題是 `$\pi$` 的基礎應用，只要有背 `$\pi$` 的寫法，基本上就可以輕鬆拿分。 `2.0 * acos(0.0)`

```cpp
#include<iostream>
#include<cmath>
#define PI 2.0 * acos(0.0)
using namespace std;

int main()
{
    int ta;
    cin>>ta;
    double da,db;
    for(int t1=0;t1<ta;t1++)
    {
        cin>>da>>db;
        cout<<"Property "<<t1+1<<": This property will begin eroding in year "<<ceil( PI * (da*da + db*db) / 100.0 )<<"."<<endl;
    }
    cout<<"END OF OUTPUT."<<endl;
}
```

### POJ 1003 Hangover

<http://poj.org/problem?id=1003>

這一題我有做浮點數的精確度判斷，但是別人的程式碼好像沒有也會過，我就搞不太清楚了。

```cpp
#include<iostream>
using namespace std;

double arr1[1000000] = {.5};

int dzero( double da )
{
    const double delta = 1e-8;
    return ( da < -delta ) ? -1 : ( da > delta );
}

int main()
{
    int cnt1=1;
    while( dzero( arr1[cnt1-1] - 5.20 ) <= 0 )
    {
        arr1[cnt1] = arr1[cnt1-1] + 1.0/(cnt1+2);
        cnt1++;
    }
    double da;
    while(cin>>da,dzero(da))
    {
        for(int i=0;i<cnt1;i++)
            if( dzero(arr1[i]-da) > 0 )
            {
                cout<<i+1<<" card(s)"<<endl;
                break;
            }
    }
}
```

### POJ 2262 Goldbach's Conjecture

<http://poj.org/problem?id=2262>

恩... 這題我卡了很久，因為這題很要求執行時間，所以一直在修改優化，到最後終於成功 AC，我使用了建表法求質數，使用二分搜尋法加速質數表的搜尋，最後再用了 Cache 以後，才成功在時間內，AC 通關。

```cpp
#include<iostream>
#include<cstdio>
#include<cstdlib>
#include<cstring>
using namespace std;

int arr1[1000001];
int p[100000] = {2,3,5,7}, p_cnt =4;

bool is_prime( int ia )
{
    for(int i=0;i<p_cnt && p[i]*p[i]<=ia;i++)
        if( ia % p[i] == 0 )
            return false;
    return true;
}

void build_prime()
{
    for( int i=11, j=2; i<1000000; i+=j, j=6-j )
        if( is_prime(i) )
            p[ p_cnt++ ] = i;
}

int cmp(const void *a, const void *b)
{
    return *(int*)a - *(int*)b;
}
bool bsearch_prime(int ia)
{
    return bsearch(&ia, p, p_cnt, sizeof (int), cmp)!=NULL;
}
int fa(int ia)
{
    if( arr1[ia] == -1 ) // No Cache
    {
        int ib = ia/2;
        bool ba = true;
        for(int i=0;i<p_cnt && p[i]<=ib;i++)
            if( bsearch_prime(ia-p[i]) )
            {
                ba = false;
                arr1[ia] = p[i];
                break;
            }
        if(ba) arr1[ia]=0;
    }
    return arr1[ia];
}

int main()
{
    memset(&arr1,-1,sizeof(arr1));
    build_prime();

    int ia;
    while(cin>>ia,ia)
    {
        int ib = fa(ia);
        if(ib==0) puts("Goldbach's conjecture is wrong.");
        else printf("%d = %d + %d\n", ia, ib, ia-ib);
    }
}
```

### POJ 3299 Humidex

<http://poj.org/problem?id=3299>

這題... 我承認被那個很恐怖的數學式嚇到了，其實題目沒有很難，只要函式套對，方程式解對，這題就過了，我這題還學到經驗，用 `float` 才不會又白白送 WA ....
```cpp
#include<iostream>
#include<cstdio>
#include<cmath>
using namespace std;

double toT( double d, double h )
{
    return h - 0.5555 * (( 6.11 * exp(5417.7530 * ( 1/273.16 - 1/(d+273.16)) )) - 10.0);
}
double toD( double h, double t )
{
    return 1/(1/273.16-log(((h - t)/0.5555+10.0)/6.11)/5417.7530)-273.16;
}
double toH( double d, double t )
{
    return t + 0.5555 * (( 6.11 * exp(5417.7530 * ( 1/273.16 - 1/(d+273.16)) )) - 10.0);
}

int main()
{
    double da, db, arr1[3];
    // T, D, H
    char ca, cb;
    while( cin>>ca )
    {
        if(ca=='E')break;
        cin>>da>>cb>>db;
        if( ca > cb )
        {
            char tmpc = ca;
            ca = cb;
            cb = tmpc;
            double tmpd = da;
            da = db;
            db = tmpd;
        }
        if( ca == 'D' && cb == 'H' )
        {
            printf("T %.1f D %.1f H %.1f\n",(float)toT(da,db),(float)da,(float)db);
        }
        if( ca == 'D' && cb == 'T' )
        {
            printf("T %.1f D %.1f H %.1f\n",(float)db,(float)da,(float)toH(da,db));
        }
        if( ca == 'H' && cb == 'T' )
        {
            printf("T %.1f D %.1f H %.1f\n",(float)db,(float)toD(da,db),(float)da);
        }
    }
}
```

### POJ 3518 Prime Gap

<http://poj.org/problem?id=3518>

這題我也解頗久，因為我靈機一動，想用內建的 `bsearch` 改成可以直接搜尋區間，所以搞了一陣子，這次這樣玩，下次就有經驗了，哈哈。

另外，`ptr[1]` 其實會讀取到非法記憶體，雖然我目前是在最後面多加上一個值，但是這個只是治標不治本...
```cpp
#include<iostream>
#include<cstdlib>
#include<cstdio>
using namespace std;

int find_int;
int p[200000] = {2,3,5,7}, p_cnt =4;

bool is_prime( int ia )
{
    for(int i=0;i<p_cnt && p[i]*p[i]<=ia;i++)
        if( ia % p[i] == 0 )
            return false;
    return true;
}

void build_prime()
{
    for( int i=11, j=2; i<=1300000; i+=j, j=6-j )
        if( is_prime(i) )
            p[ p_cnt++ ] = i;
}

int cmp( const void * aa, const void * bb )
{
    int a = *(int*)aa;  // "aa" is always the value you are looking for.
    int *ptr = (int*)bb ;
    return ( a < ptr[0] ) ? -1 : ( a >= ptr[1] );
    // ptr[1] may cause "Run Time Error," Now I append a large data to solve the issue, But not good way...
}

int main()
{
    build_prime();
    while(cin>>find_int,find_int)
    {
        int *ptr = (int*)bsearch( &find_int, p, p_cnt-1, sizeof(int), cmp );
        if(ptr[0]==find_int)
            cout<<0<<endl;
        else cout<<ptr[1]-ptr[0]<<endl;
    }
}
```
