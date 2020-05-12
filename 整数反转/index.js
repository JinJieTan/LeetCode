/**
 * @param {number} x
 * @return {number}
 */
const x = -123;
var reverse = function (x) {
  let result = Math.abs(x).toString().split("").reverse().join("");
  if (x < 0) {
    return result <= Math.pow(2, 31) ? -result : 0;
  } else {
    return result < Math.pow(2, 31) ? result : 0;
  }
};
console.log(reverse(x));
