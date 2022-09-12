let next = 0;
let seedArr = [1, 2];
let sumOfEvens = 0;

for (let i = 1; next < 4000000; i += 3) {
  const element = seedArr[i];
  sumOfEvens += element;
  const prev = seedArr[i-1];
  seedArr = seedArr.concat([element + prev, 
  2 * element + prev,
3 * element + 2 * prev]);
  next = seedArr[seedArr.length - 1];
}

console.log(sumOfEvens);