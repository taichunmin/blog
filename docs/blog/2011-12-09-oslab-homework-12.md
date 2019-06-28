---
date: "2011-12-09 19:56"
categories: CPP
tags: [CPP, oslab, homework]
---
# 作業系統實驗 Lab12

```cpp
#include<iostream>
#include<cstdio>
#include<cstdlib>
#include<sstream>
using namespace std;

int freeFrameList[] = {4,7,8,5,1,2,11,12,10,13,14,15};
int freeFrameCnt = 12, freeFrameIndex = 0;
string frame[16] = {"ee","","","ww","","","gg","","","ff","","","","","",""};
string processA[] = {"ab","ef","cd","gh","xa","ta","ab","cg"};
string processB[] = {"rx","yy","zz","ww","mr","mk","fn","zx"};

void show_all(bool ba=false)
{
    if(!ba)
    {
        for(int i=0;i<79;i++)
            cout<<"=";
        cout<<endl;
    }
    printf("\n%s\n","ProcessA");
    for(int i=0;i<8;i++)printf(" %-2d",i);
    puts("");
    for(int i=0;i<8;i++)printf("%3s",processA[i].c_str());
    printf("\n\n%s\n","ProcessB");
    for(int i=0;i<8;i++)printf(" %-2d",i);
    puts("");
    for(int i=0;i<8;i++)printf("%3s",processB[i].c_str());
    printf("\n\n%s\n","freeFrameList");
    for(int i=freeFrameIndex;i<freeFrameCnt;i++)printf("%3d",freeFrameList[i]);
    printf("\n\n%s\n","frame");
    for(int i=0;i<16;i++)printf(" %-2d",i);
    puts("");
    for(int i=0;i<16;i++)printf("%3s",frame[i].c_str());
    puts("");puts("");
}

int main()
{
    string sa;
    show_all(true);
    for(int i=0;i<freeFrameCnt && cout<<"Enter next (ProcessName/page No) -> " && getline(cin,sa);i++)
    {
        sa.erase(0,sa.size()-3);
        istringstream ssin(sa);
        char ca;
        int ia;
        ssin>>ca>>ia;
        switch(ca)
        {
        case 'a':case 'A':
            frame[freeFrameList[freeFrameIndex++]] = processA[ia];
            break;
        case 'b':case 'B':
            frame[freeFrameList[freeFrameIndex++]] = processB[ia];
            break;
        }
        show_all();
    }
}
/*
ProcessA 0
ProcessB 1
ProcessA 4
ProcessB 5
ProcessB 7
ProcessA 7
ProcessA 2
ProcessB 6
*/
```
