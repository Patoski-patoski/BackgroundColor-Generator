// const prompt = require('prompt-sync')()

let copytBtn = document.querySelector('button'); 



function backgroundColor() {

    let x = Math.floor(Math.random()*255)
    let y = Math.floor(Math.random()*255)
    let z = Math.floor(Math.random()*255)

    document.body.style.backgroundColor = `rgb(${x},${y},${z})`    
    copytBtn.style.backgroundColor = document.body.style.backgroundColor;

    copytBtn.innerHTML = `rgb(${x},${y},${z})`;
}

let display = setInterval(backgroundColor, 2000)   


function myFunc(){
    let copytBtn = document.querySelector('button').innerHTML; 
    document.querySelector('span').innerHTML = `copied succesfully: ${copytBtn}`

}
 
