// let myName="sarthak     "

// console.log(myName.trim().length);

// we have to make a method named trueLength for calculating the actual length of the string 
// console.log(myName.trueLength)


let myHeros=['thor','spiderman']

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.sarthak=function(){
    console.log("sarthak is present in all objects");
    
}

Array.prototype.heySarthak=function(){
    console.log("Hello sarthak");
    
}

// heroPower.sarthak()  ////o/p sarthak is present in all objects
// myHeros.sarthak()    ////o/p sarthak is present in all objects

// myHeros.heySarthak()    ////o/p Hello Sarthak
// heroPower.heySarthak()  ////o/p  ERROR


//INHERITANCE

const User={
    name:'chai',
    email:'chai@google.com'
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)




//solution 
let anotherUserName="sarthak        "

String.prototype.trueLength=function(){
    console.log(`${this}`); 
    console.log(`true length is ${this.trim().length}`);
}

anotherUserName.trueLength()

"sarthak".trueLength()
"krishna is love".trueLength()