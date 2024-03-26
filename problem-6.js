// Create a function that takes in any number range and returns the difference between the sum of squares and the square of the sum of all natural numbers up to and including that number.

function calculateDifferenceBetweenSumOfSquaresAndSquareOfSum (upperLimit) {
  let sumOfSquares = 0;
  let squareOfSum = 0;
  
  if (typeof upperLimit !== 'number' || upperLimit <= 0 || upperLimit % 1 > 0) return 0; 
  
  for (let i = 1; i <= upperLimit; i++) {
    sumOfSquares += i ** 2;
    squareOfSum += i;
  }
  
    squareOfSum = squareOfSum ** 2;
    return Math.abs(sumOfSquares - squareOfSum);
  }

const startTime = new Date();
console.log(calculateDifferenceBetweenSumOfSquaresAndSquareOfSum(1000));
const finalTime = new Date();

console.log('The program took ' + (finalTime - startTime) + ' milleseconds to run');