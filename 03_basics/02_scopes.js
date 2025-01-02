
// {}   //curly braces is scope

// let a=300   //global scope
// if(true){
//     let a=10
//     const b=20                        //local scope
//     // var c=40
//     console.log("inner",a);
    
// }


// console.log(a);
// // console.log(b);
// // console.log(c);



function one(){
    const username="sarthak"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);

    // two()
    
}

// one()


if(true){
    const username="Sarthak"
    if(username==="Sarthak"){
        const website="youtube"
        // console.log(username+website); //sarthak yt
        
    }
    // console.log(website); //error
    
}
// console.log(username); //error









//+++++++++++++++++++++= INTERSTING +++++++++++

console.log(addone(5));   //6 
function addone(num)
{
    return num+1
}


console.log(addTwo(5));   //error

const addTwo=function(num){
    return num+2
}

// addTwo(10)
