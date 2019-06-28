---
date: "2014-03-08 19:28"
categories: SPOJ
tags: [SPOJ, python]
---
# SPOJ 4300. Rectangles.py

題目網址：[連結](http://www.spoj.com/problems/AE00/)

## 解題報告

* 使用 `tuple` 快速指定變數
* 建表法求質數 `is_prime()`, `build_prime()`
* 質因數分解程式碼 `prime_factor()`

```python
from sys import stdin

p,p[:4],p_cnt = [0]*100,[2,3,5,7],4

def is_prime(n):
	for i in range(p_cnt):
		if p[i]*p[i]>n:
			break
		if n%p[i]==0:
			return False
	return (n>=2)

def build_prime(prime_max):
	global p_cnt
	prime_max,i,j = int(prime_max**0.5),11,2
	while p[p_cnt-1]<=prime_max:
		if is_prime(i):
			p[p_cnt], p_cnt = i, p_cnt+1
		i,j = i+j,6-j

def prime_factor(n):
	pf = []
	for i in range(p_cnt):
		if p[i]*p[i]>n:
			break
		if n%p[i]==0:
			n,cnt = n//p[i],1
			while n%p[i]==0:
				n,cnt = n//p[i], cnt+1
			pf.append([ p[i], cnt ])
	if n>1:
		pf.append([n,1])
	return pf

build_prime(10**4)
# print(p_cnt)

ans=0
for i in range(1, int(stdin.readline())+1 ):
	pf1,ia = prime_factor(i),1
	for pf_i in pf1:
		ia *= (pf_i[1]+1)
	ans+=ia//2+ia%2
print(ans)
```
