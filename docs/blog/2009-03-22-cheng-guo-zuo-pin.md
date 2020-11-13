---
title: 成果作品
date: 2009-03-22T23:34:00+08
tags:
  - Diary
---
# 成果作品

四、成果作品

１.    貪吃蛇程式簡介  
從加入電研社，學了程式設計之後，所寫得程式無非就是去解題目，講難聽一點，都不是為自己寫的。人都有虛榮心，我也不例外；當被認識的朋友知悉我有寫程式 的興趣之後，絕大多數人都會問說：「你會不會寫遊戲？」或是「你會不會寫外掛？」，寫外掛這種程式我確信以我現在這樣的程度我是寫不出來的，所以，我就一 直保持著好好寫一個遊戲的想法。在偶然的機會下，常逛 奇摩知識+ 的我，看到有人為發問kbhit() (註一)函式和getch() (註二)函式的人解答，使我認識這兩個函式，於是，綜合以上的動機，和一個網友寫的「蛇王」參考之下，我便動手寫了我的貪吃蛇遊戲，一款為自己寫的貪吃蛇 遊戲。  
在這樣的條件下寫出來的貪吃蛇遊戲，因為使用效果不佳的函式，造成畫面閃爍，整體給人的感覺就是──「粗糙」，在社團學長的幫助之下，將整個遊戲環境優 化，將這隻程式從見不得人的處境中解救出來。現在，我將開始依遊戲的進程，站在程式碼的觀點上介紹我最後修改的版本。  
(註一) kbhit()函式的用途是檢測目前是否有按下鍵盤上的按鍵，配合流程控制和迴圈使用可以在有按下按鈕才作輸入動作的功用，也就是平常程式會作它的事，當 按下按鈕時，它才會停下來，最普通應用是碼表。使用時需引入windows.h，這個函式庫只有windows支援。  
(註二) getch()含是的用途是讀取在輸入串流內所按按鈕的ASCII值，以及一些特殊按鈕的鍵碼。使用時需引入windows.h，這個函式庫只有 windows支援。  
  
１-１.遊戲開場  

[![](http://lh3.ggpht.com/_--EOwdSZaB4/ScZWGuSOkMI/AAAAAAAAAWE/lvXxCfuD--0/s800/%E9%81%8A%E6%88%B2%E9%96%8B%E5%A0%B4.jpg)](http://picasaweb.google.com/lh/photo/ZGzpM4Ne-8MtvNM0fQ__nQ?feat=embedwebsite)

相簿： [成 果作品](http://picasaweb.google.com/taichunmin/oDJBsH?feat=embedwebsite)

  
文字基本上是以gotoxy() (註三)函式來輸出的，這個上下左右進行選擇的點子是來自於手機的設定選單，在程式碼部份我採用非常有彈性的寫法，利用預先定義的 MAX\_MAIN\_MENU變數，設定選單中選項的數量，並將各個選項的資料（顯示文字、輸出位置）利用main\_menu陣列儲存，在執行程式時，上下 移動選項時需要一個暫時的變數來儲存目前的游標位置，並且依此讀取預先存的位置，以變更輸出位置，我利用%(求餘數)來取代列舉法的寫作方式(註四)，並 大大降低增加新選項的複雜度；同樣的，我在選擇左右時也採用同樣的寫法，避免太多重複的程式碼出現。  
  
(註三)gotoxy()算是一個網路上常用的一個通用函式，但是想要在Dev-C++使用仍需要自訂，這個函式我是直接上網抓別人寫的，這個函式的功能 是將執行中的命令提示字元視窗的游標放到隨意的位置上，目前我只知道使用方法。這個自訂函式內的敘述需要引入windows.h，這個函式庫只有 windows支援。  
(註四)所謂列舉法，就是為每個選項放一個if，當在該選項按下上下左右鍵時，改變其在視窗上顯示的東西，使用列舉法會造成程式碼大量重複，因為不同的地 方只在於位置、內容、以及所有可以挑選的選單細項。  

程式碼節錄462～506行  
while(ca=getch())  
{  
  if(ca==-32)  
  {  
    ca=getch();  
    if(ca==72 || ca==80)//上下  
    {  
      font(main\_menu\[ia+1\].sx-1,main\_menu\[ia+1\].sy,-1);  
      cout<<' '< font(leftsite,main\_menu\[ia+1\].sy,-1);  
      cout<<"  ";  
      font(rightsite,main\_menu\[ia+1\].sy,-1);  
      cout<<"  ";  
      if(ca==72)ia+=MAX\_MAIN\_MENU-3;  
      else ia+=MAX\_MAIN\_MENU-1;  
      ia%=MAX\_MAIN\_MENU-2;  
      font(main\_menu\[ia+1\].sx-1,main\_menu\[ia+1\].sy,1);  
      cout<<' '< font(leftsite,main\_menu\[ia+1\].sy,2);  
      cout<<"←";  
      font(rightsite,main\_menu\[ia+1\].sy,-1);  
 cout<<"→";  
 font(79,24,-1);//把游標藏起來  
 font(-1,-1,0);//清空顏色設定  
 }  
 else if(ca==75 || ca==77)//左右  
 {  
 if(ca==75)setting\[ia\]+=max\[ia\]-1;  
 else setting\[ia\]+=max\[ia\]+1;  
 setting\[ia\]%=max\[ia\];  
 font(sett\_x\_y\[ia\]\[0\],sett\_x\_y\[ia\]\[1\],-1);  
 cout< }  
 }  
 else if(ca==13)  
 {  
 font(-1,-1,0);  
 gotoxy(leftsite,main\_menu\[ia+1\].sy);  
 cout<<"  ";  
 gotoxy(rightsite,main\_menu\[ia+1\].sy);  
 cout<<"  ";  
 return;  
 }  
 font(79,24,-1);//把游標藏起來  
}

  
１-２.遊戲畫面初始  
        接下來就到了設定使用者設定的時候了，也就是設定遊戲模式、遊戲速度、遊戲地圖，其中，遊戲模式裡的食物模式(註五)是我自己想出來 的，遊戲地圖則是讀取障礙物地圖。設定完成之後就開始倒數，倒數完就開始生成遊戲盤面，盤面我是用兩個大陣列進行儲存，一個儲存文字版的，另一個是以整數 儲存蛇身的先後順序，兩個陣列配合，以show\_color\_board()函式顯示彩色盤面，在show\_color\_board()內是以自訂函式 font()來設定顏色及位置，在font()裡我有設定配色的代號，在程式中一律使用代號，以便以後更改配色。底下我還有輸出一個記分板，接著，就可以 開始遊戲了。  
  
(註五)食物模式是我偶然之下想出來的，剛開始，我是想說一次一個食物會導致遊戲時間變很久，於是，我就想說乾脆把一開始的盤面全部都放食物好了，可是在 真正寫出程式以後，發現這樣根本不能玩，因為每一口吃到的都是食物，導致尾巴被固定，到最後死路一條，於是，我便改成亂數食物數量，而且還設定食物最多只 會有一半的盤面，這樣遊戲時間就會縮短許多。  
   

[![](http://lh5.ggpht.com/_--EOwdSZaB4/ScZVZJci4II/AAAAAAAAAVU/uMrMoAlAfD8/s800/%E9%A3%9F%E7%89%A9%E6%A8%A1%E5%BC%8F.jpg)](http://picasaweb.google.com/lh/photo/h9TIgcZJZFC0sbtdoioSpA?feat=embedwebsite)

相簿： [成 果作品](http://picasaweb.google.com/taichunmin/oDJBsH?feat=embedwebsite)

圖、食物模式（本圖經反白處理）  

１-３.進行遊戲  
這裡利用迴圈、流程控制、kbhit()函式和getch()，作成了在使用者按下按鈕時，程式才會作出適當反應，其他時候，蛇身會繼續向前直走，每一次 迴圈都用Sleep()函式進行暫留，暫留的時間長短由遊戲速度決定，蛇移動時是先檢查，如果可以移動的話把原本的頭部換成身體的符號、輸出一個新頭部、 然後決定尾部是否去掉，如果不用去掉代表吃到食物，就該城增加分數，如果沒吃到食物，就把最後一個身體符號去掉。  

程式碼節錄175～249行  
while(1)  
{  
  if(kbhit())//接收所按的按鍵  
  {  
    ca=getch();  
    if(ca==13)  
    {  
      while(kbhit())getch();  
      switch(pause\_status())  
      {  
      case 1:  
        return 0;  
      case 2:  
        admin=!admin;  
        break;  
      case 3:  
        int choose1;  
        do  
        {  
          //...pause...（省略）  
        }while(change\_setting(choose1));  
        break;  
      }  
      clrscr();  
      show\_color\_board(board,va);  
      show\_score\_board(3);  
    }  
    if(ca==-32)//因為方向鍵的鍵碼是兩個字元，以ASCII -32開始  
    {  
      ca=getch();  
      if(ca==72 && direction!=2)direction=8;//上  
      else if(ca==80 && direction!=8)direction=2;//下  
      else if(ca==75 && direction!=6)direction=4;//左  
      else if(ca==77 && direction!=4)direction=6;//右  
    }  
  }  
  if(!food\_count)  
  {  
    //...produce food... （省略）  
  }  
  int vc=move\_head(&head,direction,board,va);  
  step\_count++;  
  if(vc==0)break;  
  else if(vc==1)  
  {  
    food\_count--;  
    score+=setting\[1\]+step\_count/100;  
    show\_score\_board(2);  
  }  
  else if(vc==2)move\_tail(&tail,board,va);  
   
  Sleep(velocity);  
}

  
２.    猜數字遊戲  
這個程式是我剛學程式沒多久寫的，那時候因為題目還沒有寫多少，很多寫法不是寫得很精練。這算是我第一次用時間函式和亂數函式寫的程式。程式碼第5行和第 6行定義的SIZE和iTIMES分別是數字數和可猜的次數，可以在編譯時變更。第19行的time\_t是時間的專屬變數型態。第29行我原本是用int 型態讀，可是很多試玩的同學都會不小心打到其他東西，所以才改用字串讀整行。第56行是使用cmd的pause指令。第62行我採用自訂函式aa還取代輸 入和判斷的功能。第76行的CLK\_TCK變數是在ctime函式庫裡預先定義下來的常數，代表一秒所執行的滴答數。接下來看到aa函式的定義，第95和 104行一樣是怕使用者打到非數字的文字，所以採字串讀整行的作法，用字串讀取是後來加進去的東西，為了遷就於舊有的程式碼，所以才又轉成數字陣列，有點 走冤枉路的感覺就是了。從剛開始寫程式時，我就非常強烈的要求排版，所以這個算是剛學沒多久寫的程式，我排版也排的一絲不苟，這個程式的缺點就是走冤枉路 和宣告太多全域變數。以下是實際執行時的圖案。  
   

[![](http://lh4.ggpht.com/_--EOwdSZaB4/ScZVn8vuZZI/AAAAAAAAAVc/uwEHuZt3JpU/s800/%E7%8C%9C%E6%95%B8%E5%AD%97-1.jpg)](http://picasaweb.google.com/lh/photo/EfkZPJPIOjyAueEA8PI1Nw?feat=embedwebsite)

相簿： [成 果作品](http://picasaweb.google.com/taichunmin/oDJBsH?feat=embedwebsite)

[![](http://lh5.ggpht.com/_--EOwdSZaB4/ScZVx7IbMRI/AAAAAAAAAV8/ikawQNMBpzE/s800/%E7%8C%9C%E6%95%B8%E5%AD%97-2.jpg)](http://picasaweb.google.com/lh/photo/p1DvBYp9cFpX9Nx2H35jFw?feat=embedwebsite)

相簿： [成 果作品](http://picasaweb.google.com/taichunmin/oDJBsH?feat=embedwebsite)

圖、猜數字遊戲執行畫面（本圖經反白處理）  
   

３.    簡易檔案比較程式  
這個程式原本是為我雙胞胎弟弟寫的，他原本是只有學Visual Basic 6.0，為了可以參加程式設計比賽，我便叫他去練習ACM，但是ACM沒有提供Visual Basic 6.0的Judge， 而且這種視窗化的語言一般來說很難利用程式自行檢查，所以，我就用亂數跑出一些測資，然後叫他用檔案I/O來輸出他的答案，然後我就可以用兩個輸出檔來進 行比較，這樣的話就可以知道程式有沒有Accept。  
後來，在我弟改學C++之後，這個程式也暫時變成無用武之地，後來，在我二年級在社團當幹部，開始帶學弟之後，就開始又重新用到這個程式，因為ACM如果 程式有錯的話，不會告訴你錯在哪，於是，當學弟解題目時得到Wrong Answer而來求助於我時，我就會利用這程式來找出兩個人程式執行結果的差異處。  
因為主要判斷的檔案是解題目的輸出檔，所以我的程式是用逐行比較的方式寫的，有不同則會輸出不同的行數，兩個檔案的行數不同時也會顯示。這個程式的執行畫 面如下圖  
   

[![](http://lh6.ggpht.com/_--EOwdSZaB4/ScZWp4IghhI/AAAAAAAAAXE/xX-NXSG76v8/s800/%E6%AA%94%E6%A1%88%E6%AF%94%E8%BC%83%E7%A8%8B%E5%BC%8F.jpg)](http://picasaweb.google.com/lh/photo/iVBU_Dbrbk8301-NlUj9bQ?feat=embedwebsite)

寄 件者 [成 果作品](http://picasaweb.google.com/taichunmin/oDJBsH?feat=embedwebsite)

圖、檔案比較程式（本圖經反白處理）  
   

４.    質數輸出程式  
這個程式是為瞭解題目準備的，在遇到題目需要一些質數，且所需數量不多時，直接列舉會比執行時再跑一遍快多了，程式執行完會先輸出質數數量，然後質數會直 接輸出在記事本裡，為了能直接貼進程式碼裡，質數中間均是以逗號分隔。求質數的方法是先開根號，然後以不大於開根號的質數去除，這樣就可以用很快的速度確 認其是不是質數。  
   

[![](http://lh4.ggpht.com/_--EOwdSZaB4/ScZWWK21nnI/AAAAAAAAAWk/5sCnJz-0xs4/s800/%E8%B3%AA%E6%95%B8%E8%BC%B8%E5%87%BA.jpg)](http://picasaweb.google.com/lh/photo/QyK_APOb3HnseuyzrPMSww?feat=embedwebsite)

相簿： [成 果作品](http://picasaweb.google.com/taichunmin/oDJBsH?feat=embedwebsite)

圖、質數輸出程式所輸出的檔案  

   
５.讀鍵盤鍵碼的程式（程式碼如下）  

#include  
#include  
using namespace std;  
  
int main()  
{  
  char ca;  
  while(ca=getch())cout< system("pause");  
}

  
  
這個程式是我在測試getch()函式時所寫的程式，為了以後使用方便，我便順手把它做成鍵碼表。  
   

[![](http://lh4.ggpht.com/_--EOwdSZaB4/ScZTRLz97uI/AAAAAAAAATM/s57nnBQC8cA/s800/%E5%B0%8F%E9%8D%B5%E7%9B%A4.jpg)](http://picasaweb.google.com/lh/photo/l6T7o2m1fdVeU-QICQu5nA?feat=embedwebsite)

相簿： [成 果作品](http://picasaweb.google.com/taichunmin/oDJBsH?feat=embedwebsite)

圖、鍵盤  
   

[![](http://lh3.ggpht.com/_--EOwdSZaB4/ScZTvhLqZCI/AAAAAAAAATU/m-mcSsZxV-w/s800/%E9%8D%B5%E7%9B%A4%E9%8D%B5%E7%A2%BC.jpg)](http://picasaweb.google.com/lh/photo/iyuII6gYDADhPwadPXo-oQ?feat=embedwebsite)

相簿： [成 果作品](http://picasaweb.google.com/taichunmin/oDJBsH?feat=embedwebsite)

圖、鍵盤鍵碼表  

圖的鍵盤鍵碼表是用我的程式所讀到的，其中綠色字和紫色字都是讀到雙字元，而且雙字元內的第一個字元都是 -32。  
  
   
６.隨意更改命令提示字元游標位置（程式碼如下）  

#include  
#include  
using namespace std;  
  
HANDLE hOuput;  
COORD scrn;  
   
void gotoxy(int xpos, int ypos)  
{  
  scrn.X = xpos; scrn.Y = ypos;  
  SetConsoleCursorPosition(hOuput,scrn);  
}  
  
int main()  
{  
  hOuput = GetStdHandle(STD\_OUTPUT\_HANDLE);  
  int a,b;  
  while(cin>>a>>b)gotoxy(a,b);  
  system("pause");  
}

  
  

[![](http://lh4.ggpht.com/_--EOwdSZaB4/ScZVNQ-oGdI/AAAAAAAAAU0/l5xfI9_ED6M/s800/gotoxy%E6%B8%AC%E8%A9%A6.jpg)](http://picasaweb.google.com/lh/photo/YAUAMdU8LG_JZzGKuqgWsA?feat=embedwebsite)

相簿： [成 果作品](http://picasaweb.google.com/taichunmin/oDJBsH?feat=embedwebsite)

  
這個程式是我用來測試gotoxy()函式所寫的程式，程式裡迴圈每讀取兩個數字之後，就馬上執行gotoxy()函式還進行遊標換位，圖為實際執行之結 果。  
   
７.打愛的鼓勵的程式（程式碼如下）  

#include  
#include  
#define SPEED 60  
using namespace std;  
  
int main()  
{  
  int ia\[11\]={6,6,3,3,6,2,2,2,6,3,0};//6 3 2  
  for(int i=0;i<10;i++)ia\[i\]\*=SPEED;  
  Sleep(1000);  
  for(int i=0;i<11;i++)  
  {  
    cout<<"\\a";  
    Sleep(ia\[i\]);  
  }  
  system("pause");  
}

  
  
    這個程式是在社團課時學弟問我的問題，那一次是教跳脫字元，然後那個學弟在試著輸出"\\a"之後，就在嘗試使用跳脫字元這個來打節 拍，他原本是用好幾千萬次的迴圈來造成延遲的效果，然後整個程式碼弄得很複雜，然後就跑來問我要怎麼改。我就將延遲用的迴圈全部改成windows.h函 式庫裡面的Sleep()函式，Sleep()函式裡面可以放入一個整數，代表延遲的毫秒數。在反覆嘗試之後，終於把最適合的間隔調了出來，我和那個學弟 寫出這個程式之後都覺得這個程式蠻有趣的，但是在調間隔時間時很麻煩就是了。  
   
  
８.kbhit()函式應用－碼表（程式碼如下）  

#include  
#include  
#include  
using namespace std;  
  
int main()  
{  
  long long la=0;  
  bool ba=true;  
  while(ba)  
  {  
    Sleep(100);  
    cout.precision(1);  
    cout.setf(ios::fixed,ios::floatfield);  
    cout<<(la++)/10.0< if(kbhit() && cin.get())  
    {
