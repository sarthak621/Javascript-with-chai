// Most of the time we use for each loop

// array.forEach(element => {
    
// });

const coding=["js","ruby","java","cpp"]

// // 1st way
// coding.forEach(function(item) {
//     console.log(item);   
// })

// // 2nd way
//we can also use arrow func.

// coding.forEach((item)=>{
//     console.log(item);   
// })

// // 3rd way
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// // 4th way
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})
// // js 0 [ 'js', 'ruby', 'java', 'cpp' ]
// // ruby 1 [ 'js', 'ruby', 'java', 'cpp' ]
// // java 2 [ 'js', 'ruby', 'java', 'cpp' ]
// // cpp 3 [ 'js', 'ruby', 'java', 'cpp' ]


const mycoding=[
    {
        language:"javascript",
        languageFileName:"js"
    },
    {
        language:"c++",
        languageFileName:"cpp"
    },
    {
        language:"java",
        languageFileName:"Java"
    },
    {
        language:"python",
        languageFileName:"py"
    },
]

mycoding.forEach((item)=>{
        console.log(item.languageFileName);   
})
