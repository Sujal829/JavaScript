// observable is a function that takes an observer as argument and returns subscription object
// observer is an object with next, error and complete methods
// stream : 

// an observable is an object that emits(push/send) a strem of data (value)

// youtube channel
// 1. subscribe to the channel
// 2. get notified when new video is uploaded
// 3. unsubscribe from the channel

// class Observable {
//     constructor(subscribe){
//         this.subscribe = subscribe;
//     }

//     subscribe(observer){
//         return this.subscribe(observer);
//     }
// }

// const observable = new Observable((observer)=>{
//    observer.next('Hello');
//    observer.next('From observable');
//    observer.complete();
// });

// observable.subscribe({
//     next: (data)=>console.log(data),
//     error:(err)=> console.error(err),
//     complete:()=>console.log("completed")
// });



// without class

function createObservable(subscribe){
    return {subscribe};
}

const observable = createObservable((observer)=>{
    observer.next('Hello');
    observer.next('From observable');

    setTimeout(()=>{
        observer.next('After timeout');
        observer.complete();
    }, 4000)
    
});
 
 observable.subscribe({
     next: (data)=>console.log(data),
     error:(err)=> console.error(err),
     complete:()=>console.log("completed")
 });

 
