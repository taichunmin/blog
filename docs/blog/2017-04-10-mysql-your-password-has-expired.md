---
date: "2017-04-10 11:53"
categories: Skycarpenter
tags: [MySQL, default_password_lifetime]
---
# MySQL 5.7+ Your password has expired

## 參考連結

* <http://cameong.hatenablog.com/entry/2016/03/03/172003>
* <https://yoku0825.blogspot.tw/2015/06/mysql-574defaultpasswordlifetime.html>
* <https://dev.mysql.com/doc/refman/5.7/en/password-expiration-policy.html>

## 伺服器掛了

今天一早收到了伺服器掛掉的資訊  
一查發現了沒見過的錯誤訊息  

```
MySQLi connect failed: Your password has expired. To log in you must change it using a client that supports expired passwords.
```

看到這個錯誤訊息以後，馬上使用 HeidiSQL 登入，居然提示我要修改密碼！火速改好密碼以後，開始檢查原因所在，發現這個密碼過期的功能，是 MySQL 5.7 的新功能！

## Password Expiration Policy

<https://dev.mysql.com/doc/refman/5.7/en/password-expiration-policy.html>

在此節錄一些重點

* 可以幫帳號設定過期或不過期，以及確認目前期限的指令

```sql
ALTER USER 'jeffrey'@'localhost' PASSWORD EXPIRE;
ALTER USER 'script'@'localhost' PASSWORD EXPIRE NEVER;
SELECT User, Host, password_last_changed, password_lifetime FROM mysql.user;
```

* 多了一個 global variable `default_password_lifetime`
  - 文件上寫說預設是 0 (無限期)
  - 但是在 `5.7.4` 到 `5.7.10` 是預設 360

* 在 aws 上的 rds 我是用 `5.7.11` ，但是 `default_password_lifetime` 還是 360 (抓到元兇)

## 查詢 aws 的 rds 設定

```sql
SELECT @@default_password_lifetime;
```

```
mysql> select @@default_password_lifetime;
+-----------------------------+
| @@default_password_lifetime |
+-----------------------------+
|                         360 |
+-----------------------------+
1 row in set (0.01 sec)
```

## 設定 mysql 的 default_password_lifetime (AWS 不適用)

* `my.cnf`

```
[mysqld]
default_password_lifetime=0
```

```sql
SET GLOBAL default_password_lifetime = 0;
```

## 設定 aws rds 的 default_password_lifetime

好死不死 aws 的 rds 不提供 `SET GLOBAL` 的 SUPER 權限，所以必須用其他的方法來設定。  

1. 先進到 aws 的 rds 管理頁面
2. 切到 Parameter Groups
3. 如果沒有自訂 Parameter Groups 的就新建一個 (Create Parameter Group)
4. 在 Parameter Group 內的 Parameters 分頁篩選出 `default_password_lifetime`
5. 將自己的 Parameter Group 與預設的 `default.mysql5.7` 進行比較 (選取兩個然後點 Compare Parameters) (我又順手改了一些 `charset` 和 `innodb_purge_threads=4` 設定)
![](http://i.imgur.com/coKeBDR.png)
6. 確認以後回到 instance
7. 對 instance 點選 `instance Actions` > `Modify`
8. DB Parameter Group 設定為你新建立的 Parameter Group
![](http://i.imgur.com/1D4kbvv.png)
9. 重啟 instance

```
mysql> select @@default_password_lifetime;
+-----------------------------+
| @@default_password_lifetime |
+-----------------------------+
|                           0 |
+-----------------------------+
1 row in set (0.00 sec)
```

## 設定特定帳號為不過期

```sql
ALTER USER 'script'@'localhost' PASSWORD EXPIRE NEVER;
```
