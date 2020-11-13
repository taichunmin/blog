---
title: C++抓網頁
date: 2008-08-25T12:28:00+08
tags:
  - CMD程式
---
# C++抓網頁

以下程式針對windows平台，應該所有支援Win32的編譯器都可以使用，要讓程式更穩健其實還要加入檢查各種exception的程式碼，這部份可能要麻煩您自行查MSDN。  
基本上沒什麼原理好講的，只不過是呼叫windows作業系統內建的Inet API幫你抓網頁。

#include  
#include  
#include  
#include  
#pragma comment(lib,"libwininet.a")//連結lib  
using namespace std;

const int BUF\_SIZE = 1024;

int Download(const string& url, ostream& output) {  
   char buffer\[BUF\_SIZE\], header\[80\];  
   HINTERNET hUrl, hInet;  
   DWORD rcv, total = 0;  
   
   if (InternetAttemptConnect(0) != ERROR\_SUCCESS) return 0;  
   
   hInet = InternetOpen("download", INTERNET\_OPEN\_TYPE\_DIRECT,  
             NULL, NULL, 0);  
   if (hInet == NULL) return 0;  
   
   hUrl = InternetOpenUrl(hInet, url.c\_str(), header, -1,  
          INTERNET\_FLAG\_NO\_CACHE\_WRITE, 0);  
           
   if (hUrl == NULL) return 0;  
   
   do {  
      InternetReadFile(hUrl, &buffer, BUF\_SIZE, &rcv);  
      output.write(buffer, rcv);  
      total += rcv;  
   } while (rcv > 0);  
   
   InternetCloseHandle(hUrl);  
   InternetCloseHandle(hInet);  
   return total;  
}

int main() {  
   ofstream f("test.txt");  
   int re = Download(http://tw.knowledge.yahoo.com/question/question?qid=1608070605375, f);  
   cout << "共收到 " << re << " byte. \\n";  
   
   system("pause");  
}

  
注意事項  
1.有些開發環境不會幫你自動連結lib。  
假如你使用Dev c++，要在 專案>專案選項>參數>連結器 當中加入  
\[Dev c++所在的路徑\]\\lib\\libwininet.a  
或加入程式碼  
#pragma comment(lib,"winmm.lib")

  
2.我剛試了一下發現程式可以執行，卻抓不到網頁，原來是去年重灌防毒軟體有啟用防火牆功能。記得要幫程式留條路 XD

3.盡責的編譯器會丟出一個warning，這是因為將Inet API無理的要求將-1轉換為DWORD，不管它就好。

4.Inet API的細節請洽MSDN  
<http://msdn.microsoft.com/en-us/library/aa385438.aspx>

引用自<http://tw.knowledge.yahoo.com/question/question?qid=1608070605375>
