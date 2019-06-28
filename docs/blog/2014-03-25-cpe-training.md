---
date: "2014-03-25 17:33"
categories: NCHUIT
tags: [NCHUIT, CPE, ACM]
---
# CPE 培訓 2014-02-25

## CPE 考試

* 報名期間：2014/03/11 (二) 14:25 ～ 2014/03/21 (五) 18:00
* 考試時間：2014/03/25 (二)
    * 17:30-17:40 報到， 18:00 之後不得入場
    * 17:40-18:30 練習
    * 18:40-21:40 考試
* 網址：[http://cpe.cse.nsysu.edu.tw/newest.php](http://cpe.cse.nsysu.edu.tw/newest.php)

## 今日練習題目

[http://acm.hdu.edu.cn/webcontest/contest_show.php?cid=6714](http://acm.hdu.edu.cn/webcontest/contest_show.php?cid=6714)

## 加速 input / output 技巧

* 使用 `scanf`, `printf`
* 使用 `sync_with_stdio(false);`

```cpp
int main()
{
  // 需注意這樣會有 scanf, printf 和 cin, cout 不同步的副作用
  cin.sync_with_stdio(false);
  cout.sync_with_stdio(false);
}
```

## 浮點數精確度處理

```cpp
int dzero( double da )
{
    const double delta = 1e-8;
    return ( da < -delta ) ? -1 : ( da > delta );
}
```
