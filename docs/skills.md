---
skills:
  - title: Frontend
    icon: chrome
    items:
      Bootstrap: 3
      CSS: 2
      HTML: 3
      JavaScript: 2
      jQuery: 3
      Vue.js: 3
  - title: Backend
    icon: floppy-o
    items: 
      'C++': 3
      'Python 3': 2
      Bash: 1
      C: 2
      Node.js: 3
      PHP: 3
  - title: DevOps
    icon: server
    items:
      Ansible: 1
      Apache: 3
      CentOS: 1
      Docker: 3
      Nginx: 3
      Ubuntu: 3
  - title: Database
    icon: database
    items:
      MongoDB: 1
      MySQL: 3
      Redis: 3
---
# <span class="fa fa-bar-chart-o fa-fw"></span> 技能

本頁列出了我學過的程式語言，並大略的分成三個熟悉程度：精通、中等及略懂。

<div class="row">
  <div class="col-md-6 p-md-2">
    <SkillCard :skill="$page.frontmatter.skills[0]"/>
    <SkillCard :skill="$page.frontmatter.skills[2]"/>
  </div>
  <div class="col-md-6 p-md-2">
    <SkillCard :skill="$page.frontmatter.skills[1]"/>
    <SkillCard :skill="$page.frontmatter.skills[3]"/>
  </div>
</div>
