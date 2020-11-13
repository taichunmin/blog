---
title: "[sstream](存資料)str函式"
date: 2008-12-20T13:28:00+08
tags:
  - CMD程式
---
# [sstream](存資料)str函式

## str

Syntax:

    #include   
void str( string s );  
string str();

The function str() can be used in two ways. First, it can be used to get a copy of the string that is being manipulated by the current stream string. This is most useful with output strings. For example:

    ostringstream stream1;  
stream1 << "Testing!" << endl;  
[cout](http://www.opengroup.org/onlinepubs/009695399/functions/cout.html) << stream1.str();

Second, str() can be used to copy a string into the stream. This is most useful with input strings. For example:

    istringstream stream1;  
string string1 \= "25";  
stream1.str(string1);

str(), along with clear(), is also handy when you need to clear the stream so that it can be reused:

    istringstream stream1;  
float num;  
   
// use it once  
string string1 \= "25 1 3.235\\n1111111\\n222222";  
stream1.str(string1);  
while( stream1 >> num ) [cout](http://www.opengroup.org/onlinepubs/009695399/functions/cout.html) << "num: " << num << endl;  // displays numbers, one per line  
   
// use the same string stream again with clear() and str()  
string string2 \= "1 2 3 4 5  6 7 8 9 10";  
stream1.clear();  
stream1.str(string2);  
   
while( stream1 >> num ) [cout](http://www.opengroup.org/onlinepubs/009695399/functions/cout.html) << "num: " << num << endl;  // displays numbers, one per line

Related Topics: [rdbuf](http://www.cppreference.com/wiki/io/sstream/rdbuf "io:sstream:rdbuf"), [C++ I/O Streams](http://www.cppreference.com/wiki/io/start "io:start")