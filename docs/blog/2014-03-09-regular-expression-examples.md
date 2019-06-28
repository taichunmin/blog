---
date: "2014-03-09 00:47"
categories: Reference
tags: [reference, regexp]
---
# 正規表示法範例

## 資料來源

1. [37 Tested PHP, Perl, and JavaScript Regular Expressions](http://www.virtuosimedia.com/dev/php/37-tested-php-perl-and-javascript-regular-expressions)
2. [常用正則表達式範例](http://calos-tw.blogspot.tw/2010/06/blog-post.html)
3. [Sample Regular Expressions](http://www.regular-expressions.info/examples.html)

## 好文
1. [\[正規式\] 複習 (?:) (?=) (?!) 的使用](http://calos-tw.blogspot.tw/2011/06/blog-post.html)
2. [Linux grep 基礎正規表示法, 鳥哥](http://linux.vbird.org/linux_basic/0330regularex/0330regularex-fc4.php#basic_regexp)
3. [Comparison of regular expression engines](https://en.wikipedia.org/wiki/Comparison_of_regular_expression_engines)
4. [正規表示式 wiki](https://zh.wikipedia.org/wiki/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F)
5. [http://regexlib.com/](http://regexlib.com/)
- - -
## 範例

* 主流信用卡
`/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6011[0-9]{12}|622((12[6-9]|1[3-9][0-9])|([2-8][0-9][0-9])|(9(([0-1][0-9])|(2[0-5]))))[0-9]{10}|64[4-9][0-9]{13}|65[0-9]{14}|3(?:0[0-5]|[68][0-9])[0-9]{11}|3[47][0-9]{13})*$/`

* 美國運通信用卡
`/^(3[47][0-9]{13})*$/`

* MasterCard
`/^(5[1-5][0-9]{14})*$/`

* Visa 卡
`/^(4[0-9]{12}(?:[0-9]{3})?)*$/`

* 日期 (MM/DD/YYYY)
`/^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/`

* 日期 (YYYY/MM/DD)
`/^(((?:19|20)[0-9]{2})[- /.](0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01]))*$/`

* 電子郵件
以下的範例並沒有相容 RFC5322 規範，但是已經可以驗證大多數的電子郵件。
`/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/`

* IPv4
`/^((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))*$/`

* 密碼
高強度密碼，6 位數以上，並且至少包含 大寫字母、小寫字母、數字、符號 各一
`/^(?=.*[^a-zA-Z0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/`

* 台灣手機號碼
`/^09\d{2}-?\d{3}-?\d{3}$/`

* URL 網址
允許 http, https, ftp 協定，並且可取出 `Protocol`, `Domain`, `Path`, `Query`
`/^(?:(https?|ftp):\/\/)?((?:[a-zA-Z0-9.\-]+\.)+(?:[a-zA-Z0-9]{2,4}))((?:/[\w+=%&.~\-]*)*)\??([\w+=%&.~\-]*)$/`
![2014-02-09_020151.png](http://user-image.logdown.io/user/3210/blog/3247/post/178274/slWsiAqKTgOZTORqDYDt_2014-02-09_020151.png)

* 取代重複行
搜尋：`/^(.*)(\n\1)+$/`
取代：`\1`

* 中文 (Unicode)
`[\u4e00-\u9fa5]`

* 刪除空白行
搜尋：`/^\s*$/m`
取代：

* 刪除行首行尾空白
搜尋：`^\s*|\s*$`
取代：

* 驗證使用者帳號
第一個字不為數字，只接受 大小寫字母、數字及底線
`/^[a-zA-Z]\w*$/`

* 簡易驗證台灣身份證
仍然需要一些進階的檢查，如 _驗證檢查碼_，或前往 [_內政部戶政司_](http://www.ris.gov.tw/zh_TW/307) 驗證
`/^[A-Za-z][1-2]\d{8}$/`

* 正整數
`/^\+?\d+$/`

* 整數
`/^[+-]?\d+$/`

* `float`
`/^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/`
