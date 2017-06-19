'use strict';

const chai = require('chai');
const expect = chai.expect;
chai.config.includeStack = true;

const wordWrap = require('./../src/prod');

describe('Word Wrap', () => {
    it('does not affect an empty input', () => {
     expect(wordWrap.aNew({}).wrap('')).to.eql('');
    });
});
