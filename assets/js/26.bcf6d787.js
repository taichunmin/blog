(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{402:function(_,e,v){"use strict";v.r(e);var t=v(8),n=Object(t.a)({},(function(){var _=this,e=_.$createElement,v=_._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"yao-dui-wang-ye-shi-yong-preg-zhi-qian-ji-de-xian-qu-chu-huan-xing"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#yao-dui-wang-ye-shi-yong-preg-zhi-qian-ji-de-xian-qu-chu-huan-xing"}},[_._v("#")]),_._v(" 要對網頁使用 preg 之前，記得先去除換行!")]),_._v(" "),v("p",[_._v("在學到 PHP 裡面的 preg 之後，就一直很想用這個來抓出網頁中我想要的資料")]),_._v(" "),v("p",[_._v("(網頁是使用 "),v("code",[_._v("file_get_contents( 'http://........' );")]),_._v(" 取得的)")]),_._v(" "),v("p",[_._v("可是不管怎麼嘗試")]),_._v(" "),v("p",[_._v("就是抓不出我想要的東西")]),_._v(" "),v("p",[_._v("我還曾經幾度懷疑我學的正則表達式是不是跟別人不一樣...")]),_._v(" "),v("p",[_._v("後來乾脆寫了一個測試的網頁")]),_._v(" "),v("p",[_._v("才真正發現了問題所在")]),_._v(" "),v("p",[_._v("原來PHP裡面的 "),v("code",[_._v("preg_match")]),_._v(" 和 "),v("code",[_._v("preg_match_all")]),_._v(" 不把換行( "),v("code",[_._v("\\r\\n")]),_._v(" 和 "),v("code",[_._v("\\n")]),_._v(" )視為萬用字元 (.)")]),_._v(" "),v("p",[_._v("所以在下正則表達式時，就會遇上麻煩了...")]),_._v(" "),v("p",[_._v("所以我後來的解決辦法是")]),_._v(" "),v("p",[_._v("先使用 "),v("code",[_._v('str_replace(["\\r\\n","\\n"], ["",""], $html);')]),_._v(" 去除所有的換行")]),_._v(" "),v("p",[_._v("這樣就成功解決的這個奇怪的問題~")])])}),[],!1,null,null,null);e.default=n.exports}}]);