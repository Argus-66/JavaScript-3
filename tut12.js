

class User {
    constructor(email, password){
        this.email = email;
        this.password = password;

    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(newEmail){
        this._email = newEmail.toLowerCase();
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
console.log(argus.email);
console.log(argus);
