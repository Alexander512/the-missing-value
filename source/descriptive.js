/* descriptive statistics object */

/* function for calculating the minimum value */
function minimum(...values) {
  let minimum = values.reduce((previousValue, currentValue) => {
    if (currentValue < previousValue) return currentValue;
    return previousValue;
  }, Infinity);
  return minimum;
}

/* function for calculating the maximum value */
function maximum(...values) {
  let maximum = values.reduce((previousValue, currentValue) => {
    if (currentValue > previousValue) return currentValue;
    return previousValue;
  }, -Infinity);
  return maximum;
}

/* function for calculating the mean value */
function mean(...values) {
  let nValues = values.length;
  let sum = values.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);
  return sum / nValues;
}

/* statistics object */
module.exports = {
  minimum,
  maximum,
  mean
};
