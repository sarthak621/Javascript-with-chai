///////////////////////
///////////////////////// REDUCE
//////

// const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`accumulator: ${acc} and currval: ${currval}`);
    
//     return acc+currval
// },0)

// console.log(myTotal);


//writing this by Arrow Function

// const myNums=[1,2,3]
// const totalSum=myNums.reduce((acc,currval)=> acc+currval,0)

// console.log(totalSum);



//example
const ShoppingCart=[
    {
        item:"js",
        price:999
    },
    {
        item:"react",
        price:2000
    },
    {
        item:"DSA",
        price:1500
    },
    {
        item:"Mobile Dev",
        price:5000
    }
]

const priceToPay=ShoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(priceToPay);
