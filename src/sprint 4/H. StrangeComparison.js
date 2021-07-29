function solution(data) {
  const [firstStr, secondStr] = data;
  const dict = {};
  const secondValuesDict = {};

  let i = 0;
  let j = 0;
  let result = true;

  while (i < firstStr.length || j < secondStr.length) {
    if (!dict.hasOwnProperty(firstStr[i]) && !secondValuesDict.hasOwnProperty(secondStr[j])) {
      dict[firstStr[i]] = secondStr[j];
      secondValuesDict[secondStr[j]] = firstStr[i];
    }

    if (dict[firstStr[i]] !== secondStr[j] || secondValuesDict[secondStr[j]] !== firstStr[i]) {
      result = false;
    }

    i++;
    j++;
  }

  return result ? 'YES' : 'NO';
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


/*console.log(solution(('mxyskaoghi\n' +
  'qodfrgmslc\n').split('\n')));*/
