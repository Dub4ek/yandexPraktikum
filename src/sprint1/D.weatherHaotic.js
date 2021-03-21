const weatherChaotic = (data) => {
  const [count, ...rest] = data.toString().split('\n');
  const [collection, others] = rest;
  const elements = collection.split(' ').map(item => parseInt(item, 10));
  let result = 0;
  const length = elements.length;

  if (parseInt(count, 10) <= 1) {
    return 0;
  }

  elements.forEach((item, index) => {
    let values = [0, 0];
    if ((index - 1 >= 0  && item > elements[index - 1]) || index === 0) {
      values[0] = 1;
    }

    if ((index + 1 < length  && item > elements[index + 1]) || index + 1 >= length) {
      values[1] = 1;
    }

    if (values[0] === 1 && values[1] === 1) {
      result = result + 1;
    }
  });

  return result;
};

console.log(weatherChaotic('4\n' +
  '0 0 0 0\n'));