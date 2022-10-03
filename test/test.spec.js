const { expect } = require('chai');
const { minimum, maximum, mean, sum } = require('../source/the-missing-value');

describe('Descriptive statistics function', () => {

  let values;
  beforeEach(() => {
    values = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  });

  describe('minimum function', () => {
    it('is a function', () => {
      expect(minimum).to.be.a('function');
    });
    it('returns a value of type number', () => {
      let result = minimum(...values);
      expect(result).to.be.a('number');
    });
    it('returns the value zero', () => {
      let result = minimum(...values);
      expect(result).to.equal(0);
    });
  });

  describe('maximum function', () => {
    it('is a function', () => {
      expect(maximum).to.be.a('function');
    });
    it('returns a value of type number', () => {
      let result = maximum(...values);
      expect(result).to.be.a('number');
    });
    it('returns the value ten', () => {
      let result = maximum(...values);
      expect(result).to.equal(10);
    });
  });

  describe('mean function', () => {
    it('is a function', () => {
      expect(mean).to.be.a('function');
    });
    it('returns a value of type number', () => {
      let result = mean(...values);
      expect(result).to.be.a('number');
    });
    it('returns the value five', () => {
      let result = mean(...values);
      expect(result).to.equal(5);
    });
  });

  describe('sum function', () => {
    it('is a function', () => {
      expect(sum).to.be.a('function');
    });
    it('returns a value of type number', () => {
      let result = sum(...values);
      expect(result).to.be.a('number');
    });
    it('returns the value fifty-five', () => {
      let result = sum(...values);
      expect(result).to.equal(55);
    });
  });

});
