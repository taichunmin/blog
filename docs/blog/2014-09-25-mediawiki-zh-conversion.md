---
date: "2014-09-25 11:41"
categories: PHP
tags: [PHP, mediawiki, zhtw, zhcn]
---
# mediawiki 中文繁簡轉換程式

1. 取得 `MediaWiki` 的辭庫，請到 <https://www.mediawiki.org/wiki/Download> 下載最新版的程式碼，並用 [`7-Zip`](http://www.7-zip.org/) 解壓縮。
2. 將 `includes/ZHConversion.php` 另存新檔。
3. 撰寫 `php` 程式碼如下：

```php
<?php
class ZHConversion
{
    private $zh2Hant, $zh2Hans;

    function __construct()
    {
        require('ZHConversion.php');
        $this->zh2Hant = $zh2Hant;
        $this->zh2Hans = $zh2Hans;
    }

    public function tt( $str )
    {
      	return strtr( $str, $this->zh2Hant );
    }

    public function ts( $str )
    {
      	return strtr( $str, $this->zh2Hans );
    }
}
$zhc = new ZHConversion();
$hans_str = "硬盘上无法修复的坏轨，可能导致硬盘使用上产生异常的现象，例如：存取缓慢、当机、档案毁损等症状发生。最近上市的固态硬盘也会使用广泛使用于 DRAM 内存的 ECC 技术来保护快闪存储器资料。";
echo $zhc->tt($hans_str);
```
