---
title: C++ String Stream 說明文件（英翻中）
date: 2008-12-20T15:57:00+08
tags:
  - CMD程式
---
# C++ String Stream 說明文件（英翻中）

C++ String Streams 字串串流

String streams 跟 和 函式庫很相近，不同的地方是，  
string streams 可以讓你在 string 的基礎上使用 I/O，而不是利用串流 stream 當基礎  
。 函式庫提供和 c 語言裡的 sscanf 和 sprintf 相類似的功能。

在 裡的三個主要類別：

  \*stringstream - 允許輸入輸出  
  \*istringstream - 只允許輸入，類似 cin  
  \*ostringstream - 只允許輸出，類似 cout

String streams 完全是 iostreams 的從屬類別 subclasses，所以所有在 iostreams 可以  
使用的函式也都可以用在 stringstream。請看以下網址以便獲得更多 C++ I/O functions  
的資訊。

因此，string streams 也支援以下函式：

變數宣告    創造新的 string streams  
 << 和 >>   利用串流運算子來讀取字串串流  
rdbuf()     取得這個 string stream 的緩衝區 buffer 位址  
str()       取得或設定 string streamg 的 string

變數宣告：

  語法：  
   
    #include

    stringstream();  
    stringstream( openmode mode );  
    stringstream( string s, openmode mode );  
    ostringstream();  
    ostringstream( openmode mode );  
    ostringstream( string s, openmode mode );  
    istringstream();  
    istringstream( openmode mode );  
    istringstream( string s, openmode mode );  
     
  stringstream、ostringstream 和 istringstream 是輸入和輸出到字串。他們表現  
  有些類似 fstream、ofstream 和 ifstream。將怎麼打開文件的旗幟必須根據  
  io\_stream\_mode\_flags 的定義。  
  ostringstream 可以被用於在一個字串進行寫入。這類似 C 的 sprintf()。  
   
  範例：  
   
    ostringstream s1;  
    int i = 22;  
    s1 << "Hello " << i << endl;  
    string s2 = s1.str();  
    cout << s2;  
   
  同樣的，istringstream 可以被用於從一個字串中進行讀取。這類似 C 的 sscanf()。  
   
  範例：  
   
    istringstream stream1;  
    string string1 = "25";  
    stream1.str(string1);  
    int i;  
    stream1 >> i;  
    cout << i << endl;  // 顯示 25  
   
  你也可以指定字串在你宣告變數的時候，如同以下的範例。  
   
    string string1 = "25";  
    istringstream stream1(string1);  
    int i;  
    stream1 >> i;  
    cout << i << endl;  // displays 25  
     
  一個 stringstream 也可以像 fstream 一樣對一個字串進行輸入輸出。  
   
使用串流運算子：

  語法：  
   
    #include operator<<  
    operator>>  
     
  和 cin、cout 使用方法一樣。  
   
使用 str()：

  語法：  
   
    #include

    void str( string s );  
    string str();  
   
  str() 有兩種使用方式。首先，直接取得目前 stringstream 裡的字串備份，這是要輸  
  出 stringstream 最好用的方法。  
     
  範例：  
   
    ostringstream stream1;  
    stream1 << "Testing!" << endl;  
    cout << stream1.str();  
     
  第二個用法，str() 可以被用來設定 stringstream 裡的字串。  
   
  範例：  
   
    istringstream stream1;  
    string string1 = "25";  
    stream1.str(string1);  
     
  str() 如果和 clear() 一起使用的話，可以把 stringstream 清空，以便重新使用這個  
  stringstream。  
   
  範例：  
   
    istringstream stream1;  
    float num;  
     
    // use it once  
    string string1 = "25 1 3.235\\n1111111\\n222222";  
    stream1.str(string1);  
    while( stream1 >> num )  
      cout << "num: " << num << endl;  // displays numbers, one per line  
     
    // use the same string stream again with clear() and str()  
    string string2 = "1 2 3 4 5  6 7 8 9 10";  
    stream1.clear();  
    stream1.str(string2);  
     
    while( stream1 >> num )  
      cout << "num: " << num << endl;  // displays numbers, one per line