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
    this.lineLength = this.wrapSize - this.wordSplitter.length
  }

  wrap(input) {
    const lineLength = this.lineLength
    var wrapped = ''
    var remainingInput = input

    while(remainingInput.length > lineLength){
      if(lineHasSpaceAfterCompletingTheLinePastTheMinimumAndNormalSplittingWouldSplitAWord(remainingInput)) {
          const [line, rest] = extractLineWithAMinimumUpToSpace(remainingInput)
          wrapped+=line+'\n'
          remainingInput = rest
          continue
      }
      if(true){
        const line = remainingInput.substring(0,lineLength);
        wrapped += line
        if(lineWouldEndInSpace(remainingInput)){
          wrapped += this.wordSplitter
        }
        wrapped +=  '\n'; 
        remainingInput = remainingInput.substring(lineLength, input.length);
      }
    }
    wrapped = wrapped + remainingInput;
    return {text: wrapped}

    function extractLineWithAMinimumUpToSpace(input) {
      const [firstLine, secondLine] =splitByLastSpace(input)
      return [firstLine,secondLine]
    }

    function lineHasSpaceAfterCompletingTheLinePastTheMinimumAndNormalSplittingWouldSplitAWord (input) {
      return containsSpace(input)
    }

    function lineWouldEndInSpace(candidateLine) {
      return candidateLine.substring(lineLength, lineLength+1)!==' '
    }
      

    function splitByLastSpace(input){
      const values = input.split(/ ([^ ]+)$/)
      return [values[0], values[1]]
    }

    function containsSpace(input){
      return input.includes(' ')
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
