---
date: "2014-03-09 03:54"
categories: SPOJ
tags: [SPOJ, python]
---
# SPOJ 902. Hangover.py

題目網址：[連結](http://www.spoj.com/problems/HANGOVER/)

## 解題報告

* 浮點數與 `$0$` 比較 (包含誤差)

```python
def fzero(fa):
		delta = 1e-5
		return -1 if fa < -delta else ( fa > delta )
```

```python
from sys import stdin

def fzero(fa):
	delta = 1e-5
	return -1 if fa < -delta else ( fa > delta )

ar1, ln1 = [.0]*300, 1
while ln1<300 and fzero(ar1[ln1-1]-5.20)<1:
	ar1[ln1],ln1 = ar1[ln1-1]+1/(ln1+1), ln1+1
ar1[ln1],ln1 = 10.0, ln1+1
while True:
	fa = float(stdin.readline())
	if not fzero(fa):
		break
	for i in range(ln1):
		if fzero(fa-ar1[i])<0:
			print(i,'card(s)')
			break
```
