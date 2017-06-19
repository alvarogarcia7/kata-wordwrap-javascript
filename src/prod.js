'use strict';

module.exports = {aNew};

class WordWrap {

  constructor(options) {
    this.options = options;
  }

  wrap(input) {
    let wrapSize = 72;
    if(input.length > wrapSize){
    return input.substring(0,wrapSize)+'\n'+input.substring(wrapSize, input.length);
  } else {
    return input
  }
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
