

function god(){
    console.log("g");
    console.log("o");
    console.log("d");
}
// god();

//to add two no.s

// function addTwoNo(a,b){
//     console.log(a+b);
    
// }

function addTwoNo(a,b){
    let sum=a+b;
    return sum;
}

const result=addTwoNo(3,4)

// console.log("result:",result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("please enter username");
        return;
    }
    else{
    return  `${username} just logged in`
    }
}

// console.log(loginUserMessage("sarthak"))

// console.log(loginUserMessage()) //undefined just logged in


//TO CALCULATE TEH OVERALL CART VALUES

    //{USE REST OPERATOR ...}
// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,400,600));  //[ 200, 400, 600 ]



function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,600,2000));  //[ 600, 2000 ]
const user={
    username:"sarthak",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
        // OR
handleObject({
    username:"sam",
    price:20000
})

const mynewArray=[200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(mynewArray));
   // OR
console.log(returnSecondValue([200,300,400,500]));

