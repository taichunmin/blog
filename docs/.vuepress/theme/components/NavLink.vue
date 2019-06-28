<template lang="pug">
  router-link.nav-link(v-if="!isExternal(link)", :to="link", :exact="exact") #[i.fa.fa-fw(v-if="item.fa", :class="`fa-${item.fa}`")] {{ item.text }}
  a.nav-link.external(v-else, :href="link", :target="isTel(link) ? null : '_blank'", :rel="isTel(link) ? null : 'noopener noreferrer'") #[i.fa.fa-fw(v-if="item.fa", :class="`fa-${item.fa}`")] {{ item.text }} #[OutboundLink]
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '@parent-theme/util'
export default {
  props: {
    item: {
      required: true
    }
  },
  computed: {
    link () {
      return ensureExt(this.item.link)
    },
    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
      }
      return this.link === '/'
    }
  },
  methods: {
    isExternal,
    isMailto,
    isTel
  }
}
</script>

<style lang="sass" scoped>
.nav-link
  padding: 0
</style>

