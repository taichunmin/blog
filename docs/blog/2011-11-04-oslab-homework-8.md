---
date: "2011-11-04 20:04"
categories: CPP
tags: [CPP, oslab, homework]
---
# 作業系統實驗 Lab8

```cpp
/*
Compile Command:
    gcc -o a a.c -pthread
*/
#include<pthread.h>
#include<stdio.h>
#include<stdlib.h>

void *PrintHello(void *arg)
{
    printf("This is Hello Thread\n");
    printf("Thread ID:%lu\n",pthread_self());
    printf("Argument: %d\n",(int)arg);
    //printf("Argument: %d\n",*(int*)arg);
    pthread_exit(NULL);
}

int main()
{
    pthread_t thread;
    int rc,t=100;
    rc = pthread_create( &thread, NULL, PrintHello, (void*)t);
    if(rc)
    {
        printf("ERROR: return code from pthread_create() is %d\n",rc);
        exit(-1);
    }
    rc = pthread_join( thread, NULL);
    if(rc)
    {
        printf("ERROR: return code from pthread_join() is %d\n",rc);
        exit(-1);
    }
    return 0;
}
```

```cpp
/*
Compile Command:
    gcc -o b b.c -pthread

Questions:
#   Observe all of the results you got, and think about what
    problem does it have? (10pts.)
#   Compare to fork() process by doing all the same thing to
    the global variable, can you figure out what’s the
    difference between them? (10pts.)

*/
#include<pthread.h>
#include<stdio.h>
#include<stdlib.h>

int count = 0;

void *PrintHello(void *arg)
{
    int ia=250000;
    //printf("%d) Start: count = %d\n",(int)arg, count);
    while(ia--)
    {
        count++;
        //usleep(1);
    }
    //printf("%d) End: count = %d\n",(int)arg, count);
    printf("Thread %d: ID %lu Completed.\n",(int)arg,pthread_self());
    pthread_exit(NULL);
}

int main()
{
    pthread_t thread[4];
    int rc,t;
    for(t=0;t<4;t++)
    {
        rc = pthread_create( &thread[t], NULL, PrintHello, (void*)t);
        if(rc)
        {
            printf("ERROR: return code from pthread_create() is %d\n",rc);
            exit(-1);
        }
    }
    for(t=0;t<4;t++)
    {
        rc = pthread_join( thread[t], NULL);
        if(rc)
        {
            printf("ERROR: return code from pthread_join() is %d\n",rc);
            exit(-1);
        }
    }
    printf("Value = %d\n",count);
    return 0;
}
```

```cpp
/*
Compile Command:
    gcc -o c c.c -pthread

*/
#include<pthread.h>
#include<unistd.h>
#include<stdio.h>
#include<string.h>
#include<sys/types.h>
#include<sys/ipc.h>
#include<sys/msg.h>
#include<stdlib.h>
#include "msg_que.h"

long int ProgramID = 1; // 1 or 2
int closeMsgQue = 0;

void *MsgSend(void *arg)
{
    key_t key=0x1234;
        int msqid = msgget(key,IPC_CREAT | 0666);
        oslab_msg_st msg_buffer;
        while( printf("Enter some text: "),fgets(msg_buffer.msg_text,256,stdin))
        {
                msg_buffer.oslab_msg_type = ProgramID;
                msgsnd(msqid,(void*)&msg_buffer,sizeof(msg_buffer)-sizeof(long int),0);
                if(strcmp(msg_buffer.msg_text,"exit\n")==0)
                {
            closeMsgQue = 1;
                        break;
        }
        }
    pthread_exit(NULL);
}
void *MsgGet(void *arg)
{
    key_t key=0x1234;
        int msqid = msgget(key,IPC_CREAT | 0666);
        oslab_msg_st msg_buffer;
        struct msqid_ds msq_id;
        msgctl(msqid,IPC_STAT,&msq_id);
        while( msgrcv(msqid,(void*)&msg_buffer,sizeof(msg_buffer)-sizeof(long int),3-ProgramID,0) )
        {
                printf("Received: %s\n",msg_buffer.msg_text);
                if(strcmp(msg_buffer.msg_text,"exit\n")==0)
                {
                        if(closeMsgQue)msgctl(msqid,IPC_RMID,&msq_id);
                        break;
                }
        }
    pthread_exit(NULL);
}

int main()
{
    pthread_t thread[2];
    int rc,t;
    rc = pthread_create( &thread[0], NULL, MsgSend, (void*)t);
    if(rc)
    {
        printf("ERROR: return code from pthread_create() is %d\n",rc);
        exit(-1);
    }
    rc = pthread_create( &thread[1], NULL, MsgGet, (void*)t);
    if(rc)
    {
        printf("ERROR: return code from pthread_create() is %d\n",rc);
        exit(-1);
    }
    rc = pthread_join( thread[0], NULL);
    if(rc)
    {
        printf("ERROR: return code from pthread_join() is %d\n",rc);
        exit(-1);
    }
    rc = pthread_join( thread[1], NULL);
    if(rc)
    {
        printf("ERROR: return code from pthread_join() is %d\n",rc);
        exit(-1);
    }
    return 0;
}
```
