function solution(data) {
  const [firstStr, secondStr] = data;
  let mapIndex = {};
  const secondStrCollection = secondStr.split('');

  if (firstStr.length === 0) {
    return 'True';
  }

  let firstStrIndex = 0;

  secondStrCollection.forEach(item => {
    if (firstStr[firstStrIndex] === item) {
      firstStrIndex++;
    }
  });

  return firstStrIndex === firstStr.length ? 'True' : 'False';
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


/*console.log(solution(('aawhdh\n' +
  'famiymrimfryosrhywclr\n').split('\n')));*/

