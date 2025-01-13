//why the value of pi dont change

const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);

// solution 
//{
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

//from this we see the value of pi is neither writeable nor enumerable 


// console.log(Math.PI); //3.141592653589793
// Math.PI=5
// console.log(Math.PI); //3.141592653589793

const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true,

    orderChai:function(){
        console.log("chai nahi bani");
        
    }
}

// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

//solution
//{
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }

// Object.defineProperty(chai,'name',{
//     writable:false,
//     enumerable:false,
//     configurable:false
// })

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
//solution
//{
//     value: 'ginger chai',
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

for (let [key,value] of Object.entries(chai)) {
    if(typeof value!=='function'){
        console.log(`${key} : ${value}`);
    
    }
}