const { expect } = require('chai');
const { 
  count, 
  minimum, 
  maximum, 
  mean, 
  sum
} = require('../source/the-missing-value');

describe('Descriptive statistics functions', () => {

  let values1;
  let values2;
  let values3;
  beforeEach(() => {
    values1 = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    values2 = [ -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5 ];
    values3 = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, null, 10 ];
  });

  describe('count function', () => {
    it('is a function', () => {
      expect(count).to.be.a('function');
    });
    it('returns a value of type number', () => {
      let result = count(values1);
      expect(result).to.be.a('number');
    });
    it('returns the value 11', () => {
      let result = count(values1);
      expect(result).to.equal(11);
    });
    it('returns null with a missing value in the dataset', () => {
      let result = count(values3);
      expect(result).to.equal(null);
    });
    it('returns 10 with null values removed', () => {
      let result = count(values3, rmNull = true);
      expect(result).to.equal(10);
    });
  });

  describe('minimum function', () => {
    it('is a function', () => {
      expect(minimum).to.be.a('function');
    });
    it('returns a value of type number', () => {
      let result = minimum(values1);
      expect(result).to.be.a('number');
    });
    it('returns the value 0', () => {
      let result = minimum(values1);
      expect(result).to.equal(0);
    });
    it('returns the value -5', () => {
      let result = minimum(values2);
      expect(result).to.equal(-5);
    });
    it('returns null with a missing value in the dataset', () => {
      let result = minimum(values3);
      expect(result).to.equal(null);
    });
    it('returns 0 with null values removed', () => {
      let result = minimum(values3, rmNull = true);
      expect(result).to.equal(0);
    });
  });

  describe('maximum function', () => {
    it('is a function', () => {
      expect(maximum).to.be.a('function');
    });
    it('returns a value of type number', () => {
      let result = maximum(values1);
      expect(result).to.be.a('number');
    });
    it('returns the value 10', () => {
      let result = maximum(values1);
      expect(result).to.equal(10);
    });
    it('returns the value 5', () => {
      let result = maximum(values2);
      expect(result).to.equal(5);
    });
    it('returns null with a missing value in the dataset', () => {
      let result = maximum(values3);
      expect(result).to.equal(null);
    });
    it('returns 10 with null values removed', () => {
      let result = maximum(values3, rmNull = true);
      expect(result).to.equal(10);
    });
  });

  describe('mean function', () => {
    it('is a function', () => {
      expect(mean).to.be.a('function');
    });
    it('returns a value of type number', () => {
      let result = mean(values1);
      expect(result).to.be.a('number');
    });
    it('returns the value 5', () => {
      let result = mean(values1);
      expect(result).to.equal(5);
    });
    it('returns the value 0', () => {
      let result = mean(values2);
      expect(result).to.equal(0);
    });
    it('returns null with a missing value in the dataset', () => {
      let result = mean(values3);
      expect(result).to.equal(null);
    });
    it('returns 4.6 with null values removed', () => {
      let result = mean(values3, rmNull = true);
      expect(result).to.equal(4.6);
    });
  });

  describe('sum function', () => {
    it('is a function', () => {
      expect(sum).to.be.a('function');
    });
    it('returns a value of type number', () => {
      let result = sum(values1);
      expect(result).to.be.a('number');
    });
    it('returns the value 55', () => {
      let result = sum(values1);
      expect(result).to.equal(55);
    });
    it('returns the values 0', () => {
      let result = sum(values2);
      expect(result).to.equal(0);
    });
    it('returns null with a missing value in the dataset', () => {
      let result = sum(values3);
      expect(result).to.equal(null);
    });
    it('returns 46 with null values removed', () => {
      let result = sum(values3, rmNull = true);
      expect(result).to.equal(46);
    });
  });

});
