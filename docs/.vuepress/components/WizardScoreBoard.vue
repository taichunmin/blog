<template lang="pug">
#card-wizard-board
  h1.text-center.my-3 神機妙算記分板
  b-card.mb-3(no-body)
    ul.nav.nav-tabs.card-header-tabs(slot="header")
      li.nav-item(v-for="tabName, tabKey in {setting: '設定', input: '記錄', scores: '得分', rule: '規則'}")
        a.nav-link(href="#", :class="{active: curTab == tabKey}", @click="curTab = tabKey") {{ tabName }}
    table.table.table-striped.table-borderless.mb-0(v-show="curTab == 'setting'")
      tbody
        tr
          td.text-nowrap.text-center.w-1px
            button.btn.btn-sm.btn-outline-secondary.mr-1(type="button", @click="playerAdd") #[span.fa.fa-plus] 玩家
            button.btn.btn-sm.btn-outline-secondary(type="button", @click="playerPop")  #[span.fa.fa-minus] 玩家
          td.py-3 目前玩家人數為 {{ this.players.length }} 人，更改玩家數量將會自動重新開始遊戲，人數限制為 3 人到 6 人。
        tr
          td.text-nowrap.text-center.w-1px
            button.btn.btn-sm.btn-outline-secondary(type="button", @click="gameRestart") #[span.fa.fa-refresh] 重新開始遊戲
          td.py-3 以目前的玩家人數重新開始遊戲。
    table.table.table-striped.table-borderless.text-nowrap.text-center.text-monospace.mb-0(v-if="curTab == 'input' && !!roundMax")
      thead
        tr
          th(colspan="2") {{ `${roundCur + 1}/${roundMax}` }}
          th
            span.pr-2.align-middle 預測
            span.badge.badge-info {{ predictsSum[roundCur] }}
          th
            span.pr-2.align-middle 結果
            span.badge(:class="(resultsSum[roundCur] === roundCur + 1) ? 'badge-success' : 'badge-danger'") {{ resultsSum[roundCur] }}
      tbody
        tr(v-for="player, playerIdx in players")
          td.align-middle.fs-dot8rem(@click="playerRename(player)", :class="playerIdx === dealer ? 'bg-success text-white' : ''") {{ player.name }}
          td.align-middle.fs-dot8rem {{ playersScore[playerIdx] }}
          td.py-2.pl-0
            .input-group.input-group-sm(v-for="round in [ player.rounds[roundCur] ]")
              .input-group-prepend
                button.btn.btn-outline-secondary(type="button", @click="round.result = --round.predict")
                  span.fa.fa-minus
              input.form-control.text-center(type="number", :value="round.predict", @input="round.result =  round.predict = _.parseInt($event.target.value)")
              .input-group-append
                button.btn.btn-outline-secondary(type="button", @click="round.result = ++round.predict")
                  span.fa.fa-plus
          td.py-2.pl-0
            .input-group.input-group-sm(v-for="round in [ player.rounds[roundCur] ]")
              .input-group-prepend
                button.btn.btn-outline-secondary(type="button", @click="round.result--")
                  span.fa.fa-minus
              input.form-control.text-center(type="number", v-model="round.result")
              .input-group-append
                button.btn.btn-outline-secondary(type="button", @click="round.result++")
                  span.fa.fa-plus
    b-card-body.p-2(v-if="curTab == 'input'")
      button.btn.btn-sm.btn-outline-secondary.mr-1(type="button", :disabled="roundCur <= 0", @click="roundCur--") #[span.fa.fa-arrow-left] 上一輪
      button.btn.btn-sm.mr-1(type="button", :disabled="roundCur >= roundMax - 1", @click="roundCur++", :class="'btn-outline' + inputResultColor") #[span.fa.fa-arrow-right] 下一輪
      span.text-black-50.fs-dot8rem 點玩家名稱可以改名。
    .table-responsive(v-if="curTab == 'scores' && !!roundMax")
      table.table.table-striped.table-borderless.table-sm.mb-0.text-center.text-nowrap.text-monospace#result-table
        thead
          tr
            th #
            th(v-for="player, playerIdx in players")
              span.badge.badge-primary {{ playersScore[playerIdx] }}
              br
              span {{ player.name }}
        tbody
          tr(v-for="i in roundMax", :key="i")
            th {{ i }}
            td(v-for="player in players")
              template(v-if="roundsEnable[i-1]", v-for="round in [_.get(player, ['rounds', i-1])]")
                span.round-score.pr-2.align-middle(v-for="score in [calculatePlayerRoundScore(round)]", :class="score > 0 ? 'text-success' : 'text-danger'") {{ score }}
    .card-body.p-2.border-0(v-if="curTab == 'rule'")
      img.mb-3.d-block.mx-auto.img-fluid(src="/images/boardgame-wizard.jpg")
      h3 遊戲背景
      p 很久很久以前，在巨石陣裡還有知名魔法學院的時代，魔法學徒們從事許多活動來訓練和琢磨他們的魔力。其中一個活動就是玩這個叫做「神機妙算」的紙牌遊戲，來發展和強化他們的預知天賦。
      p 在數千年後，這些訓練巫師的方法已經失傳。直到知名的德國考古學家 Horold Eitel 博士從巨石陣的石柱下挖掘出地窖，在裡面發現古老羊皮紙卷軸後，才讓「神機妙算」這個紙牌遊戲，重見天日。雖然紙牌中更深層更奧秘的意義可能已經失傳，但藉由重繪這些古老的圖像，及重述那古老卷軸上的規則，在此為您呈現這個充滿挑戰性的遊戲。
      h3 遊戲配件
      p 60 張角色牌，1 本真實之書（計分表），1 張羊皮紙（規則）。
      h3 遊戲目標
      p 學徒們必須正確地預測他們每輪遊戲將贏到的墩數，如果預測正確的話，就能得到經驗分數。在一回合中，每位玩家輪流出一張牌，正面朝上地置於桌面中央，這些牌稱為一墩。在遊戲結束時，得到最多經驗總分的人贏得遊戲，並且升級為智者巫師。
      h3 發牌階段
      p {{ players.length }} 人遊戲共有 {{ _.inRange(players.length, 3, 7) ? (60 / players.length) : 0 }} 輪。 每輪由一個人順時針輪流作為發牌玩家，第 1 輪每人 1 張牌、第 2 輪每人 2 張牌…依此類推，發牌玩家需要先把牌發給自己。
      h3 王牌花色
      p 沒發完的牌正面朝下放置於桌面中央，翻開最上面的一張牌，這張牌的花色就是這輪的王牌花色。 若最上面的牌為 Z，則由發牌玩家決定本輪的王牌花色，若最上面的牌為 N 或是最後一輪時，以「沒有王牌花色」進行。
      h3 開始預言
      p 在所有玩家看過自己的牌後，由發牌玩家開始，所有玩家依照順時針預測本輪會贏得幾墩，需要有人將所有玩家的預測紀錄於本記分板。
      h3 爭奪吃墩
      p 所有人都預測完後，就進入出牌階段，每次由本輪吃到上一墩的玩家先發，若是本輪第一次出牌則由發牌者先發。
      p 其他玩家必須順時針依序打出一張與先發者同花色的牌（本墩的花色），如果沒有同花色的牌，才能夠打出王牌花色（切牌）或其他花色的牌（墊牌）。
      p 注意：玩家隨時可以打出特殊牌 Z 或 N，不論其手上有沒有跟本墩花色一樣的牌。
      p 注意：若先發者打出巫師牌 Z，則其他人可以不受限制打出任何一張牌（包括 Z 和 N）。
      p 注意：若先發者打出小丑牌 N，則由下一家出牌決定本墩的花色。 若下一家又打出小丑牌 N，則再由下一家出牌決定。
      p
        | 在所有玩家都出一張牌以後，牌最大的玩家吃到這一墩，並且把這一墩的牌收好放到自己面前，牌的大小為：
        ol
          li 若有人出巫師牌 Z，則第一個出 Z 的人贏得此墩。
          li 若沒人出 Z，則打出王牌花色且點數最大的玩家贏得此墩（1 最小 13 最大）。
          li 若沒人出王牌花色，則打出本墩的花色且點數最大的玩家贏得此墩（1 最小 13 最大）。
          li 若所有人都出小丑牌 N，則第一個出 N 的人贏得此墩。
      h3 獲得分數
      p 當本輪的手牌全部打完後，本輪結束，並且將本輪每個人所吃到的墩數紀錄於本記分板。
      p
        | 遊戲計分的方式為：
        ul
          li 若該輪預測正確的玩家，贏得的每一墩都會得到 10 分，並且再額外獲得 20 分。
          li 若該輪預測錯誤的玩家，每多（少）贏到一墩，就扣除 10 分。
      p 玩家每輪所獲得的分數加總即為總分，總分最多的人獲勝。
      h3 自製桌遊
      p 材料：兩副一樣的撲克牌及筆。
      p.mb-0 做法：為了講解方便，在此將撲克牌分別以 A 和 B 表示。從撲克牌 B 中挑出 2 的牌，於牌的左上、中間及右下寫上 N，然後從撲克牌 B 中挑出 4 的牌，於牌的左上、中間及右下寫上 Z，然後把撲克牌 A 的鬼牌移除。將撲克牌 A 的 52 張牌加上撲克牌 B 的 Z 和 N 就製作完成啦。
    .alert.alert-danger.mb-0(v-if="!roundMax") 神機妙算的人數限制為 3 人到 6 人。
</template>

<style lang="sass" scoped>
.w-1px
  width: 1px
.round-score.text-success::before
  content: '+'
.badge
  display: inline-block
  padding: .25em .4em
  font-size: 75%
  font-weight: 700
  line-height: 1
  text-align: center
  white-space: nowrap
  vertical-align: baseline
  border-radius: .25rem
  height: auto
  margin-right: 0
.badge-secondary
  color: #fff
  background-color: #6c757d
.badge-primary
  color: #fff
  background-color: #007bff
.badge-info
  color: #fff
  background-color: #17a2b8
.badge-danger
  color: #fff
  background-color: #dc3545
#result-table
  letter-spacing: -1.5px
.fs-dot8rem
  font-size: .8rem
table
  display: table
  margin: 0
  overflow-x: visible
</style>

<script>
export default {
  data: () => ({
    roundCur: 0,
    curTab: 'setting',
    players: []
  }),
  mounted () {
    let players = localStorage.getItem('BoardGameWizardScoreBoard')
    if (players) this.$set(this, 'players', JSON.parse(players))
    this.$watch('players', newPlayers => {
      localStorage.setItem('BoardGameWizardScoreBoard', JSON.stringify(newPlayers))
    }, {deep: true})
  },
  computed: {
    roundMax () {
      if (!_.inRange(this.players.length, 3, 7)) return 0
      return 60 / this.players.length
    },
    predictsSum () {
      let sum = []
      for (let i=0; i<this.roundMax; i++) {
        sum[i] = _.sumBy(this.players, player => _.get(player, ['rounds', i, 'predict'], 0))
      }
      return sum
    },
    resultsSum () {
      let sum = []
      for (let i=0; i<this.roundMax; i++) {
        sum[i] = _.sumBy(this.players, player => _.get(player, ['rounds', i, 'result'], 0))
      }
      return sum
    },
    roundsEnable () {
      let ret = []
      for (let i=0; i<this.roundMax; i++) {
        ret[i] = (this.predictsSum[i] + this.resultsSum[i]) > 0
      }
      return ret
    },
    playersScore () {
      return _.map(this.players, this.playerScore)
    },
    inputResultColor () {
      return (this.resultsSum[this.roundCur] === this.roundCur + 1) ? '-success' : '-danger'
    },
    dealer () {
      return this.roundCur % this.players.length
    },
  },
  methods: {
    gameRestart () {
      if (!this.roundMax) return
      _.each(this.players, player => {
        this.$set(player, 'rounds', _.map(
          new Array(this.roundMax),
          () => ({
            predict: 0,
            result: 0
          })
        ))
      })
      this.roundCur = 0
    },
    calculatePlayerRoundScore (round) {
      let predict = _.get(round, 'predict', 0)
      let result = _.get(round, 'result', 0)
      if (predict === result) return result * 10 + 20
      return Math.abs(result - predict) * -10
    },
    playerScore (player) {
      let sum = 0
      _.each(player.rounds, (round, i) => {
        if (this.resultsSum[i] <= 0) return
        sum += this.calculatePlayerRoundScore(round)
      })
      return sum
    },
    promptPromise (message, defaultValue) {
      return new Promise((resolve, reject) => {
        let ret = prompt(message, defaultValue)
        if (ret == null) return reject(new Error('user canceled.'))
        resolve(ret)
      })
    },
    confirmPromise (message) {
      return new Promise((resolve, reject) => {
        let ret = confirm(message)
        if (!ret) return reject(new Error('user canceled.'))
        resolve(ret)
      })
    },
    async playerAdd () {
      try {
        let playerName = await this.promptPromise('請輸入新玩家的暱稱', `${this.players.length + 1}P`)
        if (playerName == null) return
        this.players.push({ name: playerName })
        this.gameRestart()
      } catch (error) {
        console.log(error)
      }
    },
    async playerPop () {
      try {
        let player = _.last(this.players)
        await this.confirmPromise(`確定要刪除玩家「${player.name}」嗎？\n（修改玩家人數都會自動重新開始遊戲）`)
        this.players.pop()
        this.gameRestart()
      } catch (error) {
        console.log(error)
      }
    },
    async playerRename (player) {
      try {
        let playerName = await this.promptPromise(`請問要把玩家 ${this.players.indexOf(player) + 1} 的名字改成什麼？`, player.name)
        if (playerName == null) return
        this.$set(player, 'name', playerName)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
