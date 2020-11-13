---
title: "[筆記] gcc參數指令(轉錄)"
date: 2009-08-08T23:58:00+08
tags:
  - CMD程式
---
# [筆記] gcc參數指令(轉錄)

※ 使用方式  
  
gcc \[option\] filename  
  
※ 選項  
  
\-c : 只做編譯(不做連結)  
\-S : 輸出組譯碼  
\-E : 將預處理結果顯示  
\-o filename : 指定輸出檔名  
\-ansi : 程式要求依據ansi c標準  
\-Dmacro : 使定義巨集(marco)為有效  
\-Dmarco=defn : 使定義巨集(marco)為defn  
\-Wa,option : 將選項(option)傳給組譯器  
\-wl,option : 將選項(option)傳給連結器  
\-I : 追加include檔案的搜尋路徑  
\-L : 追加library檔案的搜尋路徑  
\-l : 指定連結的函式庫  
\-Wall : 顯示所有的警告訊息  
\-g : 編入除錯資訊(要使用GDB除錯一定要加)  
\-O2 : 做最佳化  
※ 使用範例  
  
Example:  
  
gcc -o file a.c b.c c.c  
gcc -Wall -g -o test test.c  
gcc -Iinclude -Llibrary -lmy\_lib -o test1 test1.c  
gcc -DDEBUG\_ON -o test2 test2.c  
gcc -c -o test3 test.c

- - -

轉自 [http://mis.im.tku.edu.tw/~zbwei12b/program/gcc-1.html](http://mis.im.tku.edu.tw/%7Ezbwei12b/program/gcc-1.html)

  
題目：編織出個好程式--GCC參數篇（一）  
作者：陳信宏(Ivor Chen)  
E-mail add：civor@ksts.seed.net.tw or  
            Ivor.bbs@bbs.ccu.edu.tw  
地址：嘉義市西門街 80 號  
電話：(05)2253215  
  
    GNU C/C++是由自由軟體協會(FSF;Free  
Software Foundation)所發展和推出的一套功能  
完備的 C/C++語言編譯器和程式庫，C/C++ 語言  
以其類似高階語言的語法和接進機械語言的執行  
速度，成為軟體發展的重要選擇之一； C/C++語  
言的可攜帶性能力本來就很高，這使得發展完成  
的程式只需修改小部份或是根本不需修改，就能  
輕易的移植到不同的作業系統上；雖然 C/C++本  
身有這些先天上的優點，但更重要的是需要有個  
良好的編譯程式，才能將可執行檔編得更快、編  
得更小，而且若是在不同的作業系統上都有一套  
相同的編譯器，那對於程式設計人員有著莫大的  
幫助和方便，因為不會有在那個OS下要用那個編  
譯程式的困擾；多年來，GNU C/C++ 一直盡職的  
扮演這個角色。  
    如同 Linux一般，GNU CC非由一人或一公司  
所撰寫，除了Richard Stallman先生外，全世界  
的使用者也供獻了許多心力，有人加入新的關念  
和技巧，有人改善舊有的結構，更有人把她移植  
到不同的機型和作業系統上，在夜以繼日時時刻  
刻的改進之下，GNU CC彙集了各方的優點加以融  
合，並朝未來進步之中；在 Linux中就是以她作  
為發展工具，在重編核心之時便是她擔任重責大  
任，而且在 DOS中也有GNU CC-- DJGPP。然而她  
並未提供如 Turbo C的整合發展環境，想要認識  
她的使用者難免會有吃力的感覺，面對如此的仰  
之彌高，最直接的方法便是從控制功能的參數認  
識起，如此一來不但不會鑽之彌堅，而且還能漸  
入佳境，因此我們就先從參數談起。  
  
GNU C/C++ 的一些相關資料  
\========================  
    gcc 是 GNU C/C++的 C語言編譯程式的名稱  
，在接下來的文章之中，筆者將以大寫的 GCC來  
代表 GNU C/C++，而以小寫的 gcc來代表編譯程  
式，gcc 的語法如下：  
gcc \[option|filemane\]...  
其中filemane是將要編譯的檔名，option是將要  
認識的參數部份。  
    當要編譯 C++語言時，g++ 為使用的編譯程  
式，在此 g++是一個完全的編譯器--而不只是個  
前置處理器，直接產生物件碼，這樣的 C++執行  
起來才更有效率，其語法如下：  
g++ \[option|filemane\]...  
其中參數部份除非有指明是專屬於 gcc或是 g++  
外，其餘兩者皆可使用。  
    在一般的情況下，GCC 的編譯過程有下列四  
個步驟：preprocessing,compilation,assembly  
和 linking，而整體參數(overall options) 的  
作用是指定在那一階段停止，其它類型的參數主  
要是調整這四個步驟中某一步驟的動作。  
    由於許多參數之後都允許加上其它控制的子  
參數，因此對於參數間的合併使用有較嚴格的限  
定--兩個參數不可併成一個，如 -dr這個參數便  
和 -d -r在作用上有著極大的不同。對於不同類  
型的參數，在排列上不需依任何順序。而相同類  
型的參數，也沒有只能使用一個的限制。對於某  
些參數如-f或是-W，其後的子參數可能是一個字  
串，如 -fforce-mem或是-Wformat，這類型的組  
合大部份都有posetive和negative兩種型態，如  
 -ffoo的negative型為-fno-foo，在接下來的討  
論之中，若是這兩種型態皆存在者，筆者會一同  
列出。  
  
整體參數(Overall Options)  
\=========================  
    整體參數的目的在於控制編譯的進行，即編  
譯到那個階段便停止，因此我們先來看看各種字  
尾和檔案間的關係：  
  
'FILE.c'  需作前置處理(preprocess)的 C語言  
          原始程式  
  
'FILE.i'  不需作前置處理的 C語言原始程式  
  
'FILE.m'  Objective-C 的原始程式，且必需和  
          程式庫 'libobjc.a'連結才能植執行  
  
'FILE.h'  C 語言標頭檔(header file)  
  
'FILE.cc'  
'FILE.cxx'  
'FILE.C'  需作前置處理的 C++語言原始程式  
  
'FILE.ii' 不需作前置處理的 C++語言原始程式  
  
'FILE.s'  組合語言檔  
  
'FILE.S'  需作前置處理的組合語言檔  
  
接下來我們來看整體參數：  
  
\-x LANGUAGE  
GCC 會以檔案字尾來判定是何種語言來作編譯，  
而本參數的作用為指定後續的檔案之語言種類，  
不管其字尾為何，LANGUAGE的可能內容為  
c   objective-c   c++   c-header  
cpp-output        c++-cpp-output  
assembler         assembler-with-cpp  
這些指定的語言會一直作用到下一個-x參數  
  
\-x none  
不指定任何語言，以輸入檔案的字尾為準  
  
當只希望作某階段的編譯時，用-x可指定編譯的  
起點，下述的參數可以指定編譯終點：  
  
\-E  
此參數指定只作完perprocess便停止，不作接下  
來compiler等動作，並輸出到標準輸出(stdout)  
去，對於不需前置處理的檔案本參數無效。  
  
\-S  
只進行到compiler便停止，因此輸出為一組合語  
言檔，在內定的輸出檔名為輸入檔名去除.c或.i  
等字尾之後加上.s而成。  
  
\-c  
只 compile或assemble輸入檔案，而不作連結，  
因此輸出為一目的檔(object file)， 內定的檔  
名為去除.c、.i或是.s等之後加上.o而成。  
  
\-o FILE  
不管在那一階段結束動作，都可用此參數將內定  
的輸出檔名改成"FILE"；若是沒用此參數，最後  
產生的可執行檔檔名內定為 "a.out"，在各階段  
結束的輸出內定檔名請看上列參數。  
  
\-v  
將正在執行的編譯階段及編連程式的版本輸出至  
標準錯誤輸出(standard error output)。  
  
\-pipe  
在不同階段之編譯時，使用管線(pipe)取代暫存  
檔，在某些系統上的組譯程式(assembler) 由於  
不能由管線讀取資料，而使得這參數無效，但對  
GNU assembler 而言此參數當然可用。  
  
和C之方言(C Dialect)有關的參數  
\==============================  
    所謂的「方言」或是「標準語言」在此是以  
制定的標準而言，因此ANSI C便是「標準語言」  
，而相對的較舊(在制定之前的 C)或是較新者(  
如C++)便成了「方言」，這樣的分類是因為依實  
際的情況而定，沒半點優劣的意思。  
    對於 C++語言而言，雖然 gcc能以檔名字尾  
為判斷而作正確的編連，但有時仍需指定物件程  
式庫libg++為連結所需程式庫，因此如果要編連  
 C++語言，建議使用 g++(某些系統上為 c++)來  
作，因為 g++會將語言內定為 C++、將libg++內  
定為標準程式庫，而且對於字尾並不符合標準字  
尾的檔案也能作編連。  
    接下來我們來看方言參數：  
  
\-ansi  
指定為ANSI C語言，本參數會將不符合ANSI C標  
準的字視為語法錯誤，因此本參數會關閉 GCC中  
許多有用的關鍵字，如 asm、inline和typeof，  
以及用來辨認系統的巨集名稱如unix和 vax，而  
且 $將不可用來作為識別字的一部份；\_\_asm\_\_  
、\_\_extension\_\_、\_\_inline\_\_ 和\_\_typeof\_\_這  
四個字不管有無本參數都可繼續使用，不過它們  
通常是放在標頭檔中，而 \_\_unix\_\_ 和 \_\_vax\_\_  
也是相同情況；當指定本參數時，alloca,abort  
exit、\_exit 和 ffs將不會視為內建函數。  
當設定本參數時，將會定義\_\_STRICT\_ANCI\_\_ 這  
個巨集，許多標頭檔利用這個巨集定義與否來宣  
告相關的其它巨集或函數，這個目的只是為了符  
合ANSI的標準。  
對於非ANSI的程式，本參數並不會使編譯終結或  
發出任何警告，因此通常需加入 -pedantic，有  
關這個參數將在警告參數中說明。  
  
\-fon-asm  
不將 asm、inline和typeof識為保留字，因此這  
些字可當成識別字(identifiers)， 如欲達到這  
些功能，可用\_\_asm\_\_,\_\_inline\_\_和\_\_typeof\_\_  
來代替；而 -ansi包含本參數的功能。  
  
\-fno-builtin  
對於某些不是以雙底線(\_\_)開頭的函數，不視為  
內建函數，這些函數為--abort、abs、alloca、  
cos、exit、fabs、ffs、labs、memcmp、memcpy  
、sin、sqrt、strcmp、strcpy和strlen。  
通常 GCC對這些函數有特定的處理方式--利用一  
段小而且更有效率的碼來取代，例如呼叫alloca  
通常會變成直接調整堆疊的單一指令，而memcpy  
則是一inline的複製迴圈，這使得程式變小又變  
快，由於程式碼已經改變，因此無法對這類函數  
定除錯中斷點，而且也不能以連結別的程式庫的  
方式來改變這些函數的行為。  
  
\-trigraphs  
支援ANSI C trigraphs，本參數包含在-ansi中.  
  
\-traditional  
會使 GCC以「傳統」的方式來編譯程式，所謂傳  
統是指在ANSI C之前，其方式如下：  
○所有在函數內宣告的extern變數具有整體作用  
○新的保留字'typeof'、'inline'、'signed'、  
  'const' 和'volatile'不具作用  
○允許指標和整數作比較。  
○'unsigned short'和 'unsigned char'皆轉換  
  成'unsigned int'。  
○不認定超出範圍的浮點數指標為錯誤  
○對於 constants型態的字串，會存放在可寫入  
  的區域，可在程式中更改其內容。  
○不再定義'\_\_STDC\_\_'，然而'\_\_GNUC\_\_'仍將定  
  義，這使得在標頭檔中能以這兩個巨集名稱存  
  在與否來分辨是用 GNU C、traditional GNU  
  C 、other ANSI C或是other old C 編譯程式  
  來作編譯。  
  
\-traditional-cpp  
以傳統的 C前置處理器方式來編譯程式。  
○以 newline字元為一字串的結束記號。  
○將'\\x'和'\\a'兩escape sequences轉換成'x'  
  和 'a'字元。  
○允許'this'在 C++程式中使用。  
以上這三項方式包含在-traditional參數中。  
  
\-fcond-mismatch  
允許 conditional expressions之第二和第三個  
參數為mismatched types。  
  
\-funsigned-char  
\-fno-signed-char  
將'char'設為unsigned；不同的主機和系統對於  
'char'的基本設定並不相同，有些為signed、其  
它則相反，程式中的'char'變數會因不同系統而  
有差異，本參數主要目的便是作強制設定；本參  
數之同義詞為-fno-signed-char。  
  
\-fsigned-char  
\-fno-unsigned-char  
將'char'設為signed。  
  
\-fsigned-bitfields  
\-funsigned-bitfields  
\-fno-signed-bitfields  
\-fno-unsigned-bitfields  
這四個參數主要目的為設定 bitfields之符號值  
，在內定上 bitfields是為signed--這可從基本  
資料如 'int'是為signed看出；在-traditional  
下所有的bitfields全為unsigned。  
  
\-fwritable-strings  
對於 constants型態的字串，會存放在可寫入之  
區域，可在程式中更改其內容；-traditional包  
含本項功能。  
  
\-fallow-single-precision  
就算是使用-traditional的情況下，也不要將單  
精密度的運算子強製成雙精密度；傳統的 K&R編  
譯程式會不論運算子之型態而將運算式改成雙精  
密度，然而編譯時單精密度比雙精密度快多了，  
因此若是需用-traditional又不需要double的運  
算，便可用本參數；對於ANSI C和 GNU C而言本  
參數無效。  
  
C++ 方言參數  
\============  
    以下是用來控制編譯 C++時的一些參數，雖  
然這些參數隻對 C++有作用，然而若是使用於其  
它語言，將會被忽略而不會產生任何錯誤。  
  
\-fall-virtual  
除了物件建構者(constructor) 和 new、delete  
外，將其它出現的成員函數(member functions)  
視為 virtual函數；這並非意謂每次都是透過內  
部的 virtual函數表來呼叫這些成員函數，而是  
若compiler判斷能直接呼叫 virtual時，這些成  
員函數同樣也是直接呼叫。  
  
\-fdollars-in-identifiers  
允許 $這個符號在識別字串(identifiers) 中使  
用，傳統的 C允許 $在識別字串中，但ANSI C和  
 C++禁止此種用法；本參數有相反詞。  
  
\-felide-constructors  
在允許的情況下省略建構函數，在下列的程式片  
段中本參數會使得呼叫 foo()時直接初始化 y：  
      A foo();  
      A y = foo();  
未使用本參數時 GCC之過程如下(一)呼叫物件Ａ  
的建構函數來初始化 y  (二)將 foo()的結果存  
到暫存區  (三)將暫存區的值代換給 y；這個過  
程是ANSI C++的標準。  
  
\-fenum-int-equiv  
允許 int型態完全的轉換至enum。  
  
\-fexternal-templates  
對於template函數將只在其定義的所在產生一份  
copy，因而對template宣告能獲得較小的程式碼  
，然而要達到這個效果，除了本參數外，還要定  
義#pragma implementation或是#progma inter-  
face；本參數會將所有的template視為外部函數  
(external)，因此可用 typedef來安排在在im-  
plementation file 中出現的instantiations；  
對於本身並無template的source，無需顧慮相關  
程式是否有template，皆不需本參數作編譯，這  
樣只是會加大物件程式碼的大小而以；本參數亦  
有加上 no-之相反詞。  
  
\-fmemoize-lookups  
\-fsave-memoized  
利用heuristics方法來加速編譯，然而本方法未  
成為內定的編譯方式是因為本法只能針對一個輸  
入檔案，對其它檔案之速度反而變慢。  
  
\-fno-strict-prototype  
在 C++中對函數的雛型宣告(prototype declar)  
有嚴格的規定，例如 "int foo()"之宣告在 C中  
是可以的，它代表 foo()並無輸入值，但在 C++  
中得要宣告成 "int foo(void)"，本參數便是允  
許在 C++中作 C般的宣告。  
  
\-fnonnull-objects  
設定references之物件為非null型態。  
  
\-fthis-is-varible  
允許程式中使用this，這是為了和過去的程式相  
容的參數。  
  
\-nostdinc++  
不要在內定的 C++標準目錄下搜尋標頭檔，然而  
其它標準目錄還是依舊會尋找，本參數通常用於  
建立 C++程式庫libg++時。  
  
\-traditional  
本參數對 C++的作用如同 -fthis-is-varible參  
數(對C和C++的共同影響請參閱「C的方言參數」  
中之-traditional項)。  
  
    除上所述之外，專對 C++之最佳化、警告和  
程式碼生成參數也一併在下討論：  
  
\-fno-default-inline  
在 class中忽略inline之作用。  
  
\-Wenum-clash  
\-Woverloased-virtual  
\-Wtemplate-debugging  
對於這些情況，只對 C++程式提出警告(相關內  
容請看「警告參數」節)。  
  
+eN  
限定已定義之virtual函數如何使用(相關內容請  
看「程式碼生成參數」節)。  
  
除錯參數  
\========  
    對於編譯後的可執行檔之除錯方式，通常的  
方是是在編譯之時便在特定部份放入除錯碼，有  
除錯碼的程式在大小和執行速度上都會略遜一般  
程式一籌，但相對的卻也提供額外的訊息讓 gdb  
等除錯程式進行對原始碼及變數的追蹤等工作，  
除錯碼的規格有許多種，而 gdb也有自己獨特的  
部份，因此在不同的系統和不同的除錯器下，便  
需不同的參數才能順利工作。  
  
\-g  
產生作業系統認可格式(native format)的除錯  
碼(可能為stabs、COFF、XCOFF或是 DWARF之一)  
，以便 GDB除錯。大多數的系統使用 stabs格式  
；本參數除了會產生標準格式碼外，還會產生額  
外的除錯碼，這些額外的部份只有 GDB能辨識，  
目的是為了提供更多訊息，因此若是要以別的除  
錯程式來除錯，便需使用 -gstabs+、-gstabs、  
\-gxcoff+、-gxcoff、-gdwarf+或是-gdwarf，這  
些參數的作用請看下列依次的說明。  
  
\-ggdb  
除了產生 native format的除錯碼外，還再包含  
 GDB專用的擴充部份。  
  
\-gstabs  
產生 stabs格式除錯碼，但不包含 GDB的擴充部  
份，這是在大多數 BSD系統上 DBX所使用的格式  
，然而在MIPS和 Alpha系統上卻會產生 DBX所不  
能辨識的內嵌(embedded) stabs除錯碼。  
  
\-gstabs+  
產生包含 GDB擴充部份的 stabs格式除錯碼，然  
而這樣別的除錯程式便無法用來除錯。  
  
\-gcoff  
產生COFF格式的除錯碼；COFF格式是System V至  
Release 4 之前的 SDB所用之格式。  
  
\-gxcoff  
產生 XCOFF格式之除錯碼；這個格式為DBX在IBM  
RS/6000 系統上所使用。  
  
\-gxcoff+  
產生包含 GDB擴充部份的 XCOFF格式除錯碼。  
  
\-gdwarf  
產生 DWARF格式的除錯碼；這個格式是System V  
Release 4 上 SDB所用之格式。  
  
\-gdwarf+  
產生包含 GDB擴充部份的 DWARF格式除錯碼。  
  
\-gLEVEL  
\-ggdbLEVEL  
\-gstabsLEVEL  
\-gcoffLEVEL  
\-gxcoffLEVEL  
\-gdwarfLEVEL  
產生不同格式的除錯碼，並依 LEVEL的數值決定  
除錯碼的多寡，內定數值為 2。  
LEVEL 1 產生最少量的除錯碼，通常置於非主要  
除錯部份，在這些除錯碼中包含函數和外部變數  
(external variables)的描述，但無行編號和區  
域變數(local variables)。  
LEVEL 3 包含比 LEVEL 2更多額外資訊，如所有  
此程式中定義的巨集。  
  
\-p  
產生分析程式prof所能確認的特殊碼，在編譯和  
連結時都需使用本參數才能達到目的。  
  
\-pg  
產生分析程式 gprof所能確認的特殊碼，在編譯  
和連結時都需使用本參數才能達到目的。  
  
\-a  
產生basic blocks的基本訊息，如每個blocks執  
行的時間、啟始位址和包含的函數名稱；如果-g  
一起使用時，行編號和第一個 block的檔名也會  
一併記錄，這些資料內定會附加到bb.out中，可  
用tcov或是 gprof作分析。  
  
\-dLETTERS  
本參數是對"編譯程式"作 debug，方式為當編譯  
進行到 LETTERS所指定的步驟時，將特定資訊傾  
印到指定的檔案去，相信讀者看到此可能會覺得  
奇怪，為何要對編譯程式除錯呢？照說 GCC應該  
是不太可能會出錯的，事實上別忘了 GCC是網路  
上大家同心撰寫出來的，新增改進部份的測試方  
式為令其編譯一程式並觀查其結果，這時本參數  
便派上用場了，有時也會發生 patch後再編譯舊  
程式時竟然出現過去沒有的錯誤，若確定舊程式  
沒問題，可用本參數一步一步追蹤編譯的結果；  
以下是 LETTERS的部份；  
M 當前置處理完畢後dump出所有的巨集定義  
N 當前置處理完畢後dump出所有的巨集名稱  
D 當前置處理完畢後dump出所有的巨集定義至一  
  般輸出，因此可重新將結果導至檔案  
y 在語法分析(parsing) 時將除錯訊息dump至標  
  準錯誤輸出  
r 在 RLT產生後將內容dump至FILE.rtl  
x 只產生 RLT碼後便停止，本項通常和上一項 r  
  一起使用  
j 第一輪跳躍最佳化作完便dump至FILE.jump  
s 完成 CSE後dump至FILE.cse  
L 當迴圈最佳化(loop optimization)完成後便  
  dump至FILE.loop  
t 第二輪 CSE完成後dump至FILE.cse2  
f flow analysis 完成後dump至FILE.flow  
c 指令連結完成後dump至FILE.combine  
S 第一輪指令排程語法分析完成後後dump至  
  FILE.sched  
l 區域暫存器變數定位完成後dump至FILE.lreg  
g 全體暫存器變數定位完成後dump至FILE.greg  
R 第二輪指令排程語法分析完成後dump至  
  FILE.sched2  
J 最後一輪最佳化完成後dump至FILE.jump2  
d delayed branch 排程完成後dump至FILE.dbr  
k 暫存器變數轉換到堆疊後dump至FILE.stack  
a 完成上列所有dump  
m 編譯完畢後印出記憶體使用狀況至std error  
p 將assember的輸出加上有使用之alternative  
  和 pattern的註釋  
  
\-fpretend-float  
當進行cross-compiler時，將目標主機的浮點運  
算器假設為和目前主機相同，以便編譯出的程式  
在目標主機上能執行無誤；所謂cross-compiler  
為在某一型主機或是OS上(如Unix)編譯出另一OS  
(如 DOS)執行檔的過程，如此在軟體移植上更為  
方便，相關的詳細內容會另文再敘。  
  
\-save-temps  
將編譯時的產生的中間暫存檔儲存起來，例如使  
用"-c -save-temps"來編譯 foo.c時將會產生  
foo.i 和 foo.s。  
  
\-print-libgcc-file-name  
只是印出'libgcc.a'此檔的絕對名稱，在本參數  
下 GCC並不作任何事--只是列出libgcc.a這個字  
串；當使用 -nostdlib參數卻同時想和libgcc.a  
連結時便可依下列方式使用本參數：  
gcc -nostdlib FILES... 'gcc -print-libgcc-  
    file-name'  
  
結語  
\====  
    以上所介紹的為部份 GCC參數的用法，希望  
能讓讀者對整個編譯流程有助益，下次我們繼續  
探討其餘的部份。  
  
修改日期： 02/08/2000 14:01:39

- - -

轉自 [http://mis.im.tku.edu.tw/~zbwei12b/program/gcc-2.html](http://mis.im.tku.edu.tw/%7Ezbwei12b/program/gcc-2.html)

  
題目：編織出個好程式--GCC參數篇(二)  
作者：陳信宏(Ivor Chen)  
E-mail add：civor@ksts.seed.net.tw or  
            Ivor.bbs@bbs.ccu.edu.tw  
地址：嘉義市西門街 80 號  
電話：(05)2253215  
  
    上一期所介紹的參數大體上和整個編譯過程  
關，如整體參數、方言參數和除錯參數等，本期  
將要更進一層的介紹許多控制細部動作的參數。  
  
最佳化參數  
\==========  
    最佳化一個程式的演算法有很多種：從合理  
的調整程式結構流程到適當的安排變數型態等不  
一而足，且除了程式方面的最佳化之外，還可配  
合主機硬體優勢和OS過人之處來加以運用，但不  
管如何，最佳化的目標仍是唯一的--更快、更小  
、以及能配合所在環境的更好。  
  
\-O  
\-O1  
初步最佳化，作最佳化的編譯當然會花費更多的  
時間和記憶體；未使用本參數前 GCC編譯的原則  
是減少編譯成本，而且各個階段的編連是各自獨  
立的--可以在任一階段停下來，重新指定變數內  
容，且各階段的結果和一般的狀況相同，完全符  
合正常的程序，然而本參數會以整體四個階段一  
起考慮，且本參數包含許多其它參數，目的就是  
要減少程式大小及執行時間；使用本參數同時會  
將-fthread-jumps和-fdelayed-branch開啟。  
  
\-O2  
更進一步最佳化，本參數可直接使用不需配合上  
一個參數，在本參數下除了「大小--速度」需犧  
牲一方的演算法外其於都會用來作最佳化處理，  
也就是除了 frame pointer elimination和loop  
unrolling 外其餘將會利用上；和上一個參數比  
起來本參數在編連時間和執行碼效能都更優越。  
  
\-O0  
不作最佳化；然而若是之前有指定其它 LEVEL的  
參數，將不會受到本參數的影響。  
  
    接下來是許多和 CPU構造有關的參數，它們  
的型態為-fFLAG，大部份有相反詞，而相反詞為  
FLAG之前加上 no-所形成。  
  
\-ffloat-store  
"不要"將浮點變數儲存在暫存器中，而且抑制其  
它會改變從暫存器或記憶體所得浮點數之值的參  
數功能；本參數避免了一個現象，即浮點數的值  
無緣無故的加了好幾位小數出來，本來若將變數  
內容放在暫存器中，會比在記憶體中快上許多，  
這也是一般最佳化的方法之一，然而對許多主機  
例如 68000來說其浮點暫存器所能容納的長度比  
double還長，這對一般程式來說無可厚非，然而  
對數值計算程式或是利IEEE浮點數的程式而言卻  
是"窩裡反"的行為，本參數就是避免這種情況發  
生。  
  
\-fno-default-inline  
inline這個關鍵字的作用是在呼叫此類函數的地  
方有著這個函數的程式碼存在，如此雖然程式變  
大了但執行速度也加快許多，當使用-O時物件中  
定義在 class區域中的每一個成員函數都是以  
inline的型態處理，而本參數便是限定不要將這  
些成員函數視為inline。  
  
\-fno-defer-pop  
函數呼叫時其間傳入值和傳回值的傳遞是靠堆疊  
來完成的，一般情況下編譯程式會在堆疊之中累  
積一些argument後再一起 pop出去，這是為了速  
率著想，而本參數的作用便是不要作堆積，進一  
個便彈一個出去。  
  
\-fforce-mem  
強制 memory operands在作運算前先copy到暫存  
器中以加快運算速度。  
  
\-fforce-addr  
強制 memory address 之內容在作運算前先copy  
到暫存器中以加快運算速度。本參數對於程式整  
體效率的提升比 -fforce-mem還好，但這兩個參  
數並不適合任一機種。  
  
\-fomit-frame-pointer  
當函數用不到 frame pointer時將它從暫存器中  
清除，本參數同時抑制了任何儲存、設定或回存  
frame pointer 的動作，這將使得更多的函數可  
利用暫存器以提升執行效率。  
  
\-fno-inline  
忽略關鍵字inline的作用。  
  
\-finline-functions  
整合所有「簡單」的函數到呼叫它們的函數內，  
而「簡單」的標準由 GCC自行判斷；假如一個函  
數被整合到其它函數中，且其型態為static，此  
函數當然不會有自己本身的輸出。  
  
\-fkeep-inline-functions  
本參數要和上一參數對照；縱然一static函數被  
整合到其它函數內，仍輸出執行時期可供呼叫的  
version。  
  
\-fno-function-cse  
不要將函數所在位址放在暫存器中，這將使得每  
個呼叫函數的指令包含了函數位址，這會產生較  
沒效率的程式碼，但對於某些會改變 assembler  
輸出的 hacks來說，最佳化的過程會擾亂程式的  
行為，那時便需使用本參數。  
  
\-ffast-math  
本參數允許 GCC違反某些ANSI或IEEE規則來作運  
算，這將使得執行速度加快，但對於運算程式等  
需依賴數值精密度作計算者則本參數不應和任何  
\-O參數共同使用，因為很有可能產生錯誤結果。  
  
前置處理器參數  
\==============  
    直觀來說前置處理器的作用為處理程式之中  
以 #開頭的命令，這些命令於常見的有標頭檔的  
引入和定義常數及巨集等，可以說是在編譯之前  
的準備動作，有時也可用依某常數定義與否來決  
定那些程式片段是否要編譯，這對移植的工作有  
很大的助益，例如同樣要作到印出檔案名稱，在  
不同的OS和檔案格式上所得的結果就有蠻大的差  
異，在此就可分別寫不同的處理碼，然後再利用  
#ifdef等命令適機編連，不僅節省程式碼，還能  
加快速度；以下的參數，便是和前置處理時期有  
關者，而且許多參數需和-E配合使用。  
  
\-include FILE  
在編譯目標程式之前先編譯FILE，而且FILE並無  
只能為標頭檔的限定，若是和-D及-U合併使用時  
以本參數為優先處理，當參數列中不只一個本參  
數及-imacros時依其順序執行。  
  
\-imacros FILE  
本參數和上一個參數幾乎相同，同樣都是在編譯  
目標程式之前先編譯FILE，所不同的是本參數會  
捨棄FILE的輸出，這使得FILE中唯有放置巨集定  
義才有作用。  
  
\-idirafter DIR  
將 DIR內的路徑加至第二包含路徑中，當在主要  
包含路徑中找不到標頭檔時便可到第二來尋找，  
而主要包含路徑便是由-I所指定。  
  
\-iprefix PREFIX  
設定PREFIX之內容為-iwithprefix中之prefix預  
設值。  
  
\-iwithprefix DIR  
增加一個路徑到第二包含路徑中去，而這個路徑  
由 DIR和-iprefix中的PREFIX之內容聯合組成。  
  
\-iwithprefixbefore DIR  
增加一個路徑到主要包含路徑中去，而這個路徑  
由 DIR和-iprefix中的PREFIX之內容聯合組成。  
  
\-nostdinc  
不要在標準系統目錄下尋找標頭檔，只在目前目  
錄和-I所指定的目錄下尋找，因此這對於自行建  
立程式庫有幫助，有關目錄的所有選項請看稍後  
的「搜尋參數」。  
  
\-undef  
不要預先定義任何非標準的巨集。  
  
\-E  
本參數在「整體參數」有提到過，作用為令 GCC  
完成前置處理後便停止。  
  
\-C  
命令前置處理器不要捨棄註解部份，本參數需和  
\-E共用。  
  
\-P  
命令前置處理器不要產生 #line命令，本參數需  
和-E共用。  
  
\-M  
命令前置處理器輸出給make程式用的規則，內容  
為每個目的檔的依存規則，對於每個source，前  
置處理器會將其target定為目的檔(object)，而  
其中所使用到的標頭檔便成為依存檔，有關本參  
數的最佳參考為 ~/linux下Makefile中depend這  
項依存規則的內容；另外一個如本參數功能的方  
法為設定環境變數"DEPENDENICS\_OUTPUT"。  
  
\-MM  
本參數唯一和-M不同之處在於輸出的規則中唯有  
使用者自定標頭檔(#include "FILE" 部份)才會  
列入，而系統標頭檔(#include  部份)並  
不會列入。  
  
\-MD  
作用如同-M一樣，然而在本參數會將規則輸出到  
和.o檔同檔名的.d檔中(-M要用重新導向的方法)  
，而Mach utility中的"md"可將各別的.d檔集合  
成可供make使用的依存檔。  
  
\-MMD  
為 -MM和 -MD功能的交集。  
  
\-H  
印出所使用的標頭檔。  
  
\-DMARCO  
定義巨集 MARCO為字串"1"。  
  
\-DMARCO=DEFN  
定義巨集 MARCO為DEFN；此時所有的-D參數將比  
\-U參數優先執行。  
  
\-UMARCO  
取消 MARCO的定義；此時-U還是比-D後執行，但  
卻在-include和-imarcos之前。  
  
\-dM  
命令前置處理器在前置處理完畢後列出所有有效  
的巨集名稱，本參數需和-E共用。  
  
\-dD  
命令前置處理器輸出所有的巨集定義內容。  
  
\-dN  
命令前置處理器輸出所有內定之外的巨集定義。  
  
\-trigraphs  
支援ANSI C trigraphs，本參數包含於 -ansi。  
  
傳遞參數至組譯程式(Assembler)  
\=============================  
  
\-Wa,OPTION  
將OPTION的內容傳給組譯程式，其內容是由參數  
們所組成，不同的參數間以逗號( ,)隔開。  
  
連結參數  
\========  
    當原始程式編譯或組譯完成候，便完成了基  
本架構，如條件判斷或是迴圈等已正確的轉換成  
機器語言型式，這便是.obj的內容，在不同的主  
機和OS上.obj的格式也不相同，在程式中通常都  
會呼叫一些函數，這些函數的可執行碼便放在程  
式庫中，需要把它們加進來才算是完整的可執行  
檔，而這個過程便稱為連結(link)，本區所要介  
紹的為控制連結過程的各項參數。  
  
\-OBJECT-FILE-NAME  
連結之時會以.o檔為模版造出最終可執行檔，這  
個過程是以.o的字尾來判定是否為Object檔，若  
是當Object檔字尾不是.o時，便可使用本參數，  
而OBJECT-FILE-NAME的內容是為非標準Object檔  
的檔名。  
  
\-lLIBRARY  
連結時尋找 LIBRARY.a程式庫作為程式庫來源，  
本參數所指的程式庫為附加方式，即標準程式庫  
仍會用來作連結，不管本參數有設定，而相關的  
目錄路徑則為標準路徑加上-L所指定的路徑；如  
果參數列中有兩個以上的目的檔，本參數的位置  
有很大的影響，如在 "foo.o -lz bar.o"中 -lz  
只對 foo.o有效，即 bar.z無法連結到 z.a中的  
特定函數。  
  
\-lobjc  
若是編譯 Objective C程式則需以本參數來連結  
專用程式庫。  
  
\-nostartfiles  
編譯完成的可執行檔在啟動時都會經由標準系統  
啟動程式(standard system startup file)作啟  
動的動作，這個檔案依OS的不同而有不同的功能  
，本參數便是命令連結程式不要將啟動程式連入  
執行檔中。  
  
\-nostdlib  
當連結時不要使用標準程式庫和啟動程式，但由  
\-l指定者不在此限。  
  
\-static  
對於提供動態連結(dynamic linking) 的系統，  
本參數抑制與共享程式庫作連結(也就是說GCC的  
內定為動態連結)。  
  
\-Xlinker OPTION  
在 GCC中內定的連結程式為ld，而且 GCC能以內  
部的方式將參數傳給ld，然而在某些系統下能在  
Makefile中改變LD變數的內容來指定特別的連結  
程式，此時控制參數便需本參數來作傳遞，此時  
GCC 會將OPTION的內容傳給特定連結程式，如果  
傳遞的參數有附加選項，則需本參數兩個才能成  
功，如欲傳遞 '-assert definitions'時，則需  
寫成 -Xlinker -assert -Xlinker definitions  
才行。  
  
\-W1,OPTION  
對於 GCC能辨認的連結程式便可用本參數來傳遞  
控制值，在OPTION中若有一個以上的參數，其間  
使用逗號( ,)隔開。  
  
\-u SYMBOL  
假裝符號SYMBOL未曾定義，使得程式庫模組可定  
義同一符號。  
  
搜尋參數  
\========  
    本系列參數定義有關標頭檔、程式庫和部份  
編譯程式的搜尋路徑。  
  
\-IDIR  
增添 DIR中的路徑到標頭檔搜尋路徑之中。  
  
\-I-  
任何在本參數之前的-I參數，其所設立的路徑將  
只會用在對 #include "FILE"的搜尋，對於搜尋  
#include  並無影響，然而在本參數之後  
的-I，其路徑對所有的#include皆有作用，因此  
本參數還會使得目前目錄不是第一個搜尋"FILE"  
的路徑；由於本參數並不會影響對標準系統目錄  
的標頭檔搜尋，因此和 -nostdinc各自獨立。  
  
\-LDIR  
增添 DIR到由-l所指定程式庫的搜尋路徑去。  
  
\-BPREFIX  
本參數主要作用為指定如何去尋找和編譯程式有  
關的可執行檔、程式庫及資料檔等；編譯時其實  
是由四個子程式所共同完成--cpp、cc1、as和ld  
，這四個程式在 gcc的統籌驅動下完成編連的四  
個步驟，在沒指定本參數的情況下， gcc會先在  
/usr/lib/gcc/ 和 /usr/local/lib/gcc-lib/下  
尋找相關檔案，若未找到再依PATH所指去尋找，  
若是使用本參數，則PREFIX中所指路徑將是第一  
個尋找的目標。  
  
警告參數  
\========  
    警告是在編譯的過程中所發出的建議訊息，  
警告並非是錯誤，編譯後的程式仍可執行，不過  
警告的目的為指出某段可能會出錯的宣告方式語  
法，因此不可因不影響程式執行而掉以輕心；警  
告參數的目的為對某種語法提出(或抑制)警告訊  
息，以方便除錯或是順利執行，通常是以-W為開  
頭，這些參數的相反詞為加 no-所形成，而不管  
是那種類型，都不是 GCC的內定值。  
  
\-fsyntax-only  
只檢查程式之語法有無錯誤而不作編譯。  
  
\-w  
抑制所有警告訊息。  
  
\-Wno-import  
抑制所有和使用 #import有關之警告訊息。  
  
\-pedantic  
依嚴格的ANSI C的標準發出警告訊息，並駁回任  
使用不允許擴充函數的程式。  
  
\-pedantic-errors  
作用如同 -pedantic，但除了警告外還會產生錯  
誤訊息。  
  
\-W  
對下列情況提出警告：  
○一個 nonvolatile自動變數將被改成 longjmp  
  時，這種情況唯有作最佳化時才會發生。  
○當一個函數可能有傳回值，也可能不傳回任何  
  值時，例子如下：  
    foo (a)  
    { if (a > 0) return a; }  
○沒任何作用的 expression敘述。  
○一個unsigned數值和零比較大小時。  
○如 'x<=y<=z'的表示式，此表示式 GCC會將其  
  處理成 '(x<=y?1:0)<=z'以便程式能順利執行  
  ，當然這樣和原來想表現的意思差蠻多的。  
○當storage-class specifiers如'static'並不  
  是所有宣告中最先執行之時。  
  
\-Wimplicit  
當某函數或某參數implicitly宣告時提出警告。  
  
\-Wreturn-type  
當一函數內定傳回值為 int時卻作別種型態的宣  
告便提出警告，或是當一函數無傳回值(void)，  
然而其中的return接一傳回值時便發出對return  
的警告。  
  
\-Wunused  
對某一local變數自宣告後便沒再使用、declare  
一static函數後但未先define、還有一段敘述算  
出一個結果，這個結果接下來卻未再使用等以上  
三種情況提出警告。  
  
\-Wswitch  
使用一列舉(enum)形態的變數為switch的 index  
時，接下來卻缺少一個或以上的case作配合，或  
者是case的 label超出了enum中的選項時，便發  
出警告訊息，若是沒有必要列出每個case時可用  
default 代替。  
  
\-Wcomment  
當'/\*'符號"又"出現在註解中時。  
  
\-Wformat  
檢查printf、scanf...等函數其中第二個以後的  
參數型態是否和第一個字串中所寫有符合。  
  
\-Wchar-subscripts  
當陣列的註標(subscript) 之型態為char時便發  
出警告，因為在某些主機上char為signed。  
  
\-Wuninitialized  
當一自動變數未給予初值便使用時；如下的例子  
  {  
    int x;  
    switch (y)  
      {  
      case 1: x = 1;  
        break;  
      case 2: x = 4;  
        break;  
      case 3: x = 5;  
      }  
    foo (x);  
  }  
這個例子看起來沒錯，因為只要 y為 1、 2或 3  
則 x都會有初值，但 GCC對於這樣的寫法並不夠  
聰明到能看出 x會有初值這件事，因此對foo(x)  
而言其中的 x就出問題了，然而當未使用最佳化  
編譯時並不會有本警告出現。  
  
\-Wparentheses  
當 parentheses在以下這些敘述中省略時：當預  
期將為true value卻有assignment時，或是有令  
人頭昏眼花的nest operators時。  
  
\-Wenum-clash  
當兩個不同的enum型態作轉換時。(C++ only)  
  
\-Wtemplate-debugging  
若是在程式中使用了模版(template)但除錯功能  
未完全支援時。(C++ only)  
  
\-Wall  
本參數為以上所有-W參數的總集，且本參數為最  
推薦使用者，因為以上的情況便包含了一般情況  
下該警告的事項。  
  
    接下來的這些參數並不包含於 -Wall之中，  
這些參數所要警告的為一些結構上的問題。  
  
\-Wtraditional  
對傳統和ANSI C的一些結構上的差異提出警告：  
○switch的 operand型態為long。  
○函數在 block中宣告為外部(external)而後在  
  block 結束後使用。  
○巨集的參數是位於巨集本體的字串內容中，這  
  種情況對傳統 C是允許的，但對ANSI C會有不  
  相容發生。  
  
\-Wshadow  
當一區域變數shadow另一區域變數時。  
  
\-Wid-clash-LEN  
當兩個以上的辨別字(identifier)在開頭和 LEN  
相同時。  
  
\-Wpointer-arith  
當使用 size of在函數時。  
  
\-Werror  
將所有警告轉換成錯誤，這會讓編連停止。  
  
後言  
\====  
    對於經常使用 C/C++的使用者來說，不管是  
用來寫商業程式或是交學校的作業，GCC 是一套  
很不錯的選擇，由介紹了兩期仍無法完全含蓋的  
參數部份，就可知它的能力強撼，然而它缺少一  
個友善的環境(如TC或是MSC中的IDE)，不免令人  
卻步，不過利用make和Makefile的統一管理，一  
切就變得清楚許多；下次若有機會，再來討論一  
些安裝 GCC的方式和其它相關設定。  
  
修改日期： 02/08/2000 14:00:28