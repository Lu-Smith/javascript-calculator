//This is a counter logic
let count = 0;
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

//This is a random number logic 

let newRandomNumber;
const randomNumber = document.getElementById("randomNumber");
const inputContainer = document.getElementById("inputContainer");
const resetRanNumBtn = document.getElementById("resetRanNumBtn");
const titleRandomNumber = document.getElementById('titleRandomNumber');

function toggleInputVisibility(show) {
    if (show) {
        inputContainer.style.display = "flex";
        resetRanNumBtn.style.display = "none";
        titleRandomNumber.style.display = "flex";
    } else {
        inputContainer.style.display = "none";
        resetRanNumBtn.style.display = "flex"; 
        titleRandomNumber.style.display = "none";  
    }
}

const createBtn = document.getElementById("createBtn").onclick = function(){
    const minNumber = parseInt(document.getElementById("minNumber").value); 
    const maxNumber = parseInt(document.getElementById("maxNumber").value);

    if (!isNaN(minNumber) && !isNaN(maxNumber) && maxNumber > minNumber) {
        newRandomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        randomNumber.style.fontSize = "80px";
        randomNumber.style.color = "#596e79";
        randomNumber.textContent = newRandomNumber;
        minNumber.textContent = "";
        maxNumber.textContent = "";
    } else {
        randomNumber.style.fontSize = "16px";
        randomNumber.style.color = "red";
        randomNumber.textContent = "Invalid input!";
        minNumber.textContent = "";
        maxNumber.textContent = "";
    }
    toggleInputVisibility(false);
}

resetRanNumBtn.onclick = function(){
    newRandomNumber = null;
    randomNumber.textContent = "";
    minNumber.textContent = "";
    maxNumber.textContent = "";
    toggleInputVisibility(true);
}



