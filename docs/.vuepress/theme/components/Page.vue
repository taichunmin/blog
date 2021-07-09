<template lang="pug">
  main(:class="`my-3 container${$frontmatter.fluid ? '-fluid' : ''}`")
    slot(name="top")
    Content(:class="contentClass")
    PageNav(v-bind="{ sidebarItems }")
    slot(name="bottom")
</template>

<style lang="sass">
.blog
  img
    display: block
    margin: 0 auto
    max-width: 100%
  :not(td) > img, &>img
    border: 1px solid black
    margin-bottom: 1rem
  h1
    margin-top: 1rem
  h2
    margin-top: 2rem
  h3, h4, h5, h6
    margin-top: .5rem
  .custom-block .custom-block-title
    margin: 1rem 0
</style>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems'],
  computed: {
    contentClass () {
      const classes = []
      if (/^\/blog\//.test(this.$page.path)) classes.push('blog')
      return classes
    }
  }
}
</script>
