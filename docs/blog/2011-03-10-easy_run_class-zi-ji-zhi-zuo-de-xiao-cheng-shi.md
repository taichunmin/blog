---
title: Easy_run_class 自己製作的小程式
date: 2011-03-10T00:55:00+08
tags:
  - Easy_run_class
---
# Easy_run_class 自己製作的小程式

下載網址：[http://dl.dropbox.com/u/12113131/Install\_Easy\_run\_class.msi](http://dl.dropbox.com/u/12113131/Install_Easy_run_class.msi)

這個是我無聊之下用C++寫的小程式

主要的運行環境是 Windows 系統

寫出程式之後，又跑去研究登陸檔

研究怎麼讓他能夠在.class 的檔案上面自動開啟

以及在.java 的檔案右鍵選單上面出現 "編譯成 .class" 的選項

然後就直接使用 Setup2GO 包裝成安裝檔啦 :)

底下公布原始碼 :) 歡迎大家提供意見

```cpp
#include<iostream>
using namespace std;
int CMD(string sa)
{
    cout<<" !送出指令 -> "<<endl<<sa<<endl<<endl; 
    return system(sa.c_str());
}
int main(int argc,char* argv[])
{
    if(argc<2)
    {
        cout<<"本程式不支援直接開啟"<<endl;
        system("pause");
        return 0;
    }
    string sa,path,fname;
    char class_c[]=".class",java_c[]=".java";
    for(int i=1;i<argc;i++)
    {
        sa=argv[i];
        bool ba=true;//.java
        for(int j=0;j<5;j++)
            if(sa[sa.size()-5+j]!=java_c[j])ba=false;
        if(ba)
        {
            path=fname=sa;
            int ia=-1;//find and save the location of '\\' 
            for(int j=sa.size()-1;i>0;j--)
                if(sa[j]=='\\' && sa[j-1]<128)
                {
                    ia=j;
                    break;
                }
            path.erase(ia+1,path.size());
            fname.erase(0,ia+1);
            CMD("title Compile "+fname+".java");
            CMD("cd /d \""+path+"\"");
            if( CMD("@javac "+fname+"") != 0 )
              system("pause");
        }
        bool bb=true;//.class
        for(int j=0;j<6;j++)
            if(sa[sa.size()-6+j]!=class_c[j])bb=false;
        if(bb)
        {
            sa.erase(sa.end()-6,sa.end());
            path=fname=sa;
            int ia=-1;//find and save the location of '\\' 
            for(int j=sa.size()-1;i>0;j--)
                if(sa[j]=='\\' && sa[j-1]<128)
                {
                    ia=j;
                    break;
                }
            path.erase(ia+1,path.size());
            fname.erase(0,ia+1);
            CMD("title Run "+fname+".class");
            CMD("cd /d \""+path+"\"");
            CMD("@cls & java "+fname+"");
            printf("\n");
            for(int j=0;j<80;j++)printf("=");
            cout<<"程式執行結束，";
            system("pause");
        }
    }
}
```

```cpp
Windows Registry Editor Version 5.00
[HKEY_CLASSES_ROOT\Applications\easy_run_class.exe]
[HKEY_CLASSES_ROOT\Applications\easy_run_class.exe\shell]
[HKEY_CLASSES_ROOT\Applications\easy_run_class.exe\shell\open]
[HKEY_CLASSES_ROOT\Applications\easy_run_class.exe\shell\open\command]
@="\"C:\\Program Files\\Easy_run_class\\easy_run_class.exe\" \"%1\""
[HKEY_CLASSES_ROOT\.class]
@="class_auto_file"
[HKEY_CLASSES_ROOT\class_auto_file]
[HKEY_CLASSES_ROOT\class_auto_file\shell]
[HKEY_CLASSES_ROOT\class_auto_file\shell\open]
[HKEY_CLASSES_ROOT\class_auto_file\shell\open\command]
@="\"C:\\Program Files\\Easy_run_class\\easy_run_class.exe\" \"%1\""
[HKEY_CLASSES_ROOT\.java]
@="java_auto_file"
[HKEY_CLASSES_ROOT\java_auto_file]
[HKEY_CLASSES_ROOT\java_auto_file\shell]
[HKEY_CLASSES_ROOT\java_auto_file\shell\compile]
@="編譯成 .class"
[HKEY_CLASSES_ROOT\java_auto_file\shell\compile\command]
@="\"C:\\Program Files\\Easy_run_class\\easy_run_class.exe\" \"%1\""
[HKEY_CLASSES_ROOT\Local Settings\Software\Microsoft\Windows\Shell\MuiCache]
"C:\\Program Files\\Easy_run_class\\easy_run_class.exe"="easy_run_class.exe"
```