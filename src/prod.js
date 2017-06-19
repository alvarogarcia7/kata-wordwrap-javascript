'use strict';

module.exports = {aNew};

class WordWrap {

  constructor(options) {
    this.options = options;
    this.wrapSize = options.wrapSize||72;
  }

  wrap(input) {
    
    if(input.length > this.wrapSize){
    return input.substring(0,this.wrapSize)+'\n'+input.substring(this.wrapSize, input.length);
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
