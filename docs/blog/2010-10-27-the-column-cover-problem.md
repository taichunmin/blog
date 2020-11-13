---
title: The Column Cover Problem
date: 2010-10-27T08:18:00+08
tags:
  - CMD程式
---
# The Column Cover Problem

```cpp
#include<iostream>
using namespace std;
char va[1000][1000]={};//R
int vb[1000]={},ia,ib,ic,id;//vb=Cost,vc=Row_Count
string sa;
struct ta_t
{
  int cost,weight;
  string result,choice;
};
ta_t best_ta={2147483647,0,"",""};
string fa(string sa,int fia)
{
  for(int i=0;i<ia;i++)
    if(sa[i]=='1' || va[i][fia]==1)sa[i]='1';
  return sa;
}
void fb(ta_t ta,int fia)
{
  ta_t tb={ta.cost+1,ta.weight+vb[fia],ta.result,ta.choice};
  tb.result=fa(tb.result,fia);
  tb.choice[fia]='1';
  bool ba=true;
  for(int i=0;ba && i<ia;i++)
    if(tb.result[i]=='0')ba=false;
  if(ba)
  {
    if(tb.cost<best_ta.cost || (tb.cost==best_ta.cost && tb.weight<best_ta.weight))
      best_ta=tb;
    return;
  }
  for(int i=fia+1;tb.cost<=best_ta.cost && i<ib;i++)
    if(tb.choice[i]=='0')fb(tb,i);
}
void fc(ta_t ta,int fia)
{
  ta_t tb={ta.cost+1,ta.weight+vb[fia],ta.result,ta.choice};
  tb.result=fa(tb.result,fia);
  tb.choice[fia]='1';
  bool ba=true;
  for(int i=0;ba && i<ia;i++)
    if(tb.result[i]=='0')ba=false;
  if(ba)
  {
    if(tb.cost==best_ta.cost && tb.weight==best_ta.weight)
    {
      for(int i=0;i<ib;i++)
        if(tb.choice[i]=='1')printf("%d ",i+1);
      printf("\n");
    }
    return;
  }
  for(int i=fia+1;tb.cost<=best_ta.cost && i<ib;i++)
    if(tb.choice[i]=='0')fc(tb,i);
}
int main(int argc,char* argv[])
{
  if(argc!=2)return 0;
  FILE* fin=fopen(argv[1],"r");
  fscanf(fin,"%d %d",&ia,&ib);
  for(int i=0;i<ib;i++)
    fscanf(fin,"%d",&vb[i]);
  while(fscanf(fin,"%d %d",&ic,&id)!=EOF)
    va[ic-1][id-1]=1;
  /*
  for(int i=0;i<ia;i++)
    for(int j=0;j<ib;j++)
      printf("%d%s",va[i][j],((j!=ib-1)?" ":"\n"));
  */
  for(int i=0;i<ia;i++)sa+="0";
  ta_t ta1={0,0,sa,sa};
  for(int i=0;i<ib;i++)fb(ta1,i);
  for(int i=0;i<ib;i++)fc(ta1,i);
  printf("(%d,%d)\n",best_ta.cost,best_ta.weight);
  system("pause");
}
```

  
這一題是碩一庭瑋學長問我的作業  
嘆氣阿~這樣的程式碼要花我兩天的功夫  
我的腦袋真的是越來越鈍了  
太久沒有練程式  
去參加接下來的NCPC都有點心虛  
怎麼辦?  
  
下面是這一題的測資檔  

```cpp
4	4
1	2	4	3
1	1
1	4
2	1
2	3
3	2
3	3
4	4
```

  

```cpp
7	7
3	3	3	3	2	3	2
1	1
1	5
2	5
2	7
3	5
4	2
4	3
4	4
5	3
5	6
6	4
7	6
7	7
```

  

```cpp
11	6
2	2	2	2	3	3
1	1
1	2
2	1
2	2
3	1
3	3
4	1
4	3
5	2
5	4
6	2
6	4
7	3
7	6
8	3
9	4
9	5
10	4
11	5
11	6
```

  

```cpp
16	12
4	4	4	4	4	4	4	4	4	4	4	4
1	4
2	4
2	5
2	6
3	5
4	7
5	1
5	2
5	3
6	2
7	10
8	3
9	1
10	11
11	12
12	10
12	11
12	12
13	8
14	6
15	7
15	8
15	9
16	9
```

  

```cpp
20	6
3	4	4	4	4	5
1	5
2	5
2	6
3	4
3	6
4	4
5	2
5	4
6	2
6	4
7	2
8	2
9	1
10	1
10	5
11	1
12	1
12	5
13	1
14	1
15	1
16	1
17	3
18	3
19	3
20	3
```