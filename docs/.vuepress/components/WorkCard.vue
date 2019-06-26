<template lang="pug">
section.work-card
  b-card.bg-light.text-center(:title="work.title", :img-src="$withBase(work.img)", img-top)
    b-card-text(v-html="work.desc")
    b-button.mr-1(variant="primary", v-if="albumId", @click="showAlbum = true") #[span.fa.fa-picture-o] 圖集
    b-link.btn.btn-primary(v-if="work.url", :href="$withBase(work.url)", target="_blank") #[span.fa.fa-external-link] 網站
  b-modal(v-if="albumId", :id="modalId", size="lg", :title="`作品集：${work.title}`", v-model="showAlbum")
    b-carousel.work-card-album(:id="albumId", v-model="slide", :interval="false", controls, :indicators="caption", img-width="100%")
      b-carousel-slide(v-for="item in work.album")
        img.d-block.w-100(slot="img", :src="$withBase(item.img)", :alt="item.alt || ''")
        .carousel-caption.rounded(v-show="caption")
          p(v-html="item.caption")
    template(slot="modal-footer")
      b-button(variant="info", @click="caption=!caption") 開關圖片說明
      b-link.btn.btn-primary(v-if="work.url", :href="$withBase(work.url)", target="_blank") #[span.fa.fa-external-link] 網站
      b-button(variant="secondary", @click="showAlbum = false") 關閉
</template>

<script>
export default {
  props: ['work'],
  computed: {
    modalId () {
      return 'workmodal-' + this._uid
    },
    albumId () {
      if (!_.isArray(this.work.album) || !this.work.album) return null
      return 'workalbum-' + this._uid
    },
  },
  data: () => ({
    slide: 0,
    showAlbum: false,
    caption: true
  })
}
</script>

<style lang="sass">
  .work-card-album
    .carousel-control-prev
      background-image: -webkit-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);
      background-image: -o-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);
      background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.0001)));
      background-image: linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
      background-repeat: repeat-x;
    .carousel-control-next
      background-image: -webkit-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);
      background-image: -o-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);
      background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.0001)),to(rgba(0,0,0,.5)));
      background-image: linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
      background-repeat: repeat-x;
    .carousel-indicators
      bottom: 25px
</style>


<style lang="sass" scoped>
  .card-body
    border-top: 1px solid rgba(0, 0, 0, 0.125)
  .carousel-caption
    background-color: rgb(0, 0, 0)
    background-color: rgba(0, 0, 0, 0.6)
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)"
    a,a:active,a:hover,a:focus,a:visited
      color: white
      text-decoration: underline
</style>
