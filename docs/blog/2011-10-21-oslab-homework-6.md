---
date: "2011-10-21 20:21"
categories: CPP
tags: [CPP, oslab, homework]
---
# 作業系統實驗 Lab6

```cpp
#include<stdio.h>
#include<unistd.h>
#include<sys/wait.h>

int ia=10;

int main()
{
    int ib=10;
    pid_t new_pid;
    printf("pid=%d, ppid=%d, global=%d, local=%d\n",getpid(),getppid(),ia,ib);
    new_pid = fork();
    switch(new_pid)
    {
      case -1:
        printf("fork error!\n");
        break;
      case 0:
        printf("pid=%d, ppid=%d, global=%d, local=%d\n",getpid(),getppid(),ia,ib);
        ia++;
        ib++;
        printf("pid=%d, ppid=%d, global=%d, local=%d\n",getpid(),getppid(),ia,ib);
        break;
      default:
        wait(NULL);
        printf("pid=%d, ppid=%d, global=%d, local=%d\n",getpid(),getppid(),ia,ib);
        break;
    }
}
```

```cpp
#include<stdio.h>
#include<unistd.h>
#include<sys/wait.h>

int main()
{
    if(fork()==0)
    {
      if(fork()==0)
      {
        printf("I'm child process C.\n");
        printf("C) PID: %d\tParent PID: %d\n",getpid(),getppid());
        return 0;
      }
      wait(NULL);
      printf("I'm child process B.\n");
      printf("B) PID: %d\tParent PID: %d\n",getpid(),getppid());
      return 0;
    }
    if(fork()==0)
    {
      printf("I'm child process D.\n");
      printf("D) PID: %d\tParent PID: %d\n",getpid(),getppid());
      return 0;
    }
    if(fork()==0)
    {
      printf("I'm child process E.\n");
      printf("E) PID: %d\tParent PID: %d\n",getpid(),getppid());
      return 0;
    }
    wait(NULL);
    wait(NULL);
    wait(NULL);
    printf("I'm child process A.\n");
    printf("A) PID: %d\tParent PID: %d\n",getpid(),getppid());
}
```

```cpp
#include<stdio.h>
#include<unistd.h>
#include<sys/wait.h>

int main()
{
    if(fork()==0)
    {
      if(fork()==0)
      {
        printf("I'm child process C.\n");
        printf("C) PID: %d\tParent PID: %d\n",getpid(),getppid());
        return 0;
      }
      wait(NULL);
      printf("I'm child process B.\n");
      printf("B) PID: %d\tParent PID: %d\n",getpid(),getppid());
      return 0;
    }
    usleep(50);
    if(fork()==0)
    {
      printf("I'm child process D.\n");
      usleep(50);
      printf("D) PID: %d\tParent PID: %d\n",getpid(),getppid());
      return 0;
    }
    if(fork()==0)
    {
      printf("I'm child process E.\n");
      usleep(50);
      printf("E) PID: %d\tParent PID: %d\n",getpid(),getppid());
      return 0;
    }
    wait(NULL);
    wait(NULL);
    wait(NULL);
    printf("I'm child process A.\n");
    printf("A) PID: %d\tParent PID: %d\n",getpid(),getppid());
}
```
