
const promiseOne = new Promise(function(res,reject) {
    //Do an async task
    setTimeout(function() {
        console.log('Async task completed');
        res()
    }, 1000);
})

promiseOne.then(function() {
    console.log("Promise 1 resolved");
})

new Promise(function(res,reject) {
    setTimeout(function(){
        console.log("Async task 2 completed");
        res();
        
    }, 1000);
}).then(function() {
    console.log("Promise 2 resolved");
})

const promiseThree = new Promise(function(res,reject) {
    setTimeout(function() {
        res({username: "John Doe", email: "johndoe@example.com"});
    }, 1000)
})

promiseThree.then(function(data) {
    console.log(data);
})

const promiseFour = new Promise(function(res,reject) {
    setTimeout(function(){

        let error = false;
        if(!error){
            res({username: "Jane Doe", password: "password123"});
        } else{
            reject('Error: Invalid credentials')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);

    return user.username;
})
.then((username) => {
    console.log(username);
    
})
.catch(function(error) {
    console.error(error);
})
.finally(function() {
    console.log('Promise completed');
})



