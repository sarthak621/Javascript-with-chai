<!-- md is mark down file -->

#project related to DOM

##project link
[Click here] (https://stackblitzstartersxvv3jcrg-fixz--8080--a792378e.local-corp.webcontainer.io)

#solution code

##project 1

```javascript
console.log("Sarthak")
const buttons=document.querySelectorAll('.button')

const body=document.querySelector("body")

buttons.forEach((button)=>{
     button.addEventListener('click',function(e){
       console.log(e.target)
       if(e.target.id==='grey'){
         body.style.backgroundColor=e.target.id
       }
       if(e.target.id==='white'){
        body.style.backgroundColor=e.target.id
      }
      if(e.target.id==='blue'){
        body.style.backgroundColor=e.target.id
      }
      if(e.target.id==='yellow'){
        body.style.backgroundColor=e.target.id
      }
      
      if(e.target.id==='purple'){
        body.style.backgroundColor=e.target.id
      }

     })
});

```

##project 2

```javascript

const form= document.querySelector('form')

//this use case will give us the empty value
// const height=parseInt(document.querySelector('#height').value)


form.addEventListener('submit',function(e){
  e.preventDefault() //stops the default action

  const height=parseInt(document.querySelector('#height').value)

  const weight=parseInt(document.querySelector('#weight').value)

  const results=document.querySelector('#results')
  
  
  if(height===' '||height<0 || isNaN(height)){
        results.innerHTML= "please give us a valid height";
  }
  else if(weight===' '||weight<0 || isNaN(weight)){
    results.innerHTML= "please give us a valid weight";
  }
  else{
    const ans= (weight/((height*height)/10000)).toFixed(2)
    results.innerHTML=`BMI is ${ans} `.trim();  // Add a space after BMI and trim any leading/trailing spaces
    if(ans<18.6) results.innerHTML+=" And You are Under Weight"
    else if(ans>=18.6 && ans<=24.9){ results.innerHTML+=" And Your BMI is in Normal Range"}
    else {results.innerHTML+= "And You are Over Weight"}
      
  }
})

```

##project 3

```javascript

const clock=document.getElementById('clock')


setInterval(function(){
  let date=new Date();
  // console.log(date.toLocaleTimeString)
  clock.innerHTML=date.toLocaleTimeString()
},1000);    

//syntax is important {interview}
//set inetrval has two parameters



