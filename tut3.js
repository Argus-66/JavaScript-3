const user = {
    username: 'John Doe',
    loginCount: 100,
    signedIn: true,

    getUserDetails:  function() {
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

console.log(user.username)
console.log(user.getUserDetails())



function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.signedIn = isLoggedIn

    return this
}

const UserOne = User('Jane Doe', 50, false)
const UserTwo = User('Jack Doe', 100, true) //Overwrites the properties of UserOne
console.log(UserOne)