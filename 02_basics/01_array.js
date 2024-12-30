//array

const myArr=[0,1,2,3,4,5,6,7]
// const myArr=[0,1,2,3,4,5,6,7,true,"hitesh"]  
//array is collection of multiple types in single variables

//accesing
// console.log(myArr[3]);

//array made shallow copies

const myArr2=new Array(2,4,5,6,7)
// console.log(myArr2[1]);

//Array Methods

//1.push
myArr.push(8)
myArr.push(9)
// console.log(myArr);

// 2.pop 
myArr.pop()
// console.log(myArr);

//3. unshift-->>> start me add kar deta hai

myArr.unshift(9)
// console.log(myArr);

//4. shift --->>> start ko remove kar deta hai

myArr.shift()
// console.log(myArr);

//5.includes
//6.indexOf

//7.join
const newArr= myArr.join()   //convert the array into String
// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));


//8. slice,splice

console.log("A ",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);


const myn2=myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);
