# 如何寫新網誌文章

1. 於 `docs/blog/` 新增檔案
2. 撰寫 Front Matter
    ```yaml
    title: 当前页面的标题
    lang: zh-TW
    description: 当前页面的描述
    fluid: true # 设置当前页面的 layout 為 .container-fluid 而不是 .container
    permalink: 参考 https://v1.vuepress.vuejs.org/zh/guide/permalinks.html
    metaTitle: 重写默认的 meta title
    meta:
      - name: description
        content: 要塞進 meta 的頁面描述
      - name: keywords
        content: 給 SEO 使用的 keywords
    ```
