class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push(key, value);
    }
    this.data[address].push(key, value);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapessss', 10000);
myHashTable.set('apples', 54);
myHashTable.get('grapes');

console.log(myHashTable.keys());

function checkIfElementRepeats(arr) {
  const sortedArr = arr.sort();

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
      return sortedArr[i]
    }
  }
  return;
}

// console.log(checkIfElementRepeats([2, 3, 4, 5]))

function checkIfElementRepeats2(input) {
  let map = {};

  for (let i = 0; i < input.length; i++) {
    if (map[input[i]]) {
      return input[i]
    } else {
      map[input[i]] = true;
    }
  }
  return undefined;
}

console.log(checkIfElementRepeats2([3, 1, 4, 7, 1]))