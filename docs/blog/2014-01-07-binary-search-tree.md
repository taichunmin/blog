---
date: "2014-01-07 02:22"
categories: C
tags: [C, 'Binary Search Tree', algorithm, BST]
---
# Binary Search Tree

有學弟來問我怎麼寫資料結構的作業，題目就是在已知資料的出現次數時，找到該筆測資的最佳[二元搜尋樹](http://zh.wikipedia.org/wiki/%E4%BA%8C%E5%85%83%E6%90%9C%E5%B0%8B%E6%A8%B9)。所以我就順手寫了一個程式啦。只不過程式雖然是寫出來了，學弟他們當然還要自己轉成 Visual Basic 的程式碼囉～

![](https://ooo.0o0.ooo/2017/03/29/58dad6307e76a.png)

## 輸入說明

每組測試資料中，第一行有一個整數 ``$n$``，代表這組測試資料有幾筆資料；接下來第二行有 ``$n$`` 個由小到大的整數，依序代表第 ``$1$`` ~ ``$n-1$`` 個資料的值；第三行有 ``$n$`` 個整數，依序代表第 ``$1$`` ~ ``$n-1$`` 個資料的出現次數。若沒有輸入 ``$n$`` (EOF) 則程式結束。

## 輸出說明

請根據 ``$1$`` ~ ``$n-1$`` 個資料的出現次數，排出該資料的最佳二元搜尋樹（任一組解）。

## 範例輸入

```
5
29 36 41 49 57
1 5 2 3 6
```

## 範例輸出

```json
{
  "data": 49,
  "left":
  {
    "data": 36,
    "left":
    {
      "data": 29,
      "left":
      null,
      "right":
      null,
    },
    "right":
    {
      "data": 41,
      "left":
      null,
      "right":
      null,
    },
  },
  "right":
  {
    "data": 57,
    "left":
    null,
    "right":
    null,
  },
}
```

## 程式碼

```cpp
#include<iostream>
#include<cstdio>
#include<cstring>
#define SIZE 10
#define oo 2147483647
using namespace std;

struct map_S{
    int w,f,p;
    // weight, frequence, parent
};

struct node{
    node *left, *right;
    int a;
};

node *root = NULL;
int arr1[ SIZE ], freq[ SIZE ], ia;
map_S map[ SIZE ][ SIZE ];

void debug()
{
    cout<<"weight:"<<endl;
    for(int i=0;i<SIZE;i++)
    {
        for(int j=0;j<SIZE;j++)
            printf("%3d",map[i][j].w);
        cout<<endl;
    }
    cout<<"frequence:"<<endl;
    for(int i=0;i<SIZE;i++)
    {
        for(int j=0;j<SIZE;j++)
            printf("%3d",map[i][j].f);
        cout<<endl;
    }
    cout<<"parent:"<<endl;
    for(int i=0;i<SIZE;i++)
    {
        for(int j=0;j<SIZE;j++)
            printf("%3d",map[i][j].p);
        cout<<endl;
    }
}

int DP1(int left=0,int right=ia-1)
{
    if( left<0 || left >= ia || right<0 || right >= ia || right<left )
        return 0;
//    cout<<endl<<"left="<<left<<" right="<<right<<endl;
//    debug();
//    cin.get();
    if(map[left][right].p==-1)
    {
        map[left][right].w = oo;
        map[left][right].p = -1;
        for( int i = left; i<= right; i++ )
        {
            int sum = freq[i];
            sum += DP1(left,i-1);
            sum += DP1(i+1,right);
            if(sum < map[left][right].w)
            {
                map[left][right].w = sum;
                map[left][right].p = i;
            }
        }
    }
    return map[left][right].w + map[left][right].f;
}

void inline print_space(int ia)
{
    while(ia--) printf(" ");
}

void print_tree( node *ptr = NULL, int tab_size = 2, int space = 0 )
{
    if( ptr==NULL )
    {
        print_space(space);
        printf("null%c\n",(space!=0?',':' '));
        return;
    }

    print_space(space);
    printf("{\n");

    print_space(space + tab_size);
    printf("\"data\": %d,\n", ptr->a);

    print_space(space + tab_size);
    printf("\"left\":\n");

    print_tree( ptr->left, tab_size, space+tab_size );

    print_space(space + tab_size);
    printf("\"right\":\n");

    print_tree( ptr->right, tab_size, space+tab_size );

    print_space(space);
    printf("}%c\n",(space!=0?',':' '));
}

void delete_tree(node* ptr=NULL)
{
    if(ptr==NULL)
        return;
    delete_tree(ptr->left);
    delete_tree(ptr->right);
    delete ptr;
}

node* DP2(int left=0, int right=ia-1)
{
    if( left<0 || left >= ia || right<0 || right >= ia || right<left )
        return NULL;
    node *pa = new node;
    pa->a = arr1[map[left][right].p];
    pa->left = DP2(left,map[left][right].p-1);
    pa->right = DP2(map[left][right].p+1,right);
    return pa;
}

int main()
{
    while(cin>>ia)
    {
        for(int i=0;i<ia;i++)
            cin>>arr1[i];
        for(int i=0;i<ia;i++)
            cin>>freq[i];
//        cin.get();
        memset(map, -1, sizeof(map));
        for(int i=0;i<ia;i++)
            for(int j=i;j<ia;j++)
                map[i][j].f = ( j>i ? map[i][j-1].f : 0 ) + freq[j];
        DP1();
//        debug();
        root = DP2();
        print_tree(root);
        delete_tree(root);
    }
}
```
