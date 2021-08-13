/**
 *
 Тимофей решил купить несколько домов на знаменитом среди разработчиков Алгосском архипелаге. Он нашёл n объявлений о продаже, где указана стоимость каждого дома в алгосских франках. А у Тимофея есть k франков. Помогите ему определить, какое наибольшее количество домов на Алгосах он сможет приобрести за эти деньги.
 Формат ввода

 В первой строке через пробел записаны натуральные числа n и k.

 n — количество домов, которые рассматривает Тимофей, оно не превосходит 1000;

 k — общий бюджет, не превосходит 10000;

 В следующей строке через пробел записано n стоимостей домов. Каждое из чисел не превосходит 10000. Все стоимости — натуральные числа.
 Формат вывода

 Выведите одно число —– наибольшее количество домов, которое может купить Тимофей.

 */

function solution(data) {
  const [values, houses]  = data;
  const [houseCount, amount] = values.split(' ').map(item => parseInt(item, 10));
  const collection = houses.split(' ').sort((a, b) => a - b);
  let count = 0;
  let currentAmount = 0;
  let index = 0;

  while (count <= houseCount && currentAmount <= amount) {
    currentAmount += parseInt(collection[index], 10);

    if (currentAmount <= amount) {
      count++;
      index++;
    } else {
      break;
    }
  }

  return count;
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


console.log(solution(('8 3\n' +
  '9 2 8 4 6 5 3 10').split('\n')));

