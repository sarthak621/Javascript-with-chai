//isii ko react me prop bolte hai

class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username is ${this.username}`);
        
    }

   static createID(){   //is property ko access karne se rokta hai
        return `123`
    }
}

const chai=new User("sarthak")
// console.log(chai.createID());
 

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iPhone=new Teacher("iphone","apple.com")
iPhone.logMe()
console.log(iPhone.createID());

