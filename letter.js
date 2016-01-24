/**
 * Created by Ale on 1/21/16.
 */
function Letter(let){
  this.charac = let;
  this.appear = false;
  this.letterRender = function(){
    if(this.appear === false)
      return "_";
    else
      return this.charac;
  }
}

module.exports = Letter;