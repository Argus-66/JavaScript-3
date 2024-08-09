
const PormiseOne = new Promise(function(res,req) {
    //Do an async task
    setTimeout(function() {
        console.log('Async task completed');
        res()
    }, 1000);
})

PormiseOne.then(function() {
    console.log("Promise 1 resolved");
})

new Promise(function(res,req) {
    setTimeout(function(){
        console.log("Async task 2 completed");
        res();
        
    }, 1000);
}).then(function() {
    console.log("Promise 2 resolved");
})

const PromiseThree = new Promise(function(res,req) {
    setTimeout(function() {
        res({username: "John Doe", email: "johndoe@example.com"});
    }, 1000)
})

PromiseThree.then(function(data) {
    console.log(data);
})