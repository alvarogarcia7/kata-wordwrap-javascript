'use strict';

module.exports = {aNew};

class WordWrap {

  constructor(options) {
    this.options = options;
  }

  wrap(input) {
    if(input.length > 72){
    return input.substring(0,72)+'\n'+input.substring(72, input.length);
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
