//Lexical Scoping and Closure

// function init(){
//     var name = "Mozilla";
//     function displayName(){
//         console.log(name);
//     }
//     displayName();
// }
// init();

// function outer(){
//     let username = "argus"
//     function inner(){
//         let secret = "my123"
//         console.log("inner: ", username);
//     }
//     function innerTwo(){
//         console.log("innerTwo: ", username);
//         console.log("innerTwo: ", secret); 
//     }
//     inner();
//     innerTwo()
// }
// outer();
// console.log("TOO outer", username); // ReferenceError: username is not defined



//Closure 

function makeFunc(){
    const name = "Mozilla";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();


//Changing color of button using closure

// document.getElementById("orange").onclick =function(){
//     document.body.style.backgroundColor = `orange`;
// }


function clickHandler(color){
    //document.body.style.backgroundColor = `${color}}`

    return function (){
        document.body.style.backgroundColor = `${color}`;
    }
}

document.getElementById("orange").onclick = clickHandler("orange")
document.getElementById("green").onclick = clickHandler("green")