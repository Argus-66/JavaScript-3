//Inheritance

class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new couser was added by ${this.username}`);
    }
}

const chai = new Teacher('Chai', 'chai@example.com', 'password123');

chai.addCourse();

const masalaChai = new User('Masala Chai');
masalaChai.logMe();

console.log(chai === masalaChai) //false
console.log(chai instanceof Teacher) //true
console.log(chai instanceof User) //true
console.log(masalaChai instanceof User) //true
console.log(masalaChai instanceof Teacher) //false