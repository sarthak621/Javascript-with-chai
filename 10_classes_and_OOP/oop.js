//object literal

const user={
    username:"sarthak",
    loginCount:8,
    signedIn: true,

    getUserDetails:function(){
        // console.log("got user dertails from DB");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails())
// console.log(this); //{}




//constructor function

// const promiseOne=new Promise()
// const date=new Date()


function User(username,loginCount,signedIn){
    this.username=username    // this.username is variable
    this.loginCount=loginCount
    this.signedIn=signedIn

    this.greeting=function(){
        console.log(`welcome ${this.username}`);
        
    }

    return this
}

const userOne=  new User("sarthak",12,true)
const userTwo= new User("chai aur code",13,true)
console.log(userOne);
// console.log(userTwo.constructor); //[Function: User]



//new keyword
//    1. new object is created
//    2.ctor func is called
//    3.this keyword objects injected
//    