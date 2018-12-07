//the user has to guess which letter the app chose. 

var userName = prompt("What is your name?")

alert("Hello" +" "+ userName);

var wannaplay= confirm("Do you want to play a guessing game?") 

if (wannaplay=true){

alert("Guess any letter from A through L?")}

else {alert("Goodbye" + " " + userName)}

            



// randomly picks a letter
// Wins: (# of times the user has guessed the letter correctly)
// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
// Guesses Left: (# of guesses left. This will update)
// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
// //declair variables for logging wins, losses, users guesses & guess left

var wins = 0;
var losses = 0;
var gussesLeft =9;
var yourGuesses=[];

var randSelection = ["a","b","c","d","e","f","g","h","i","k","l"]

var computerGuess = randSelection[Math.floor(Math.random()*randSelection.length)];

document.onkeyup=function(event){
var userGuess = event.key;
if (userGuess==computerGuess) {
    wins++; yourGuesses.push(userGuess)
}
else if(userGuess!=computerGuess) {
    gussesLeft--; losses++; yourGuesses.push(userGuess)
}}

document.querySelector("#Guess").html = 
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Guesses Left: " + gussesLeft + "</p>" +
"<p>Your Guesses so far: " + yourGuesses.join + "</p>"





