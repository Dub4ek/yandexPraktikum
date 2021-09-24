function myMap(arr, callback) {
  const result = Array.from({length: arr.length});

  for (let i = 0; i < arr.length; i++) {
    result[i] = callback(arr[i]);
  }

  return result;
}

Array.prototype.myMap = function (callback, thisArg) {
  const result = new Array(this.length);

  if (!thisArg) {
    thisArg = this;
  }

  for (let i = 0; i < this.length; i++) {
    if (this[i] !== undefined) {
      result[i] = callback.call(thisArg, this[i], i, [...this]);
    }
  }

  return result;
}

//console.log([1,2,3].myMap((a,b,c) => [a,b,c]))

const arr = new Array(5)
arr[0] = 1
arr[2] = undefined
arr[4] = null

const callback = item => item
const result = arr.myMap(callback)

console.log(result)
console.log('1' in result)
console.log('2' in result)
