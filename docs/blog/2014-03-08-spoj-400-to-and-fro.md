---
date: "2014-03-08 02:20"
categories: SPOJ
tags: [SPOJ, python]
---
# SPOJ 400. To and Fro.py

題目連結：[連結](http://www.spoj.com/problems/TOANDFRO/)

## 解題報告

* 使用 `strip()` 去除 `readline()` 最後的 `\n` 符號
* 使用 `list("abc")` 將 `string` 轉換成 `char list`
* 使用 `''.join()` 將 `char list` 轉換成 `string`
* 使用 `sa[5:10] = sa[9:4:-1]` 對 `char list` 進行部份 reverse
* 使用 `print(,end='')` 避免 print 自動換行

```python
from sys import stdin
while True:
	ia = int(stdin.readline())
	if not ia:
		break
	sa = list(stdin.readline().strip())
	for i in range( len(sa)//(2*ia) + (len(sa)%(2*ia)!=0) ):
		sa[ 2*i*ia+ia : 2*(i+1)*ia ] = sa[ 2*(i+1)*ia-1 : 2*i*ia+ia-1 : -1 ]
	for i in range(ia):
		print(''.join(sa[i::ia]),end='')
	print()
```
