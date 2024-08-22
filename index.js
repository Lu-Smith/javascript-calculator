//This is a calculator comment
let count = 0
const number = document.getElementById("number");

const decreaseBtn = document.getElementById("decreaseBtn").onclick = function(){
    count--;
    number.textContent = count;
}

const increaseBtn = document.getElementById("increaseBtn").onclick = function(){
    count++;
    number.textContent = count;
}

const resetBtn = document.getElementById("resetBtn").onclick = function(){
    count = 0;
    number.textContent = count;
}

let max = 100;
let min = 98;

let roundNumber = Math.round((Math.random() * (max - min)) + min);

console.log(roundNumber);



