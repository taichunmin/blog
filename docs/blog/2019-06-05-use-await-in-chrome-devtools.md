---
date: "2019-06-05 10:44"
tags: [javascript]
---
# 在 Chrome 的 devtools 可以直接用 await

我們有一個會回傳 Promise 的函式，如果我要在 Chrome 的 devtools 把 Promise 的資料印出來，我該怎麼做呢？

```js
function fn1() {
  return new Promise(resolve => {
    setTimeout(() => resolve('aaa'), 1000)
  })
}
```

我以前都是會用 `.then` 把變數先接起來，然後再用 `console.log` 印出來，但是每次都要打後面那個超級麻煩的…

```js
fn1().then(data => { console.log(data) })
```

我昨天在看 node 的 Repl 文件的時候，發現他有一個神秘的參數 `--experimental-repl-await`，我就想到 node 的核心不就是 Chrome 嗎？難道 Chrome 也支援？於是我就開了 devtools 打了以下的程式碼：

```js
console.log(await fn1())
```

沒想到還真的可以用（歡呼

無聊跑去追了一下，原來在 Chrome 55 就有支援這個功能了 [參考連結](https://developers.google.com/web/fundamentals/primers/async-functions?hl=zh-tw)，看來我 LAG 了超級久阿XD