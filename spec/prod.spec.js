'use strict';

const chai = require('chai');
const expect = chai.expect;
chai.config.includeStack = true;

const wordWrap = require('./../src/prod');

describe('Word Wrap', () => {
    it('does not affect an empty input', () => {
     expect(wordWrap.aNew({}).wrap('')).to.eql('');
    });
    it('does not affect an input shorter than wrap size', () => {
     expect(wordWrap.aNew({}).wrap('abc')).to.eql('abc');
    });
    it('does not affect an input shorter than wrap size', () => {
     expect(wordWrap.aNew({}).wrap('12345678901234567890123456789012345678901234567890123456789012345678901234567890')).to.eql('123456789012345678901234567890123456789012345678901234567890123456789012\n34567890');
    });
});
