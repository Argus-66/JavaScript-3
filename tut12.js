

class User {
    constructor(email, password){
        this.email = email;
        this.password = password;

    }
}

const argus = new User('argus@example.com', 'password123');
console.log(argus.password);