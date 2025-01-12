class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`a new course was addedby ${this.username}`);
        
    }
}

const chai=new Teacher("chai","chai.com","123")

chai.addCourse()

const masalaChai=new User("masalaChai")
masalaChai.logMe()

// console.log(chai===masalaChai);  //false
console.log(chai instanceof User);   //true

