/* the-missing-value */

/* function for counting the number of values */
function count(values, rmNull = false) {
  if (values.length === 0) throw new Error('empty dataset');
  if (values.includes(null) && rmNull === false) {
    return NaN;
  } else {
    const valuesF = values.filter(value => value !== null);
    return valuesF.length;
  }
}

/* function for calculating the minimum value */
function minimum(values, rmNull = false) {
  if (values.length === 0) throw new Error('empty dataset');
  if (values.includes(null) && rmNull === false) {
    return NaN;
  } else {
    const minimum = values
    .filter(value => value !== null)
    .reduce((pValue, cValue) => { 
      if (cValue < pValue) return cValue;
      return pValue;
    }, Infinity);
    return minimum;
  }
}

/* function for calculating the maximum value */
function maximum(values, rmNull = false) {
  if (values.length === 0) throw new Error('empty dataset');
  if (values.includes(null) && rmNull === false) {
    return NaN;
  } else {
    const maximum = values
    .filter(value => value !== null)
    .reduce((pValue, cValue) => {
      if (cValue > pValue) return cValue;
      return pValue;
    }, -Infinity);
    return maximum;
  }
}

/* function for calculating the mean value */
function mean(values, rmNull = false) {
  if (values.length === 0) throw new Error('empty dataset');
  if (values.includes(null) && rmNull === false) {
    return NaN;
  } else {
    const valuesF = values.filter(value => value !== null);
    const sum = valuesF.reduce((pValue, cValue) => { 
      return pValue + cValue; 
    }, 0);
    return sum / valuesF.length;
  }
}

/* function for calculating the sum */
function sum(values, rmNull = false) {
  if (values.length === 0) throw new Error('empty dataset');
  if (values.includes(null) && rmNull === false) {
    return NaN;
  } else {
    const sum = values
    .filter(value => value !== null)
    .reduce((pValue, cValue) => {
      return pValue + cValue;
    }, 0);
    return sum;
  }
}

module.exports = {
  count,
  minimum,
  maximum,
  mean,
  sum
};
