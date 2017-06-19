'use strict';

module.exports = {aNew};

class WordWrap {

  constructor(options) {
    this.options = options;
    this.wrapSize = options.wrapSize||72;
  }

  wrap(input) {

    var wrapped = ''
    var remainingInput = input
    if(remainingInput.length > this.wrapSize){
      wrapped += remainingInput.substring(0,this.wrapSize)+'\n';
      remainingInput = remainingInput.substring(this.wrapSize, input.length);
    }
    if(remainingInput.length > this.wrapSize){
      wrapped += remainingInput.substring(0,this.wrapSize)+'\n';
      remainingInput = remainingInput.substring(this.wrapSize, input.length);
    }
    return wrapped+remainingInput 
  }
}

function aNew(options) {
  return new WordWrap(options);
}

/**
 * Binds the parameter with the correct `this`
 * @param lambda
 * @returns {function(this:funct)}
 */
function funct(lambda) {
  return lambda.bind(this);
}
