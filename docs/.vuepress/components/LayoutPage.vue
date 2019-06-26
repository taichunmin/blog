<template lang="pug">
  .theme-container(:class="pageClasses")
    Navbar(v-if="shouldShowNavbar")
    main.my-page
      slot(name="page-top")
      Content.container.my-theme-content
      .last-updated(v-if="lastUpdated")
        span.prefix {{ lastUpdatedText }}
        span.time {{ lastUpdated }}
      .page-nav(v-if="prev || next")
        p.inner
          span.prev(v-if="prev") ← #[router-link.prev(:to="prev.path") {{ prev.title || prev.path }}]
          span.next(v-if="next") #[router-link.next(:to="next.path") {{ next.title || next.path }}] →
      slot(name="page-bottom")
</template>

<script>
import Navbar from '@theme/components/Navbar.vue'
import { resolvePage, outboundRE, endingSlashRE } from '@theme/util'
export default {
  components: { Navbar },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        userPageClass
      ]
    },

    lastUpdated () {
      return this.$page.lastUpdated
    },

    lastUpdatedText () {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated
      }
      if (typeof this.$site.themeConfig.lastUpdated === 'string') {
        return this.$site.themeConfig.lastUpdated
      }
      return 'Last Updated'
    },

    prev () {
      const prev = this.$page.frontmatter.prev
      if (prev === false) {
        return
      } else if (prev) {
        return resolvePage(this.$site.pages, prev, this.$route.path)
      }
    },

    next () {
      const next = this.$page.frontmatter.next
      if (next === false) {
        return
      } else if (next) {
        return resolvePage(this.$site.pages, next, this.$route.path)
      }
    },
  }
}

function resolvePrev (page, items) {
  return find(page, items, -1)
}
function resolveNext (page, items) {
  return find(page, items, 1)
}
function find (page, items, offset) {
  const res = []
  flatten(items, res)
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset]
    }
  }
}
function flatten (items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === 'group') {
      flatten(items[i].children || [], res)
    } else {
      res.push(items[i])
    }
  }
}
</script>

<style lang="sass">
  .my-theme-content
    padding: 2rem 0
</style>
