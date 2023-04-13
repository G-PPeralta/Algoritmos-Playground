// Brute force, O(n^2) or O(a * b) time complexity

function checkIfThereAreCommonElements1(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true
      }
    }
  }
  return false
}

// using a hash table, O(a + b) time complexity

function checkIfThereAreCommonElements2(array1, array2) {
  const hashTable = {};
  for (let i = 0; i < array1.length; i++) {
    hashTable[array1[i]] = true;
  }
  for (let j = 0; j < array2.length; j++) {
    if (hashTable[array2[j]]) {
      return true;
    }
  }
  return false;
};

// console.log(checkIfThereAreCommonElements(['a', 'b', 'c', 'x'], ['z', 'y', 'a']));

// using a set, O(a + b) time complexity

function checkIfThereAreCommonElements3(array1, array2) {
  const set = new Set(array1);
  for (let i = 0; i < array2.length; i++) {
    if (set.has(array2[i])) {
      return true;
    }
  }
  return false;
}


function checkIfThereAreCommonElements4(array1, array2) {
  let map = {};

  for (let i = 0; i < array1.length; i++) {
    if (!map[array1[i]]) {
      const item = array1[i];
      map[item] = true;
    }
  }

  for (let j = 0; j < array2.length; j++) {
    if (map[array2[j]]) {
      return true;
    }
  }
  return false;
}

const checkIfThereAreCommonElements5 = (array1, array2) => array1.some(item => array2.includes(item));

console.log(checkIfThereAreCommonElements5(['a', 'b', 'c', 'x'], ['z', 'y', 'a']));