var randomNumber = Math.floor(Math.random()*100)+1;
var attempts=0;
document.getElementById("guessBtn").addEventListener("click",function(){
var guess = parseInt(document.getElementById("guessInput").value);
attempts++;
if(guess === randomNumber){
    displayMessage("Congratulation!you guessed the number in"+attempts+"attempts.");
    document.getElementById("guessBtn").disabled=true;
}
else if(guess<randomNumber){
    displayMessage("Too low! Try a higher number.");
}
else{
    displayMessage("Too high! Try a lower nummber.");
}

});
function displayMessage(message){
    document.getElementById("message").textContent = message;
}
