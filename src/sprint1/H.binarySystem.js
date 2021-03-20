const binarySystem = (data) => {
  const [first, second] = data.toString().split('\n');
  let firstCol = first.split('').map(item => parseInt(item, 10));
  let secondCol = second.split('').map(item => parseInt(item, 10));
  const firstLength = firstCol.length;
  const secondLength = secondCol.length;
  let result = '';

  if (firstLength > secondLength) {
    secondCol.unshift(...Array.from({length: firstLength - secondLength}).map(item => 0));
  } else {
    firstCol.unshift(...Array.from({ length: secondLength - firstLength }).map(item => 0));
  }


  let additional = false;
  result = firstCol.reduceRight((prev, cur, i) => {
    const first = additional ? cur + 1 : cur;
    const second = secondCol[i];
    additional = false;

    if (first + second < 2 ) {
      prev = first + second + prev;
    } else if (first + second === 3) {
      prev = 1 + prev;
      additional = true;
    } else {
      prev = 0 + prev;
      additional = true;
    }

    return prev;
  }, '');

  if (additional) {
    result = 1 + result;
  }

  return result;
};

console.log(binarySystem('1010\n' +
  '1011'));