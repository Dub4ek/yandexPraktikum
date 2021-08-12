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

  function comparator(a, b) {
    const [valueA, indexA] = a;
    const [valueB, indexB] = b;

    if (valueA === valueB) {
      return indexA - indexB;
    }

    return valueB - valueA;
  }


  const searchList = parseString(documentsCollection);
  const searchMap = {};

  searchList.forEach((item, i) => {
    Object.keys(item).forEach(searchWord => {
      if (!searchMap.hasOwnProperty(searchWord)) {
        searchMap[searchWord] = [i];
      } else {
        searchMap[searchWord].push(i);
      }
    })
  });


  const requestList = requests.map(item => item.split(' ').reduce((prev, cur) => {
    prev[cur] = null;
    return prev;
  }, {}));
  let answer = new Array(parseInt(requestsCount, 10));

  requestList.forEach((request, requestIndex) => {
    const requestCollection = Object.keys(request);

    for (let i = 0; i < requestCollection.length; i++) {
      let requestWord = requestCollection[i];

      if (searchMap[requestWord]) {
        const indexes = searchMap[requestWord];

        indexes.forEach(index => {
          if (answer[requestIndex]) {
            if (answer[requestIndex].hasOwnProperty(index)) {
              answer[requestIndex][index] += searchList[index][requestWord];
            } else {
              answer[requestIndex][index] = searchList[index][requestWord];
            }

          } else {
            const arr = {};
            arr[index] = searchList[index][requestWord];
            answer[requestIndex] = arr;
          }
        });
      }
    }
  });

  return answer
    .map((item) => {
      return Object.keys(item)
                .map(key => [item[key], parseInt(key)])
                .sort(comparator)
                .slice(0, 5);
    })
    .map(item => item.map(element => element[1] + 1)
    .join(' '))
    .join('\n')
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

/*console.log(solution(('6\n' +
  'vfjabhs hmifg cxuzliah nnv vydtpq oyu rke eneo dbbnc occteh ovixjjuceb akjmcpoee ms nueamfz\n' +
  'urklqk xiryl mxdsyh fmwvp ka ne lpw sdxcgkr xgywaxx eqgqmfcj rtgmv akdid tgzusr ecoyq fmwvp\n' +
  'ggmj jdug ikpbjmj wgdkb zqm hshgpodp cw bmorjwlhwj fynprybuw zvwnpw fxfq lls sakzfec lap vusyr\n' +
  'ezpsnpmzo ycvpow remdxqgv obnhspuk wubb vv ht mkpvpat fmwvp eu xlufvgxwt su muoscjnkb dnssnuqa\n' +
  'lpw gfozlowmv lunvvv evs vyzpx zh juwzivkv cnyxrjym wqpaudztd uleeer myksx yyqdrxniyc oyu kcjjgcckq\n' +
  'msogvjpuep ogk bmorjwlhwj pgmewgazl ir lap vpomyz npgjyaor gwoa bkwsj bglixoivq sw krgzivey\n' +
  '1\n' +
  'rvwpiy fr vpomyz eneo zh wgdkb gwoa dt fmwvp rscbnnlz qdeu bmorjwlhwj yq eu myksx go yyqdrxniyc').split('\n')));*/
