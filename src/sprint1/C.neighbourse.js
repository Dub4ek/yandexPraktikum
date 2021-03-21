const sum = (data) => {
  let [width, height, ...rest] = data.toString().split('\n');
  const elements = rest.slice(0, width).map(item => item.split(' ').map(item => parseInt(item, 10)));
  const [ x, y ] = [rest[rest.length - 3], rest[rest.length - 2]];
  const elementX = parseInt(x, 10);
  const elementY = parseInt(y, 10);
  const checkX = (x, max) => {
    return x >= 0 && x < max;
  };

  const result = [
    checkX(elementX + 1, width) ? elements[elementX + 1][elementY] : NaN,
    checkX(elementX - 1, width) ? elements[elementX - 1][elementY] : NaN,
    checkX(elementY + 1, height) ? elements[elementX][elementY + 1] : NaN,
    checkX(elementY - 1, height) ? elements[elementX][elementY - 1] : NaN,
  ];

  return result
  .filter(item => !Number.isNaN(item))
  .sort((a, b) => a - b)
  .join(' ');
}


console.log(sum('4\n' +
  '3\n' +
  '1 2 3\n' +
  '0 2 6\n' +
  '7 4 1\n' +
  '2 7 0\n' +
  '3\n' +
  '0\n'));