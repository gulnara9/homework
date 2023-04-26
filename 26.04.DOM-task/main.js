/*11 Create a function that takes a string and returns an object with properties representing the frequency of each character in the string.
 For example, if the string contains "hello world", the function should return an object with properties "h", "e", "l", "o", "w", "r", and "d"
 and values 1, 1, 3, 2, 1, 1, and 1 respectively, indicating that each character occurs once or more in the string.*/

function getCharacterFrequency(str) {
  const charFrequency = {};
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (char in charFrequency) {
      charFrequency[char]++;
    } else {
      charFrequency[char] = 1;
    }
  }
  return charFrequency;
}
console.log(getCharacterFrequency("hello world"));


/* Write a function that takes an array of numbers as input and returns the median of the array 
(i.e., the middle number when the array is sorted). */
function getMedian(numbers) {
  const sorted = numbers.slice().sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  } else {
    return sorted[middle];
  }
}




