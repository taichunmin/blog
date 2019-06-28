---
date: "2014-04-11 11:20"
categories: Linux
tags: [Linux, ssh-key, keychain]
---
# 生產 ssh, 複製公鑰, keychain 管理

## 生產 ssh 公私鑰

`ssh-keygen -t dsa`, `ssh-keygen -t rsa`

在 <http://portable.easylife.tw/1912> 這篇文章中有特別說明, dsa 支援 ssh 2, rsa 支援 ssh 1,2 , 若需要支援度較高，可選用 rsa, 若想要安全性較高，應選用 dsa。

```
Generating public/private rsa key pair.
Enter file in which to save the key (/home/taichunmin/.ssh/id_dsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/taichunmin/.ssh/id_dsa.
Your public key has been saved in /home/taichunmin/.ssh/id_dsa.pub.
```

## 部屬 ssh 公鑰以便快速登入其他伺服器

`ssh-copy-id -i ~/.ssh/id_dsa.pub taichunmin@example.com`

使用這行指令，代表以後可以依靠 ssh key 登入 `taichunmin@example.com`。

## 使用 keychain 儲存 ssh key 的 passphrase

`apt-get install keychain`: 安裝 keychain
`/usr/bin/keychain ~/.ssh/id_rsa`: 新增 ssh key 進行管理
`source ~/.keychain/${HOSTNAME}-sh > /dev/null`: 執行 keychain

## 編寫腳本自動執行 keychain

`nano ~/.bashrc`

```
# Start keychain
/usr/bin/keychain
source ~/.keychain/${HOSTNAME}-sh > /dev/null
```
