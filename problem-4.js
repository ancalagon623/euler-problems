// Find the largest palindromic number made from two 3 digit numbers.
// Check if a number is a palindrome.
const isPalindromeNumber = (num) => {
  const digitArray = num.toString().split('');
  const reversedString = digitArray.reverse().join('');
  const reversedNum = Number.parseInt(reversedString);
  if (reversedNum === num) {
    return true;
  }
  return false;
}

let currentLargestPalindrome = 0;

// Multiply each number with all the other numbers less than it (since the greater ones have already been tested)
for (let i = 999; i >= 100; i--) {

  for (let j = i; j >= 100; j--) {
    const possiblePalindrome = i * j;
    if (isPalindromeNumber(possiblePalindrome) && possiblePalindrome > currentLargestPalindrome) {
      currentLargestPalindrome = possiblePalindrome;
      break;
    }
  }

}

console.log(currentLargestPalindrome);
