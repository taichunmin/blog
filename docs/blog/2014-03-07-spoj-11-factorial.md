---
date: "2014-03-07 01:09"
categories: SPOJ
tags: [SPOJ, python]
---
# SPOJ 11. Factorial.py

題目連結：[連結](http://www.spoj.com/problems/FCTRL/)

給定一個 `$n$`，請算出 `$n!$` 的尾端會有幾個 `$0$`

## 解題報告
因為一個尾端的 `$0$` 是由 `$2 * 5$` 所組成，因為 `$2$` 絕對比 `$5$` 還要多，所以只需要算 `$5$` 的數量即可。
所以一開始我寫了一個簡單的除法運算。
```python
for t1 in range(int(input())):
	ia = int(input())
	ans = 0
	while ia>0:
		ia //= 5
		ans += ia
	print(ans)
```
結果居然噴一個 `TLE` 給我。
所以我決定建表！
所以程式碼被我改成以下的樣子：
```python
arr1 = dict()

def count_5(ia):
	ib = ia//5
	if ib == 0:
		return 0
	if ib not in arr1.keys():
		arr1[ib] = ib + count_5(ib)
	return arr1[ib]

for t1 in range(int(input())):
	print( count_5(int(input())) )
```
結果上傳之後，還是很迅速的噴給我一個 `TLE`，整個傻眼…看了看題目，時間限制是 `6s`，看起來應該是其他的原因了。可是，Python 又不像 C++ 一樣，可以把 `cin/cout` 改用 `scanf/printf`，於是只好去 Google 找找看，找了一些文章之後，才發現原來很少人用 Python 在解 OnlineJudge，很多地方都是答非所問，囧。後來我終於找到有一篇專門提到 SPOJ 的 Python 如何加速 [連結](http://ianwitham.wordpress.com/2009/12/18/making-python-programs-run-faster/)，於是我將程式碼再稍做修改，就成功 `Accept` 啦。
```python
import sys
arr1 = dict()

def count_5(ia):
	ib = ia//5
	if ib == 0:
		return 0
	if ib not in arr1.keys():
		arr1[ib] = ib + count_5(ib)
	return arr1[ib]

for t1 in range(int(sys.stdin.readline())):
	print( count_5(int(sys.stdin.readline())) )
```
改天來把找到解答的這個[連結](http://ianwitham.wordpress.com/2009/12/18/making-python-programs-run-faster/)看懂好了 ：）
