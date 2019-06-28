---
date: "2017-09-13 14:08"
categories: Docker
tags: [Docker, MongoDB, Seeding]
---
# 用 Docker 來製作優雅的 MongoDB Seeder

> 本篇是原文 [Delightful Database Seeding with Docker](https://ardoq.com/delightful-database-seeding-with-docker/) 的摘要

流程總共區分為三個階段：

* 複製正式伺服器的資料並清理
* 打包並發佈 Seeder
* 使用 Seeder 匯入資料

## 清理正式伺服器的資料

1. 首先，假設我們正式伺服器的 dump 資料為 `prod-dump.tar.gz`
2. 啟動一個 MongoDB Docker 並將 `prod-dump.tar.gz` 以 volumn 掛載入 container
3. 於 container 中執行清除資料用腳本 `clean.js`
4. 將清理過的資料再 dump 到 `clean-dump.tar.gz`

![Imgur](https://i.imgur.com/0SAmBE9.png)

## 打包並發佈 Seeder

1. 撰寫一個 Seeder 的 Dockerfile 如下

    ```docker
    FROM mongo:3.0.1
    ADD clean-dump.tar.gz /work
    ADD attachments.tar.gz /work
    ```

    ![Imgur](https://i.imgur.com/3hZiQ6g.png)
2. 自動 build 以後放到 registry (私人的 Docker Hub) 上
    ![Imgur](https://i.imgur.com/m6509Me.png)

## 使用 Seeder 匯入資料

1. 使用兩個指令來分別匯入 db 資料和 attachments 如下：

    ```bash
    docker run --rm --link ardoq_mongodb_1:mongodb ardoq/demo-seed:latest mongorestore -h mongodb /work/demo_seed
    docker run --rm --volumes-from ardoq_mongodb_1 ardoq/demo-seed:latest cp -r /work/attachments /data
    ```

    ![Imgur](https://i.imgur.com/oZjJklp.png)
