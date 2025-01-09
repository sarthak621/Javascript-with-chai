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

