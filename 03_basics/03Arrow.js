const user={
    username:"sarthak",
    price:999,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`); 
        // console.log(this);  

        // //output of this 
        // // {
        // //     username: 'sarthak',
        // //     price: 999,
        // //     welcomeMessage: [Function: welcomeMessage]
        // //   }
         
    }
}
//this-->current context ko refer karta hai
user.welcomeMessage()

user.username="sam"

user.welcomeMessage()


// console.log(this);      // o/p {} -->empty object but in browser we got WINDOW OBJECT


// function chai(){
//     console.log(this);     // function ke andar call karne par bahut values aa jayegi
// }

// chai()


// function chai(){
//     let username="sarthak"
//     console.log(this.username);     //undefined
// }
// chai()

// const chai=function (){
//     let username="sarthak"
//     console.log(this.username);     // undefined
// }

// chai()


//                 ARROW FUNCTION

const chai=()=>{
    let username="sarthak"
    console.log(this);  //{}
    console.log(this.username);     // undefined
}

// chai()

// arrow func ()=>{}
//1.
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

                 //OR
// const addTwo=(num1,num2)=> num1+num2
                 
                 //OR
const addTwo=(num1,num2)=> (num1+num2)   //is tarike se ham object ko defined nahi kar sakte objects ke liye curly braces{} imp. hai


console.log(addTwo(3,4));