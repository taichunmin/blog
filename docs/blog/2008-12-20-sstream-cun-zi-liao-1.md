---
title: "[sstream](存資料)1"
date: 2008-12-20T13:20:00+08
tags:
  - CMD程式
---
# [sstream](存資料)1

# C++ String Streams

String streams are similar to the and libraries, except that string streams allow you to perform I/O on strings instead of streams. The library provides functionality similar to [sscanf](http://www.cppreference.com/wiki/c/io/sscanf "c:io:sscanf") and [sprintf](http://www.cppreference.com/wiki/c/io/sprintf "c:io:sprintf") in the standard C library.

Three main classes are available in :

*   stringstream - allows input and output
    
*   istringstream - allows input only
    
*   ostringstream - allows output only
    

String streams are actually subclasses of iostreams, so all of the functions available for iostreams are also available for stringstream. See the [C++ I/O functions](http://www.cppreference.com/wiki/io/start "io:start") for more information.

In addition, string streams also supply the following functions:

[Constructors](http://www.cppreference.com/wiki/io/sstream/constructors "io:sstream:constructors")

create new string streams

[Operators](http://www.cppreference.com/wiki/io/sstream/operators "io:sstream:operators")

read from and write to string streams

[rdbuf](http://www.cppreference.com/wiki/io/sstream/rdbuf "io:sstream:rdbuf")

get the buffer for a string stream

[str](http://www.cppreference.com/wiki/io/sstream/str "io:sstream:str")

get or set the stream's string