---
date: "2014-03-28 11:42"
categories: C
tags: [C, gdb, debug]
---
# GDB 教學

老師給予一個測試程式：

```c
#include <stdlib.h>
#include <stdio.h>

int main(int argc, char * arg[]){
    int a, b, c, d, e, f, i;
    a = 0;
    b = 8;
    c = 29;
    d = 44;
    e = 444;

    printf("%d %d %d %d %d", a, b, c, d, e);

    for (i=0; i<argc; i++) printf("@@ %s \n", arg[i]);
   system("pause");
    return 0;
}
```

## 指令紀錄

* 編譯指令：`$ gcc -g -o test1.exe test.c`
* 進入 GDB：`$ gdb` or `$ gdb test1.exe`
* 讀取執行檔： `file test1.exe`
* 設定執行參數： `show args`, `set args arg1 arg2 arg3`
* 執行：`run`
* 顯示10行程式碼：`list`
* 設定中斷點於第八行：`b 8`
* 顯示中斷點清單：`info break`
* 印出即時的變數：`print a`，a 是變數名稱
* 持續追蹤變數：`display a`，a 是變數名稱
* 取消追蹤變數：`undisplay 1`，後面第二個參數要接數字，必須是 display list 的數字
