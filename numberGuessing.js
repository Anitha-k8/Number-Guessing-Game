const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");
input.focus();
let randomNum = Math.floor(Math.random() * 100);
chance = 7;
checkButton.addEventListener("click", () => {  
  chance--;
  let inputValue = input.value;  
  if (inputValue == randomNum) {
    [guess.textContent, input.disabled] = ["Congratulations", true];
    [checkButton.textContent, guess.style.color] = ["Replay", "white"];
  } else if (inputValue > randomNum && inputValue < 100) {    
    [guess.textContent, remainChances.textContent] = ["Your guess is high", chance];
    guess.style.color = "white";
  } else if (inputValue < randomNum && inputValue > 0) {    
    [guess.textContent, remainChances.textContent] = ["Your guess is low", chance];
    guess.style.color = "white";    
  } else {    
    [guess.textContent, remainChances.textContent] = ["Your number is invalid", chance];
    guess.style.color = "white";
  }
  if (chance == 0) {
    [checkButton.textContent, input.disabled, inputValue] = ["Replay", true, ""];
    [guess.textContent, guess.style.color] = ["You lost the game", "white"];
  }
  if (chance < 0) {
    window.location.reload();
  }
});