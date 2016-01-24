/**
 * Created by Ale on 1/23/16.
 */
var prompt = require('prompt');
var Word = require('./word.js');
var theCurrentWrd;

prompt.start();

function Game(){
  this.wordBank = ['hello','what','alejandra'];
  this.guessesRemaining = 10;
  this.currentWrd = null;
  this.startGame = function(wrd){

    theCurrentWrd = this.currentWrd;
    var wordChosen = Math.floor((Math.random() * 3) + 1);
    theCurrentWrd = new Word(this.wordBank[wordChosen-1]);
    console.log(theCurrentWrd);
    theCurrentWrd.getLets();
    this.keepPromptingUser();
  }
  this.keepPromptingUser = function(){
    var self = this;

    prompt.get(['guessLetter'], function (err, result) {

      console.log("The Letter or space you guessed is " + result.guessLetter);
      var findHowManyOfUserGuess = theCurrentWrd.checkIfLetterFound(result.guessLetter);

      if(findHowManyOfUserGuess === 0){
        console.log("You guessed wrong~!");
        self.guessesRemaining--;
      }else{
        console.log("You guessed right!");
        if(theCurrentWrd.didWeFindTheWord() === true){
          console.log("You Won!!!");
          return 1;
        }
      }
      console.log("Guesses remaining: " + self.guessesRemaining);
      console.log(theCurrentWrd.wordRender());

      if(self.guessesRemaining > 0 && theCurrentWrd.found === false){
        self.keepPromptingUser();
      }else if(self.guessesRemaining === 0){
        console.log("Game over bro");
      }else{
        console.log(theCurrentWrd.wordRender());
      }
    });
  }
}

var game = new Game();
game.startGame("What");