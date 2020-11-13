---
title: 貪吃蛇程式2
date: 2008-02-16T11:02:00+08
tags:
  - CMD程式
---
# 貪吃蛇程式2

//要接上一篇文章喔  
          cout<<"║                              2 . 數 值 設 定                               ║";  
          cout<<"║                                                                            ║";  
          cout<<"║                                                                            ║";  
          cout<<"║                                                                            ║";  
          cout<<"║                                                                            ║";  
          cout<<"║                         任意數 . 繼 續 遊 戲                               ║";  
          cout<<"║                                                                            ║";  
          cout<<"║                                                                            ║";  
          cout<<"║                                                                            ║";  
          cout<<"║                                                                            ║";  
          cout<<"║                                                                            ║";  
          cout<<"╚══════════════════════════════════════╝";  
          cout<<" 請輸入 -> ";  
          choice=0;  
          cin>>choice; cin.get();  
          if(choice==1)break;  
          else if(choice==2)  
          {  
            while(choice!=0)  
            {  
              system("cls");  
              choice=0;  
              cout<<"<< 數 值 設 定 >>"< cout<<"(1)速度"< cout<<"(0)離開"< cout<<"-> ";  
              cin>>choice;  
              cout< if(choice==1)  
              {  
                cout<<"數值說明：速度"< cout<<"這個數值以毫秒為單位，如果數值越大時，貪吃蛇走的速度越慢。"< cout<<"注意：若是數值過低可能造成畫面模糊。"< cout<<"( 原來為 "< ";  
                cin>>velocity;  
              }  
            }  
          }  
          system("cls");  
          cout<<"即將開始遊戲 , ";  
          system("pause");  
          system("cls");  
        }  
        if(ca==-32)  
        {  
          ca=getch();  
          if(ca==72 && direction!=2)direction=8;//上  
          else if(ca==80 && direction!=8)direction=2;//下  
          else if(ca==75 && direction!=6)direction=4;//左  
          else if(ca==77 && direction!=4)direction=6;//右  
        }  
      }  
      if(!f\_exist)  
      {  
        do{  
          f\_exist=true;  
          food=rand()%960;  
          if(va\[food\]!=0)f\_exist=false;  
          else  
          {  
            va\[food\]=-1;  
            board\[food\*2\]=foodsign\[0\],board\[food\*2+1\]=foodsign\[1\];  
          }  
        }while(!f\_exist);  
      }  
      int vc=move\_head(&head,direction,board,va);  
      if(vc==0)break;  
      else if(vc==1)f\_exist=false;  
      else if(vc==2)move\_tail(&tail,board,va);  
      cout< Sleep(velocity);  
    }  
    system("cls");  
    cout<<"遊戲結束 , ";  
    system("pause");  
}