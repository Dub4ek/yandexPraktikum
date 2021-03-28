// 50116338
const handyHands = (data) => {
  const [countButtons, ...collection] = data;
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

  return result.toString();
};

var readline = require('readline');
var io_interface = readline.createInterface({input: process.stdin});

let output_numbers = [];
io_interface.on('line', function (line) {
  output_numbers.push(line);
})

io_interface.on('close', function () {
  process.stdout.write(handyHands(output_numbers));
})