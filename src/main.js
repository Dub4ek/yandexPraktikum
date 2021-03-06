const sum = (data) => {
  let [width, height, ...rest] = data.toString().split('\n');
  const elements = rest.slice(0, width).map(item => item.split(' '));
  const [ elementX, elementY ] = [rest[rest.length - 3], rest[rest.length - 2]];

  const checkX = (x) => {
    return x
  };
  console.log(elements[elementX + 1][elementY])
  console.log(elements[elementX - 1][elementY])
  console.log(elements[elementX][elementY + 1])
  console.log(elements[elementX][elementY - 1])

  return elements;
};

console.log(sum('4\n' +
  '3\n' +
  '1 2 3\n' +
  '0 2 6\n' +
  '7 4 1\n' +
  '2 7 0\n' +
  '3\n' +
  '0\n'));

