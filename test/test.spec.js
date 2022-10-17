const { expect } = require('chai');
const { 
  count, 
  minimum, 
  maximum, 
  mean, 
  sum, 
  stdev 
} = require('../source/the-missing-value');

describe('Descriptive statistics function', () => {

  let values1;
  let values2;
  beforeEach(() => {
    values1 = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    values2 = [ -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5 ];
  });

  describe('count function', () => {
    it('is a function', () => {
      expect(count).to.be.a('function');
    });
    it('returns a value of type number', () => {
      let result = count(...values1);
      expect(result).to.be.a('number');
    });
    it('returns the value eleven', () => {
      let result = count(...values1);
      expect(result).to.equal(11);
    });
  });

  describe('minimum function', () => {
    it('is a function', () => {
      expect(minimum).to.be.a('function');
    });
    it('returns a value of type number', () => {
      let result = minimum(...values1);
      expect(result).to.be.a('number');
    });
    it('returns the value zero', () => {
      let result = minimum(...values1);
      expect(result).to.equal(0);
    });
    it('returns the value negative five', () => {
      let result = minimum(...values2);
      expect(result).to.equal(-5);
    });
  });

  describe('maximum function', () => {
    it('is a function', () => {
      expect(maximum).to.be.a('function');
    });
    it('returns a value of type number', () => {
      let result = maximum(...values1);
      expect(result).to.be.a('number');
    });
    it('returns the value ten', () => {
      let result = maximum(...values1);
      expect(result).to.equal(10);
    });
    it('returns the value five', () => {
      let result = maximum(...values2);
      expect(result).to.equal(5);
    });
  });

  describe('mean function', () => {
    it('is a function', () => {
      expect(mean).to.be.a('function');
    });
    it('returns a value of type number', () => {
      let result = mean(...values1);
      expect(result).to.be.a('number');
    });
    it('returns the value five', () => {
      let result = mean(...values1);
      expect(result).to.equal(5);
    });
    it('returns the value zero', () => {
      let result = mean(...values2);
      expect(result).to.equal(0);
    });
  });

  describe('sum function', () => {
    it('is a function', () => {
      expect(sum).to.be.a('function');
    });
    it('returns a value of type number', () => {
      let result = sum(...values1);
      expect(result).to.be.a('number');
    });
    it('returns the value fifty-five', () => {
      let result = sum(...values1);
      expect(result).to.equal(55);
    });
    it('returns the values zero', () => {
      let result = sum(...values2);
      expect(result).to.equal(0);
    });
  });

  describe('stdev function', () => {
    it('is a function', () => {
      expect(stdev).to.be.a('function');
    });
    it('returns a value of type number', () => {
      let result = stdev(...values1);
      expect(result).to.be.a('number');
    });
    it('returns the value 3.316625', () => {
      let result = stdev(...values1).toPrecision(7);
      expect(result).to.equal(3.316625);
    });
    it('returns the value 3.316625', () => {
      let result = stdev(...values2).toPrecision(7);
      expect(result).to.equal(3.316625);
    });
  });

});
