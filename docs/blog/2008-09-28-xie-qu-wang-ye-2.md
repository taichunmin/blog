---
title: 擷取網頁2
date: 2008-09-28T00:44:00+08
tags:
  - CMD程式
---
# 擷取網頁2

引用自:http://tw.knowledge.yahoo.com/question/question?qid=1008092505022  
  
提供你一個抓網頁的程式  
因為偷懶，所以你要先知道網站的IP  
(可以用nslookup查詢)  
另外如果想要指定網頁  
程式碼中的 GET 要改成 GET xxx.html  
\==========================================  
#include  
#include  
#include  
#include  
#include  
#include  
#include  
#include  
  
#define BUFSIZE 64  
  
int main(int, char \*\[\]) {  
int socketfd;  
struct sockaddr\_in dist;  
char buffer\[BUFSIZE\];  
  
char \*server\_ip = "140.114.77.3"; // www.cs.nthu.edu.tw  
int server\_port = 80; // http  
char \*http\_request = "GET /\\n";  
unsigned int request\_len = strlen(http\_request);  
  
printf("create TCP socket\\n");  
if ((socketfd = socket(PF\_INET, SOCK\_STREAM, IPPROTO\_TCP)) == -1)  
exit(1);  
  
printf("setup TCP socket\\n");  
memset(&dist, 0, sizeof(dist));  
dist.sin\_family = AF\_INET;  
dist.sin\_addr.s\_addr = inet\_addr(server\_ip);  
dist.sin\_port = htons(server\_port);  
  
printf("connecting...\\n");  
if (connect(socketfd, (struct sockaddr \*) &dist, sizeof(dist)) == -1)  
exit(1);  
  
printf("send http request\\n");  
if (send(socketfd, http\_request, request\_len, 0) != request\_len)  
exit(1);  
  
printf("receive data\\n");  
while (1) {  
int bytes = 0;  
if ((bytes = recv(socketfd, buffer, BUFSIZE-1, 0)) < 1)  
break;  
buffer\[bytes\] = '\\0';  
fprintf(stdout, buffer);  
}  
fprintf(stdout, "\\n");  
close(socketfd);  
exit(0);  
}  
\==========================================  
  
這只是把網頁原始碼抓下來的簡單程式  
如果要抓超連結，還要再去把原始碼存起來然後分析  
抓取 [會有一點點的苦工  
另外如果你有用linux，其實有更方便的方法來抓網頁  
可以用用看lynx套件，抓超連結或是原始內容都很方便  
還有一點要注意  
不是所有網頁抓下來就可以正常觀看的  
有些網頁內容格式是UTF-8](之後的字串，這你要自己寫了<br/)