---
title: 資料結構題目
date: 2008-08-06T13:47:00+08
tags:
  - CMD程式
---
# 資料結構題目

以下是在<http://tw.knowledge.yahoo.com/question/question?qid=1508080604078>回答的問題  
  
第一題  
int main( ) {  
push(6);　//6  
push(2);　//6,2  
pop( );　//6  
push(4);　//6,4  
push(5);　//6,4,5  
pop( );　//6,4  
push(pop( )+3);　//6,7  
push(pop( )+2);　//6,9  
push(7)　//6,9,7  
}

第二題  
2.請將下列運算式分別以前序運算式及後續運算式表示。  
4\*(3+8)\*(9-6)+8/2

　　　　　　　　　　　　　 ＋  
　　　　　　　　　　　 ／　　　＼  
　　　　　　　　／　　　　　　　　　＼  
　　　　　　＊　　　　　　　　　　　　　÷  
　　　　／　　　＼　　　　　　　　　　／　＼  
　　＊　　　　　　　－　　　　　　　　８　２  
　／　＼　　　　　／　＼  
４　　　＋　　　　９　６  
　　　／　＼  
　　　３　８  
前序　＋＊＊４＋３８－９６／８２  
後序　４３８＋＊９６－＊８２／＋

第三題  
3.請將下列前序運算式分別以中序運算式及後序運算式表示。  
\-\*-AB+CD/EF  
　　　　　　　　　　　－  
　　　　　　　　／　　　　　＼  
　　　　　＊　　　　　　　　　÷  
　　　／　　　＼　　　　　　／　＼  
　　－　　　　　＋　　　　　Ｅ　Ｆ  
　／　＼　　　／　＼  
　Ａ　Ｂ　　Ｃ　　　Ｄ  
  
中序　（Ａ－Ｂ）＊（Ｃ＋Ｄ）－Ｅ／Ｆ  
後序　ＡＢ－ＣＤ＋＊ＥＦ／－

第四題  
4.請將下列後序運算式分別以中序運算式及前序運算式表示。  
CE/F+B\*DE\*+  
　　　　　　　　　　＋  
　　　　　　　　／　　　＼  
　　　　　　＊　　　　　　　＊  
　　　　　／　＼　　　　　／　＼  
　　　＋　　　　　Ｂ　　　Ｄ　Ｅ  
　　／　＼  
　÷ 　　　Ｆ  
／　＼  
Ｃ　Ｅ  
前序　＋＊＋／ＣＥＦＢ＊ＤＥ  
中序　（Ｃ／Ｅ＋Ｆ）＊Ｂ＋Ｄ＊Ｅ

第五題  
(1)刪除ptr  
if(ptr==first)  
{  
　first=first->next;  
}  
else  
{  
　node\* temp=first;  
　while(temp->next!=ptr)  
　　temp=temp->next;  
　temp->next=ptr->next;  
}  
delete ptr;

(2)刪除a增加b  
node\* temp=ptr->next;  
ptr->next=new node;  
ptr->next->next=temp->next;  
delete temp;
