function solution(data) {
  const [firstStr, secondStr] = data;
  let mapIndex = {};
  const secondStrCollection = secondStr.split('');

  if (firstStr.length === 0) {
    return 'True';
  }

  firstStr.split('').forEach((item, i) => {
    mapIndex[item] = secondStrCollection.map((letter, i) => {
      if (letter === item) {
        return i;
      }

      return undefined;
    }).filter((item) => item !== undefined);
  });

  let previousValue = mapIndex[firstStr[0]][0];
  let found = 1;

  for (let i = 1; i < firstStr.length; i++) {
    let collection = mapIndex[firstStr[i]];

    if (found < i) {
      break;
    }

    for (let j = 0; j < collection.length; j++) {
      if (collection[j] > previousValue) {
        previousValue = collection[j];
        found += 1;
        break;
      }
    }
  }

  return found === firstStr.length ? 'True' : 'False';
}


var readline = require('readline');
var io_interface = readline.createInterface({input: process.stdin});

let output_numbers = [];
io_interface.on('line', function (line) {
  output_numbers.push(line);
})

io_interface.on('close', function () {
  process.stdout.write(solution(output_numbers));
})


//console.log(solution(('abc\n' +
//  'ahbgdcu\n').split('\n')));

