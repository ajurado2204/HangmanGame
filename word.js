/**
 * Created by Ale on 1/21/16.
 */
var Letter = require('./letter.js');

function Word(wrd){
  this.word = wrd;
  this.lets = [];
  this.found = false;
  this.getLets = function(){
    for(var i = 0; i < this.word.length; i++){
      this.lets[i] = new Letter(this.word[i]);
      //console.log(this.lets[i]);
    }
  }
  this.checkIfLetterFound = function(guessLetter){
    var whatToReturn = 0;
    for(var i = 0; i < this.lets.length; i++){
      if(guessLetter === this.lets[i].charac){
        this.lets[i].appear = true;
        whatToReturn++;
      }
    }
    return whatToReturn;
  }
  this.didWeFindTheWord = function(){
    var result = this.lets.every(function(curLet){
      if(curLet.appear === true){
        curLet.found = true;
        return curLet.found;
      }
    });

    return result;
  }
  this.wordRender = function(){
    var str = "";
    for(var i = 0; i < this.lets.length; i++){
      str += this.lets[i].letterRender();
    }
    return str;
  }
}

module.exports = Word;