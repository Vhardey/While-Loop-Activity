// Macabenta, Vhardey John F
let userGuess = ""; // variable for our user guess
let hiddenNumber = 7; // our nummber to be guessed

while (userGuess != hiddenNumber){ // while loop while userGuess is not equal to hiddenNumber
  userGuess = prompt("Guess a number from 1 to 10:"); // asks user to enter their guess 
  if (userGuess > hiddenNumber){ // if statement to test if the guess is too low or too high
    console.log("guess is too high."); // prints if the condition  above returns true
  }else if (userGuess < hiddenNumber){ // if condition above is false, it will then test here 
    console.log("guess is too low."); //  them execute this code
  }else{ // if none of the is true then this will get executed.
    console.log("your guess is correct") // prints the following
  } // exits if statement
  
} // exits while loop.