/**
 *  Рита решила оставить у себя одежду только трёх цветов: розового, жёлтого и малинового. После того как вещи других расцветок были убраны, Рита захотела отсортировать свой новый гардероб по цветам. Сначала должны идти вещи розового цвета, потом —– жёлтого, и в конце —– малинового. Помогите Рите справиться с этой задачей.

 Примечание: попробуйте решить задачу за один проход по массиву!

 Формат ввода
 В первой строке задано количество предметов в гардеробе: n –— оно не превосходит 1000000. Во второй строке даётся массив, в котором указан цвет для каждого предмета. Розовый цвет обозначен 0, жёлтый —– 1, малиновый –— 2.

 Формат вывода
 Нужно вывести в строку через пробел цвета предметов в правильном порядке.

 */


function solution(data) {
  const [count, collection] = data;
  const colorMap = {
    0:0,
    1:0,
    2:0,
  };

  collection.split('').forEach((item) => {
    colorMap[item] += 1;
  });

  const zeroIndex = colorMap['0'];
  const oneIndex = colorMap['0'] + colorMap['1'];
  const twoIndex = oneIndex + colorMap['2'];

  return Array.from({length: count}).map((item, i) => {
    if (i < zeroIndex) {
      return '0';
    } else if (i >= zeroIndex && i < oneIndex) {
      return '1';
    }

    return '2';
  }).join(' ');
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


//console.log(solution(('6\n' +
//  '2 1 1 2 0 2').split('\n')));