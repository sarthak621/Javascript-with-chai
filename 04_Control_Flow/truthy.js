const userEmail="krishn@mail.com"

// if(userEmail){
//     console.log("Got your Id");
// }

// else{
//     console.log("please enter the correct id");
// }


//falsy values
// ->> false, 0, -0, BigInt 0n, null , "", undefined , NaN

//truthy values  
// -->> apart from the falsy all are the truthy values
// e.g. "0", "false" , " ", [], {} ,function(){}



// // EMPTY OBJECT

// const emptyObj={}
// if(Object.keys(emptyObj).length===0){
//     console.log("object is empty");   
// }


// false==0 {->true}
// false=='' {->true}
// 0=='' {->true}



// Nullish Coalescing Operator (??): null undefined

// let val1
// // val1=5??10    //ans. 5
// // val1=null??9     //ans. 9
// val1=undefined??10??20  //ans. 10
// console.log(val1); 


//ternary operator

//syntax  --->>>>   condition ? true : false

const price=100
price>80 ? console.log("price greater than 80") : console.log("price less than 80")
