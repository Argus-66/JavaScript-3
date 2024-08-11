//Lexical Scoping and Closure

function init(){
    var name = "Mozilla";
    function displayName(){
        console.log(name);
    }
    displayName();
}
init();