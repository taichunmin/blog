---
date: "2014-03-08 02:28"
categories: SPOJ
tags: [SPOJ, python]
---
# SPOJ 1025. Fashion Shows.py

題目網址：[連結](http://www.spoj.com/problems/FASHION/)

## 解題報告

* `split()` 後的 `list` 不能使用 `sort()`，必須使用 `sorted()`
* `sorted()` 和 `sort()` 加上 `reverse=True` 參數後可以由大排到小 [\[參考資料\]](https://wiki.python.org/moin/HowTo/Sorting#Ascending_and_Descending)

```python
from sys import stdin
for t1 in range(int(stdin.readline())):
	ia = int(stdin.readline())
	# 這裡只能用 sorted，因為還沒有變數可用 sort()
	ar1 = sorted([int(i) for i in stdin.readline().split(' ')], reverse=True)
	ar2 = sorted([int(i) for i in stdin.readline().split(' ')], reverse=True)
	ans = 0
	for i in range(len(ar1)):
		ans += ar1[i] * ar2[i]
	print(ans)
```
