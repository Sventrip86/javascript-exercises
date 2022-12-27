const add = function(num1, num2) {

  return num1 + num2

	
};

const subtract = function(num1,num2) {
  return num1 - num2
	
};

const sum = function(num1,num2) {
  let arr = []
  let sum = 0
 for(i= num1; i< num2+1; i++){
  arr.push(i) 
  }
  sum = arr.reduce((a,b) => a +b)
 return sum
	
};

const multiply = function(num1,num2) {
  return num1 * num2

};

const power = function(num1, num2) {

  return Math.pow(num1,num2)
	
};

const factorial = function(num) {

  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
	
};

add(5,10)
subtract(10,5)
sum(5,5,3)
multiply(3,2)
power(5,3)
factorial(5)

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
