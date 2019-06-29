<template lang="pug">
.container(v-cloak="")
  h1.text-center.my-3 神秘大地隨機地圖程式
  .input-group.mb-3
    select.form-control(v-model="inputPreset")
      option(v-for="preset in presets", :value="preset.firstType") {{ preset.name }}
    .input-group-append
      button.btn.btn-outline-success(type="button", @click="resetBoard") 重新產生
  .input-group.mb-3
    .input-group-prepend
      span.input-group-text 地圖代碼
    input.form-control(type="text", v-model="board")
  svg.terra-mystica(:viewBox="`0 0 ${sqrt3*13} 1400`")
    defs
      radialGradient(id="lake", cx="50%", cy="50%")
        stop(offset="40%", stop-color="#427ebd")
        stop(offset="90%", stop-color="#82c890")
    template(v-for="ty in 9")
      polygon(v-for="tx in getCellCnt(ty)", :key="`${ty}-${tx}`", :fill="getColor(ty, tx)", :points="getPoints(ty, tx)")
</template>

<script>
async function fillBoard (board, firstType)
{
  let ans = board.split('')
  let pool = _.shuffle(_.padEnd('', 77, '2345678'))
  // 取得六邊形的鄰居
  let getNeighbors = (y, x) => {
    let neighbors = []
    let isLongerRow = (y + firstType) % 2 ? 0 : 1
    neighbors.push({y: y-1, x: isLongerRow ? x-1 : x}) // 左上
    neighbors.push({y: y, x: x-1}) // 左
    neighbors.push({y: y+1, x: isLongerRow ? x-1 : x}) // 左下
    neighbors.push({y: y-1, x: isLongerRow ? x : x+1}) // 右上
    neighbors.push({y: y, x: x+1}) // 右
    neighbors.push({y: y+1, x: isLongerRow ? x : x+1}) // 右下
    return _.filter(neighbors, n => (n.x > -1 && n.x < 13 && n.y > -1 && n.y < 9))
  }
  let recursiveFn = (start) => {
    while(start < ans.length && ans[start] !== '0') start++
    if (start >= ans.length) return ans // 如果發現 start 的位置超出圖板 就結束遞迴函式並回傳 ans
    let triedFaction = {}
    // 將相鄰的地形先當作嘗試過了
    let neighbors = getNeighbors(_.floor(start/13), start%13);
    _.each(neighbors, n => {
      triedFaction[ _.get(ans, n.y*13 + n.x, '0') ] = true
    })
    for(let i=0; i<pool.length; i++) {
      // 如果 pool[i] 已被使用或是 pool[i] 是不可用的顏色就跳過
      if (!pool[i] || _.get(triedFaction, pool[i], false)) continue
      triedFaction[ pool[i] ] = true // 將 pool[i] 設定為已試過
      ans[start] = pool[i]; // 將圖板上設定為該顏色
      pool[i] = null; // 將圖板標記為已被使用
      if (recursiveFn(start + 1)) return true // 呼叫遞迴函式 如果已經執行結束 就回傳最後的圖板
      // 遞迴函式沒有結束 所以需要還原
      pool[i] = ans[start]
      ans[start] = '0'
    }
    return false
  }
  recursiveFn(0)
  return ans.join('')
}
export default {
  data: () => ({
    colors: ["white", "white", "gray", "black", "gold", "#996600", "lime", "red", "blue"],
    sqrt3: Math.sqrt(3) * 100,
    presets: [{
      firstType: 0,
      name: '神秘大地',
      board: '0000000000000 0110011001101 1101010101011 0001100101001 0000000011000 0011001110001 1110101010000 0001110010001 0000000001000',
    }, {
      firstType: 1,
      name: '神秘大地：冰與火之歌',
      board: '0100010000001 0010001110000 0011100011111 0000010001000 1101100001001 0011011100100 0100000100101 0010000100100 0010000100101',
    }],
    inputPreset: 0,
    board: ''
  }),
  watch: {
    inputPreset () {
      this.resetBoard()
    }
  },
  computed: {
    firstType () {
      return _.get(this, ['presets', this.inputPreset, 'firstType'], 1)
    }
  },
  mounted () {
    this.resetBoard()
  },
  methods: {
    getColor(ty, tx) {
      let c = _.parseInt(_.get(this, ['board', ty * 13 + tx - 14], '0'))
      return this.colors[c]
    },
    getPoints (ty, tx) {
      let sqrt3 = this.sqrt3
      let sqrt3_2 = sqrt3 / 2
      let y = 150 * (ty - 1)
      let x = 173.2 * (tx - 1) + ((ty + this.firstType) % 2 ? 0 : sqrt3_2)
      return `${x + sqrt3_2},${y} ${x+sqrt3},${y+50} ${x+sqrt3},${y+150} ${x+sqrt3_2},${y+200} ${x+0},${y+150} ${x},${y+50}`
    },
    getCellCnt (ty) {
      return 12 + (ty + this.firstType) % 2
    },
    async resetBoard () {
      let board = _.get(this, ['presets', this.inputPreset, 'board']).replace(/ /g, '')
      this.board = await fillBoard(board, this.firstType)
    }
  }
}
</script>

<style lang="sass" scoped>
[v-cloak]
  display: none
svg.terra-mystica
  width: 100%
  polygon
    stroke: black
    stroke-width: 3
</style>
