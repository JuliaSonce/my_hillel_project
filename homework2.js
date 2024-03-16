// task 1
function grades(points) {
  if (points >= 90 && points <= 100) {
    return 'perfect';
  } else if (points >= 70 && points <= 89) {
    return 'excelent';
  } else if (points >= 50 && points <= 69) {
    return 'good';
  } else if (points < 50) {
    return 'You can do better';
  }
}
console.log(grades(99));

// task 2

function calculator(operator, a, b) {
  let result = 'calculation error';
  switch (operator) {
    case 'add':
      result = a + b;
      break;

    case 'substract':
      result = a - b;
      break;
    case 'multiply':
      result = a * b;
      break;
    case 'divide':
      result = a / b;
      break;
  }

  return result;
}
console.log('We recieve  ' + calculator('divide', 171, 2));

// task 3

function comparison(num) {
  let result = num % 2 == 0 ? 'even number' : 'odd number';
  return result;
}
console.log(comparison(4));
