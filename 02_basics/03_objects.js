//singleton
// Object.create //by ctor method


//objects declared using two ways by literals and ctors

//object literals   
        //object ke andar keys and values hota hai

    const mySym=Symbol("key1")
    const mySym1=Symbol("key1")


 const JsUser={
    name:"Sarthak",            //by default system process name as "name" string
    age:18,

    mySym:"myKey1",
    [mySym1]:"myKey1",    //to use my sym as a symbol
    
    location:"delhi",
    email:"krishnadevotee@gmail.com",
    isLoggedIn:false,
    lastLoginDetails:["monday","saturday"],
    place:"patna","state place":"bihar"
}

//to access objects
console.log(JsUser.email);     //object_name.key
//krishnadevotee@gmail.com

console.log(JsUser["email"]);   //{square notation}
// krishnadevotee@gmail.com

// console.log(JsUser.state place); //not work
console.log(JsUser["state place"]);

console.log(JsUser.mySym);  //myKey1  {but it didnt used as a symbol}
console.log(typeof JsUser.mySym); //string

console.log(JsUser[mySym1]); // //myKey1
console.log(typeof JsUser[mySym1]); //string

JsUser.email="sarthak@hotmail.com"   //by equal we can overwite the value
// Object.freeze(JsUser);  // now we cant change the value of object
console.log(JsUser);



JsUser.greeting=function(){
    console.log("hello js user");
    
}

JsUser.greeting2=function(){
    console.log(`hello js user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());








