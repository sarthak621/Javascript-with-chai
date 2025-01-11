<!-- md is mark down file -->

#project related to DOM

##project link
[Click here] (https://stackblitz.com/edit/stackblitz-starters-uxewbvcn?file=index.html)

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

```

##project 4

```javascript

let randomNumber=Math.floor(parseInt(Math.random()*100+1)) //no. from 1 to 100

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')

const guessSlot=document.querySelector('.guesses')

const remaining=document.querySelector('.lastResult')

const lowOrHi=document.querySelector('.lowOrHi')

const startOver=document.querySelector('.resultParas')



const p=document.createElement('p')


let prevGuess=[]
let numGuess=1

let playGame=true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess=parseInt(userInput.value)
    validateGuess(guess)
  })
}

//check no. given by user is valid or not
function validateGuess(guess){
  // value is even from 1 to 100
  if(isNaN(guess)){
    alert('please enter a valid number')
  }
  else if(guess<1){
    alert('please enter a valid number more than 1')
  }
  else if(guess>100){
    alert('please enter a number less than 100')
  }
  else{
    prevGuess.push(guess)
    if(numGuess===11){
      displayGuess(guess)
      displayMessage(`Game Over...Random Number Was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }

}

function checkGuess(guess){
  //check whether your guess is correct or not 
  //if value is less tell user that value is low or vice versa value is high
  if(guess===randomNumber){
    displayMessage(`You Guessed it right`)
    endGame()
  }
  else if(guess<randomNumber){
    displayMessage(`Number is too Low`)
  }
  else if(guess>randomNumber){
    displayMessage(`Number is too High`)

  }

}

function displayGuess(guess){
  // clean the values and update the previous guesses or remaining guesses
  userInput.value=''  //clean up the guess
  guessSlot.innerHTML+=`${guess} `
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`

}


function displayMessage(message)
{
  //low or high ke andar message print kar denge
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}


function endGame(){
  //
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame=false
  newGame()
}

function newGame(){
  //
  const newGameBtn=document.querySelector('#newGame')
  newGameBtn.addEventListener('click',function(e){
    randomNumber=Math.floor(parseInt(Math.random()*100+1))
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true
  })

}








