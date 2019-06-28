---
date: "2018-05-23 22:00"
tags: [docker, docker-compose, openvpn, ubuntu]
---
# 透過 Docker 快速建立 openvpn 伺服器

::: tip
本文章使用 DigitalOcean Ubuntu 16.04 x64 作為範例。
:::

自從最近中華電信 499 之亂以後，家裡中華電信的光世代寬頻要連線到某些國外的網站 (BoardGameArena, 天命 2) 就非常地不穩定，於是我一時興起，自己架設了一個基於 OpenVPN 協定的 VPN 來使用，網路真的是穩定很多。

這次我選用的是在 Docker Hub 上面的 `kylemanna/openvpn` 這個 image，該 [image 的原始英文教學在此](https://github.com/kylemanna/docker-openvpn/blob/master/docs/docker-compose.md)。

## 安裝

```bash
# 安裝 docker
curl -sSL get.docker.com | sh
# 將目前使用者新增到 docker 群組內，需要重新登入才會生效
sudo usermod -aG docker $USER
# 安裝 docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/$(curl -sL https://api.github.com/repos/docker/compose/releases/latest | grep tag_name | cut -d'"' -f 4)/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

## 設定 docker-compose

```bash
mkdir ~/ovpn
cd ~/ovpn
nano docker-compose.yml # or vim
```

```yaml
version: '2'

services:
  ovpn:
    image: kylemanna/openvpn
    volumes:
      - ./data:/etc/openvpn
    ports:
      - '1194:1194/udp'
    cap_add:
      - NET_ADMIN
    restart: always
```

## Quick Start

該 [image 的 Readme 檔案連結在此](https://hub.docker.com/r/kylemanna/openvpn/)。

```bash
# 請把後面的 udp 改成自己的網址
docker-compose run --rm ovpn ovpn_genconfig -u udp://open.taichunmin.idv.tw
# 需要輸入密碼以及一些設定值
docker-compose run --rm ovpn ovpn_initpki
# 啟動 ovpn 伺服器
docker-compose up -d
# 請將這個變數的內容改成自己想要的
export CLIENTNAME="taichunmin"
# 建立一個 client 的憑證 (不須密碼)
docker-compose run --rm ovpn easyrsa build-client-full "$CLIENTNAME" nopass
# 將 client 的憑證匯出
docker-compose run --rm ovpn ovpn_getclient "$CLIENTNAME" > "$CLIENTNAME.ovpn"
```

## 下載 `taichunmin.ovpn`

* Windows 放於: `C:\Users\taich\OpenVPN\config`

## 在 client 安裝 OpenVPN Client

這裡都是按照[這篇 DigitalOcean 上的教學文章](https://www.digitalocean.com/community/tutorials/how-to-set-up-an-openvpn-server-on-ubuntu-16-04)來安裝的。

### Windows

於 [下載頁面](https://openvpn.net/index.php/open-source/downloads.html) 下載安裝檔即可。