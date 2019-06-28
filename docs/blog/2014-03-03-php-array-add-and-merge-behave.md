---
date: "2014-03-03 20:02"
categories: PHP
tags: [PHP, array_merge]
---
# PHP array add and merge behave

## Purpose

Compare between array add `array()+array()` and `array_merge()` in PHP.

## Code:

```php
<?php
$arr = array(
	'a' => 1,
	'b' => 1,
	0 => 1,
) + array(
	'a' => 2,
	'c' => 2,
	0 => 2,
);
var_export($arr);
$arr = array_merge( array(
	'a' => 1,
	'b' => 1,
	0 => 1,
) , array(
	'a' => 2,
	'c' => 2,
	0 => 2,
));
var_export($arr);
```

## Result:

```php
array (
  'a' => 1,
  'b' => 1,
  0 => 1,
  'c' => 2,
)
array (
  'a' => 2,
  'b' => 1,
  0 => 1,
  'c' => 2,
  1 => 2,
)
```
