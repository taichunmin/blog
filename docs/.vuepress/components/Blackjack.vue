<template lang="pug">
  div
    h1 Black Jack #[small.text-muted Score: {{ score }}]
    .alert(:class="'alert-' + alertType", role="alert", v-html="alertMsg || 'No message.'")
    .row.mb-3.pl-3
      .col.pl-0
        button.btn.btn-block.btn-success(@click="hit") Hit
      .col.pl-0
        button.btn.btn-block.btn-primary(@click="stand") Stand
      .col.pl-0
        button.btn.btn-block.btn-danger(@click="deal") Deal
    .card.mb-3
      .card-header.bg-success.text-white
        span.fa.fa-user.fa-fw
        | Player
        span.badge.badge-pill.badge-light.ml-2 {{ playerScore }}
      .card-body.pt-3.pl-3.pb-0.pr-0
        .poker.rounded.mr-3.mb-3(v-for="card in player", :class="'poker-' + card")
    .card
      .card-header.bg-danger.text-white
        span.fa.fa-paw.fa-fw
        | Dealer
        span.badge.badge-pill.badge-light.ml-2 {{ playing ? '?' : dealerScore }}
      .card-body.pt-3.pl-3.pb-0.pr-0
        .poker.rounded.mr-3.mb-3(v-for="(card, i) in dealer", :class="(playing && i==0) ? cardback : ('poker-' + card)")
</template>

<script>
export default {
  data: () => ({
    player: [], // player hands
    dealer: [], // dealer hands
    deck: [],
    playing: false,
    suits: ["c", "s", "h", "d"],
    ranks: ["a", "2", "3", "4", "5", "6", "7", "8", "9", "t", "j", "q", "k"],
    cardback: "poker-back-heartstone",
    score: 0,
    alertMsg: "",
    alertType: "info",
  }),
  computed: {
    playerScore() {
      return this.calcScore(this.player);
    },
    dealerScore() {
      return this.calcScore(this.dealer);
    },
  },
  mounted() {
    this.deal();
  },
  methods: {
    newDeck() {
      let deck = []
      _.each(this.suits, suit => {
        _.each(this.ranks, rank => {
          deck.push(suit + rank)
        })
      })
      this.deck = _.shuffle(deck)
      // console.log(this.deck);
    },
    hit() {
      if(!this.playing) {
        this.msg("Click <strong>Deal</strong> button to restart.");
        return;
      }
      if( this.playerScore <= 21 )
        this.player.push( this.deck.pop() );
      if(this.playerScore > 21)
        this.msg("<strong>Player</strong> have busted", 'warning');
    },
    stand() {
      if(!this.playing) {
        this.msg("Click <strong>Deal</strong> button to restart.");
        return;
      }
      if(this.playerScore <= 21)
        while(this.dealerScore < 17 || this.dealerScore < Math.min(this.playerScore, 21))
          this.dealer.push(this.deck.pop());
      this.playing = false;
      let playerWin = (this.playerScore <= 21 && this.dealerScore < this.playerScore || this.dealerScore > 21);
      if(playerWin) {
        this.score++;
        this.msg('<strong>Player</strong> wins.', 'success');
      } else {
        this.score--;
        this.msg('<strong>Dealer</strong> wins.', 'danger');
      }
    },
    deal() {
      this.newDeck();
      this.player = [];
      this.dealer = [];
      for(let i=0; i<2; i++) {
        this.player.push( this.deck.pop() );
        this.dealer.push( this.deck.pop() );
      }
      if(this.playing) {
        this.score--;
        this.msg("<strong>Player</strong> lose. <strong>Hit</strong> or <strong>stand</strong>?", "success");
      } else {
        this.playing = true;
        this.msg("<strong>Hit</strong> or <strong>stand</strong>?");
      }
    },
    calcScore(hands) {
      let score = 0;
      let ace = false;
      hands.forEach(function(card) {
        score += Math.min(10, this.ranks.indexOf(card[1])+1);
        if(card[1] == 'a')
          ace = true;
      }, this);
      if(ace && score <= 11)
        score += 10;
      if(score < 21 && hands.length > 4)
        score = 21;
      return score;
    },
    msg(str, color = "info") {
      this.alertMsg = str;
      this.alertType = color;
    },
  },
}
</script>

<style lang="sass" scoped>
/* 梅花, 黑桃, 紅心, 方塊 */
$suits: (0:c, 1:s, 2:h, 3:d)
$ranks: (0:a, 1:2, 2:3, 3:4, 4:5, 5:6, 6:7, 7:8, 8:9, 9:t, 10:j, 11:q, 12:k)
=poker-bgpos
  @each $i, $suit in $suits
    @each $j, $rank in $ranks
      .poker-#{$suit}#{$rank}
        background-position: -$j*72-1px $i*-96px

+poker-bgpos
.poker
  width: 71px
  height: 96px
  background-image: url(http://taichunmin.idv.tw/images/cards_jfitz.png)
  background-clip: border-box
  float: left
.poker-back
  background-image: url(http://taichunmin.idv.tw/images/card_jfitz_back.png)
.poker-back-heartstone
  background-image: url(http://taichunmin.idv.tw/images/cardback-rankedladder.png)
  background-size: 100% 100%
</style>
