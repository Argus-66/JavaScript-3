// //Prototype

// let myName = "Argus     "

// console.log(myName.trueLength)


let myHeroes = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "web",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.argus = function() {
    console.log(`Argus is present in all objects`);
}


Array.prototype.heyArgus = function(){
    console.log(`Hey Argus!`);
}

heroPower.argus()
myHeroes.argus()
myHeroes.heyArgus()
//heroPower.heyArgus()


//Inheritance

const User = {
    name: "John Doe",
    email: "john.doe@example.com",
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = User;

console.log(Teacher.name); // John Doe



//Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "Jane Doe           "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()

"Argus".trueLength();
"Coffee".trueLength();

