<template lang="pug">
section.work-card
  .card.bg-light.text-center
    img.card-img-top(:src="$withBase(work.img)")
    .card-body
      h5.card-title {{ work.title }}
      p.card-text(v-html="work.desc")
      button.btn.btn-primary.mr-1(v-if="_.get(work, 'album.length', 0)", type="button", data-toggle="modal", :data-target="'#' + modalId") #[span.fa.fa-picture-o] 圖集
      a.btn.btn-primary(v-if="work.url", :href="$withBase(work.url)", target="_blank") #[span.fa.fa-external-link] 網站
  .modal.fade(tabindex="-1", role="dialog", :id="modalId", :aria-labelledby="`${modalId}-title`", aria-hidden="true")
    .modal-dialog.modal-dialog-centered.modal-lg(role="document")
      .modal-content
        .modal-header
          h5.modal-title(:id="`${modalId}-title`") 作品集：{{ work.title }}
          button.close(type="button", data-dismiss="modal", aria-label="Close")
            span(aria-hidden="true") &times;
        .modal-body
          .carousel.slide(v-if="_.get(work, 'album.length', 0)", :id="albumId", data-ride="carousel", data-interval="false", data-wrap="false")
            ol.carousel-indicators(v-show="caption")
              li(v-for="item, index in work.album", :key="item.img", :data-target="'#' + albumId", :data-slide-to="index", :class="{active: index === 0}")
            .carousel-inner
              .carousel-item(v-for="item, index in work.album", :key="item.img", :class="{active: index === 0}")
                img.d-block.w-100(:src="$withBase(item.img)", :alt="item.alt || ''")
                .carousel-caption.rounded(v-show="caption")
                  p(v-html="item.caption")
            a.carousel-control-prev(:href="'#' + albumId", role="button", data-slide="prev")
              span.carousel-control-prev-icon(aria-hidden="true")
              span.sr-only Previous
            a.carousel-control-next(:href="'#' + albumId", role="button", data-slide="next")
              span.carousel-control-next-icon(aria-hidden="true")
              span.sr-only Next
        .modal-footer
          button.btn.btn-info(type="button", @click="caption=!caption") 開關圖片說明
          a.btn.btn-primary(v-if="work.url", :href="$withBase(work.url)", target="_blank") #[span.fa.fa-external-link] 網站
          button.btn.btn-secondary(type="button", data-dismiss="modal") 關閉
</template>

<script>
export default {
  props: ['work'],
  computed: {
    modalId () {
      return 'workmodal-' + this._uid
    },
    albumId () {
      return 'workalbum-' + this._uid
    }
  },
  data: () => ({
    caption: true
  })
}
</script>

<style lang="sass">
  .card-body
    border-top: 1px solid rgba(0, 0, 0, 0.125)
  a:not([href]):not([tabindex])
    color: #fff
  .carousel-caption
    background-color: rgb(0, 0, 0)
    background-color: rgba(0, 0, 0, 0.6)
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)"
    a,a:active,a:hover,a:focus,a:visited
      color: white
      text-decoration: underline
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
</style>
