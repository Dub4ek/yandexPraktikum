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
};

// console.log(sum('4\n' +
//   '5\n' +
//   '100 -2 3 -8 -102\n' +
//   '0 -977 -6 -3 15\n' +
//   '1000 -4 -1000 0 -891\n' +
//   '2 -7 0 -1 -1000\n' +
//   '3\n' +
//   '4\n'));


const weatherChaotic = (data) => {
  const [count, ...rest] = data.toString().split('\n');
  const [collection, others] = rest;
  const elements = collection.split(' ').map(item => parseInt(item, 10));
  let result = 0;
  const length = elements.length;

  if (parseInt(count, 10) < 1 || length === 0) {
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

//console.log(weatherChaotic('1\n' +
//  '3\n'));


const longestWord = (data) => {
  const [length, sentence] = data.toString().split('\n');
  let max = 0;
  let maxIndex = -1;
  const lengthMap = sentence.trim().split(' ').filter(item => /[a-z]*/.test(item));

  if (parseInt(length, 10) === 0 || lengthMap.length === 0) {
    return ' \n0';
  }

  lengthMap.forEach((item, index) => {
    if (item.length > max) {
      max = item.length;
      maxIndex = index;
    }
  });
  return `${lengthMap[maxIndex]} \n${max}`;
};

//console.log(longestWord('0\n     '));

const palindrom = (data) => {
  const string = data.toString();
  const lettersSet = { };
  let symbolsCount = 0;
  console.log(string);
  for (let item of string) {
    const currentSymbol = item.toLowerCase();
    const charCode = currentSymbol.charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
      symbolsCount += 1;
      if (lettersSet.hasOwnProperty(currentSymbol)) {
        lettersSet[currentSymbol] = lettersSet[currentSymbol] + 1;
      } else {
        lettersSet[currentSymbol] = 1;
      }
    }
  };
  console.log(lettersSet)
  //return (lettersSet.size === symbolsCount / 2) ? 'True' : 'False';
};

console.log(palindrom('A man, a plan, a canal: Panama'));

