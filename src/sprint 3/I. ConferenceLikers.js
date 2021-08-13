function solution(data) {
  const [count, values, k] = data;
  const collection = values.split(' ').map(item => parseInt(item, 10));

  const mapId = collection.reduce((prev, cur) => {
    if (prev[cur]) {
      prev[cur] += 1;
    } else {
      prev[cur] = 1;
    }

    return prev;
  }, {});

  return Object.keys(mapId)
    .sort((a, b) => mapId[b] - mapId[a])
    .slice(0, k)
    .join(' ');

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


/*console.log(solution(('7\n' +
  '1 2 3 1 2 3 4\n' +
  '3\n').split('\n')));
*/