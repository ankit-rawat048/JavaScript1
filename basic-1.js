let randomNumber = Math.floor(Math.random()
* 100) + 1 ;

const guesses =
document.querySelector(".guesses");
const lastReselt =
document.querySelector(".lastResult");
const lowOrHi = 
document.querySelector(".lowOrHi");

const guessSubmit =
document.querySelector(".guessSubmit");
const guessField =
document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
    alert("i am a placeholder");
}
checkGuess();

let number1 =1 ;
number1 += 2 ;

let number2 = 1;
number2 = number2 + 2 ;


function checkGuess() {
    alert("I am a placeholder");
}

 const name = "Mahalia";
  const greeting =`hello ${name}`;
   function checkGuess() {
    const userGuess =
    Number (guessField.value);
    if(guessCount === 1) {
        guesses.textContent = "Privious guesses:";
    }
    guesses.textContent =
    `${guesses.textContent} ${userGuess}`;

    if (userGuess === randomNumber) {
        lastReselt.textContent =
        "congratulation! you got it right!";
        lastReselt.computedStyleMap.backgroundColor ="green";
        lowOrHi.textContent = "";
        setGameOver();

    }
    else if(guessCount ===10) {
        lastReselt.textContent = "!!!GAME OVER!!!";
        lowOrHi.textContent ="";
        setGameOver();
    }
    else {
        lastReselt.textContent = "Wrong!" ;
        lastReselt.computedStyleMap.backgroundColor = "red";
        if (userGuess < randomNumber) {
            lowOrHi.textContent ="Last guess was too low!";
        }        
        else if (userGuess > randomNumber) {
            lowOrHi.textContent ="Last guess was too high!";
        }
    }


    guessCount++;
    guessField.value = "";
    guessField.focus();
   }


   guessCount ===1;

   guessSubmit.addEventListener("click",checkGuess);

   function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
  }
  

  function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
      resetPara.textContent = "";
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
  
    lastResult.style.backgroundColor = "white";
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
  

  const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);
}


const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";
}


guessField.focus();





guessField.focus();

guessField.value = 2;


guesses.value;

guesses.textContent = "Where is my paragraph?";

guesses.style.backgroundColor = "yellow";
guesses.style.fontSize = "200%";
guesses.style.padding = "10px";
guesses.style.boxShadow = "3px 3px 6px black";
