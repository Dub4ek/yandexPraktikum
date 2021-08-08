function solution(data) {
  const [count, ...others] = data;
  const documentsCollection = others.splice(0, count);
  const [requestsCount, ...requests] = others;

  function parseString(collection) {
    const result = [];

    collection.forEach((item) => {
      const currentItem = item.split(' ');
      const dict = {};

      currentItem.forEach(word => {
        if (dict.hasOwnProperty(word)) {
          dict[word] += 1;
        } else {
          dict[word] = 1;
        }
      })

      result.push(dict);
    })

    return result;
  }

  const searchList = parseString(documentsCollection);
  const requestList = requests.map(item => item.split(' '));
  let results = [];
  let answer = [];

  function addFive(col, value) {
    let changed = false;

    if (col.length === 0) {
      col.push(value);
      return;
    }

    if (col[0][0] < value[0]) {
      col.unshift(value)
    } else {
      for (let i = 0; i < col.length; i++) {
        if (col[i][0] <= value[0] && col[i + 1] && col[i + 1][0] < value[0]) {
          let temp = [...col[i]];
          let tempCol = [];

          if (temp[0] === value[0]) {
            tempCol = temp[1] < value[1] ? [temp, value] : [value, temp]
          } else {
            tempCol = temp[0] > value[0] ? [temp, value] : [value, temp];
          }

          col.splice(i, 1, ...tempCol);
          changed = true;
          break;
        }
      }

      if (!changed) {
        col.push(value);
      }
    }

    if (col.length > 5) {
      col.length = 5;
    }
  }

  requestList.forEach(request => {
    for (let j = 0; j < searchList.length; j++) {
      let currentDocument = searchList[j];
      let relevant = 0;

      for (let i = 0; i < request.length; i++) {
        let requestWord = request[i];

        if (currentDocument[requestWord]) {
          relevant += 1;
        }
      }
      if (relevant > 0)
        addFive(results, [relevant, j]);

      relevant = 0;
    }

    answer.push(results);
    results = [];
  });

  return answer.map(item => item.map(element => element[1] + 1).join(' ')).join('\n');
}

var readline = require('readline');
var io_interface = readline.createInterface({input: process.stdin});

let output_numbers = [];
io_interface.on('line', function (line) {
  output_numbers.push(line);
})

io_interface.on('close', function () {
  console.log(solution(output_numbers));
})

/*console.log(solution(('7\n' +
  'buy flat in moscow\n' +
  'rent flat in moscow\n' +
  'sell flat in moscow\n' +
  'want flat in moscow like crazy in\n' +
  'clean flat in moscow on weekends crazy\n' +
  'renovate flat in moscow\n' +
  'weekends in moscow for flat in\n' +
  '1\n' +
  'flat in moscow for crazy weekends\n').split('\n')));
*/