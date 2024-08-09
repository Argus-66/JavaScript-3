
const PormiseOne = new Promise(function(res,req) {
    //Do an async task
    setTimeout(function() {
        console.log('Async task completed');
    }, 1000);
});

PormiseOne.then(function() {
    console.log('Promise One resolved');
})