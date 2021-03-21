const handyHands = (data) => {
  const [countButtons, ...collection] = data.toString().split('\n');
  const valuesMap = new Map();

  collection.forEach(item => {
    const numbers = item.split('').map(item => parseInt(item, 10));

    numbers.forEach(value => {
      if (!isNaN(value)) {
        if (valuesMap.has(value)) {
          valuesMap.set(value, valuesMap.get(value) + 1);
        } else {
          valuesMap.set(value, 1);
        }
      }
    });
  });
  let result = 0;

  for (let i = 1; i < 10; i++) {
    if (valuesMap.get(i) <= 2 * countButtons) {
      result += 1;
    }
  }

  return result;
};

console.log(handyHands('4\n' +
  '1111\n' +
  '1111\n' +
  '1111\n' +
  '1111\n'))