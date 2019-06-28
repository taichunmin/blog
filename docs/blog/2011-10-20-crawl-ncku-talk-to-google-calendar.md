---
date: "2011-10-20 20:41"
categories: PHP
tags: [php, talk]
---
# 新增演講至 Google 日曆

這個PHP程式是幫我弟寫的  
主要用途，就是從給予的成大公告網頁上，分析演講的訊息  
然後跳轉到 Google 日曆的新增行程畫面  
以方便進行修改及新增  

```php
<?php
    ob_start();
    header('Content-type: text/html; charset=utf8');
    set_time_limit(1000);
    function tai_noEndl($html)
    {
        return str_replace(array("\n","\r","\t"),array("","",""),$html);
    }
    function tai_getHtml($url)
    {
        $html = tai_noEndl(file_get_contents($url));
        if(empty($html))tai_show('錯誤：網頁抓取失敗，請檢查網路。('.$url.')。');
        return $html;
    }
    if(isset($_POST['url']) && preg_match('`^http://[^/]+?ncku\.edu\.tw/`',$_POST['url']))
    {
        /* 原公告
            http://cge.ncku.edu.tw/files/13-1024-83826.php
        */
        /* 目標網址
        https://www.google.com/calendar/b/0/render?
            action=TEMPLATE
            &text=講題：『熱度★夢想』--無樂不作的咖啡魂
            &dates=20111102T193000/20111102T213000
            &location=國際會議廳第一演講室
            &details=主講人：王宏榮（紅龍）
            &pli=1
            &sf=true
            &output=xml
        */
        $html = tai_getHtml($_POST['url']);
        //echo htmlspecialchars($html);
        unset($httpQueryArray);

        $httpQueryArray['action']='TEMPLATE';

        preg_match('`講題.*?(?:</div>|<br />|<br>)`i',$html,$text);
        $httpQueryArray['text']=preg_replace('`<[^>]*>`','',$text[0]);

        preg_match('`時間.*?(?:</div>|<br />|<br>)`i',$html,$dates);
        $dates=preg_replace('`<[^>]*>`','',$dates[0]);
        preg_match('`(\d+).*?(\d+).*?(\d+).*?(\d+).*?(\d+).*?(\d+).*?(\d+)`',$dates,$dates);
        $dates[4]=(($dates[4]<8)?($dates[4]+12):$dates[4]);
        $dates[6]=(($dates[6]<8)?($dates[6]+12):$dates[6]);
        $httpQueryArray['dates'] = sprintf("%04d%02d%02dT%02d%02d00",$dates[1]+1911,$dates[2],$dates[3],$dates[4],$dates[5]).'/'.
                                   sprintf("%04d%02d%02dT%02d%02d00",$dates[1]+1911,$dates[2],$dates[3],$dates[6],$dates[7]);

        preg_match('`地點.*?(?:</div>|<br />|<br>)`i',$html,$location);
        $httpQueryArray['location']=preg_replace('`<[^>]*>`','',substr($location[0],9));

        preg_match('`主講人.*?(?:</div>|<br />|<br>)`i',$html,$details);
        $httpQueryArray['details']=preg_replace('`<[^>]*>`','',$details[0]);

        //echo '<a href="https://www.google.com/calendar/b/0/render?'.http_build_query($httpQueryArray).'">連結</a>';
        header('location:https://www.google.com/calendar/b/0/render?'.http_build_query($httpQueryArray));
        exit(0);
    }
?>
<h1>成功大學「通識教育生活實踐」認證講座網址輸入</h1>
<form action="" method="post">
    <input type="text" size="100" name="url" />
    <input type="submit" value="submit" />
</form>
```
