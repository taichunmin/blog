<template lang="pug">
  main
    slot(name="top")
    Content
    footer
      .last-updated(v-if="lastUpdated")
        span.prefix {{ lastUpdatedText }}
        span.time {{ lastUpdated }}
    .page-nav(v-if="prev || next")
      b-link.prev(v-if="prev", :href="prev.path") {{ prev.title || prev.path }}
      b-link.next(v-if="next", :href="next.path") {{ next.title || next.path }}
    slot(name="bottom")
</template>

<script>
import { resolvePage, outboundRE, endingSlashRE } from '@parent-theme/util'
export default {
  props: ['sidebarItems'],
  computed: {
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
      return '最後更新時間：'
    },
    prev () {
      const prev = this.$page.frontmatter.prev
      if (prev === false) {
        return
      } else if (prev) {
        return resolvePage(this.$site.pages, prev, this.$route.path)
      } else {
        return resolvePrev(this.$page, this.sidebarItems)
      }
    },
    next () {
      const next = this.$page.frontmatter.next
      if (next === false) {
        return
      } else if (next) {
        return resolvePage(this.$site.pages, next, this.$route.path)
      } else {
        return resolveNext(this.$page, this.sidebarItems)
      }
    }
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
