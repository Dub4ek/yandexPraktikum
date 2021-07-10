/**
 После окончания уроков n групп школьников вышли на улицу и собрались ехать домой к Поликарпу на празднование его дня рождения. Известно, что i-ая группа состоит из si друзей (1 ≤ si ≤ 4), которые не хотят расставаться по пути к Поликарпу. Решено ехать на такси. Каждая машина может вместить не более четырех пассажиров. Какое минимальное количество машин потребуется школьникам, если каждая группа должна целиком находиться в одной из машин такси (но одна машина может вмещать более чем одну группу)?
Входные данные

В первой строке записано целое число n (1 ≤ n ≤ 105) — количество групп школьников. Вторая строка содержит последовательность целых чисел s1, s2, ..., sn (1 ≤ si ≤ 4). Числа записаны через пробел, si — количество ребят в i-ой группе.
Выходные данные

Выведите единственное число — минимальное необходимое количество такси, чтобы отвезти всех ребят к Поликарпу.
Примеры
Входные данные
Скопировать

5
1 2 4 3 3

Выходные данные
Скопировать

4

Входные данные
Скопировать

8
2 3 4 4 2 1 3 1

Выходные данные
Скопировать

5
 */

function solution(data) {
  const [groupsCount, values] = data;
  const groupsCollection = values
    .split(' ')
    .map(item => parseInt(item, 10))
    .reduce((prev, cur) => {
      if (!prev[cur]) {
        prev[cur] = 1;
      } else {
        prev[cur] += 1;
      }

      return prev;
    },{});
  let result = 0;

  result += groupsCollection[4];
  result += groupsCollection[3];
  groupsCollection[1] -= groupsCollection[3];

  if (groupsCollection[2] === 1) {
    result += 1;
  } else {
    result += Math.ceil(groupsCollection[2] * 2 / 4);
  }

  groupsCollection[1] -= ((groupsCollection[2] * 2) % 4);

  if (groupsCollection[1] > 0) {
    result += Math.ceil(groupsCollection[1] / 4);
  }

  return result;
}

/*var readline = require('readline');
var io_interface = readline.createInterface({input: process.stdin});

let output_numbers = [];
io_interface.on('line', function (line) {
  output_numbers.push(line);
})

io_interface.on('close', function () {
  process.stdout.write(solution(output_numbers));
})*/

console.log(solution(('8\n' +
  '2 3 4 4 2 1 3 1\n').split('\n')));

