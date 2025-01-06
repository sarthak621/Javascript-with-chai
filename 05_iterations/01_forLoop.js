// for(let i=1;i<=10;i++){
//     console.log(i);
//}

//nested for loop

// for(let i=1;i<=10;i++){
//     console.log(`table of: ${i}`);
//     for(let j=1;j<=10;j++){
//         // console.log(`inner loop: ${j} and outer loop ${i}`);
//         console.log(`${i} * ${j} = ${i*j}`);
        
//     }
    
// }


// let myArr=["flash","batman","shaktimaan"]
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     // console.log(element);   
// }

// / //       BREAK AND CONTINUE

for (let index =1; index <=20; index++) {
    if(index==5){
        console.log("detected 5");
        // break;
        continue;
    }
    
    console.log(`value of i is ${index}`);
    
    
}