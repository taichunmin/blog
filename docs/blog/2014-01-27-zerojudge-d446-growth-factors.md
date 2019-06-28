---
date: "2014-01-27 09:17"
categories: ZeroJudge
tags: [zerojudge, CPP]
---
# ZeroJudge d446. 生成因數

這題是在這個寒假，因為剛好寫到類似的題目，所以就順手完成的求因數程式。另外，這裡面還盡量讓自己使用 STL 來傳遞資料，看起來效率還不錯 :)

```cpp
#include<iostream>
#include<algorithm>
#include<cstdio>
#include<vector>
using namespace std;

int p[10000] = {2,3,5,7}, p_cnt =4;
struct Exponential
{
    int p,e;
};
bool is_prime( int ia )
{
    for(int i=0;i<p_cnt && p[i]*p[i]<=ia;i++)
        if( ia % p[i] == 0 )
            return false;
    return true;
}
int cmp(const void *a, const void *b)
{
    return *(int*)a - *(int*)b;
}
int bsearch_prime(int ia)
{
    void *ptr = bsearch(&ia, p, p_cnt, sizeof (int), cmp);
    return ptr==NULL ? -1 : (((int*)ptr)-p);
}
int first_prime( int ia )
{
    int tmp = bsearch_prime(ia);
    if( tmp != -1 )
        return p[tmp];
    for(int i=0;i<p_cnt && p[i]*p[i]<=ia;i++)
        if( ia % p[i] == 0 )
            return p[i];
    return ia;
}
void build_prime()
{
    for( int i=11, j=2; p[p_cnt-1]<=60000; i+=j, j=6-j )
        if( is_prime(i) )
            p[ p_cnt++ ] = i;
}
void prime_factor( vector<Exponential> &pf, int n )
{
    pf.resize(0);
    Exponential tmp;
    while(n>1)
    {
        tmp.p = first_prime(n);
        tmp.e = 0;
        while( n%tmp.p==0 )
        {
            tmp.e++;
            n/=tmp.p;
        }
        pf.push_back( tmp );
    }
}
void debug(vector<Exponential> pf)
{
    for(int i=0;i<pf.size();i++)
        printf("%d^%d ",pf.at(i).p,pf.at(i).e);
    puts("");
}
void debug(vector<int> f)
{
    for(int i=0;i<f.size();i++)
        printf("%d ",f.at(i));
    puts("");
}
void factor_dfs( vector<int> &f, vector<Exponential> &pf, int ia = 1, int pos = 0 )
{
//    printf("ia=%d, pos=%d\n",ia,p[pos]);
    if( pos >= pf.size() )
    {
        f.push_back(ia);
        return;
    }
    int exp = pf.at(pos).e;
    pf.at(pos).e=0;
//            cout<<p[i]<<"^"<<exp<<endl;
    for(int i=0;i<=exp;i++,ia*=pf.at(pos).p)
        factor_dfs(f,pf,ia,pos+1);
    pf.at(pos).e=exp;
}
void factor( vector<int> &f, vector<Exponential> &pf, int n )
{
    f.resize(0);
    prime_factor( pf, n );
    factor_dfs( f, pf );
    sort(f.begin(),f.end());
}

int main()
{
    build_prime();
//    cout<<p_cnt<<' '<<p[p_cnt-1]<<endl;
    vector<int> f;
    vector<Exponential> pf;
    int ia;
    while(scanf("%d",&ia)!=EOF)
    {
        factor(f,pf,ia);
        for(int i=0;i<f.size();i++)
            printf("%d%c",f.at(i),(i==f.size()-1?'\n':' '));
    }
}
```
