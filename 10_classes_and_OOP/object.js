function multiplyBy5(num){
    return num*5
}

multiplyBy5.power=2

console.log(multiplyBy5(5));     //25
console.log(multiplyBy5.power);  //2
console.log(multiplyBy5.prototype); //{}


function createUSer(username,score){
   this.username=username
   this.score=score
}

createUSer.prototype.increment=function(){
    const ans=this.score++
    console.log(ans)
    
    
}

createUSer.prototype.printMe=function(){
    console.log(`score is ${this.score}`)
    
}

const chai=new createUSer("chai",25)
const tea=createUSer("tea",250)

chai.printMe()

chai.increment()