function solution(data) {
  const [a, m, letters] = data;
  const collection = letters.split('');
  let result = 0;

  collection.forEach((item, i) => {
    const currentItem = item.charCodeAt(0);

    if (i < collection.length - 1) {
      result = ((result + currentItem) * parseInt(a, 10)) % parseInt(m, 10);
    } else {
      result = (result + currentItem) % parseInt(m, 10);
    }
  });

  return result;
}

var readline = require('readline');
var io_interface = readline.createInterface({input: process.stdin});

let output_numbers = [];
io_interface.on('line', function (line) {
  output_numbers.push(line);
})

io_interface.on('close', function () {
  console.log(solution(output_numbers));
  //process.stdout.write(solution(output_numbers));
})

console.log(solution(('1000\n' +
  '123987123\n' +
  'ezhgeljkablzwnvuwqvpabcv\n').split('\n')));

console.log(solution(('1000\n' +
  '123987123\n' +
  'gbpdcvkumyfxillgnqrvabcv\n').split('\n')));

// 47021983
// 47021983