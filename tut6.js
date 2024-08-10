function SetUsername(username){

    this.username = username
    console.log("called");
}

function createUser(username,email,password){
    SetUsername.call(this, username);

    this.email = email;
    this.password = password;
}

const argus = new createUser('Argus', 'argus@example.com', 'password123');
console.log(argus)