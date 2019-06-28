<template lang="pug">
.theme-container(:class="pageClasses")
  Navbar
  Home
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
export default {
  components: { Home, Navbar },

  computed: {
    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        userPageClass
      ]
    },
  }
}
</script>
