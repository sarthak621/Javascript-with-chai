// const tinderUser=new Object()   //singleton object
const tinderUser={}     //non-singleton object

tinderUser.id="123abc"
tinderUser.name="krishna"
tinderUser.isLoggedIn=true

// console.log(tinderUser);
// { id: '123abc', name: 'krishna', isLoggedIn: true }


const regularUser={
    email:"krishn@gmail.com",
    fullname:{
        fisrtname:"krishna",
        lastname:"yaduvanshi"
    }
}

// console.log(regularUser.fullname);
//{ fisrtname: 'krishna', lastname: 'yaduvanshi' }



const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}


// const obj3={obj1,obj2}
// console.log(obj3);
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3= Object.assign({},obj1,obj2)
// console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



//use spread operator {best}
const obj3={...obj1,...obj2}
console.log(obj3);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



//array of objects

const users=[
    {
        id:1,
        name:"ram"
    },
    {
        id:2,
        name:"krishna"
    },
    {
        id:3,
        name:"kalki"
    },
    {
        id:4,
        name:"vishnu"
    }
]

console.log(users[1].name);

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
