---
title: "[sstream](存資料)建構子"
date: 2008-12-20T13:23:00+08
tags:
  - CMD程式
---
# [sstream](存資料)建構子

\[\[[String Stream Constructors](http://www.cppreference.com/wiki/io/sstream/constructors?do=backlink "Backlinks")\]\]

[C++ Reference](http://www.cppreference.com "[ALT+H]")

You are here: [C++ Reference](http://www.cppreference.com/wiki/start "start") » [C++ I/O](http://www.cppreference.com/wiki/io/start "io:start") » [C++ String Streams](http://www.cppreference.com/wiki/io/sstream/start "io:sstream:start") » [String Stream Constructors](http://www.cppreference.com/wiki/io/sstream/constructors "io:sstream:constructors")

## String Stream Constructors

Syntax:

    #include   
stringstream()  
stringstream( openmode mode )  
stringstream( string s, openmode mode )  
ostringstream()  
ostringstream( openmode mode )  
ostringstream( string s, openmode mode )  
istringstream()  
istringstream( openmode mode )  
istringstream( string s, openmode mode )

The stringstream, ostringstream, and istringstream objects are used for input and output to a string. They behave in a manner similar to fstream, ofstream and ifstream objects. The optional mode parameter defines how the file is to be opened, according to the io\_stream\_mode\_flags. An ostringstream object can be used to write to a string. This is similar to the C sprintf() function. For example:

    ostringstream s1;  
int i \= 22;  
s1 << "Hello " << i << endl;  
string s2 \= s1.str();  
[cout](http://www.opengroup.org/onlinepubs/009695399/functions/cout.html) << s2;

An istringstream object can be used to read from a string. This is similar to the C sscanf() function. For example:

    istringstream stream1;  
string string1 \= "25";  
stream1.str(string1);  
int i;  
stream1 >> i;  
[cout](http://www.opengroup.org/onlinepubs/009695399/functions/cout.html) << i << endl;  // displays 25

You can also specify the input string in the istringstream constructor as in this example:

    string string1 \= "25";  
istringstream stream1(string1);  
int i;  
stream1 >> i;  
[cout](http://www.opengroup.org/onlinepubs/009695399/functions/cout.html) << i << endl;  // displays 25

A stringstream object can be used for both input and output to a string like an fstream object.

Related Topics: [C++ I/O streams](http://www.cppreference.com/wiki/io/start "io:start")