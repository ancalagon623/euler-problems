function generatePrimesUpTo(n) {
  // create the list of numbers (noted by index) with a bit to indicate prime/composite
  if (n < 2 || typeof n !== 'number') return NaN;
  const naturalNumberRep = new Array(n + 1).fill(1);
  const primes = [];
  naturalNumberRep[0] = 0; // empty start slot to make the array indices rep the natural numbers

  let nextPrime; // use to skip steps in the loop
  for (let num = 2; nextPrime !== -1; num = nextPrime) {
    primes.push(num); // add the current number to the return array
    // if the natural number is not marked off, it must be a prime number. We mark all the multiples of the number that haven't been marked already. See the Sieve of Eratosthenes https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
    if (naturalNumberRep[num]) {
      let multiple = num ** 2; // first multiple: all previous numbers are already prime or composite of primes
      while (multiple <= n) {
        naturalNumberRep[multiple] = 0;
        multiple += num;
      }
    }
    // find the next prime number. This will return -1 if there are no more primes left in the range.
    nextPrime = naturalNumberRep.indexOf(1, num + 1); // REVIEW maybe use a keyed object for performance instead?
  }
  return primes;
}

function estimateIntegerGreaterThanYPrimes(y) {
  // y = x/ln(x) where x is an increasingly large natural integer, y is the number of primes up to that number
  // update the guessed integer by increasing it regularly.
  let numberOfPrimesEstimated = 0;
  let currentIntGuess = y;
  const bounds = {
    upper: NaN,
    lower: 0,
    halfway: function () {
      return (this.upper - this.lower) / 2 + this.lower
    }
  };
  while (true) {
    numberOfPrimesEstimated = currentIntGuess / Math.log(currentIntGuess);

    if (numberOfPrimesEstimated > y + 100) {
      bounds.upper = currentIntGuess;
      currentIntGuess = bounds.halfway();
    } else if (numberOfPrimesEstimated <= y + 10) {
      bounds.lower = currentIntGuess;
      if (bounds.upper) {
        currentIntGuess = bounds.halfway();
      } else {
        currentIntGuess += 10000;
      }
    } else {
      // in range, integer is good enough
      break;
    }
  }

  return Math.ceil(currentIntGuess);
}

function calculateNthPrime(n) {
  const primes = generatePrimesUpTo(estimateIntegerGreaterThanYPrimes(n));
  return primes[n - 1];
}

const startTime = new Date();
console.log(calculateNthPrime(10001));
const finalTime = new Date();
console.log('The program took ' + (finalTime - startTime) + ' milleseconds to run');