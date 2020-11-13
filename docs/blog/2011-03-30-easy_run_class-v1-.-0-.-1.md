---
title: Easy_run_class v1.0.1
date: 2011-03-30T08:37:00+08
tags:
  - Easy_run_class
---
# Easy_run_class v1.0.1

下載網址：[http://dl.dropbox.com/u/12113131/Install\_Easy\_run\_class.msi](http://dl.dropbox.com/u/12113131/Install_Easy_run_class.msi)

2011/03/30 v1.0.1更新：

修改安裝的相關描述，刪除著作權警示。

把 .JAVA 和 .CLASS 新增圖示。

新增一個可以自動新增 JAVA 路徑進環境變數 ( Path 和 CLASSPATH ) 的程式。使用者可能要自行以系統管理員身分執行。

未安裝在預設路徑，或未安裝，將會顯示有不明錯誤。

注意：若安裝過 v1.0.0 的使用者建議先到新增移除程式移除 Easy\_run\_class v1.0 再安裝新版。

閒聊：

看到一堆人在安裝的時候都沒有設定環境變數，乾脆寫一個程式自動新增算了。

於是，我又用C++寫了一個程式，程式碼如下：

```cpp
#include<iostream>
#include<windows.h>
#include<fstream>
using namespace std;
int CMD(string sa)
{
    cout<<" !送出指令 -> "<<endl<<sa<<endl<<endl; 
    return system(sa.c_str());
}
int main(int argc,char* argv[])
{
    if(CMD("java -version")==0 && 0)//reg query \"HKEY_LOCAL_MACHINE\\SOFTWARE\\JavaSoft\\Java Development Kit\\1.6\" /v JavaHome > path.txt
    {
      cout<<endl<<"你的電腦已經設定好 JAVA 的環境變數。"<<endl;
      Sleep(2000);
      return 0;
    } 
    bool ba=true;
    ifstream fin;
    string sa,sb;
    if(ba)
    {
      CMD("dir /b /s \"%ProgramW6432%\\java\\javac.exe\" \"%ProgramFiles(x86)%\\java\\javac.exe\" \"%ProgramFiles%\\java\\javac.exe\" > path.txt");
      fin.open("path.txt");
      if(getline(fin,sa))
      {
        sa.erase(sa.end()-9,sa.end());
        sa.append(";");
        ba=false;
      }
    }
    fin.close();
    fin.clear();
    if(ba)
    {
      CMD("reg query \"HKEY_LOCAL_MACHINE\\SOFTWARE\\JavaSoft\\Java Development Kit\\1.6\" /v JavaHome > path.txt");
      fin.open("path.txt");
      if(getline(fin,sb))
      {
        getline(fin,sb);
        fin>>sa>>sa;
        for(int i=0;i<4;i++)fin.get();
        getline(fin,sa);//輸入 
        sa.append("\\bin;");
        ba=false;
      }
    }
    fin.close();
    fin.clear();
    if(ba)
    {
      CMD("where /r \"%ProgramW6432%\\java\" javac.exe > path.txt & \
           where /r \"%ProgramFiles(x86)%\\java\" javac.exe >> path.txt & \
           where /r \"%ProgramFiles%\\java\" javac.exe >> path.txt");
      fin.open("path.txt");
      if(getline(fin,sa))
      {
        //資訊: 找不到提供模式的檔案。
        sa.erase(sa.end()-9,sa.end());
        sa.append(";");
        ba=false;
      }
    }
    fin.close();
    fin.clear();
    if(ba)
    {
      Sleep(2000);
      system("cls");
      cout<<"抱歉，本程式因為不知名的原因，無法自動幫您把 java 新增進環境變數 PATH 和"<<endl<<" CLASSPATH，請改用手動新增。"<<endl;
      cout<<"( 均須系統管理員權限，若您的使用者無此權限，則無法使用本 Easy_run_class 程式。)"<<endl;
      cout<<endl<<"Windows XP：我的電腦 -> 內容 -> 進階 -> 環境變數。"<<endl;
      cout<<endl<<"Windows 7：電腦 -> 內容 -> 進階系統設定 -> 進階 -> 環境變數。"<<endl<<endl;
      cout<<"新增系統的環境變數，名稱為 CLASSPATH，內容為：.  (一個小數點)。"<<endl<<endl;
      cout<<"修改 PATH 環境變數，增加 javac.exe 的位置，通常是在 JAVA 安裝目錄的 bin\\ 資料夾"<<endl;
      cout<<"然後要在位置後面補上一個分號(;)，然後貼在原本 PATH 內容的前面。"<<endl<<endl;
      cout<<"  ex. C:\\Program Files\\java\\1.6.0_24\\bin;......"<<endl;
      cout<<"                                         (這裡是原本 PATH 的內容)"<<endl;
      system("pause");
    }
    else
    { 
      CMD("reg query \"HKEY_LOCAL_MACHINE\\SYSTEM\\ControlSet001\\Control\\Session Manager\\Environment\" /v Path > path.txt");
      fin.open("path.txt");
      getline(fin,sb);
      getline(fin,sb);
      fin>>sb>>sb;
      for(int i=0;i<4;i++)fin.get();
      getline(fin,sb);
      sa+=sb;
      fin.close();
      fin.clear();
      ofstream fout("path_and_classpath.bat");
      fout<<"@echo off"<<endl;
      fout<<"reg add \"HKEY_LOCAL_MACHINE\\SYSTEM\\ControlSet001\\Control\\Session Manager\\Environment\""
          <<" /v Path /t REG_EXPAND_SZ /d \""<<sa<<"\" /f"<<endl;
      fout<<"reg add \"HKEY_LOCAL_MACHINE\\SYSTEM\\ControlSet001\\Control\\Session Manager\\Environment\""
          <<" /v CLASSPATH /t REG_SZ /d \".\" /f"<<endl;
      fout<<"echo;"<<endl;
      fout<<"echo 若顯示存取被拒，請以系統管理員身分執行。"<<endl;
      fout<<"echo;"<<endl;
      fout<<"echo 這個批次檔的位置在 %cd%\\path_and_classpath.bat。"<<endl;
      fout<<"echo;"<<endl;
      fout<<"pause"<<endl; 
      //CMD("start path_and_classpath.bat");
    }
    CMD("start explorer \"%cd%\"");
    return 0;
}
//where /r "%programfiles%\java" javac.exe & where /r "%ProgramFiles(x86)%\java" javac.exe
//reg query "HKEY_LOCAL_MACHINE\SOFTWARE\JavaSoft\Java Development Kit\1.6" /v JavaHome
```

歡迎大家給予意見:)

安裝的時候程式碼都會一起安裝喔:)

<http://taichunmin.pixnet.net/blog/category/1765785> 這是之前的那篇文章:)
