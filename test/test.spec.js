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
  let values4;
  beforeEach(() => {
    values1 = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    values2 = [ -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5 ];
    values3 = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, null, 10 ];
    values4 = [ 1.01, 2.01, 3.01, 4.01, 5.01 ];
  });

  describe('count function', () => {
    it('is a function', () => {
      expect(count).to.be.a('function');
    });
    it('throws an error if the dataset contains no values', () => {
      expect(count.bind(count, [])).to.throw(Error, 'empty dataset');
    });
    it('returns a value of type number', () => {
      let result = count(values1);
      expect(result).to.be.a('number');
    });
    it('returns the value 11', () => {
      let result = count(values1);
      expect(result).to.equal(11);
    });
    it('returns NaN with a missing value in the dataset', () => {
      let result = count(values3);
      expect(result).to.be.NaN;
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
    it('throws an error if the dataset contains no values', () => {
      expect(minimum.bind(minimum, [])).to.throw(Error, 'empty dataset');
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
    it('returns the value 1.01', () => {
      let result = minimum(values4);
      expect(result).to.equal(1.01);
    });
    it('returns NaN with a missing value in the dataset', () => {
      let result = minimum(values3);
      expect(result).to.be.NaN;
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
    it('throws an error if the dataset contains no values', () => {
      expect(maximum.bind(maximum, [])).to.throw(Error, 'empty dataset');
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
    it('returns the value 5.01', () => {
      let result = maximum(values4);
      expect(result).to.equal(5.01);
    });
    it('returns NaN with a missing value in the dataset', () => {
      let result = maximum(values3);
      expect(result).to.be.NaN;
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
    it('throws an error if the dataset contains no values', () => {
      expect(mean.bind(mean, [])).to.throw(Error, 'empty dataset');
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
    it('returns the value 3.01', () => {
      let result = mean(values4);
      expect(result).to.be.closeTo(3.01, 0.1);
    });
    it('returns NaN with a missing value in the dataset', () => {
      let result = mean(values3);
      expect(result).to.be.NaN;
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
    it('throws an error if the dataset contains no values', () => {
      expect(sum.bind(sum, [])).to.throw(Error, 'empty dataset');
    });
    it('returns a value of type number', () => {
      let result = sum(values1);
      expect(result).to.be.a('number');
    });
    it('returns the value 55', () => {
      let result = sum(values1);
      expect(result).to.equal(55);
    });
    it('returns the value 0', () => {
      let result = sum(values2);
      expect(result).to.equal(0);
    });
    it('returns the value 15.05', () => {
      let result = sum(values4);
      expect(result).to.be.closeTo(15.05, 0.1);
    });
    it('returns NaN with a missing value in the dataset', () => {
      let result = sum(values3);
      expect(result).to.be.NaN;
    });
    it('returns 46 with null values removed', () => {
      let result = sum(values3, rmNull = true);
      expect(result).to.equal(46);
    });
  });

});
