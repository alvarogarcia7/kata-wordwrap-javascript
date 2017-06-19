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
    const lineLength = this.wrapSize-1

    while(remainingInput.length > lineLength){
      wrapped += remainingInput.substring(0,lineLength)+'-\n';
      remainingInput = remainingInput.substring(lineLength, input.length);
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
