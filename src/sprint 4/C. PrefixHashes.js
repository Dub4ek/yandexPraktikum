function solution(data) {
  const [a, m, s, count, ...prefixes] = data;
  const currentM = parseInt(m, 10);
  const currentA = parseInt(a, 10);
  const currentCount = parseInt(count, 10);
  const lettersCollection = s.split('');
  const collection = prefixes.map(item => item.split(' ').map(item => parseInt(item, 10)))

  let hashCollection = new Array(lettersCollection.length);
  let resultCollection = [];
  let pows = new Array(lettersCollection.length);
  pows[0] = 1;

  for (let i = 1; i < s.length; i++) {
    pows[i] = pows[i - 1] * currentA % currentM;
  }

  hashCollection[0] = 0;
  for (let i = 1; i <= lettersCollection.length; i++) {
    const currentItem = lettersCollection[i - 1].charCodeAt(0);
    hashCollection[i] = (hashCollection[i - 1] * currentA % currentM + currentItem) % currentM;
  };
  hashCollection.shift()

  collection.forEach((item, i) => {
    const [l,r] = item;

    if (l && r && l !== r && l !== 1) {
      resultCollection.push((hashCollection[r - 1] + currentM -  (hashCollection[l - 2] * pows[r - (l - 1)]) % currentM) % currentM);
    } else if (l !== 1 && l === r) {
      resultCollection.push(lettersCollection[l - 1].charCodeAt(0));
    } else {
      resultCollection.push(hashCollection[r - 1]);
    }
  })

  return resultCollection.join('\n');
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


/*console.log(solution(('1000\n' +
  '1000009\n' +
  'abcdefgh\n' +
  '7\n' +
  '1 1\n' +
  '1 5\n' +
  '2 3\n' +
  '3 4\n' +
  '4 4\n' +
  '1 8\n' +
  '5 8\n').split('\n')));*/
