// document.getElementById('count-el').innerText = 5;

let count = 0;

console.log(count);

function increment(){
    count += 1;
    document.getElementById('count-el').innerText = count;
}

function save(){
    let entries = count + " - ";
    document.getElementById('save-el').textContent += entries;
    count = 0;
    document.getElementById('count-el').innerText = count;
    console.log(count);
}


let myName = "Uzma";
let greeting = "Hi, ";

function welcomeMesage(){
    document.getElementById('welcome-el').innerText = greeting + " " + myName;
    document.getElementById('welcome-el').innerText += " Welcome to the course";
}

// welcomeMesage()
