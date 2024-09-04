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


//This is a guessing game logic

const minNum = 1;
const maxNum = 100;
const guessedRandomNumber = Math.floor(Math.random() * maxNum + minNum);
const answer = document.getElementById("answer");
const playerNumber = document.getElementById("playerNumber");
const tryAgain = document.getElementById("tryAgainBtn");
const enter = document.getElementById("enterBtn");

enter.onclick = function() {
    if(Number(playerNumber.value) < 0 || Number(playerNumber.value) > 100) {
        answer.textContent = "Guess a number between 0 and 100.";
    } else if(Number(playerNumber.value) !== guessedRandomNumber) {
        if(Number(playerNumber.value) < guessedRandomNumber ) {
            answer.textContent = "You are wrong, try a higher number";
        } else {
            answer.textContent = "You are wrong, try a smaller number";
        }
    } else if (Number(playerNumber.value) == guessedRandomNumber) {
        answer.style.fontSize = "30px";
        answer.style.color = "green";
        answer.textContent = `You are correct, the number is ${guessedRandomNumber}.`;
        playerNumber.style.display = "none";
        tryAgain.style.display = "block";
        enter.style.display = "none";
    }

    playerNumber.value = "";
    
}

tryAgain.onclick = function() {
    playerNumber.style.display = "block";
    enter.style.display = "block";
    answer.textContent = "Guess a number between 0 and 100.";
    tryAgain.style.display = "none";
    answer.style.fontSize = "16px";
    answer.style.color = "#596e79";
}


//This is a rolling dice logic

function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="./dice_images/Dice${value}.png" alt="Dice${value}" />`)
    }

    diceResult.textContent = `${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}





