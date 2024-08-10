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