---
title: 992物件導向程式設計作業
date: 2011-06-17T23:34:00+08
tags:
  - CMD程式
  - java
  - 物件導向程式設計
  - taichunmin
  - 中興大學
  - 資訊工程學系
---
# 992物件導向程式設計作業

這個學期將要結束了

我來吧我這學期的所有程式碼貼上來

就當作這半學期課程中的一個紀錄吧

- - -

作業一

```cpp
/**
@author 戴均民 
學號：4098056061 資工二 
日期：2011/03/05
備註：作業一
The Babylonian algorithm to compute the square root of a number n is as follows:
1.Make a guess at the answer (you can pick n/2 as your initial guess)
2.Compute r = n /guess
3.Set guess = (guess + r) / 2
4.Go back to step 2 for as many iterations as necessary. The more you repeat
  steps 2 and 3, the closer guess will become to the square root of n.
Write a program that inputs an integer for n, iterates through the Babylonian 
algorithm until the value of guess is the same as the value of Math.sqrt(n) to 
the fifth decimal place. For each iteration, print out the value of guess and 
the difference between guess and Math.sqrt(n) as double to six decimal places. 
At the end of your program, print out the number of guesses as an int and the 
value of guess as a double to five decimal places.
第二次上傳更新內容：2011/3/10
1.解決輸入 81 時最後的 Guess 會顯示 9.00001 的問題。
2.將迴圈中的輸出進行格式化，採用 %17.6f 來輸出 Guess，以配合輸入最大值 2147483647
*/
import java.util.Scanner;
//為了要使用 Scanner 來進行輸入，所以需要 import 這個 package
public class hw1_4098056061 //class hw1_4098056061
{
    public static void main( String [] args )//main function
    {
        Scanner cin = new Scanner( System.in );//用來讀取標準輸入的 Scanner 
        int n, guesses_c = 0;
		//n 是代表要逼近其平方根的數字, guesses_c是為了要計算執行次數的變數 
		
        double guess, r, sqrt_n;
        //guess 就是題目中的猜測, r 是演算法中需要的變數,
        //sqrt_n 是用來儲存由 Math.sqrt(n) 所回傳 n 的平方根值 
		//因為呼叫 Math.sqrt() 是非常花費時間的，故每輸入一次 n 只呼叫 Math.sqrt() 一次
        
        System.out.println( " !學號:4098056061  !姓名:戴均民  !作業:作業一  !日期:2011/03/05" );
        System.out.println( " !本程式可重複輸入  !若要結束請輸入 Ctrl+Z" );
		for(int i=0;i<80;i++)System.out.print("=");
        System.out.print( "\nInput a number -> " );
		//提示使用者輸入資料
		
        while( cin.hasNext() ) //loop for inputs
        {
			//cin.hasNext() 是用來確認是否還有測資需要處理,
			//這樣比較容易測試程式,不用再重複執行 
			
            n = cin.nextInt();//讀取一個整數存進 n 
            guess = n / 2.0;//Step 1 of Babylonian algorithm
            sqrt_n = Math.sqrt( n );//儲存 n 的平方根來決定結束條件 
            guesses_c = 0;//計算迴圈的執行次數 
            System.out.printf( "Math.sqrt(%d) = %.6f\n", n, sqrt_n );
			//先輸出一次正確的 Math.sqrt(n) 以便檢查程式的正確性
			
            while( true )//因為迴圈的結束條件寫在迴圈內, 所以這裡就設定為無窮迴圈 
            {
                System.out.printf( "%3d: Guess = %17.6f,\tDifference = %.6f\n", guesses_c, guess, guess-sqrt_n );
                //每次迴圈都顯示出 Guess, 以及 Guess 和 Math.sqrt(n) 的差距到小數第六位 
                if( guess - sqrt_n < 0.00001 && guess - sqrt_n > -0.00001)
                {
					guess=Math.floor(guess*100000)/100000.0;
                    System.out.printf( "\nthe number of guesses = %d, guess = %.5f\n", guesses_c, guess );
                    break;
                    //利用差距小於正負 0.00001 的方式，就可以確定其精確度在小數五位數的地方。
                    //達到條件的時候，就跳出這個迴圈。 
                }
                r = n / guess;//Step 2 of Babylonian algorithm
                guess = ( guess + r ) / 2;//Step 3 of Babylonian algorithm
                guesses_c ++;//增加計數器 
				
            }//end loop for Babylonian algorithm's Step 2 and 3
            System.out.print( "Input a number -> " );
			//提示使用者輸入下一筆資料
			
        }//end loop for inputs
		
    }//end of main function
	
}//end of class hw1_4098056061
```

- - -

作業二

```cpp
/**
@author 戴均民
Student ID: 4098056061
Homework: Homework 2
Date: 2011/03/16
Problem:
The game of Pig is a sample two player dice game in which the first player to
reach 100 or more points wins. Players take turns. On each turn a player rolls a
six-sided die. After each roll:
	. If the player rolls a 1, then the player gets no new points and it becomes the
	  other player's turn.
	. If the player rolls 2 through 6, then he can either:
	
		. ROLL AGAIN or
		. HOLD. At this point the sum of all rolls is added to the player's score
		  and it becomes other player's turn.
Write a program that plays the gmae of Pig, where one player is a human and the
other is the computer. When it is the human's turn, the program should show the
score of both players and the previous roll. Allow the human to input "r" to roll
again or "h" to hold.
The computer program should play according to following rule:
	. Keep rolling when it is the computer's turn until it has accumulated 20 or
	  more points, then hold. If the computer wins or rolls a 1, then the turn ends
	  immediately.
Allow the human to roll first. The following line of code can be used to generate
a randon number between 1 and 6 that can correspond to the dice roll:
int diceroll = (int) (Math.random() * 6) + 1;
*/
import java.util.Scanner;
//為了要使用 Scanner 來進行輸入，所以需要 import 這個 package
public class hw2_4098056061 //class hw2_4098056061
{
	public static void pause(Scanner cin)//需要暫停程式時，就可以用這個函式
	{
		for(int i=0;i<54;i++)System.out.print(" "); //為了讓等等顯示的文字靠右
		System.out.print("<Press ENTER to continue>");
		cin.nextLine();// read until press enter
	}
	public static void main(String [] args)//main function
	{
		int[] score = new int [2]; //這個陣列用來儲存雙方的分數，[0]->人類，[1]->電腦
		String input; //讀取用的變數
		int turn = 0, diceroll, sum_of_turn, turn_counter;
		// trun: 現在是誰的回合, diceroll: 存亂數得到的數字,
		// sum_of_turn: 這一回合內的累積分數, turn_counter: 計算這一回合跑了幾次
		Scanner cin = new Scanner( System.in ); //use Scanner to read data from standerd input
		System.out.println(" << Game Of Pig >>");
		score[0] = score[1] = 0; //將兩個玩家的成績初始化
		while( score[0] < 100 && score[1] < 100 ) //while_of_turn
		{ //都沒有到達100，回合就繼續
			sum_of_turn = turn_counter = 0; //將這回合的相關變數歸零
			while_of_roll: while( true ) //丟骰子的迴圈
			{
				if( turn_counter == 0 ) //如果這個回合是第一次丟骰子，則會顯示這是誰的回合
				{
					System.out.println("\nIt's "+ ( (turn == 0) ? "your" : "computer's") +" turn! Score: "+score[turn]);
				}
				else if( turn == 0 )//人類的回合，而且非第一次丟骰子
				{
					System.out.print("Your score now is " +( score[turn] + sum_of_turn ) + ". Please choose to ROLL AGAIN (r) or HOLD (h) -> ");
					while(true) //在輸入非 r 且非 h 的時候，這個迴圈會一直重複執行
					{
						input = cin.nextLine();
						if( input.equalsIgnoreCase("h") )break while_of_roll;
						//讀取到 h 的時候跳出丟骰子的迴圈
						if( input.equalsIgnoreCase("r") )break;
						//讀取到 r 的時候只跳出這層迴圈
					}
				}
				else //電腦的回合，而且非第一次擲骰。
				{
					System.out.print("Computer's score now is " +( score[turn] + sum_of_turn ) + ". ");
					if( sum_of_turn >= 20)//一直丟到這回合的成績不小於 20
					{
						System.out.println("Computer desides to HOLD!");
						pause(cin); //在電腦決定 HOLD 時才暫停
						break;
					}
					else System.out.println("Computer desides to ROLL AGAIN!");
				}
				diceroll = (int) (Math.random() * 6) + 1; //生產亂數來模擬丟骰子
				System.out.println(" * "+((turn == 0)?"you":"computer")+" roll " + diceroll + " point.");
				if( diceroll == 1 )//丟到 1 的話什麼分數都得不到，而且還要換人
				{
					sum_of_turn = 0; //把分數歸零
					System.out.println(" * Unfortunately, "+ ( (turn == 0) ? "your" : "computer's") +" score back to "+score[turn]+" and end up this turn.");
					pause(cin); //暫停程式
					break;
				}
				sum_of_turn += diceroll; //把骰子丟到的點數加進這回合的分數內
				if( score[turn] + sum_of_turn >= 100) break; //如果分數不小於 100 分則跳出這層迴圈
				turn_counter ++; //計數器增加
			}//end of while_of_roll
			score[turn] += sum_of_turn; //把回合的分數加進個人的分數內
			turn = 1 - turn; //換人
		}//end of while_of_turn
		System.out.println("\n\n * Congratulations! "+ ( (score[0] >= 100) ? "You" : "Computer" ) +" wins the game of Pig.");
	}//end of main function
}//end of class hw2_4098056061
```

- - -

作業三

```cpp
/**
@author 戴均民
Student ID: 4098056061
Homework: Homework 3
Date: 2011/03/31
Related Files: hw3_4098056061.java
Problem:
寫一個Java程式，處理有關分數(fraction)形式的有理數(rational numbers)運算。
Define a class called Fraction for performing arithmetic with fractions.
Write a main method to test all the functionalities of the Fraction class.
Use integer variables to represent the private data of the class-- the
numerator and the denominator. Provide a no-argument constructor
that initializes numerator and denominator to 0 and 1, respectively.
Also, provide a two-argument constructor that initializes numerator
and denominator to the initial values given at the declaration of the
object. The constructor should store the fraction in reduced form. For
example, the fraction 2/4 would be stored in the object as 1 in the
numerator and 2 in the denominator.
Provide public methods that perform each of the following tasks:
(a) Adding two Fraction numbers. The result should be stored in
    reduced form.
(b) Multiplying two Fraction numbers. The result should be stored in
    reduced form.
(c) Printing Fraction numbers in the form a/b, where a is the
    numerator and b is the denominator.
(d) Printing Fraction numbers in floating-point format.
*/
import java.util.StringTokenizer;
//為了分析 String，以便處理字串形式為參數的分數建構子，所以需要 StringTokenizer 這個 package。
public class Fraction
{ //start class_of_Fraction
    private int numerator, denominator;
    //numerator 分子，denominator 分母。
    Fraction() //沒有參數的建構子。
    {
        clear(); //直接設定為 0/1。
    }
    Fraction( int fia, int fib ) //有兩個整數為參數的建構子。
    {
        numerator = fia;
        denominator = fib;
        this.format(); //檢查分子分母並格式化。
    }
    Fraction( String fsa ) //以一個字串為參數的建構子。
    {
        StringTokenizer sta = new StringTokenizer( fsa, "/ " );
        // 以斜線和空格當作字串的分割字元，建立一個 StringTokenizer。
        if( sta.countTokens() >= 2 ) //只有在 Tokens 的數量超過 2，才進行儲存。
        {
            numerator = Integer.parseInt( sta.nextToken() );
            denominator = Integer.parseInt( sta.nextToken() );
            this.format(); //檢查分子分母並格式化。
        }
        else clear(); //不足兩個 Tokens，所以直接設定為 0/1。
    }
    private int gcd() //呼叫後會回傳分子和分母的最大公因數。
    {
        int ia = numerator, ib = denominator, ic;
        if( ia<0 ) ia=-ia; //保證分子為正數
        if( ib<0 ) ib=-ib; //保證分母為正數
        while( ib>0 ) //利用公式 gcd( a, b ) = gcd( b, a%b ) 來求得最大公因數
        {
            ic = ia % ib;  
            ia = ib; // ia 的值已經沒有用了，所以拿 ib 來放進 ia
            ib = ic; // 將剛剛所保留下來的 ia % ib 放進 ib
        }
        return ( (ia>0) ? ia : 1 ); //避免 a 和 b 都是 0 時會回傳 0，造成除以零的錯誤。
    }
    public void clear() //將資料設定為 0/1，這是在呼叫空建構子，或是有奇怪的錯誤時會自動呼叫的函式
    {
        numerator = 0;
        denominator = 1;
    }
    public int get_numerator() //取得分子的值，提供外部得知私人資料的管道
    {
        return numerator;
    }
    public int get_denominator() //取得分母的值，提供外部得知私人資料的管道
    {
        return denominator;
    }
    private void format() //檢查資料的正確性，並使資料格式化。(格式化的意思是：分母保持正整數，並且為最簡分數)
    {
        if( denominator == 0 )//如果分母為零
        {
            this.clear();//清空這個分數
            System.out.println(" ### Illegal operation. This Fraction has been forced to 0/1. ###");
            //顯示錯誤訊息
        }
        else if( denominator < 0 )//如果分母是負數
        {
            denominator = -denominator; //保持分母是正的
            numerator = -numerator;     //也將分子變號
        }
        //要做這個處理的原因，是因為再顯示 a/b 的時候，b 若為負數，會導致顯示結果錯誤，故保持分母為正。
        int gcd_t = this.gcd();
        numerator /= gcd_t;
        denominator /= gcd_t;
        /*
            在這裡不能寫成和下面一樣的描述：
                numerator /= this.gcd();
                denominator /= this.gcd();
            因為 gcd() 的值會隨著分子和分母變動，故必須先用一個變數存下未變動前的 gcd()
            然後再把分子分母一起做相除的動作。
        */
    }
    public void print_Fraction() //以 a/b 的方式顯示資料
    {
        System.out.printf( "%d/%d", numerator, denominator);
    }
    public double print_double() //以浮點數的方式顯示資料
    {
        double da = ( (double) numerator) / denominator;
        System.out.print(da);
        return da;
    }
    //接下來的這幾個函式都是以 new 一個新的物件來回傳，這是為了可以保留舊資料。
    //並且讓資料檢查的工作全部交給建構子，物件的建構子結束之後，就不再更動內部資料。
    //全部都使用靜態函式的方式宣告，所以在使用的時候須使用 Fraction.XXX
    public static Fraction negative( Fraction ffa)
    { //負分數 -a/b
        return new Fraction( -ffa.get_numerator(), ffa.get_denominator() );
    }
    public static Fraction reciprocal( Fraction ffa)
    { //倒數 (a/b)^-1 = b/a
        return new Fraction( ffa.get_denominator(), ffa.get_numerator() );
    }
    public static Fraction add( Fraction ffa, Fraction ffb )
    { //加法 a/b * c/d = (a*d+b*c) / b*d
        return new Fraction( ffa.get_numerator() * ffb.get_denominator() +
                             ffa.get_denominator() * ffb.get_numerator(),
                             ffa.get_denominator() * ffb.get_denominator() );
    }
    public static Fraction sub( Fraction ffa, Fraction ffb )
    { //減法 a/b - c/d = (a*d-b*c) / b*d
        return new Fraction( ffa.get_numerator() * ffb.get_denominator() -
                             ffa.get_denominator() * ffb.get_numerator(),
                             ffa.get_denominator() * ffb.get_denominator() );
    }
    public static Fraction multi( Fraction ffa, Fraction ffb )
    { //乘法 a/b * c/d = a*c / b*d
        return new Fraction( ffa.get_numerator() * ffb.get_numerator(),
                             ffa.get_denominator() * ffb.get_denominator() );
    }
    public static Fraction div( Fraction ffa, Fraction ffb )
    { //除法 a/b / c/d = a*d / b*c
        return new Fraction( ffa.get_numerator() * ffb.get_denominator(),
                             ffa.get_denominator() * ffb.get_numerator() );
    }
}
```

  

```cpp
/**
@author 戴均民
Student ID: 4098056061
Homework: Homework 3
Date: 2011/03/31
Related Files: Fraction.java
Problem:
寫一個Java程式，處理有關分數(fraction)形式的有理數(rational numbers)運算。
Define a class called Fraction for performing arithmetic with fractions.
Write a main method to test all the functionalities of the Fraction class.
Use integer variables to represent the private data of the class-- the
numerator and the denominator. Provide a no-argument constructor
that initializes numerator and denominator to 0 and 1, respectively.
Also, provide a two-argument constructor that initializes numerator
and denominator to the initial values given at the declaration of the
object. The constructor should store the fraction in reduced form. For
example, the fraction 2/4 would be stored in the object as 1 in the
numerator and 2 in the denominator.
Provide public methods that perform each of the following tasks:
(a) Adding two Fraction numbers. The result should be stored in
    reduced form.
(b) Multiplying two Fraction numbers. The result should be stored in
    reduced form.
(c) Printing Fraction numbers in the form a/b, where a is the
    numerator and b is the denominator.
(d) Printing Fraction numbers in floating-point format.
*/
public class hw3_4098056061
{
    public static void detail_of_Fraction(String sa,Fraction ffa)
    { //這個函式會執行 Fraction 的兩個顯示函式。
        System.out.println(sa+" :");
        System.out.print("print_Fraction() : ");
        ffa.print_Fraction();
        System.out.print("\nprint_double() : ");
        ffa.print_double();
        System.out.print("\n\n");
    }
    public static void main( String [] args )
    {
        System.out.println( " #學號:4098056061  #姓名:戴均民  #作業:作業三  #日期:2011/03/31" );
        System.out.println( " #本程式還有負分數、倒數、減法及除法運算。" );
        for(int i=0;i<80;i++)System.out.print("=");
        System.out.println("========== Constructor 建構子 ==========\n");
        
        Fraction fa = new Fraction();
        Fraction fb = new Fraction( 2, 3);
        Fraction fc = new Fraction( "12/9");
        detail_of_Fraction( "fa", fa);
        detail_of_Fraction( "fb", fb);
        detail_of_Fraction( "fc", fc);
        
        System.out.println("========== Negative 負分數 ==========\n");
        
        detail_of_Fraction( "-fa", Fraction.negative( fa) );
        detail_of_Fraction( "-fb", Fraction.negative( fb) );
        detail_of_Fraction( "-(-fc)", Fraction.negative( Fraction.negative( fc)) );
        
        System.out.println("========== Reciprocal 倒數 ==========\n");
        
        detail_of_Fraction( "1/fa", Fraction.reciprocal( fa) );
        detail_of_Fraction( "1/fb", Fraction.reciprocal( fb) );
        detail_of_Fraction( "1/(1/fc)", Fraction.reciprocal( Fraction.reciprocal( fc)) );
        
        System.out.println("========== Add 加法 ==========\n");
        
        detail_of_Fraction( "fa + fb", Fraction.add( fa, fb) );
        detail_of_Fraction( "fa + fc", Fraction.add( fa, fc) );
        detail_of_Fraction( "fa + (fb + fc)", Fraction.add(fa, Fraction.add( fb, fc)) );
        
        System.out.println("========== Sub 減法 ==========\n");
        
        detail_of_Fraction( "fa - fb", Fraction.sub( fa, fb) );
        detail_of_Fraction( "fa - fc", Fraction.sub( fa, fc) );
        detail_of_Fraction( "fa - (fb - fc)", Fraction.sub(fa, Fraction.sub( fb, fc)) );
        
        System.out.println("========== Multi 乘法 ==========\n");
        
        detail_of_Fraction( "fa * fb", Fraction.multi( fa, fb) );
        detail_of_Fraction( "fa * fb * fc", Fraction.multi( Fraction.multi(fa, fb), fc) );
        detail_of_Fraction( "fb * fc", Fraction.multi( fb, fc) );
        
        System.out.println("========== Div 除法 ==========\n");
        
        detail_of_Fraction( "fa / fb", Fraction.div( fa, fb) );
        detail_of_Fraction( "fc / fa", Fraction.div( fc, fa) );
        detail_of_Fraction( "fb / fc", Fraction.div( fb, fc) );
    }
}
```

- - -

作業四

```cpp
/*
@Author: 戴均民
@student_id: 4098056061
@purpose: test Complex.java
@history: 2011/05/06 Finished!
*/
public class Ch5_7
{
    public static void main(String [] args) throws java.io.IOException
    {
        //test constructor
        System.out.println((new Complex())+", "+(new Complex(3.14))+", "+(new Complex(new Complex(24,-9)))+", "+(new Complex(2.0,-1.0)));
        
        Complex ta=new Complex(3,4);
        Complex tb=new Complex(2,-3);
        //test add, sub, mul
        System.out.println("add: "+(Complex.add(ta,tb))+" "+(ta.add(tb)));
        System.out.println("sub: "+(Complex.sub(ta,tb))+" "+(ta.sub(tb)));
        System.out.println("mul: "+(Complex.mul(ta,tb))+" "+(ta.mul(tb)));
        System.in.read();
    }
}
```

  

```cpp
/*
@Author: 戴均民
@student_id: 4098056061
@purpose: homework 4 (Ch5 No.7)
@history: 2011/05/06 Finished!
*/
public class Complex //class Complex
{
    public double real,imaginary;
    //real:複數的實數部分、imaginary:複數的虛數部分
    public Complex()
    {//無參數的建構子，會將複數初始化成 0+0i
        real=imaginary=0;
    }
    public Complex( double realPart )
    {//只有一個double參數的建構子，代表複數的實數部分
        real=realPart;
        imaginary=0;
    }
    public Complex( double rea, double ima )
    {//兩個double參數的建構子，分別為實樹和虛數部分
        real=rea;
        imaginary=ima;
    }
    public Complex( Complex tb )
    {//複製內容的建構子
        real=tb.real;
        imaginary=tb.imaginary;
    }
    public boolean equals( Complex ta )
    {//比較兩個內容是否相同
        return (real==ta.real && imaginary==ta.imaginary);
    }
    public String toString()
    {//把複數顯示成 ?+?i
        return ( " " + real + ( ( imaginary >= 0 ) ? " + " : " - " ) + ( ( imaginary >= 0 ) ? imaginary : (-imaginary) ) + "i " );
    }
    public static Complex add( Complex ta, Complex tb )
    {//static 加法
        return new Complex( ta.real + tb.real, ta.imaginary + tb.imaginary);
    }
    public static Complex sub( Complex ta, Complex tb )
    {//static 減法
        return new Complex( ta.real - tb.real, ta.imaginary - tb.imaginary);
    }
    public static Complex mul( Complex ta, Complex tb )
    {//static 乘法
        return new Complex( ta.real * tb.real-
                            ta.imaginary * tb.imaginary,
                            ta.real * tb.imaginary +
                            ta.imaginary * tb.real );
    }
    public Complex add( Complex tb )
    {//加法
        return new Complex( real + tb.real, imaginary + tb.imaginary);
    }
    public Complex sub( Complex tb )
    {//減法
        return new Complex( real - tb.real, imaginary - tb.imaginary);
    }
    public Complex mul( Complex tb )
    {//乘法
        return new Complex( real * tb.real-
                            imaginary * tb.imaginary,
                            real * tb.imaginary +
                            imaginary * tb.real );
    }
}
```

- - -

作業五

```cpp
/*
@Author: 戴均民
@student_id: 4098056061
@purpose: homework 5 (Ch6 No.14)
@history: 2011/05/10 Finished!
*/
import java.util.Scanner;
public class Ch6_14
{
	public static void main(String [] args)
	{
		int va[]=new int [10];
		int pass=98765;
		int input;
		boolean login=false;
		Scanner cin=new Scanner(System.in);
		while(true)
		{
			login=true;
			//First, assuming the login is successful.
			//If the login is not set to false later,
			//represent the password is correct.
			
			for(int i=0;i<10;i++)
				va[i]=(int)(Math.random()*3+1);
			//Generate challenge by Math.random()
			//Because Math.random() returns a double between 0 and 1.
			//Multiply by three make the double between 0 and 3.
			//Add 1 to make the double between 1 and 4
			//And convert the double to integer to produce a random number between 1 and 3
			//p.s. The probability that the random interger equal to 4 is too smail to be ignore.
			System.out.println("PIN:  0 1 2 3 4 5 6 7 8 9");
			System.out.print(  "NUM: ");
			for(int i=0;i<10;i++)
				System.out.printf("%2d",va[i]);
			System.out.printf("\n\nPlease input password, input -1 to cancel -> ");
			input=cin.nextInt();
			if(input<0)break;
			//when user input smailer then 0, STOP the program.
			int temppass=pass;
			//use password's backup
			for(int i=0;i<5 && login;i++)
			{
				if(va[temppass%10]!=input%10)login=false;
				temppass/=10;
				input/=10;
			}
			System.out.println("Login: "+login+"\n\n");
		}
	}
}
```

- - -

作業六

```cpp
/*
 *  School:        National Chung Hsing University
 *  Department:    Department Of Computer Science And Engineering 
 *  Student ID:    4098056061
 *  Name:          Chun-Min Tai
 *  Date:          2011/05/20
 *  Related Files: No.
 *  Homework:      Lab#6
 *  Program:       To pratice inheritance of class Document.
 */
class Document
{
    private String text;
    public Document(String text)                    // constructor
    {
        this.text = text;
    }
    public String toString()                        // also an accessor of text
    {
        return this.text;
    }
    public Document()
    {}
    public void setText(String text)                // mutator of text
    {
        this.text = text;
    }
}
class Email extends Document                        // inherit from Document
{
    private String sender,recipient,title;
    public Email(String text,String sender,String recipient,String title)
    {                                               // constructor
        super(text);                                // use the Document's constructor
        this.sender    = sender;
        this.recipient = recipient;
        this.title     = title;
    }
    public String toString()                        // overridding the same name function in Document
    {
        return ("Sender:    " + sender       + "\n" +
                "Recipient: " + recipient    + "\n" +
                "Title:     " + title        + "\n" +
                "text:      " + super.toString());  // use Document's toString() to access text
    }
    public Email()
    {
        super();
    }
    public void setSender(String sender)            // mutator of sender
    {
        this.sender    = sender;
    }
    public void setRecipient(String recipient)      // mutator of recipient
    {
        this.recipient = recipient;
    }
    public void setTitle(String title)              // mutator of title
    {
        this.title     = title;
    }
    public String getSender()                       // accessor of sender
    {
        return this.sender;
    }
    public String getRecipient()                    // accessor of recipient
    {
        return this.recipient;
    }
    public String getTitle()                        // accessor of title
    {
        return this.title;
    }
}
class File extends Document                         // inherit from Document
{
    private String pathname;
    public File(String text,String pathname)        // constructor
    {
        super(text);                                // use the Document's constructor
        this.pathname=pathname;
    }
    public String toString()                        // overridding the same name function in Document
    {
        return ("Pathname: " + pathname + "\n" +
                "text:     " + super.toString());   // use Document's toString() to access text
    }
    public File()
    {
        super();
    }
    public void setPathname(String pathname)        // mutator of pathname
    {
        this.pathname = pathname;
    }
    public String getSender()                       // accessor of pathname
    {
        return this.pathname;
    }
}
public class lab6_4098056061
{
    public static boolean ContainsKeyword(Document docObject,String keyword)
    {
                                                    // the ability of this function is the same as the textbook provided one.
        return (boolean)(docObject.toString().indexOf(keyword,0) >= 0);
    }
    public static boolean isPrint=false;            // isPrint is to save whether print any data. ( used in function display_data )
    
    public static void display_data(Document docObject,String keyword)
    {
                                                    // display what keyword to search and the Document's toString()
        if(isPrint)                                 // if isPrint is true, then print two new blank lines.
            System.out.println("\n");
        else isPrint=true;                          // because this function must print, so set isPrint to true
        System.out.println("Contain \"" + keyword + "\" keyword? " + ContainsKeyword(docObject,keyword) + "\n" +
                           "Content ->\n" + docObject.toString());
    }
    public static void main(String [] args)
    {
        Email emaila = new Email("This is the body field of a test email.",
                                 "testfrom@mail.nchu.edu.tw",
                                 "testto@mail.nchu.edu.tw",
                                 "test title");
        File  filea = new File  ("This is the data field of a test file.",
                                 "./test.file");
        display_data(emaila,"test");
        display_data(emaila,"nchu");
        display_data( filea,"test");
        display_data( filea,"nchu");
    }
}
```

- - -

作業七

```cpp
import java.util.StringTokenizer;
import java.util.Scanner;
class MonthException extends Exception
{
	public MonthException()
	{
		super("Wrong Month.");
	}
}
class DayException extends Exception
{
	public DayException()
	{
		super("Wrong Day.");
	}
}
class YearException extends Exception
{
	public YearException()
	{
		super("Wrong Year.");
	}
}
class NumericalDateException extends Exception
{
	public NumericalDateException()
	{
		super("Wrong NumericalDate.");
	}
}
public class Lab7
{
	public static String ConvertDateFromNumericalToNormal(String NumericalDate,Scanner cin)
	{
		int year,month,day;
		int month_day[]={0,31,28,31,30,31,30,31,31,30,31,30,31};
		String month_name[]={"","January ","February ","March ","April ","May ","June ","July ","August ","September ","October ","November ","December "};
		while(true){ try
		{
			StringTokenizer sta = new StringTokenizer( NumericalDate, "/ " );
			if( sta.countTokens()!=3 ) throw new NumericalDateException();
			month = Integer.parseInt( sta.nextToken() );
			day = Integer.parseInt( sta.nextToken() );
			year = Integer.parseInt( sta.nextToken() );
			break;
		}
		catch(Exception e) 
		{
			System.out.print("Please Input NumericalDate again -> ");
			NumericalDate = cin.nextLine();
		}};
		
		while(true){ try
		{
			if( year<1000 || year>3000 ) throw new YearException();
			break;
		}
		catch(YearException e)
		{
			System.out.print("Please Input Year again -> ");
			year = cin.nextInt();
		}};
		while(true){ try
		{
			if( month<1 || month>12 ) throw new MonthException();
			break;
		}
		catch(MonthException e)
		{
			System.out.print("Please Input Month again -> ");
			month = cin.nextInt();
		}};
		while(true){ try
		{
			if(year%4==0 && year%100!=0 || year%400==0)month_day[2]=29;
			else month_day[2]=28;
			if( day<1 || day>month_day[month]) throw new DayException();
			break;
		}
		catch(DayException e)
		{
			System.out.print("Please Input Day again -> ");
			day = cin.nextInt();
		}};
		return month_name[month] + day + ", " + year;
	}
	public static void main(String [] args)
	{
		Scanner cin=new Scanner(System.in);
		String input;
		while(true)
		{
			System.out.print("Please Input a Numerial Date String. (ex.12/25/2000)\nInput 'exit' will close program.\n -> ");
			input = cin.nextLine();
			if(input.equals("exit"))break;
			System.out.println("\n"+input+" => "+ConvertDateFromNumericalToNormal(input,cin)+"\n");
		}
	}
}
```

- - -

作業八

```cpp
/**
@author 戴均民 
學號：4098056061 資工二 
日期：2011/06/12
備註：作業八
*/
abstract class Shape // 抽象類別(abstract class)
{
	protected String name; // 圖形物件的名字
	public Shape()
	{
	}
	public String toString()
	{
		return "Shape name = " + name;
	}
	public abstract double getArea(); // 抽象方法(abstract method)，用以計算該圖形的面積。
}
class Point extends Shape // Shape 的衍生類別
{
	protected int x,y; // 點的 x 座標與 y 座標
	public Point(int x,int y)
	{
		super();
		name = "Point";
		this.x = x;
		this.y = y;
	}
	public String toString() // 呼叫 Shape 的 toString()，並加上該點的座標形式。
	{
		return super.toString() + ", (" + x + "," + y + ")";
	}
	public double getArea() // 傳回值是0.0。
	{
		return 0.0;
	}
}
class Circle extends Point // Point的衍生類別
{
	private int radius; // radius 代表半徑
	public Circle(int x,int y,int radius)
	{
		super(x,y);
		name = "Circle";
		this.radius = radius;
	}
	public String toString() // 呼叫 Point 的 toString()，並加上" is the center and the radius is " + radius
	{
		return super.toString() + " is the center and the radius is " + radius;
	}
	public double getArea() // 傳回值是圓面積。
	{
		return Math.PI * radius * radius;
	}
}
class Square extends Point // Point 的衍生類別
{
	private int width; // 代表正方形的邊長
	public Square(int x,int y,int width)
	{
		super(x,y); // 此正方形是由 Point 作為左上角
		name = "Square";
		this.width = width;
	}
	public String toString() // 會呼叫 Point 的 toString()，並加上" is the upper left corner. The width is " + width。
	{
		return super.toString() + " is the upper left corner.\n" +
				"The width is " + width + ".";
	}
	public double getArea() // 傳回值是正方形面積。
	{
		return width * width;
	}
}
class Rectangle extends Point // Point 的衍生類別
{
	private int width, height; // 代表長方形的寬與高
	public Rectangle(int x,int y,int width,int height)
	{
		super(x,y); // 由 Point 作為左上角
		name = "Rectangle";
		this.width = width;
		this.height = height;
	}
	public String toString() // 會呼叫 Point 的 toString()，並加上" is the upper left corner. The width is " +width + " and the height is " + height
	{
		return super.toString() + " is the upper left corner.\n" +
				"The width is " + width + " and the height is " + height + ".";
	}
	public double getArea() // 傳回值是長方形面積。
	{
		return width * height;
	}
}
public class Lab8
{
	public static void main(String [] args)
	{
        System.out.println( " !學號:4098056061  !姓名:戴均民  !作業:作業八  !日期:2011/06/12" );
		for(int i=0;i<80;i++)System.out.print("=");
		Shape [] graphics = new Shape[4];
		// 分別產生一個Point, Circle, Square, Rectangle
		graphics[0] = new Point(3,4);
		graphics[1] = new Circle(3,4,5);
		graphics[2] = new Square(3,4,3);
		graphics[3] = new Rectangle(3,4,3,4);
		for(Shape element : graphics)
		{
			// 使用for each loop 將 graphics 陣列內的物件先用 println() 將其名字與屬性印出
			// 再呼叫 getArea() 將面積印出。
			System.out.println(element.toString());
			System.out.println(element.getArea());
			System.out.println();
		}
	}
}
```

- - -

作業十

```cpp
/**
@author 戴均民 
學號：4098056061 資工二 
日期：2011/06/15
備註：作業十
*/
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
public class lab10 extends JFrame implements ActionListener
{
	public static final int SIZE = 600;                    // 463(17),423(57)
	private JPanel gameBoard;                              // 遊戲的 JPanel
	private JLabel promote;                                // 上面的那一排顯示文字
	private JButton btn[] = new JButton[9];                // 井字的九個按鈕
	private Font btnFont;                                  // 字形
	private int turn;                                      // 紀錄輪到誰
	private int win;                                       // 0 = 遊戲進行中, 1 = 有人贏了, 2 = 平手
	private String sign[]={"O","X"};                       // 紀錄雙方的符號
	public static void main(String [] args)
	{
		lab10 new_game = new lab10();
		new_game.setVisible(true);                        // 顯示視窗
	}
	public lab10()
	{
		super("學號:4098056061  姓名:戴均民  作業:作業十  日期:2011/06/15");      // 視窗標題
		setSize(SIZE + 17, SIZE + 57);                                            // 設定視窗大小
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);                           // 設定右上方的 X 可關閉程式
		setLayout(new BorderLayout());                                            // 設定版面 (BorderLayout 是有五個方向的排版方式)
		setResizable(false);                                                      // 設定不可變更視窗大小
		
		turn = 0;                                                                 // 紀錄輪到誰
		win = 0;                                                                  // 0 = 遊戲進行中, 1 = 有人贏了, 2 = 平手
		btnFont = new Font(null,Font.BOLD,SIZE*5/16);                             // 設定字形大小為 150
		
		promote = new JLabel("  It's sign " + sign[turn] + "'s turn.");           // 上面的那一排顯示的初始文字
		add(promote, BorderLayout.NORTH);                                         // 這個 Label 的位置在上面
		
		gameBoard = new JPanel();
		gameBoard.setLayout(new GridLayout(3,3));                                 // 設定排版為九個格子 (GridLayout 是很像畫格子的排版方式)
		for(int i=0;i<9;i++)
		{
			btn[i] = new JButton("");          // 設定按鈕文字
			btn[i].addActionListener(this);    // 設定按鈕的動作
			btn[i].setActionCommand(""+i);     // 設定按鈕的指令 (將按鈕的編號轉成 String 設定給 ActionCommand)
			btn[i].setFont(btnFont);           // 設定按鈕的字形
			gameBoard.add(btn[i]);             // 將按鈕加進 gameBoard
		}
		add(gameBoard, BorderLayout.CENTER);   // 將 gameBoard 加到視窗的中央
	}
	public void actionPerformed(ActionEvent e)                         // 按鈕的動作
	{
		if(win > 0)                                                    // 遊戲處於終止狀態 (有人贏 or 平手)
		{                                                              // 開始新遊戲
			win = 0;
			turn = 0;
			promote.setText("  It's sign " + sign[turn] + "'s turn."); // 把最上面的文字改掉
			getContentPane().setBackground(null);                      // 底色改回原設定
			for(int i=0;i<9;i++)
				btn[i].setText("");                                    // 清空按鈕的顯示文字
			return;
		}
		int index = Integer.parseInt(e.getActionCommand());            // 取得到底按了什麼按鈕
		if(!(btn[index].getText().equals("")))return;                  // 這格必須是空的，才需要繼續執行
		btn[index].setText(sign[turn]);                                // 設定這一格的顯示文字
		check();                                                       // 檢查是否有人贏，或是平手 (會同時設定 win)
		if(win == 1)                                                   // 有人贏了
		{
			promote.setText("  Sign " + sign[turn] + " wins the game. Press any button to restart.");
			getContentPane().setBackground(Color.MAGENTA);             // 底色改成粉紅色
		}
		else if(win == 2)                                              // 平手
		{
			promote.setText("  GameOver. Press any button to restart.");
			getContentPane().setBackground(Color.MAGENTA);             // 底色改成粉紅色
		}
		else                                                           // 遊戲繼續，換人
		{
			turn = 1 - turn;
			promote.setText("  It's sign " + sign[turn] + "'s turn.");
		}
	}
	private boolean check()                                                                    // 檢查是否有人贏，或是平手
	{
		int checkSet[][]={{0,1,2},{3,4,5},{6,7,8},{0,3,6},{1,4,7},{2,5,8},{0,4,8},{2,4,6}};    // 設定需要檢查的連線
		/* 按鈕編號排列方式 (GridLayout 的特性)
		0 1 2
		3 4 5
		6 7 8
		*/
		for(int i=0;i<checkSet.length;i++)
			if( !(btn[ checkSet[i][0] ].getText().equals("")) &&                               // 第一格不能是空的
				btn[ checkSet[i][0] ].getText().equals( btn[ checkSet[i][1] ].getText() ) &&   // 第二格和第一格一樣
				btn[ checkSet[i][1] ].getText().equals( btn[ checkSet[i][2] ].getText() ))     // 第三格和第二格一樣
			{
				win = 1;                                                                       // 有人贏了
				return true;
			}
		for(int i=0;i<9;i++)
			if(btn[i].getText().equals(""))return false;                                       // 還有空位，遊戲還要繼續
		win = 2;                                                                               // 因為沒有被 return，代表沒空位了 (平手)
		return true;
	}
}
```