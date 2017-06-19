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

    while(remainingInput.length > this.wrapSize-1){
      wrapped += remainingInput.substring(0,this.wrapSize-1)+'-\n';
      remainingInput = remainingInput.substring(this.wrapSize-1, input.length);
    }
    wrapped = wrapped + remainingInput;
    return {text: wrapped}
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
