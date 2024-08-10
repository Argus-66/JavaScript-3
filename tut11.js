//Math PI 

const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(descripter);

const chai = {
    name: "Ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Code fat gya")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, "name", {
    //writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));


for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== "function"){
        console.log(`${key}: ${value}`);
    }
    
}