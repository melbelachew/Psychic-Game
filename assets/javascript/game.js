var name = promt("What is your name?"); 
            alert("Hello"+" "+"name");
var wannaplay= confirm("Do you want to play a guessing game?") 
                if (wannaplay=true){alert("guess what letter I am thinking?")}
                else {alert("goodbye" + " " + "name")}

            



// You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:
// Guess what letter I'm thinking of
// Wins: (# of times the user has guessed the letter correctly)
// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
// Guesses Left: (# of guesses left. This will update)
// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
// //declair variables for logging wins, losses, users guesses & guess left

// var wins = 0;
// var losses = 0;
// var numberOfGuesses = 9;
// var yourGuessLeft = [];

// //declare a function to listen to events on releas of any key 
// document.onkeyup = function(e) {
//     var userGuess = event.key;

//     var computerGues = 




// //create secretNumber
// var secretNumber = 4;

// //ask user for guess
// var stringGuess = prompt("Guess a number");
// var guess = Number(stringGuess);

// //check if guess is right
// if(guess === secretNumber) {
// 	alert("YOU GOT IT RIGHT!");
// }
// //check if guess is higher
// else if(guess > secretNumber){
// 	alert("Too high.  Guess again!");
// }

// else {
// 	alert("Too low.  Guess again!");
// }
// //otherwise, check if lower