(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{411:function(t,e,i){"use strict";i.r(e);var a=i(8),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"wei-mou-ge-cheng-shi-jia-shang-yi-xi-tong-guan-li-yuan-zhi-xing-ci-cheng-shi"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#wei-mou-ge-cheng-shi-jia-shang-yi-xi-tong-guan-li-yuan-zhi-xing-ci-cheng-shi"}},[t._v("#")]),t._v(" 為某個程式加上【以系統管理員執行此程式】")]),t._v(" "),i("p",[t._v("終於找到在 windows 7 中替某個程式加上【以系統管理員執行此程式】的方法了!!"),i("br"),t._v("\n這樣的話，我在 "),i("code",[t._v("Easy_run_class")]),t._v(" 中新增 PATH 應該就不會遇到什麼問題了"),i("br"),t._v("\n要新增資料到登錄檔裡面"),i("br"),t._v("\n安裝程式都可以代勞~"),i("br"),t._v("\n接下來的比較大的問題...可能就是要怎麼辦找到 JDK 的路徑了吧 (在沒有安裝在預設路徑的情況下)")]),t._v(" "),i("hr"),t._v(" "),i("p",[t._v("本文章轉載自："),i("a",{attrs:{href:"http://www.sevenforums.com/tutorials/316-compatibility-mode.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.sevenforums.com/tutorials/316-compatibility-mode.html"),i("OutboundLink")],1)]),t._v(" "),i("ol",[i("li",[t._v("Open the Start Menu, then type regedit in the search box and press Enter.")]),t._v(" "),i("li",[t._v("If prompted by UAC, then click on Yes.")]),t._v(" "),i("li",[t._v("In regedit, navigate to the location below. (see screenshot below)"),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("HKEY_CURRENT_USER\\Software\\Microsoft\\Windows NT\\CurrentVersion\\AppCompatFlags\\Layers\n")])])]),i("img",{attrs:{src:"http://www.sevenforums.com/attachments/tutorials/69881d1272443655t-compatibility-mode-reg1.jpg",alt:""}})]),t._v(" "),i("li",[t._v("To Run a Program in Compatibility Mode\n"),i("ul",[i("li",[t._v("In the right pane of Layers, right click on a empty area and click on New, then onString Value. (see screenshot below)\n"),i("img",{attrs:{src:"http://www.sevenforums.com/attachments/tutorials/69882d1272443655t-compatibility-mode-reg2.jpg",alt:""}})]),t._v(" "),i("li",[t._v("Type in the full path of the program's exe file and press Enter, then right click on the full path and click on Modify. (see screenshot below)\n"),i("img",{attrs:{src:"http://www.sevenforums.com/attachments/tutorials/69883d1272443655t-compatibility-mode-reg3.jpg",alt:""}})]),t._v(" "),i("li",[t._v("Type in a single or combination of Data values (see tables below) for how you want to run the program as, and click on OK. (see screenshot below)\nNOTE: If you use more than one Settings, then you must add them in the order they are in the table below.")])])])]),t._v(" "),i("p",[t._v("[Compatibility Mode (only one)] + space + [Settings (one or more with a space inbetween)] + space + [Privilege Level]")]),t._v(" "),i("p",[i("img",{attrs:{src:"http://www.sevenforums.com/attachments/tutorials/69884d1272443655t-compatibility-mode-reg4.jpg",alt:""}})]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Compatibility Mode")]),t._v(" "),i("th",[t._v("Data Value")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("Windows 95")]),t._v(" "),i("td",[t._v("WIN95")])]),t._v(" "),i("tr",[i("td",[t._v("Windows 98 / Windows Me")]),t._v(" "),i("td",[t._v("WIN98")])]),t._v(" "),i("tr",[i("td",[t._v("Windows NT 4.0 (Service Pack 5)")]),t._v(" "),i("td",[t._v("NT4SP5")])]),t._v(" "),i("tr",[i("td",[t._v("Windows 2000")]),t._v(" "),i("td",[t._v("WIN2000")])]),t._v(" "),i("tr",[i("td",[t._v("Windows XP (Service Pack 2)")]),t._v(" "),i("td",[t._v("WINXPSP2")])]),t._v(" "),i("tr",[i("td",[t._v("Windows XP (Service Pack 3)")]),t._v(" "),i("td",[t._v("WINXPSP3")])]),t._v(" "),i("tr",[i("td",[t._v("Windows Server 2003 (Service Pack 1)")]),t._v(" "),i("td",[t._v("WINSRV03SP1")])]),t._v(" "),i("tr",[i("td",[t._v("Windows Server 2008 (Service Pack 1)")]),t._v(" "),i("td",[t._v("WINSRV08SP1")])]),t._v(" "),i("tr",[i("td",[t._v("Windows Vista")]),t._v(" "),i("td",[t._v("VISTARTM")])]),t._v(" "),i("tr",[i("td",[t._v("Windows Vista (Service Pack 1)")]),t._v(" "),i("td",[t._v("VISTASP1")])]),t._v(" "),i("tr",[i("td",[t._v("Windows Vista (Service Pack 2)")]),t._v(" "),i("td",[t._v("VISTASP2")])]),t._v(" "),i("tr",[i("td",[t._v("Windows 7")]),t._v(" "),i("td",[t._v("WIN7RTM")])])])]),t._v(" "),i("hr"),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Settings")]),t._v(" "),i("th",[t._v("Data Value")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("Run in 256 colors")]),t._v(" "),i("td",[t._v("256Color")])]),t._v(" "),i("tr",[i("td",[t._v("Run in 640 x 480 screen resolution")]),t._v(" "),i("td",[t._v("640x480")])]),t._v(" "),i("tr",[i("td",[t._v("Disable visual themes")]),t._v(" "),i("td",[t._v("DISABLETHEMES")])]),t._v(" "),i("tr",[i("td",[t._v("Disable desktop composition")]),t._v(" "),i("td",[t._v("DISABLEDWM")])]),t._v(" "),i("tr",[i("td",[t._v("Disable display scaling on high DPI settings")]),t._v(" "),i("td",[t._v("HIGHDPIAWARE")])])])]),t._v(" "),i("hr"),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Privilege Level")]),t._v(" "),i("th",[t._v("Data Value")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("Run this program as an Administrator")]),t._v(" "),i("td",[t._v("RUNASADMIN")])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);