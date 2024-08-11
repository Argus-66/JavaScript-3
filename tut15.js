//Lexical Scoping and Closure

// function init(){
//     var name = "Mozilla";
//     function displayName(){
//         console.log(name);
//     }
//     displayName();
// }
// init();

function outer(){
    let username = "argus"
    function inner(){
        console.log("inner: ", username);
    }
    function innerTwo(){
        console.log("innerTwo: ", username);
    }
    inner();
    innerTwo()
}
outer();
console.log("TOO outer", username); // ReferenceError: username is not defined