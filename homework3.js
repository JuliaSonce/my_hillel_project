//task 1
function convertCurrency(sum, currencyCode) {
  let currencyEuroUsd = 0.9;
  let currencyUahUsd = 35;
  let currencyGbpUsd = 0.8;
  switch (currencyCode) {
    case 'EUR':
      return sum * currencyEuroUsd;
      break;
    case 'UAH':
      return sum * currencyUahUsd;
      break;
    case 'GBP':
      return sum * currencyGbpUsd;
      break;
    default:
      return 'Error';
  }
}
console.log(convertCurrency(99, 'EUR'));

// task 2

function getDayOfWeek(num) {
  switch (num) {
    case 1:
      return 'Monday';
      break;
    case 2:
      return 'Tuesday';
      break;
    case 3:
      return 'Wednesday';
      break;
    case 4:
      return 'Thursday';
      break;
    case 5:
      return 'Friday';
      break;
    case 6:
      return 'Saturday';
      break;
    case 7:
      return 'Sunday';
      break;
    default:
      return 'Error';
  }
}
console.log(getDayOfWeek(3));

// task 3
function fibonacci(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6));
