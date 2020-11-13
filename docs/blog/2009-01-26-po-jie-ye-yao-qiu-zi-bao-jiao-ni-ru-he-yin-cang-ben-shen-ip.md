---
title: 破解也要求自保，教你如何隱藏本身IP
date: 2009-01-26T22:47:00+08
tags:
  - 其他資料
---
# 破解也要求自保，教你如何隱藏本身IP

*   本資訊來自http://pcuser.pixnet.net/blog/post/24120671

姑 且不論破解網站帳號的正當性，如果破解網站成功，其實是非常有成就感的，因此不少破解新手為了追求破解網站的快感，就貿然用自己的IP破解，這樣一旦被網 站管理員或是電信警察發現，事情可是會很大條的。因此要學會破解的先行工作是學會如何隱藏真實IP以求自保，免得破解不成還吃上官司，甚至坐牢，就得不償 失囉！以下先介紹一種偽裝自己IP位址的方法。

  

**Tor**這個軟體，主要功能是可以利用它來上一些被封鎖的網站，不過既然它的主要功能是作為代理伺服器之用，當然也能做為隱藏IP的跳板了。![](http://s.pixfs.net/f.pixnet.net/images/emotions/001.gif)

  
**※**下載位址：<http://www.torproject.org/dist/vidalia-bundles/vidalia-bundle-0.2.0.32-0.1.10.exe>

 1.  
到網站下載Tor安裝完成後，開啟IE，設定用Tor當做IE所使用的Proxy。按下【工具】→【網際網路選項】。然後在「網際網路選項」對話盒中切換到〔連線〕活頁標籤，按下〔區域網路設定〕。  
 [![](http://pic.pimg.tw/pcuser/49704e1f1c5ff.png)](http://pcuser.pixnet.net/album/photo/109251775) 

  
2.  
在跳出來的「區域網路（LAN）設定」對話盒中，先取消上方的「自動偵測設定」，然後勾選「在您的區域網路使用Proxy伺服器」，在網址旁的欄位填入「127.0.0.1」，連接埠則填「8118」。如果你想設定個別的連線方式所使用的Proxy，按下旁邊的〔進階］。![](http://s.pixfs.net/f.pixnet.net/images/emotions/027.gif)

 [![](http://pic.pimg.tw/pcuser/49704e1f73101.png)](http://pcuser.pixnet.net/album/photo/109251776) 

  

3.  
在「Proxy設定」對話盒中，從HTTP～Gopher的Proxy位址都填入127.0.0.1這個本機IP就好，連接埠則填入「8118」，不過「Socks」欄位則要填「9050」。  
 [![](http://pic.pimg.tw/pcuser/49704e200a12e.png)](http://pcuser.pixnet.net/album/photo/109251778)  

**※**Note：Socks協定較以上的其他協定更為安全，因此我們如果使用Socks proxy的話，當然也更不容易被得知真實IP來源囉！![](http://s.pixfs.net/f.pixnet.net/images/emotions/014.gif)

  

4.  
想確認是否已經更換過IP了嗎？只要上「<http://www.ip-adress.com/ipaddresstolocation/>」，就能看到你電腦現在的對外IP位址，以及從哪個地方上線的，假IP就不會是在台灣了。  
[![](http://pic.pimg.tw/pcuser/normal_49704e1e7403a.png)  
](http://pcuser.pixnet.net/album/photo/109251774)
