---
date: "2011-11-25 19:58"
categories: CPP
tags: [CPP, oslab, homework]
---
# 作業系統實驗 10

```cpp
/*
    gcc -o a a.c -pthread
    ./a && ./a && ./a && ./a && ./a && ./a && ./a && ./a && ./a && ./a
*/
#include <semaphore.h>
#include <pthread.h>
#include <stdio.h>
int count=0;
void inc(void){
    int i=0;
    for(i=0;i<25000000;i++){
        count++;
    }
    pthread_exit(NULL);
}
void dec(void){
    int i=0;
    for(i=0;i<25000000;i++){
        count--;
    }
    pthread_exit(NULL);
}
int main(void){
    int i=0;
    pthread_t id[4];    
    pthread_create(&id[0],NULL,(void*)dec,NULL);
    pthread_create(&id[1],NULL,(void*)inc,NULL);
    pthread_create(&id[2],NULL,(void*)dec,NULL);
    pthread_create(&id[3],NULL,(void*)inc,NULL);
    for(i=0;i<4;i++)
    {
        pthread_join(id[i],NULL);   
    }
    printf("\noutput is %d\n",count);
}
```

```cpp
/*
    gcc -o a a.c -pthread
    ./a && ./a && ./a && ./a && ./a && ./a && ./a && ./a && ./a && ./a
*/
#include <semaphore.h>
#include <pthread.h>
#include <stdio.h>
int count=0;
sem_t sem;

void inc(void){
    int i=0;
    for(i=0;i<25000000;i++){
        sem_wait(&sem);
        count++;
        sem_post(&sem);
    }
    pthread_exit(NULL);
}
void dec(void){
    int i=0;
    for(i=0;i<25000000;i++){
        sem_wait(&sem);
        count--;
        sem_post(&sem);
    }
    pthread_exit(NULL);
}
int main(void){
    sem_init(&sem,0,1);
    int i=0;
    pthread_t id[4];    
    pthread_create(&id[0],NULL,(void*)dec,NULL);
    pthread_create(&id[1],NULL,(void*)inc,NULL);
    pthread_create(&id[2],NULL,(void*)dec,NULL);
    pthread_create(&id[3],NULL,(void*)inc,NULL);
    for(i=0;i<4;i++)
    {
        pthread_join(id[i],NULL);   
    }
    printf("\noutput is %d\n",count);
    sem_destroy(&sem);
    return 0;
}
```

```cpp
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#include </usr/include/semaphore.h>

#define BUFF_SIZE   5       /* total number of slots */
#define NP          3       /* total number of producers */
#define NC          3       /* total number of consumers */
#define NITERS      4       /* number of items produced/consumed */

typedef struct {
    int buf[BUFF_SIZE];   /* shared var */
    int in;               /* buf[in%BUFF_SIZE] is the first empty slot */
    int out;              /* buf[out%BUFF_SIZE] is the first full slot */
    sem_t full;           /* keep track of the number of full spots */
    sem_t empty;          /* keep track of the number of empty spots */
    sem_t mutex;          /* enforce mutual exclusion to shared data */
} sbuf_t;

sbuf_t shared;

void *Producer(void *arg)
{
    int i, item, index;

    index = (int)arg;

    for (i=0; i < NITERS; i++) {

        /* Produce item */
        item = i;   

        /* Prepare to write item to buf */

        /* If there are no empty slots, wait */
        sem_wait(&shared.empty);
        /* If another thread uses the buffer, wait */
        sem_wait(&shared.mutex);
        shared.buf[shared.in] = item;
        shared.in = (shared.in+1)%BUFF_SIZE;
        printf("[P%d] Producing %d ...\n", index, item); fflush(stdout);
        /* Release the buffer */
        sem_post(&shared.mutex);
        /* Increment the number of full slots */
        sem_post(&shared.full);

        /* Interleave  producer and consumer execution */
        if (i % 2 == 1) sleep(1);
    }
    return NULL;
}

void *Consumer(void *arg)
{
    /* Fill in the code here */
    int i, item, index;

    index = (int)arg;

    for (i=0; i < NITERS; i++) {
        /* Prepare to read item from buf */

        /* If there are no full spots, wait */
        sem_wait(&shared.full);
        /* If another thread uses the buffer, wait */
        sem_wait(&shared.mutex);

        /* Consume item */
        item = shared.buf[shared.out];
        shared.out = (shared.out+1)%BUFF_SIZE;
        printf(" ------> [P%d] Consuming %d ...\n", index, item); fflush(stdout);
        /* Release the buffer */
        sem_post(&shared.mutex);
        /* Increment the number of full slots */
        sem_post(&shared.empty);

        /* Interleave  producer and consumer execution */
        if (i % 2 == 1) sleep(1);
    }
    return NULL;
}

int main()
{
    pthread_t idP, idC;
    int index;

    sem_init(&shared.full, 0, 0);
    sem_init(&shared.empty, 0, BUFF_SIZE);

    /* Insert code here to initialize mutex*/
    sem_init(&shared.mutex, 0, 1);

    for (index = 0; index < NP; index++)
    {  
       /* Create a new producer */
       pthread_create(&idP, NULL, Producer, (void*)index);
    }

    /* Insert code here to create NC consumers */
    for (index = 0; index < NC; index++)
    {  
       /* Create a new producer */
       pthread_create(&idC, NULL, Consumer, (void*)index);
    }

    pthread_exit(NULL);
}
```
