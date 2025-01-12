// fetch(`https://something.com`).then().catch().finally()

//promise creation
const promiseOne=new Promise(function(resolve,reject){
    //do an async task
    //DB calls, cryptography,task
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

//resolve ka connnection hai .then ke sath
promiseOne.then(function(){
    console.log("promise consumed");
    
})  


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },2000)
}).then(function(){
    console.log("async 2 is resolved ");
    
})

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
         resolve({username:"Chai", email:"god@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
   console.log(user);
})

const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
         resolve({username:"Chai", email:"god@gmail.com"})
        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})

//chaining
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
})
.finally(()=>{
    console.log("the promise is either resolved or rejected");
    
})


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
         resolve({username:"javascript", password:"!23"})
        }else{
            reject('ERROR:JS went wrong')
        }
    },1000)
});

//we can also use aysnc await in replace of then 

// async function consumePromiseFive({
//     const response=await promiseFive
//     console.log(response);
    
// })

async function consumePromiseFive(){
    try {
        const response=await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromiseFive()