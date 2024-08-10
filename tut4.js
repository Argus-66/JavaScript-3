function multiplyBy5(num){
    return num * 5;
}

multiplyBy5.power =2;

console.log(multiplyBy5(3)); // Outputs: 15
console.log(multiplyBy5.power); // Outputs: 2
console.log(multiplyBy5.prototype)


function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}

const user1 = new createUser('John Doe', 100);
const user2 = new createUser('Jane Doe', 50);

user1.printMe();


