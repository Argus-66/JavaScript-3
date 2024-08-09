
const requestURL = 'https://api.github.com/users/argus-66';

const xhr = new XMLHttpRequest();


xhr.open('GET', requestURL)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState)
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)
        console.log(data)
        console.log(data.login)
    }
}
xhr.send();
