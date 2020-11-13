---
title: 批次檔教學
date: 2009-10-22T22:27:00+08
tags:
  - CMD程式
---
# 批次檔教學

轉自：http://tw.myblog.yahoo.com/jw!SzZRsJmIBEBu46mcqWWijQ--/article?mid=4  
甚麼是批次檔：  
　　在DOS系統下，有三類檔案是可以使DOS執行而進行某些工  
作，這三類檔案分別有以下三個不同的副檔名  
1\. .com (指令檔，命令檔) 例如 Command.com, Edit.com 等。  
2\. .exe (執行檔) 例如 Copy.exe, Mem.exe 等。  
3\. .bat (批次檔) 例如 Autoexec.bat 等。  
　 　其中 .com 及 .exe 的檔案是用編譯或組合語言寫出，需要較多工夫來學習編寫，一般終端用者 (end-user) 不會花時間來學習編寫這些程式，但 .bat 的批次檔是一連串的 DOS 內部或外部指令 (批次檔的意思是 指令集) ，或是執行程式的主檔名，因此只要懂得這些指令，加上一些簡單的語法，就可寫出批次檔。終端用者利用自己編寫的批次檔，就可使 DOS 執行自己編定的程序。  
　　批次檔是由 DOS 指令組成，因此批次檔有錯誤時，就等於我們在提示號 (C)鍵入錯的指令一樣，螢幕會有 Bad command or file name 的回應。  
　　批次檔必定要是純文字檔案，可使用 DOS 的編輯器(DOS Editor)  
　  
或用windows內的 記事本 寫出來，這兩個都是簡單的文書處理器，文稿內不含任何控制碼 (如字款和字的大小，文章闊度等等)，這就最適合用來編來批次檔。

- - -

批次檔的規格：  
1\. 批次檔要以純文字寫出，每一項指令要在一行中完成，不能分兩行，每行最多是 127 個字。每一行只能容納一個指令，兩個指令就要分兩行 (或用連結符號)。  
2\. 批次檔的檔案要用 .bat 為副檔名，除了 Autoexec.bat，主檔名由用者自定，但最好避免和 DOS 指令同名，例如不要用 Copy.bat、Del.bat、Dir.bat、Exit.bat 等等。  
3\. 批次檔需用 DOS 指令加上特定語次寫成，這些指令包括 DOS 內部及外部指令，語法有以下各項：  
   call choice echo  
   for...in...do goto if(if exit)(if not exist)  
   pause rem shift  
 　指令錯誤會有 "Bad command or file name" 回應，語法錯誤會有 " Syntax error" 的回應。

4\. 要 DOS 執行批次檔的指令，只需鍵入主檔名，例如 Menu.bat 或 menu。不過若批次檔的主檔名和 .com 或 .exe 的主檔名相同時，就要鍵入全名，例如批次檔的名稱是 copy.bat 或 edit.bat時，就要鍵入copy.bat 或 edit.bat 才能使電腦執行批次檔的指令，否則電腦會執行 copy.exe 或 edit.com 這些 DOS 指令。  
5\. 在批次檔執行途中，一起按下 \[Ctrl\]+\[C\] 或 \[Ctrl\]+\[Break\] 可終止程序。按下這兩個鍵後，螢幕會顯示：Terminate batch job (y/N)?  
　　按 \[Y\] 會終止這批次檔和回到 DOS 的提示號，按 \[N\] 則取消\[Ctrl\]+\[C\] 指令，批次檔會繼續執行程序。

- - -

  
早期在DOS系統工作下，都可能需要使用批次檔來執行電腦工作，當文字介面的系統逐漸被Windows、Unix系統（圖形介面）所取代時，現今一般使用電腦的人，可能也不是很清楚什麼是批次檔，我們今天就來介紹何謂批次檔。

批次檔是一種文字檔案（ASCII檔案），由一連串的MS-DOS命令所組成的。  
批次檔的命名規則與一般檔案相同，但其副檔名固定為".BAT"，即"將 一連串的命令"儲存在檔案中，該批次檔的指令可無限制的重覆使用，永遠得到相同的執行結果。究竟批次檔又該如何使用呢？以下介紹批次檔的常用指令。

批次檔的常用指令如下：

\*------------------------------------------  
一、 ECHO  
\*------------------------------------------  
  
在正常的情況下，批次檔中的每道命令執行前都會先出現螢幕上。有了ECHO命令，就可以任意控制是否列印出命令列。  
用法：在批次檔中鍵入echo on/off ，on：表示要印出命令列，off：則不印出命令列，若要禁止批次檔的命令顯示在螢幕上，則使用隱藏echo off（＠ECHO OFF），用法在命令列的開頭上加上＠符號  
Ex：  
@echo off　表示資料隱藏  
echo .... 測試ECHO指令  
echo .... 請稍後  
echo .... 完成.....

結果：  
Test Enter  
.... 測試ECHO指令  
.... 請稍後  
.... 完成.....

\*------------------------------------------  
\*   二、 代換參數  
\*------------------------------------------  
代換參數的標記是一個百分號（%）再跟著一個阿拉伯數字，最多可使用10個代換參數，這些變數的值，則由呼叫批次檔的命令所指定。  
Ex：  
@echo off  
echo .... 測試代換參數指令  
echo .... 請稍後  
echo .... 完成.....  
echo %1 %2 %3 %4

結果：  
Test TCP EDU NETWORK CENTER Enter  
.... 測試ECHO指令  
.... 請稍後  
.... 完成.....  
TCP EDU NETWORK CENTER

\*------------------------------------------  
\*  三、 PAUSE：是暫停批次檔的執行。  
\*------------------------------------------  
當MS-DOS執行到PAUSE時就暫時中止目前的工作，並印出下列訊息：  
press any key to contunue ……  
Ex：  
@echo off  
echo .... 測試代換參數指令  
echo .... 請稍後  
echo .... 完成.....  
echo %1 %2 %3 %4  
pause  
echo %5 %6

結果：  
Test TCP EDU NETWORK CENTER Enter E-Mail [chan@ms64.hinet.net](mailto:chan@ms64.hinet.net)  
.... 測試ECHO指令  
.... 請稍後  
.... 完成.....  
TCP EDU NETWORK CENTER  
Press any key to continue ....

E-Mail [chan@ms64.hinet.net](mailto:chan@ms64.hinet.net)

\*------------------------------------------  
\*  四、 REM（REMark）用來在批次檔執行中顯示某些訊息  
\*------------------------------------------  
用法是在批次檔中鍵入rem，後面跟著所要顯示的字串  
  
Ex：  
@echo off  
echo .... 測試代換參數指令  
echo .... 請稍後  
echo .... 完成.....  
rem 下面指令，開始做代換參數  
echo %1 %2 %3 %4  
pause  
echo %5 %6

\*------------------------------------------  
\*  五、 IF  
\*------------------------------------------  
IF命令在批次檔中用來測試特定的條件，以決定是否執行某些命令。絛件的型態分為四種：  
////////////////////////////////////////////////////////////////////  
(1) IF EXIST  
此條件是用來檢查某一檔案是否存在，若存在則條件成立，便執行指定的命令  
Ex：  
@echo off  
if exist test1.bat type test1.bat

////////////////////////////////////////////////////////////////////  
(2) IF String1 = = String2（= = 表相等性的比較）  
Ex：  
@echo off  
echo .... 測試IF指令  
echo %1  
if '%OS%'=='Windosws\_NT' goto good  
if %1 == a goto first  
if %1 == b goto second  
if %1 == c goto three  
:good  
echo 作業系統%OS%  
:first  
echo 執行first (a)  
goto finish  
:second  
echo 執行second (b)  
goto finish  
:three  
echo 執行three (c)  
goto finish  
:finish

結果：  
Test1 a Enter  
a  
執行First(a)  
執行程式結束

////////////////////////////////////////////////////////////////////  
(3) IF ERRORLEVEL  
ERRORLEVEL是由MS-DOS所管理的一個系統變數，目的是監視所有錯誤發生的情況。（類似ErrorMessage）

////////////////////////////////////////////////////////////////////  
(4) IF NOT  
IF NOT是當測試條件不成立時才執行後面命令

Ex：  
@echo off  
if not exist test1.bat type test1.bat  
echo 執行程式結束

////////////////////////////////////////////////////////////////////

\*------------------------------------------  
\*  六、 GOTO  
\*------------------------------------------  
GOTO命令在批次檔中用來轉移控制權，可以指示批次檔跳至某一標記（line label）由一個冒號（：）跟著字元符號所組成的；label也可使用代換變數  
Ex：  
goto first 或 goto %1

\*------------------------------------------  
\*  七、 FOR  
\*------------------------------------------  
FOR命令允許批次檔中的其他命令，可以重覆地執行  
for %%a IN (file1 file2 file3) DO del %%a  
虛擬變數必須以兩個百分號（%%）起頭，in後面著參數列，do後面跟著要執行的命令

Ex1：  
@echo off  
echo .... 測試FOR指令  
echo .... 請稍後  
echo .... 完成.....  
echo ....  
for %%a IN (test\_a.bat test\_b.bat test\_c.bat) do copy %%a prn

結果：  
test Enter  
.... 測試FOR指令  
.... 請稍後  
.... 完成.....  
....  
    1 File(s) Copied  
    1 File(s) Copied  
    1 File(s) Copied

Ex2：  
REM 取得日期  
FOR /F "tokens=1-4 delims=/ " %%a IN ("%date%") DO (SET \_MyDate=%%a%%b%%c%%d)

REM 顯示去掉分隔符號後的結果  
echo %\_MyDate%

說明：  
/F 是指定將後面 %date% 的環境變數當成檔案來處理，而處理的依據就是在「"tokens=1-4 delims=/ "」這邊。tokens如果按照字面翻譯的話，是權杖的意思，這樣翻不太直覺，在這邊翻成順序可能比較好一些。以這個例子來說，就是要取得順序 1 ~ 4 的字串，那程式怎麼知道這個順序的分法呢？透過 delims 這個引述的設定，程式就知道要怎麼去分析 %date% 環境變數的順序。在 delims 等號右邊的字元就是用來指定分割順序的依據。以這個例子來說，我們用「/」與「 」(空白，White Space)這兩個分隔符號來分割 %date% 的順序。因此原本 %date% 的內容是 2006/03/07 星期二，在程式來看就變成了：

順序　內　　容  
﹉﹉　﹉﹉﹉﹉  
1 　　　2006  
2 　 　 　03  
3 　　 　07  
4　　　星期二

%%a 是說把順序 1 的結果指派給名稱為 %%a 的變數，因此順序 2 的變數名稱就會是 %%b，以此類推，最多可以有 52 個變數，原因如下：變數名稱有大小寫之分，所以 %%a 跟 %%A 不同，且僅能以一個英文字母來命名，所以 26（個字母）× 2（大寫跟小寫 2 種）＝52（個）。DO 後面的括號內容是用來指定所要執行的命令內容，以這個例子來說，就是指定一個名稱為 \_MyDate 的變數，它的內容是由 %%a%%b%%c%%d 所構成的。

再來我們看看使用 FOR 指令去掉時間變數之分隔符號的結果：

MyTime.bat 的檔案內容如下所示:  
\----程式開始----

  
REM 取得時間  
FOR /F "tokens=1-4 delims=:." %%a IN ("%time%") DO (SET \_MyTime=%%a%%b%%c%%d)

REM 顯示去掉分隔符號後的結果  
echo %\_MyTime%

\----程式結束----

看看執行的結果：

C:\\>MyTime

螢幕輸出：

14243241

講了這麼多，您知道該怎麼運用 %date% 與 %time% 環境變數了嗎？

\*------------------------------------------  
\*  八、 SHIFT  
\*------------------------------------------  
SHIFT命令允許在批次檔的起動命令中，使用超過10以上的實際參數  
（%0～%9）

\*------------------------------------------  
\*  九、 CALL  
\*------------------------------------------  
模組化的程式設計，是將一個完整的程式分割成一個個獨立的模組（module），每個模組負責一項功能  
Ex：  
@echo off  
echo .... 測試CALL指令  
echo .... 請稍後  
echo %1 %2  
call test\_b  
echo %3 %4  
echo 程式模組已執行完畢 （test\_a.bat）

@echo off  
echo 執行test\_b程式  
echo 即將執行test\_c .....  
call test\_c  
echo 執行test\_b程式完畢~~~ （test\_b.bat）

@echo off  
echo 執行test\_c程式  
if exist test2.bat type test2.bat  
echo 執行test\_c程式完畢~~~ （test\_b.bat）

\*------------------------------------------  
\*  十、 set  
\*------------------------------------------  
宣告變數；設定變數

set gbs=%OS%    取得作業系統  
set xdate=%date%   取得目前日期20080610  
set xmonth=%date:~5,2%   取得目前月份06  
set select=  
set /P select=請選擇：   等待取得使用者所輸入字元

  
在DOS環境下輸入Set，可列出windows環境變數