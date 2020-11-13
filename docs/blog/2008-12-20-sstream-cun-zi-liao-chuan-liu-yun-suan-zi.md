---
title: "[sstream](存資料)串流運算子"
date: 2008-12-20T13:25:00+08
tags:
  - CMD程式
---
# [sstream](存資料)串流運算子

## String Stream Operators

Syntax:

    #include   
operator<<  
operator>>

Like C++\_I/O\_Streams, the simplest way to use string streams is to take advantage of the overloaded « and » operators. The « operator inserts data into the stream. For example:

    stream1 << "hello" << i;

This example inserts the string “hello” and the variable i into stream1. In contrast, the » operator extracts data out of a string stream:

    stream1 >> i;

This code reads a value from stream1 and assigns the variable i that value.

Related Topics: [C++ I/O Streams](http://www.cppreference.com/wiki/io/start "io:start")