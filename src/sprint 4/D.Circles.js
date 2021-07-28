function solution(data) {
  const [count, ...elements] = data;

  return Object.keys(elements.reduce((prev, cur) => {
    prev[cur] = null;

    return prev;
  }, {})).join('\n');

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

/*
console.log(solution(('8\n' +
  'вышивание крестиком\n' +
  'рисование мелками на парте\n' +
  'настольный керлинг\n' +
  'настольный керлинг\n' +
  'кухня африканского племени ужасмай\n' +
  'тяжелая атлетика\n' +
  'таракановедение\n' +
  'таракановедение\n').split('\n')));*/
