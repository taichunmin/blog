---
date: "2011-11-18 20:01"
categories: CPP
tags: [CPP, oslab, homework]
---
# 作業系統實驗 Lab9

```cpp
/*
Step1: Using the fork() function to create a new process.

Step2: Using command line to kill the process.
    kill -kill 1899

Step3: Repeat step1 and use system calls to kill process.

*/
#include<stdio.h>
#include<unistd.h>

int main()
{
    pid_t newpid = fork();
    if(newpid==0)
    {
        for(;;)
            pause();
    }
    printf("pid = %d\n",newpid);
    wait(NULL);
    printf("Child process is finished.\n");
}
```

```cpp
#include<stdio.h>
#include<unistd.h>
#include<signal.h>

int main()
{
    pid_t newpid;
    printf("Input the pid of the process you want to kill -> ");
    scanf("%d",&newpid);
    kill(newpid,SIGKILL);
}
```

```cpp
#include<stdio.h>
#include<unistd.h>
#include<signal.h>

struct sigaction newact;

/* here is the signal handler */
void catch_alarm_2(int sig_num)   /* the argument is signal number  */
{   
    /* re-set the signal handler again to catch_int, for next time */
    sigaction(SIGINT, &newact, NULL);
}
void catch_int_1(int sig_num)   /* the argument is signal number  */
{   
    /* re-set the signal handler again to catch_int, for next time */
    signal(SIGINT, catch_int_1);
    printf("How are you?\n",sig_num);
}
void catch_int_2(int sig_num)   /* the argument is signal number  */
{   
    /* re-set the signal handler again to catch_int, for next time */
    signal(SIGINT, catch_int_2);
    printf("I am fine!\n",sig_num);
}
void catch_alarm_1(int sig_num)   /* the argument is signal number  */
{   
    /* re-set the signal handler again to catch_int, for next time */
    signal(SIGINT, catch_int_2);
    signal(SIGALRM, catch_alarm_2);
    alarm(3);
}

int main(int argc, char* argv[])
{
    sigaction(SIGINT, NULL, &newact);

    /* set the INT (Ctrl-C) signal handler to 'catch_int' */
    signal(SIGINT, catch_int_1);
    signal(SIGALRM, catch_alarm_1);
    alarm(3);

    /* now, lets get into an infinite loop of doing nothing. */
    for ( ;; )
        pause();
}
```
