<template lang="pug">
iframe#iframe-experiences(:src="'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=' + data.spreadsheets + '&font=OpenSans-GentiumBook&lang=zh-tw&start_at_end=true&initial_zoom=0&hash_bookmark=true'", width="100%", webkitallowfullscreen="", mozallowfullscreen="", allowfullscreen="", frameborder="0", @load="loaded")
</template>

<script>
import _ from 'lodash'
import Navbar from '@theme/components/Navbar.vue'
import NProgress from 'nprogress'
export default {
  components: { Navbar },

  computed: {
    data () {
      return this.$page.frontmatter
    }
  },

  mounted () {
    NProgress.start()
  },

  methods: {
    loaded () {
      NProgress.set(0.9);
      _.delay(() => NProgress.done(), 1000)
    }
  }
}
</script>

<style lang="sass">
#iframe-experiences
  height: calc(99vh - 56px)
</style>
