// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const state = {found: false, number: 0};

for (let i = 20; !state.found; i += 20) {

  for (let j = 19; i % j === 0; j--) {
    if (j === 1) {
      state.found = true;
      state.number = i;
      break;
    }
  }

}

console.log(state.number);