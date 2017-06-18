
var psychicWins = 0;
var psychicLoss = 0;
var guessesLeft = 10;
var yourGuesses = "";

var alphabet = ["a", 
				"b", 
				"c", 
				"d", 
				"e", 
				"f", 
				"g", 
				"h", 
				"i", 
				"j", 
				"k",
				"l",
				"m",
				"n",
				"o",
				"p",
				"q",
				"r",
				"s",
				"t",
				"u",
				"v",
				"w",
				"x",
				"y",
				"z"];


document.onkeyup = function(event) {

	var userGuess = event.key;
	var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

	if (userGuess === computerGuess > 0) {
          psychicWins++;
          guessesLeft--;
        }

      else if (guessesLeft > 0) {
        psychicLoss++;
        guessesLeft--;
      }

  


       var html = "<h3>Can You Guess What Letter I'm Thinking Of?</h3>" +
          "<p>Correct Guesses: " + psychicWins + "</p>" +
          "<p>Losses: " + psychicLoss + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>" +
          "<p>Your Last Guess: " + userGuess + "</p>";

          document.querySelector("#psychicGame").innerHTML = html;

      if (guessesLeft === 0) {
        document.querySelector("#psychicGame").innerHTML = "Game Over!";
        document.querySelector("#psychicGame").innerHTML = "You Guessed " + psychicWins + " Out of 10 Letters" ;
        return

        }
}


      