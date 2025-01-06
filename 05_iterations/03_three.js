// // for of  {{loop}}   -->>> for array specific

// for (const element of object) {     --> yahan joo object hai woh JS wala object nahi hai
                    //  --> is object ka ye matlab hota hia ki kis chiz par loop lagana hai                              
// }

// const arr=[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);    
// }

// const greetings='hello world'
// for(const greet of greetings){
//     console.log(`each char is ${greet}`);
// }




 ///////////                   MAPS

 const map= new Map()
 map.set('IN', "india")
 map.set("usa", "united states of america")
 map.set('Fr',"france")
 map.set('IN', "india")

//  console.log(map);
//  //output
// //  Map(3) {
// //     'IN' => 'india',
// //     'usa' => 'united states of america',
// //  'Fr' => 'france'
// //   }
 
// for(const key of map){
//     console.log(key);
//     // // OUTPUT
//     // [ 'IN', 'india' ]
//     // // [ 'usa', 'united states of america' ] 
//     // // [ 'Fr', 'france' ]
// }

// for(const [key,value] of map){
//     console.log(key, ":" , value);
// }
// // output
// // IN : india
// // usa : united states of america
// //Fr : france


// for of loop on Object
            //    {XX OBJECT IS NOT ITERABLE BY FOR OF THERE IS ANOTHER WAY  XX}
// const myObj={
//     game1:'NFS',
//     game2:'SpiderMan'
// }

// for(const [key,value] of myObj ){
//     console.log(key, ":" , value);
// }