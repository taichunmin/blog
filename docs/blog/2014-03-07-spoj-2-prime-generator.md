---
date: "2014-03-07 04:51"
categories: SPOJ
tags: [SPOJ, python]
---
# SPOJ 2. Prime Generator.py

題目連結：<http://www.spoj.com/problems/PRIME1/>
給予 `$m$` and `$n$` `$(1 \le m \le n \le 10^9, n-m \le 10^5)$`，輸出這個範圍內的所有質數。

## 解題報告

果然不出所料，噴了一個 `TLE` 給我，囧。

```python
# TLE
from sys import stdin
from math import sqrt

p = [2,3,5,7]

def is_prime(ia):
	if ia<2:
		return False
	for prime in p:
		if prime*prime > ia:
			break
		if ia % prime == 0:
			return False
	return True

def build_prime(prime_max):
	prime_max = int(sqrt(prime_max))
	i = 11
	j = 2
	while p[-1]<=prime_max:
		if is_prime(i):
			p.append(i)
		i+=j
		j=6-j

build_prime(10**9)
# print(len(p))
# print(p)

for t1 in range(int(stdin.readline())):
	inp = [int(i) for i in stdin.readline().split(' ')]
	if t1 != 0:
		print()
	for i in range(inp[0],inp[1]+1):
		if is_prime(i):
			print(i)
```
上網找了別人的程式碼 [連結](http://jamie-wong.com/2009/11/12/spoj-problem-2-prime-generator/)，發現還可以利用 buffer 的方式加速，於是，開始動手修改：
```python
# TLE
from sys import stdin
from math import sqrt

p = [2,3,5,7]
output=''

def is_prime(ia):
	if ia<2:
		return False
	for prime in p:
		if prime*prime > ia:
			break
		if ia % prime == 0:
			return False
	return True

def build_prime(prime_max):
	prime_max = int(sqrt(prime_max))
	i = 11
	j = 2
	while p[-1]<=prime_max:
		if is_prime(i):
			p.append(i)
		i+=j
		j=6-j

build_prime(10**9)
# print(len(p))
# print(p)

for t1 in range(int(stdin.readline())):
	m,n = [int(i) for i in stdin.readline().split(' ')]
	if t1 != 0:
		output+='\n'
	if m<=2<=n:
		output+='2\n'
	m += (m%2==0)
	n -= (n%2==0)
	for i in range(m,n+1,2):
		if is_prime(i):
			output+=str(i)+'\n'
print(output,end='')
```
結果仍然是 `TLE`，看來要繼續加速！根據 `Colin Su` 的建議，改成使用 array 來建表，並且預先配置記憶體，避免在執行期間不停的重新配置。
```python
# TLE
from sys import stdin
from math import sqrt
from array import *

p = array('l',[0]*3402)
p[:4] = array('l',[2,3,5,7])
p_cnt = 4
output=''

def is_prime(ia):
	global p_cnt
	if ia<2:
		return False
	for i in range(p_cnt):
		if p[i]*p[i] > ia:
			break
		if ia % p[i] == 0:
			return False
	return True

def build_prime(prime_max):
	global p_cnt
	prime_max = int(sqrt(prime_max))
	i = 11
	j = 2
	while p[p_cnt-1]<=prime_max:
		if is_prime(i):
			p[p_cnt]=i
			p_cnt+=1
		i+=j
		j=6-j

build_prime(10**9)
# print(len(p))

for t1 in range(int(stdin.readline())):
	m,n = [int(i) for i in stdin.readline().split(' ')]
	if t1 != 0:
		output+='\n'
	if m<=2<=n:
		output+='2\n'
	m += (m%2==0)
	n -= (n%2==0)
	for i in range(m,n+1,2):
		if is_prime(i):
			output+=str(i)+'\n'
print(output,end='')
```
又一次的 `TLE`，看來這題真的無法偷懶，一定只能用篩法…老實說沒練過篩法的程式，所以寫了超久…好在終於 `AC` 啦
```python
# AC
from sys import stdin
from math import sqrt
from array import *

p = array('l',[0]*3402)
p[:4] = array('l',[2,3,5,7])
p_cnt = 4
output=''

def is_prime(ia):
	global p_cnt
	if ia<2:
		return False
	for i in range(p_cnt):
		if p[i]*p[i] > ia:
			break
		if ia % p[i] == 0:
			return False
	return True

def build_prime(prime_max):
	global p_cnt
	prime_max = int(sqrt(prime_max))
	i = 11
	j = 2
	while p[p_cnt-1]<=prime_max:
		if is_prime(i):
			p[p_cnt]=i
			p_cnt+=1
		i+=j
		j=6-j

build_prime(10**9)
# print(len(p))

for t1 in range(int(stdin.readline())):
	m,n = [int(i) for i in stdin.readline().split(' ')]
	if t1:
		output += '\n'
	if m<2:
		m = 2
	sign = array('b',[1]*(n-m+1))
	for i in range(p_cnt):
		if p[i]*p[i]>n:
			break
		start = p[i]+p[i]-m
		if start<0:
			start %= p[i]
		sign[start::p[i]] = array('b',[0]*len(sign[start::p[i]]))
	for i in range(m,n+1):
		if sign[i-m]:
			output += str(i)+'\n'
print(output,end='')
```
