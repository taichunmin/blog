---
title: Ansi 字串 與 TCHAR Unicode 之間的轉換
date: 2008-11-15T14:33:00+08
tags:
  - CMD程式
---
# Ansi 字串 與 TCHAR Unicode 之間的轉換

引用自：[井民全觀點 (Jing's Perspective)](http://mqjing.blogspot.com/2007/10/c-ansi-tchar-unicode.html)  
我寫程式習慣使用 TCHAR 來當作字串的資料型態,  
但是有些早期的 C programmer 不習慣使用 通用型態的 TCHAR.  
  
當要合作時, 就會出現問題. 這個問題往往會出現在 呼叫 method 的字串轉換上.  
  
把下面這東西寫下來, 以免每次都還要翻程式找出來.  
  
void UnicodeToAnsi(TCHAR \*unicode,char\* ansi)  
{  
  int n;  
  n=WideCharToMultiByte(CP\_ACP,0,unicode,-1,ansi,0,NULL,FALSE);  
  WideCharToMultiByte(CP\_ACP,0,unicode,-1,ansi,n,NULL,FALSE);  
}  
  
void AnsiToUnicode(char\* ansi,TCHAR\* unicode)  
{  
  int n;  
  n=MultiByteToWideChar(CP\_ACP,0,ansi,-1,0,0);  
  MultiByteToWideChar(CP\_ACP,0,ansi,-1,unicode,n);  
}  
  
  
\================  另一個方便 sections =================  
Ansi -> Unicode  
  
int n;  
n=MultiByteToWideChar(CP\_ACP,0,strFullFilename,-1,NULL,0);  
TCHAR\* strFullFilename2=new TCHAR\[n\];  
MultiByteToWideChar(CP\_ACP,0,strFullFilename,-1,strFullFilename2,n);  
bool bret=rd->bSave2BMP(strFullFilename2);  
delete\[\] strFullFilename2;  
  
  
by Jing  
  
Labels: C++  
  
歡迎任意形式的重製與轉貼, 但是請註明來源及作者. 謝謝. by Jing(井)