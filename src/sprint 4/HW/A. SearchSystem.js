//52337701
/**
 * ПРИНЦИП РАБОТЫ
 * Основной принцип работы  - создание так называемого "поискового индекса". Проходимся по всем документам и создаем хеш таблицу слов и индексы документов, где они встречаются. Так же создаем для каждого документа хеш таблицу со словами и их появлению в документе. После проходимся по всем запросам и находим релевантность, далее сортируем по этому признаку и берем самые большие значений
 *
 * ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ
 * За счет использования преимуществ хеш таблиц - доступ за O(1) и формированию "поискового индекса"
 *
 * ВРЕМЕННАЯ СЛОЖНОСТЬ
 * Самая долгая операция во всем коде - сортировка, она происходит за O(nlogn). Остальные операции мы можем опустить, т.к они производятся за линейное время и с дополнительной памятью
 */

/**
 *
 Тимофей пишет свою поисковую систему.

 Имеется n документов, каждый из которых представляет собой текст из слов. По этим документам требуется построить поисковый индекс. На вход системе будут подаваться запросы. Запрос —– некоторый набор слов. По запросу надо вывести 5 самых релевантных документов.

 Релевантность документа оценивается следующим образом: для каждого уникального слова из запроса берётся число его вхождений в документ, полученные числа для всех слов из запроса суммируются. Итоговая сумма и является релевантностью документа. Чем больше сумма, тем больше документ подходит под запрос.

 Сортировка документов на выдаче производится по убыванию релевантности. Если релевантности документов совпадают —– то по возрастанию их порядковых номеров в базе (то есть во входных данных).
 Формат ввода

 В первой строке дано натуральное число n —– количество документов в базе (1 ≤ n ≤ 104).

 Далее в n строках даны документы по одному в строке. Каждый документ состоит из нескольких слов, слова отделяются друг от друга одним пробелом и состоят из маленьких латинских букв. Длина одного текста не превосходит 1000 символов. Текст не бывает пустым.

 В следующей строке дано число запросов —– натуральное число m (1 ≤ m ≤ 104). В следующих m строках даны запросы по одному в строке. Каждый запрос состоит из одного или нескольких слов. Запрос не бывает пустым. Слова отделяются друг от друга одним пробелом и состоят из маленьких латинских букв. Число символов в запросе не превосходит 100.
 Формат вывода

 Для каждого запроса выведите на одной строке номера пяти самых релевантных документов. Если нашлось менее пяти документов, то выведите столько, сколько нашлось. Документы с релевантностью 0 выдавать не нужно.
 */

function solution(data) {
  const [count, ...others] = data;
  const documentsCollection = others.splice(0, count);
  const [requestsCount, ...requests] = others;

  function parseString(collection) {
    const result = [];

    collection.forEach((item) => {
      const currentItem = item.split(' ');
      const dict = new Map();

      currentItem.forEach(word => {
        if (dict.has(word)) {
          dict.set(word, dict.get(word) + 1);
        } else {
          dict.set(word, 1);
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
  const searchMap = new Map();

  searchList.forEach((item, i) => {
    for (const [key] of item) {
      if (!searchMap.has(key)) {
        searchMap.set(key, [i])
      } else {
        const newCollection = searchMap.get(key);

        newCollection.push(i);
        searchMap.set(key, newCollection);
      }
    }
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

      if (searchMap.has(requestWord)) {
        const indexes = searchMap.get(requestWord);

        indexes.forEach(index => {
          if (answer[requestIndex]) {
            if (answer[requestIndex].hasOwnProperty(index)) {
              answer[requestIndex][index] += searchList[index].get(requestWord);
            } else {
              answer[requestIndex][index] = searchList[index].get(requestWord);
            }

          } else {
            const arr = {};
            arr[index] = searchList[index].get(requestWord);
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
