---
date: "2017-09-29 08:26"
categories: [Nodejs, Docker]
tags: [Nodejs, Docker]
---
# Node Docker 的使用方法

## Node Docker 官方教學

<https://hub.docker.com/_/node/>

### docker-compose 方法

* 於專案目錄建立一個 `docker-compose.yml`

```yaml
version: "2"
services:
  node:
    image: "node:8"
    environment:
      - NODE_ENV=production
    volumes:
      - ./:/usr/src/app
    expose:
      - "3000"
```

* 使用以下指令使用虛擬機

```bash
# start
$ docker-compose up -d

# stop
$ docker-compose down

# list status
$ docker-compose ps

# show logs
$ docker-compose logs

# enter terminal
$ docker-compose exec node bash
```

#### 搭配 express 4 使用

```yaml
version: "2"
services:
  node:
    image: "node:latest"
    environment:
      - DEBUG=app:*
    volumes:
      - ./:/usr/src/app
    expose:
      - "3000"
    ports:
      - "3000:3000"
    init: true
    command: bash -c "cd /usr/src/app && npm start"
```

### 使用 Dockerfile + 指令

* 撰寫 `Dockerfile`

```docker
# specify the node base image with your desired version node:<version>
FROM node:6
# replace this with your application's default port
EXPOSE 3000
```

* 使用以下指令來 build 和執行

```bash
# build
$ docker build -t my-nodejs-app .
# run
$ docker run -it --rm --name my-running-app my-nodejs-app bash -c "cd /usr/src/app && npm start"
```

### Best Practices 最佳做法

<https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md>

### docker-bench-security

Docker Bench for Security 是一個用來檢查在正式環境中，部署容器的幾十個常見最佳做法的腳本。

<https://github.com/docker/docker-bench-security>
