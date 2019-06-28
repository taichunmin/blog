---
date: "2014-03-08 20:04"
categories: SPOJ
tags: [SPOJ, python]
---
# SPOJ 7974. What’s Next.py

題目網址：[連結](http://www.spoj.com/problems/ACPC10A/)

判斷等差或等比，並輸出下一項，本題公差和公比均為非 `$0$` 整數。

## 解題報告

* 題目輸入包含負數，故不可使用 `ia+ib+ic==0` 判斷結束
* 使用 `(ia,ib,ic) == (0,0,0)` 的 `tuple` 比較方式取代 `ia==0 and ib==0 and ic==0`

```python
from sys import stdin

while True:
	ia,ib,ic = [int(i) for i in stdin.readline().split(' ')]
	if (ia,ib,ic) == (0,0,0):
		break
	if ia+ic == ib*2:
		print('AP',ic+ib-ia)
	else:
		print('GP',ib//ia*ic)
```
