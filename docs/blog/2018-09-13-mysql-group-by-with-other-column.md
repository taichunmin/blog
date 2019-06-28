---
date: "2018-09-13 11:11"
tags: [MySQL, aggregate, group, 'group by', subquery, join, 'left join']
---
# MySQL 取得指定 type 中編號最大的武器的附屬欄位

MySQL 的 `GROUP BY` 選擇非 aggregate 的附屬欄位會造成不可預期結果的問題

我隨便找了一個資料來當範例
```sql
SELECT id, weapon_name, `type`, weapon_f_id FROM weapon_list;
```
這時候會取得的結果是  
![](https://i.imgur.com/nmTa6r9.png)

那麼 我現在假設要尋找 `type=3` 而且 `weapon_f_id` 最大的那把武器的名字  
假設我用了以下的 SQL
```sql
SELECT id, weapon_name, `type`, MAX(weapon_f_id) FROM weapon_list GROUP BY `type`;
```
我得到的結果如下：  
![](https://i.imgur.com/ExiEYQl.png)  
`type=3` 的資料並不是我預期的 `神聖的暗標鎗`

這個有幾種解決方法

- - -

第一種是 `JOIN` (索引建立正確時效率較好)
```sql
SELECT b.id, b.weapon_name, b.`type`, b.weapon_f_id FROM (
    SELECT MAX(weapon_f_id) AS weapon_f_id, `type` FROM weapon_list GROUP BY `type`
) AS a JOIN weapon_list AS b ON a.weapon_f_id = b.weapon_f_id AND a.`type` = b.`type`;
```
![](https://i.imgur.com/rESrit8.png)

- - -

第二種是 subquery (效率普通)
```sql
SELECT id, weapon_name, `type`, weapon_f_id FROM weapon_list WHERE weapon_f_id IN (
    SELECT MAX(weapon_f_id) FROM weapon_list GROUP BY `type`
);
```
![](https://i.imgur.com/AHOBseE.png)

- - -

第三種也是 subquery (效率超差)
```sql
SELECT id, weapon_name, `type`, weapon_f_id FROM weapon_list AS a WHERE weapon_f_id = (
    SELECT MAX(weapon_f_id) FROM weapon_list WHERE `type` = a.`type`
);
```
![](https://i.imgur.com/lKZenk5.png)

## 建立索引

若要提升 JOIN 的執行效率，請嘗試建立索引並配合 `EXPLAIN` 查看。

這個例子的應該要對 `weapon_f_id` 和 `type` 建立一個雙欄位索引

請注意不是兩個欄位各建立一個索引

![](https://i.imgur.com/d0m9fxc.png)
