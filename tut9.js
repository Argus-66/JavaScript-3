//Properties 

class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Logged in as ${this.username}`);
    }

    static createID(){
        return `123`
    }
}

const argus = new User('Argus');
//console.log(argus.createID());

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;

    }
}


const iphone = new Teacher("Iphone", "iphone@example.com");
iphone.logMe();
console.log(iphone.createID()); //Error: static method 'createID' cannot be called on an instance of class 'Teacher'

