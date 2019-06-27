<template lang="pug">
b-card.mb-3(header-bg-variant="secondary", header-text-variant="white")
  template(slot="header") #[span.fa.fa-fw(:class="'fa-' + skill.icon")] {{ skill.title }}
  .row.mb-1(v-for="proficiency, name in sortedItems", :key="name")
    .col-3.pl-0.pr-1.text-nowrap.text-right(:title="name", v-b-tooltip.hover.right) {{ name }}
    .col-9.pl-1.pt-1
      b-progress
        b-progress-bar(striped, :value="getValue(proficiency)", :variant="getVariant(proficiency)", :label="getLabel(proficiency)")
</template>

<script>
export default {
  props: ['skill'],
  computed: {
    sortedItems () {
      return _.fromPairs(_.orderBy(_.toPairs(this.skill.items), [1], ['desc']))
    }
  },
  methods: {
    getValue (proficiency) {
      return [35, 60, 85][proficiency-1]
    },
    getVariant (proficiency) {
      return ['warning', 'info', 'success'][proficiency-1]
    },
    getLabel (proficiency) {
      return ['略懂', '中等', '精通'][proficiency-1]
    },
  }
}
</script>
