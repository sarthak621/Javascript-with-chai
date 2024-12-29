//dates

let myDate=new Date()
// console.log(myDate);  //2024-12-29T17:59:46.495Z

// console.log(myDate.toString());  //Sun Dec 29 2024 17:59:46 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Sun Dec 29 2024
// console.log(myDate.toLocaleString()); //12/29/2024, 5:59:46 PM
// console.log(myDate.toLocaleString('en-IN')); //29/12/2024, 6:01:58 pm

// console.log(typeof(myDate)); //object

let myCreatedDate= new Date(2023,0,23)
// console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023

let DateCreation= new Date(2023,0,23,5,3)
// console.log(DateCreation.toLocaleString()); //1/23/2023, 5:03:00 AM

let newDate= new Date("2024-12-29")
// console.log(newDate.toLocaleString()); //12/29/2024, 12:00:00 AM


let myTimeStamp=Date.now()
// console.log(myTimeStamp);  //1735495781527  {into miliseconds}
// console.log(newDate.getTime()); //1735430400000

//into seconds

// console.log(Math.floor(Date.now()/1000)); //1735495904

let newDated= new Date()
console.log(newDated);
console.log(newDated.getMonth()+1);


newDated.toLocaleString('default',{
    weekday:"long"
})











