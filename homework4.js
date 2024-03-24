// Task 1
function customIsNaN(obj) {
  // undefined it is not a number
  // Covering edge cases
  if (obj === true || obj === null || obj === '' || obj === ' ') {
    return false;
  }
  // With ceil we are tryig to make integer number from the input object
  // if result is integer - it is a number
  if (Number.isInteger(Math.ceil(obj))) {
    return false;
  }

  return true;
}

// Task 2
function checkProbabilityTheory(count) {
  let evenNumbersCount = 0;
  let oddNumbersCount = 0;
  for (let i = 0; i < count; i++) {
    let randomNum = Math.floor(Math.random() * (1001 - 100)) + 100;
    if (randomNum % 2 == 0) {
      evenNumbersCount++;
    } else {
      oddNumbersCount++;
    }
  }
  let evenPercentage = (evenNumbersCount * 100) / count;
  let oddPercentage = (oddNumbersCount * 100) / count;
  console.log(
    'The amount of generated numbers: ' +
      count +
      '\nOdd amount: ' +
      oddNumbersCount +
      '\nEven amount: ' +
      evenNumbersCount +
      '\nRatio: ' +
      evenPercentage +
      '%' +
      oddPercentage
  );
}
//Task 3
function sumOfNumbers() {
  let res = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0) {
      res = res + i;
    }
  }
  console.log('The sum of numbers will be: ' + res);
}
sumOfNumbers();
