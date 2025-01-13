class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }


    get email(){
        return this._email.toUpperCase()
    }
    set email(mail){
        this._email=mail
    }
    // get karenge to set bhi karenge hi
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}sarthak`
    }

    set password(value){
        this._password=value.toUpperCase()
    }

}

const sarthak=new User("krishna.com","abc")
console.log(sarthak.password);
console.log(sarthak.email);

