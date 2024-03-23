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
