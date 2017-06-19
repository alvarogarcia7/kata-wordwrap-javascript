'use strict';

const chai = require('chai');
const expect = chai.expect;
chai.config.includeStack = true;

const wordWrap = require('./../src/prod');

describe('Word Wrap', () => {
    describe('acceptance test', ()=> {
      it('wrap at 72 if the value is omitted', () => {
       expect(wordWrap.aNew({}).wrap('12345678901234567890123456789012345678901234567890123456789012345678901234567890')).to.eql('123456789012345678901234567890123456789012345678901234567890123456789012\n34567890');
      });
      it('wrap at 80', () => {
       expect(wordWrap.aNew({wrapSize: 80}).wrap('12345678901234567890123456789012345678901234567890123456789012345678901234567890123')).to.eql('12345678901234567890123456789012345678901234567890123456789012345678901234567890\n123');
      });
    });

    it('does not affect an empty input', () => {
     expect(wordWrap.aNew({}).wrap('')).to.eql('');
    });
    it('does not affect an input shorter than wrap size', () => {
     expect(wordWrap.aNew({}).wrap('abc')).to.eql('abc');
    });
    it('word wrap at any specified size', () => {
       expect(wordWrap.aNew({wrapSize: 3}).wrap('123456789012')).to.eql('123\n456\n789\n012');
      });

});
