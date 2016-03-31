/**
 * Created by Ale on 1/21/16.
 */
function Letter(let){
  this.charac = let;
  this.appear = false;
  this.letterRender = function(){
    return (this.appear === false) ? "_" : this.charac;
  }
}

module.exports = Letter;