//Exercise 1: Add Strings

const addStrings = (num1, num2) => {
  // convert strings to integers
  const intNum1 = parseInt(num1);
  const intNum2 = parseInt(num2);

  //then plus the two numbers
  const result = intNum1 + intNum2;
  return result.toString();
};

const result1 = addStrings("11", "123");
const result2 = addStrings("456", "77");
const result3 = addStrings("0", "0");

console.log(result1); // "134"
console.log(result2); // "533"
console.log(result3); // "0"
