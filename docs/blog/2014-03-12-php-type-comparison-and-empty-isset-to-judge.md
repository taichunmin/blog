---
date: "2014-03-12 10:47"
categories: PHP
tags: [PHP, empty, isset]
---
# PHP 型態比較與 empty, isset 判斷

這個是一個小程式，用來幫助釐清 PHP 內的型態比較，以及 `empty`, `isset` 的行為。

```php
<pre>
0==0: <?=intval(0==0)?>
0==false: <?=intval(0==false)?>
0=="": <?=intval(0=="")?>
0==null: <?=intval(0==null)?>
0==array(): <?=intval(0==array())?>

0===0: <?=intval(0===0)?>
0===false: <?=intval(0===false)?>
0==="": <?=intval(0==="")?>
0===null: <?=intval(0===null)?>
0===array(): <?=intval(0===array())?>

empty(0): <?php $a=0;?><?=intval(empty($a))?>
empty(false): <?php $a=false;?><?=intval(empty($a))?>
empty(""): <?php $a="";?><?=intval(empty($a))?>
empty(null): <?php $a=null;?><?=intval(empty($a))?>
empty(array()): <?php $a=array();?><?=intval(empty($a))?>

isset(0): <?php $a=0;?><?=intval(isset($a))?>
isset(false): <?php $a=false;?><?=intval(isset($a))?>
isset(""): <?php $a="";?><?=intval(isset($a))?>
isset(null): <?php $a=null;?><?=intval(isset($a))?>
isset(array()): <?php $a=array();?><?=intval(isset($a))?>
</pre>
```

## 執行結果

```
0==0: 1
0==false: 1
0=="": 1
0==null: 1
0==array(): 0

0===0: 1
0===false: 0
0==="": 0
0===null: 0
0===array(): 0

empty(0): 1
empty(false): 1
empty(""): 1
empty(null): 1
empty(array()): 1

isset(0): 1
isset(false): 1
isset(""): 1
isset(null): 0
isset(array()): 1
```
