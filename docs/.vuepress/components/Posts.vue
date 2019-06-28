<template lang="pug">
b-card.my-3(header-bg-variant="secondary", header-text-variant="white", no-body)
  template(slot="header") #[i.fa.fa-fw.fa-file-text] 文章列表
  b-list-group(flush)
    b-list-group-item(v-for="post in posts", :key="post.path", :href="post.path", class="flex-column align-items-start")
      .d-flex.w-100.justify-content-between
        h5.mb-1 {{ post.title }}
        small {{ post.date.format('Y/MM/DD') }}
      .post-badge(v-if="_.has(post, 'frontmatter.tags')")
        span.badge.badge-info.mr-1(v-for="tag in _.get(post, 'frontmatter.tags')") {{ tag }}
      .post-badge-empty(v-else) &nbsp;
</template>

<script>
import _ from 'lodash'
import moment from './libs/moment'
import Navbar from '@theme/components/Navbar.vue'
export default {
  components: { Navbar },

  methods: {
    cget (post, path, defaultVal) {
      if (_.isArray(path)) path = path.join('.')
      return _.get(post, `frontmatter.card.${path}`, defaultVal)
    },
    chas (post, path) {
      if (_.isArray(path)) path = path.join('.')
      return _.has(post, `frontmatter.card.${path}`)
    }
  },
  computed: {
    posts () {
      // generate this.posts
      let posts = this.$site.pages || []
      let blogRegex = /^\/blog\/(\d{4}-\d{1,2}-\d{1,2})-(.*)\.html/i
      posts = _.filter(posts, post => {
        if (!blogRegex.test(post.path)) return false
        // date
        post.date = _.has(post, 'frontmatter.date') ? moment(post.frontmatter.date) : moment(post.path.match(blogRegex)[1])
        return true
      })
      return _.orderBy(posts, ['date', 'path'], ['desc', 'asc'])
    }
  }
}
</script>
