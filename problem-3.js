// 1. Find all the primes up to a number n (including n)

const isPrime = (prevPrimes, numToTest) => {
  for (let k = 0; prevPrimes[k] <= prevPrimes[prevPrimes.length - 1]/2; k++) {
    if (numToTest % prevPrimes[k] === 0) {
      // numToTest is composite
      return false;
    }
  }
  return true;
};

const primesUpTo = (n) => {
  // starting with 2 and ending with the half of n, find that integer's multiples that are less than n.  (n/2 is the last number that has a multiple less than n. Once its multiple (int * 2) have been eliminated, there are no other composite numbers less than n.) Also, if at any point the square of i is greater than n, sll primes have been found.
  let nextPrime = 0;
  const primes = [];
  for (let i = 2; i <= n / 2 && i**2 < n; i = nextPrime) {
    // save the current prime number
    primes.push(i);

    // determine and save the next prime. the loop will start again with i as this number.
    let found = false;
    for (let j = i + 1; !found; j++) {
      // test previous primes less than half of current prime (i) to see if any of them divide j evenly. If none of them do j is prime; set nextPrime to its value.
      if (isPrime(primes, j)) {
        found = true;
        nextPrime = j;
      }
    }
  }

  return primes;
};

// 2. Define a function that finds the prime factors of a given number

const allPrimeFactors = (number) => {
  const primes = primesUpTo(number);

  const primeFactors = [];

  // test each prime by dividing it from the main number. If there is a remainder, skip it. If there is no remainder, add it to the primeFactors array.
  for (let i = 0; i < primes.length; i++) {
    if (number % primes[i] === 0) {
      primeFactors.push(primes[i]);
    }
  }

  // return the list of factors

  return primeFactors;
};

// 3. Find the highest prime and print it

console.log(allPrimeFactors(600851475143).slice(-1)[0]);
