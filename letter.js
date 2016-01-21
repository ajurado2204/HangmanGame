/**
 * Created by Ale on 1/21/16.
 */
function Letter(let){
  this.charac = let;
  this.appear = false;
  this.letterRender = function(){
    if(charac === false)
      console.log("_");
    else
      console.log(charac);
  }
}

module.exports = Letter;