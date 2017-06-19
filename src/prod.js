'use strict';

module.exports = {aNew};

class WordWrap {

  constructor(options) {
    this.options = options;
    this.wrapSize = options.wrapSize||72;
    if(options.wordSplitter === undefined) {
      this.wordSplitter = '-'
    } else {
      this.wordSplitter = options.wordSplitter
    }
  }

  wrap(input) {

    var wrapped = ''
    var remainingInput = input
    const lineLength = this.wrapSize - this.wordSplitter.length

    while(remainingInput.length > lineLength){
      wrapped += remainingInput.substring(0,lineLength) + this.wordSplitter + '\n';
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
