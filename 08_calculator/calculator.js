const add = (firstNum,secondNum) => firstNum+secondNum;

const subtract = (firstNum, secondNum) => firstNum-secondNum;

const sum = (array) => {
  return array.reduce((total,currentItem) => total += currentItem,0,);
};

const multiply = (array) => {
  return array.reduce((total,currentItem) => total *= currentItem);
};

const power = (number, exponent) => number ** exponent;

const factorial = (number) => {
  let total;
  if (number == 0) {
    total = 1;
  } else {
    total=number;
  };

  for (i=number-1;i>0;i--) {
    total *= i;
  };
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
