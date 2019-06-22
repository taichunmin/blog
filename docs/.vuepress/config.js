const { slugify } = require('transliteration')

module.exports = {
  description: '目前任職於微程式資訊股份有限公司，從高中因為社團接觸 ACM，然後大學開始自學 PHP。主要是後端工程師，前端略有涉略，設計方面超級不擅長，請大家多多指教。',
  evergreen: true,
  title: '筆記國度',
  markdown: {
    lineNumbers: true,
    slugify
  },
  themeConfig: {
    sidebarDepth: 0,
    lastUpdated: '最後更新時間：',
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'home'
      },
      {
        text: '經歷',
        link: '/experiences',
        icon: 'history'
      },
      {
        text: '技能',
        link: '/skills',
        icon: 'bar-chart-o'
      },
      {
        text: '作品集',
        link: '/works/',
        icon: 'file-code-o'
      },
      {
        text: '部落格',
        link: '/blog/',
        icon: 'file-text'
      },
      {
        text: '社交網站',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/taichunmin'
          },
          {
            text: 'Linkedin',
            link: 'https://www.linkedin.com/in/taichunmin/'
          },
          {
            text: 'Facebook',
            link: 'https://facebook.com/taichunmin'
          },
          {
            text: 'Email',
            link: 'mailto:taichunmin@gmail.com'
          },
        ]
      },
      {
        text: 'Travis CI',
        link: 'https://travis-ci.org/taichunmin/taichunmin.github.io',
        icon: 'tasks'
      },
    ]
  },
  head: [
    ['link', {
      rel: 'shortcut icon',
      type: 'image/png',
      href: '/favicon.png'
    }],
    ['meta', {
      property: 'og:locale',
      content: 'zh_tw'
    }],
    ['meta', {
      property: 'og:site_name',
      content: '筆記國度'
    }],
    ['meta', {
      property: 'fb:app_id',
      content: '2133031763635285'
    }],
  ]
}
