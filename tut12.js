

class User {
    constructor(email, password){
        this.email = email;
        this.password = password;

    }

    get password(){
        return this._password.toUpperCase();
    }

    set password(newPassword){
        this._password = newPassword.toLowerCase();
    }
}

const argus = new User('argus@example.com', 'password123');
console.log(argus.password);