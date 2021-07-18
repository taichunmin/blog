(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{328:function(t,s,a){},376:function(t,s,a){"use strict";a(328)},391:function(t,s,a){"use strict";a.r(s);var e={data:()=>({roundCur:0,curTab:"setting",players:[]}),mounted(){let t=localStorage.getItem("BoardGameWizardScoreBoard");t&&this.$set(this,"players",JSON.parse(t)),this.$watch("players",t=>{localStorage.setItem("BoardGameWizardScoreBoard",JSON.stringify(t))},{deep:!0})},computed:{roundMax(){return _.inRange(this.players.length,3,7)?60/this.players.length:0},predictsSum(){let t=[];for(let s=0;s<this.roundMax;s++)t[s]=_.sumBy(this.players,t=>_.get(t,["rounds",s,"predict"],0));return t},resultsSum(){let t=[];for(let s=0;s<this.roundMax;s++)t[s]=_.sumBy(this.players,t=>_.get(t,["rounds",s,"result"],0));return t},roundsEnable(){let t=[];for(let s=0;s<this.roundMax;s++)t[s]=this.predictsSum[s]+this.resultsSum[s]>0;return t},playersScore(){return _.map(this.players,this.playerScore)},inputResultColor(){return this.resultsSum[this.roundCur]===this.roundCur+1?"-success":"-danger"},dealer(){return this.roundCur%this.players.length}},methods:{gameRestart(){this.roundMax&&(_.each(this.players,t=>{this.$set(t,"rounds",_.map(new Array(this.roundMax),()=>({predict:0,result:0})))}),this.roundCur=0)},calculatePlayerRoundScore(t){let s=_.get(t,"predict",0),a=_.get(t,"result",0);return s===a?10*a+20:-10*Math.abs(a-s)},playerScore(t){let s=0;return _.each(t.rounds,(t,a)=>{this.resultsSum[a]<=0||(s+=this.calculatePlayerRoundScore(t))}),s},promptPromise:(t,s)=>new Promise((a,e)=>{let r=prompt(t,s);if(null==r)return e(new Error("user canceled."));a(r)}),confirmPromise:t=>new Promise((s,a)=>{let e=confirm(t);if(!e)return a(new Error("user canceled."));s(e)}),async playerAdd(){try{let t=await this.promptPromise("請輸入新玩家的暱稱",this.players.length+1+"P");if(null==t)return;this.players.push({name:t}),this.gameRestart()}catch(t){console.log(t)}},async playerPop(){try{let t=_.last(this.players);await this.confirmPromise(`確定要刪除玩家「${t.name}」嗎？\n（修改玩家人數都會自動重新開始遊戲）`),this.players.pop(),this.gameRestart()}catch(t){console.log(t)}},async playerRename(t){try{let s=await this.promptPromise(`請問要把玩家 ${this.players.indexOf(t)+1} 的名字改成什麼？`,t.name);if(null==s)return;this.$set(t,"name",s)}catch(t){console.log(t)}}}},r=(a(376),a(8)),n=Object(r.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"card-wizard-board"}},[a("h1",{staticClass:"text-center my-3"},[t._v("神機妙算記分板")]),a("b-card",{staticClass:"mb-3",attrs:{"no-body":""}},[a("ul",{staticClass:"nav nav-tabs card-header-tabs",attrs:{slot:"header"},slot:"header"},t._l({setting:"設定",input:"記錄",scores:"得分",rule:"規則"},(function(s,e){return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:t.curTab==e},attrs:{href:"#"},on:{click:function(s){t.curTab=e}}},[t._v(t._s(s))])])})),0),a("table",{directives:[{name:"show",rawName:"v-show",value:"setting"==t.curTab,expression:"curTab == 'setting'"}],staticClass:"table table-striped table-borderless mb-0"},[a("tbody",[a("tr",[a("td",{staticClass:"text-nowrap text-center w-1px"},[a("button",{staticClass:"btn btn-sm btn-outline-secondary mr-1",attrs:{type:"button"},on:{click:t.playerAdd}},[a("span",{staticClass:"fa fa-plus"}),t._v(" 玩家")]),a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:t.playerPop}},[a("span",{staticClass:"fa fa-minus"}),t._v(" 玩家")])]),a("td",{staticClass:"py-3"},[t._v("目前玩家人數為 "+t._s(this.players.length)+" 人，更改玩家數量將會自動重新開始遊戲，人數限制為 3 人到 6 人。")])]),a("tr",[a("td",{staticClass:"text-nowrap text-center w-1px"},[a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:t.gameRestart}},[a("span",{staticClass:"fa fa-refresh"}),t._v(" 重新開始遊戲")])]),a("td",{staticClass:"py-3"},[t._v("以目前的玩家人數重新開始遊戲。")])])])]),"input"==t.curTab&&t.roundMax?a("table",{staticClass:"table table-striped table-borderless text-nowrap text-center text-monospace mb-0"},[a("thead",[a("tr",[a("th",{attrs:{colspan:"2"}},[t._v(t._s(t.roundCur+1+"/"+t.roundMax))]),a("th",[a("span",{staticClass:"pr-2 align-middle"},[t._v("預測")]),a("span",{staticClass:"badge badge-info"},[t._v(t._s(t.predictsSum[t.roundCur]))])]),a("th",[a("span",{staticClass:"pr-2 align-middle"},[t._v("結果")]),a("span",{staticClass:"badge",class:t.resultsSum[t.roundCur]===t.roundCur+1?"badge-success":"badge-danger"},[t._v(t._s(t.resultsSum[t.roundCur]))])])])]),a("tbody",t._l(t.players,(function(s,e){return a("tr",[a("td",{staticClass:"align-middle fs-dot8rem",class:e===t.dealer?"bg-success text-white":"",on:{click:function(a){return t.playerRename(s)}}},[t._v(t._s(s.name))]),a("td",{staticClass:"align-middle fs-dot8rem"},[t._v(t._s(t.playersScore[e]))]),a("td",{staticClass:"py-2 pl-0"},t._l([s.rounds[t.roundCur]],(function(s){return a("div",{staticClass:"input-group input-group-sm"},[a("div",{staticClass:"input-group-prepend"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(t){s.result=--s.predict}}},[a("span",{staticClass:"fa fa-minus"})])]),a("input",{staticClass:"form-control text-center",attrs:{type:"number"},domProps:{value:s.predict},on:{input:function(a){s.result=s.predict=t._.parseInt(a.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(t){s.result=++s.predict}}},[a("span",{staticClass:"fa fa-plus"})])])])})),0),a("td",{staticClass:"py-2 pl-0"},t._l([s.rounds[t.roundCur]],(function(s){return a("div",{staticClass:"input-group input-group-sm"},[a("div",{staticClass:"input-group-prepend"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(t){s.result--}}},[a("span",{staticClass:"fa fa-minus"})])]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.result,expression:"round.result"}],staticClass:"form-control text-center",attrs:{type:"number"},domProps:{value:s.result},on:{input:function(a){a.target.composing||t.$set(s,"result",a.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(t){s.result++}}},[a("span",{staticClass:"fa fa-plus"})])])])})),0)])})),0)]):t._e(),"input"==t.curTab?a("b-card-body",{staticClass:"p-2"},[a("button",{staticClass:"btn btn-sm btn-outline-secondary mr-1",attrs:{type:"button",disabled:t.roundCur<=0},on:{click:function(s){t.roundCur--}}},[a("span",{staticClass:"fa fa-arrow-left"}),t._v(" 上一輪")]),a("button",{staticClass:"btn btn-sm mr-1",class:"btn-outline"+t.inputResultColor,attrs:{type:"button",disabled:t.roundCur>=t.roundMax-1},on:{click:function(s){t.roundCur++}}},[a("span",{staticClass:"fa fa-arrow-right"}),t._v(" 下一輪")]),a("span",{staticClass:"text-black-50 fs-dot8rem"},[t._v("點玩家名稱可以改名。")])]):t._e(),"scores"==t.curTab&&t.roundMax?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-striped table-borderless table-sm mb-0 text-center text-nowrap text-monospace",attrs:{id:"result-table"}},[a("thead",[a("tr",[a("th",[t._v("#")]),t._l(t.players,(function(s,e){return a("th",[a("span",{staticClass:"badge badge-primary"},[t._v(t._s(t.playersScore[e]))]),a("br"),a("span",[t._v(t._s(s.name))])])}))],2)]),a("tbody",t._l(t.roundMax,(function(s){return a("tr",{key:s},[a("th",[t._v(t._s(s))]),t._l(t.players,(function(e){return a("td",[t._l([t._.get(e,["rounds",s-1])],(function(e){return t.roundsEnable[s-1]?t._l([t.calculatePlayerRoundScore(e)],(function(s){return a("span",{staticClass:"round-score pr-2 align-middle",class:s>0?"text-success":"text-danger"},[t._v(t._s(s))])})):t._e()}))],2)}))],2)})),0)])]):t._e(),"rule"==t.curTab?a("div",{staticClass:"card-body p-2 border-0"},[a("img",{staticClass:"mb-3 d-block mx-auto img-fluid",attrs:{src:"/images/boardgame-wizard.jpg"}}),a("h3",[t._v("遊戲背景")]),a("p",[t._v("很久很久以前，在巨石陣裡還有知名魔法學院的時代，魔法學徒們從事許多活動來訓練和琢磨他們的魔力。其中一個活動就是玩這個叫做「神機妙算」的紙牌遊戲，來發展和強化他們的預知天賦。")]),a("p",[t._v("在數千年後，這些訓練巫師的方法已經失傳。直到知名的德國考古學家 Horold Eitel 博士從巨石陣的石柱下挖掘出地窖，在裡面發現古老羊皮紙卷軸後，才讓「神機妙算」這個紙牌遊戲，重見天日。雖然紙牌中更深層更奧秘的意義可能已經失傳，但藉由重繪這些古老的圖像，及重述那古老卷軸上的規則，在此為您呈現這個充滿挑戰性的遊戲。")]),a("h3",[t._v("遊戲配件")]),a("p",[t._v("60 張角色牌，1 本真實之書（計分表），1 張羊皮紙（規則）。")]),a("h3",[t._v("遊戲目標")]),a("p",[t._v("學徒們必須正確地預測他們每輪遊戲將贏到的墩數，如果預測正確的話，就能得到經驗分數。在一回合中，每位玩家輪流出一張牌，正面朝上地置於桌面中央，這些牌稱為一墩。在遊戲結束時，得到最多經驗總分的人贏得遊戲，並且升級為智者巫師。")]),a("h3",[t._v("發牌階段")]),a("p",[t._v(t._s(t.players.length)+" 人遊戲共有 "+t._s(t._.inRange(t.players.length,3,7)?60/t.players.length:0)+" 輪。 每輪由一個人順時針輪流作為發牌玩家，第 1 輪每人 1 張牌、第 2 輪每人 2 張牌…依此類推，發牌玩家需要先把牌發給自己。")]),a("h3",[t._v("王牌花色")]),a("p",[t._v("沒發完的牌正面朝下放置於桌面中央，翻開最上面的一張牌，這張牌的花色就是這輪的王牌花色。 若最上面的牌為 Z，則由發牌玩家決定本輪的王牌花色，若最上面的牌為 N 或是最後一輪時，以「沒有王牌花色」進行。")]),a("h3",[t._v("開始預言")]),a("p",[t._v("在所有玩家看過自己的牌後，由發牌玩家開始，所有玩家依照順時針預測本輪會贏得幾墩，需要有人將所有玩家的預測紀錄於本記分板。")]),a("h3",[t._v("爭奪吃墩")]),a("p",[t._v("所有人都預測完後，就進入出牌階段，每次由本輪吃到上一墩的玩家先發，若是本輪第一次出牌則由發牌者先發。")]),a("p",[t._v("其他玩家必須順時針依序打出一張與先發者同花色的牌（本墩的花色），如果沒有同花色的牌，才能夠打出王牌花色（切牌）或其他花色的牌（墊牌）。")]),a("p",[t._v("注意：玩家隨時可以打出特殊牌 Z 或 N，不論其手上有沒有跟本墩花色一樣的牌。")]),a("p",[t._v("注意：若先發者打出巫師牌 Z，則其他人可以不受限制打出任何一張牌（包括 Z 和 N）。")]),a("p",[t._v("注意：若先發者打出小丑牌 N，則由下一家出牌決定本墩的花色。 若下一家又打出小丑牌 N，則再由下一家出牌決定。")]),a("p",[t._v("在所有玩家都出一張牌以後，牌最大的玩家吃到這一墩，並且把這一墩的牌收好放到自己面前，牌的大小為："),a("ol",[a("li",[t._v("若有人出巫師牌 Z，則第一個出 Z 的人贏得此墩。")]),a("li",[t._v("若沒人出 Z，則打出王牌花色且點數最大的玩家贏得此墩（1 最小 13 最大）。")]),a("li",[t._v("若沒人出王牌花色，則打出本墩的花色且點數最大的玩家贏得此墩（1 最小 13 最大）。")]),a("li",[t._v("若所有人都出小丑牌 N，則第一個出 N 的人贏得此墩。")])])]),a("h3",[t._v("獲得分數")]),a("p",[t._v("當本輪的手牌全部打完後，本輪結束，並且將本輪每個人所吃到的墩數紀錄於本記分板。")]),a("p",[t._v("遊戲計分的方式為："),a("ul",[a("li",[t._v("若該輪預測正確的玩家，贏得的每一墩都會得到 10 分，並且再額外獲得 20 分。")]),a("li",[t._v("若該輪預測錯誤的玩家，每多（少）贏到一墩，就扣除 10 分。")])])]),a("p",[t._v("玩家每輪所獲得的分數加總即為總分，總分最多的人獲勝。")]),a("h3",[t._v("自製桌遊")]),a("p",[t._v("材料：兩副一樣的撲克牌及筆。")]),a("p",{staticClass:"mb-0"},[t._v("做法：為了講解方便，在此將撲克牌分別以 A 和 B 表示。從撲克牌 B 中挑出 2 的牌，於牌的左上、中間及右下寫上 N，然後從撲克牌 B 中挑出 4 的牌，於牌的左上、中間及右下寫上 Z，然後把撲克牌 A 的鬼牌移除。將撲克牌 A 的 52 張牌加上撲克牌 B 的 Z 和 N 就製作完成啦。")])]):t._e(),t.roundMax?t._e():a("div",{staticClass:"alert alert-danger mb-0"},[t._v("神機妙算的人數限制為 3 人到 6 人。")])],1)],1)}),[],!1,null,"f135a1fc",null);s.default=n.exports}}]);