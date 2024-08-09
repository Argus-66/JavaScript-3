
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