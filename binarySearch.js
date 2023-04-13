const names = ['Alex', 'Brian', 'Julie', 'Kojin', 'Nabil', 'Nick', 'Wes'];

function binarySearch(arr, target) {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    midpoint = Math.floor((first + last) / 2);
    if (arr[midpoint] === target) {
      return midpoint;
    } else if (arr[midpoint] < target) {
      first = midpoint + 1;
    } else {
      last = midpoint - 1;
    }
  }
  return -1;
}

// console.log(binarySearch(names, 'Nick'));

function test (nums) {
  const sortedNumbers = nums.sort((a, b) => a - b);
  for(let i = 0; i <= sortedNumbers.length -1; i++) {
      if(sortedNumbers[i] === sortedNumbers[i + 1]) {
          return true
      }
  }
  return false
};
