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