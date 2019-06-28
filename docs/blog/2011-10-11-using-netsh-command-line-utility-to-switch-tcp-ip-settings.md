---
date: "2011-10-11 01:44"
tags: ['Deprecated']
---
# 如何透過 netsh 指令快速切換 Windows 網路設定

引用自：<http://blog.miniasp.com/post/2008/11/17/Using-Netsh-Command-Line-Utility-to-switch-TCP-IP-settings.aspx>

::: danger 已棄用 (Deprecated)
此文章的內容已過時或已被取代，僅作為本人的文章歷史紀錄，您不應該採信這篇文章中的任何知識。
:::

有時後帶著筆記型電腦到處跑時，時常都要切換網路卡的 `TCP/IP` 設定，每次都透過介面切換也實在很煩。例如說上週人在機房安裝主機時，因為網路切了 `vLan` 導致 Notebook 要搬來搬去的，每次都要改 IP 很麻煩，還好我寫了個批次檔幫我快速切換 IP 位址，果然省時、省力、又方便。

首先，我先介紹如何設定網路介面到 `DHCP` 模式

1. 先查到你的網路卡介面名稱，如下圖示，你的名稱就是【區域連線】四個字。
2. 再利用記事本(Notepad)開啟一份新文件，並且命名為 SwitchToDHCP.bat
3. 輸入以下指令碼（由於 Windows XP 與 Windows Vista 的指令有些差異，因此分開列表）

```batch
; Windows 2000 / XP / 2003
netsh interface ip set address "區域連線" source=dhcp
netsh interface ip set dns     "區域連線" source=dhcp
```

```batch
; Windows Vista / 2008
netsh interface ip set address   "區域連線" source=dhcp
netsh interface ip set dnsserver "區域連線" source=dhcp
```

再來，介紹如何設定網路介面到靜態 IP 模式

1. 先查到你的網路卡介面名稱，如上圖示。
2. 再利用記事本(Notepad)開啟一份新文件，並且命名為 `SwitchTo 公司內部 IP.bat`
3. 輸入以下指令碼（由於 Windows XP 與 Windows Vista 的指令有些差異，因此分開列表）

```batch
; Windows 2000 / XP / 2003
netsh interface ip set address "區域連線" static 10.10.1.168 255.255.255.0 10.10.1.254 1
netsh interface ip set dns     "區域連線" static 10.10.1.1 primary
```

```batch
; Windows Vista / 2008
netsh interface ip set address   "區域連線" static 10.10.1.168 255.255.255.0 10.10.1.254 1
netsh interface ip set dnsserver "區域連線" static 10.10.1.254 primary
```

設定靜態 IP 時，標準的指令公式如下：

```batch
; Windows 2000 / XP / 2003
netsh interface ip set address "<介面名稱>" static [IP] [子網路遮罩] [預設閘道] [閘道公制]
netsh interface ip set dns     "<介面名稱>" static [名稱伺服器位址] primary
```

```batch
; Windows Vista / 2008
netsh interface ip set address "<介面名稱>" static [IP] [子網路遮罩] [預設閘道] [閘道公制]
netsh interface ip set dnsserver "<介面名稱>" static [名稱伺服器位址] primary
```

當然，這只是針對網路介面卡做基本的設定，如果要將你現有的網路設定「完整紀錄」下來的話，可以利用以下指令達成：

```batch
netsh -c interface dump > netsh_office.cfg
```

上面那個指令是將你現在的網路設定全部匯出(dump)到 `netsh_office.cfg` 檔案中。若下次要將設定還原，可以直接利用以下指令達成：

```batch
netsh -f netsh_office.cfg
```

當然，載入 `netsh` 設定檔的指令一樣可以寫成批次檔。

未來只要把常用的幾個網路設定設定好放在你的隨身蝶裡，不管到哪裡只要對批次檔點兩下就可以設定好網路了，是不是很方便的一個小技巧呢！^_^
