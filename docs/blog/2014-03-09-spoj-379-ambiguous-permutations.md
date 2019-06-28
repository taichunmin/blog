---
date: "2014-03-09 06:25"
categories: SPOJ
tags: [SPOJ, python]
---
# SPOJ 379. Ambiguous Permutations.py

題目網址：[連結](http://www.spoj.com/problems/PERMUT2/)

## 解題報告

* 使用 `enumerate()` 在 `for ... in ... :` 中使用 `list` 的 Key 和 Value

```python
while True:
	n = int(input())
	if not n:
		break
	ar1, ar2 = [int(i) for i in input().split(' ')], [0]*n
	for ki, vi in enumerate(ar1):
		ar2[vi-1] = ki+1
	if ar1==ar2:
		print('ambiguous')
	else:
		print('not ambiguous')
```
