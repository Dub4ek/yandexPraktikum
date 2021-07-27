// 52243568
/**
 * имофей решил организовать соревнование по спортивному программированию, чтобы найти талантливых стажёров. Задачи подобраны, участники зарегистрированы, тесты написаны. Осталось придумать, как в конце соревнования будет определяться победитель.

 Каждый участник имеет уникальный логин. Когда соревнование закончится, к нему будут привязаны два показателя: количество решённых задач Pi и размер штрафа Fi. Штраф начисляется за неудачные попытки и время, затраченное на задачу.

 Тимофей решил сортировать таблицу результатов следующим образом: при сравнении двух участников выше будет идти тот, у которого решено больше задач. При равенстве числа решённых задач первым идёт участник с меньшим штрафом. Если же и штрафы совпадают, то первым будет тот, у которого логин идёт раньше в алфавитном (лексикографическом) порядке.

 Тимофей заказал толстовки для победителей и накануне поехал за ними в магазин. В своё отсутствие он поручил вам реализовать алгоритм быстрой сортировки (англ. quick sort) для таблицы результатов. Так как Тимофей любит спортивное программирование и не любит зря расходовать оперативную память, то ваша реализация сортировки не может потреблять O(n) дополнительной памяти для промежуточных данных (такая модификация быстрой сортировки называется "in-place").

 Как работает in-place quick sort
 Как и в случае обычной быстрой сортировки, которая использует дополнительную память, необходимо выбрать опорный элемент (англ. pivot), а затем переупорядочить массив. Сделаем так, чтобы сначала шли элементы, не превосходящие опорного, а затем —– большие опорного.

 Затем сортировка вызывается рекурсивно для двух полученных частей. Именно на этапе разделения элементов на группы в обычном алгоритме используется дополнительная память. Теперь разберёмся, как реализовать этот шаг in-place.

 Пусть мы как-то выбрали опорный элемент. Заведём два указателя left и right, которые изначально будут указывать на левый и правый концы отрезка соответственно. Затем будем двигать левый указатель вправо до тех пор, пока он указывает на элемент, меньший опорного. Аналогично двигаем правый указатель влево, пока он стоит на элементе, превосходящем опорный. В итоге окажется, что что левее от left все элементы точно принадлежат первой группе, а правее от right — второй. Элементы, на которых стоят указатели, нарушают порядок. Поменяем их местами (в большинстве языков программирования используется функция swap()) и продвинем указатели на следующие элементы. Будем повторять это действие до тех пор, пока left и right не столкнутся.
 На рисунке представлен пример разделения при pivot=5. Указатель left — чёрный, right — розовый.

 Формат ввода
 В первой строке задано число участников n, 1 ≤ n ≤ 100 000.
 В каждой из следующих n строк задана информация про одного из участников.
 i-й участник описывается тремя параметрами:

 уникальным логином (строкой из маленьких латинских букв длиной не более 20)
 числом решённых задач Pi
 штрафом Fi
 Fi и Pi — целые числа, лежащие в диапазоне от 0 до 109.
 Формат вывода
 Для отсортированного списка участников выведите по порядку их логины по одному в строке.
 */


function solution(data) {
  const [count, ...participants] = data;
  const collection = participants.map(item => item.split(' ')).filter(item => !isNaN(+item[1]));

  function compare(a, b, symbol) {
    const [nameA, scoreA, failA] = a;
    const [nameB, scoreB, failB] = b;
    let result = undefined;

    if (parseInt(scoreA, 10) !== parseInt(scoreB, 10)) {
      result = symbol === '>'
        ? (parseInt(scoreA, 10) > parseInt(scoreB, 10))
        : (parseInt(scoreA, 10) < parseInt(scoreB, 10));
    } else if (parseInt(failA, 10) !== parseInt(failB, 10)) {

      result =  symbol === '>'
        ? -parseInt(failA, 10) > -parseInt(failB, 10)
        : -parseInt(failA, 10) < -parseInt(failB, 10);
    } else {
      result = symbol === '>'
        ? nameA < nameB
        : nameA > nameB;
    }
    return result;
  }

  function quickSort(arr, left, right) {
    const originLeft = left;
    const originRight = right;

    let pivot = Math.floor((right + left) / 2);
    let pivotElement = arr[pivot];

    while (left <= right) {
      while(compare(arr[left], pivotElement, '>')) {
        left++;
      }

      while(compare(arr[right], pivotElement, '<')) {
        right--;
      }

      if (left <= right) {
        let temp = arr[right];
        arr[right] = arr[left];
        arr[left] = temp;
        left++;
        right--;
      }
    }

    if (originLeft < left - 1) {
      quickSort(arr, originLeft, left - 1);
    }
    if (left < originRight) {
      quickSort(arr, left, originRight);
    }
  }

  quickSort(collection, 0, collection.length - 1);

  return collection.map(item => item[0]).join('\n');
}


var readline = require('readline');
var io_interface = readline.createInterface({input: process.stdin});

let output_numbers = [];
io_interface.on('line', function (line) {
  output_numbers.push(line);
})

io_interface.on('close', function () {
  console.log(solution(output_numbers))
  //process.stdout.write(solution(output_numbers));
})



/*console.log(solution(('13\n' +
  'tufhdbi 76 58\n' +
  'rqyoazgbmv 59 78\n' +
  'qvgtrlkmyrm 35 27\n' +
  'tgcytmfpj 70 27\n' +
  'xvf 84 19\n' +
  'jzpnpgpcqbsmczrgvsu 30 3\n' +
  'evjphqnevjqakze 92 15\n' +
  'wwzwv 87 8\n' +
  'tfpiqpwmkkduhcupp 1 82\n' +
  'tzamkyqadmybky 5 81\n' +
  'amotrxgba 0 6\n' +
  'easfsifbzkfezn 100 28\n' +
  'kivdiy 70 47\n' +
  'Просто тест').split('\n')));*/
