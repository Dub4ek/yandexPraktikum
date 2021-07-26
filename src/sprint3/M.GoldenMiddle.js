/**
 * Задача повышенной сложности

 На каждом острове в архипелаге Алгосы живёт какое-то количество людей или же остров необитаем (тогда на острове живёт 0 людей). Пусть на i-м острове численность населения составляет ai. Тимофей захотел найти медиану среди всех значений численности населения.

 Определение: Медиана массива чисел a_i —– это такое число, что половина чисел из массива не больше него, а другая половина не меньше. В общем случае медиану массива можно найти, отсортировав числа и взяв среднее из них. Если количество чисел чётно, то возьмём в качестве медианы полусумму соседних средних чисел, (a[n/2] + a[n/2 + 1])/2.

 У Тимофея уже есть отдельно данные по северной части архипелага и по южной, причём значения численности населения в каждой группе отсортированы по неубыванию.

 Определите медианную численность населения по всем островам Алгосов.

 Подсказка: Если n –— число островов в северной части архипелага, а m –— в южной, то ваше решение должно работать за .

 Формат ввода
 В первой строке записано натуральное число n, во второй —– натуральное число m. Они не превосходят 10 000.

 Далее в строку через пробел записаны n целых неотрицательных чисел, каждое из которых не превосходит 10 000, –— значения численности населения в северной части Алгосов.

 В последней строке через пробел записаны m целых неотрицательных чисел, каждое из которых не превосходит 10 000 –— значения численности населения в южной части Алгосов.

 Значения в третьей и четвёртой строках упорядочены по неубыванию.

 Формат вывода
 Нужно вывести одной число — найденную медиану.


 * @param data
 */
function solution(data) {
  const [n, m, nValues, mValues] = data;
  const collection = [];
  let i = 0;
  let j = 0;
  const allElementsCount = parseInt(n, 10) + parseInt(m, 10);
  let index = 0;
  const nCollection = nValues.split(' ');
  const mCollection = mValues.split(' ');
  const middle = Math.floor(allElementsCount / 2) + 1;

  if (parseInt(nCollection[nCollection.length - 1], 10) < parseInt(mCollection[0], 10)) {

  }

  while (index < middle) {
    let nValue = parseInt(nCollection[i], 10);
    let mValue = parseInt(mCollection[j], 10);

    if (isNaN(nValue)) {
      collection.push(mValue);
      index++;
    } else if (isNaN(mValue)) {
      collection.push(nValue);
      index++;
    } else if (nValue > mValue) {
      collection.push(mValue);
      index++;
      j++;
    } else {
      collection.push(nValue);
      index++;
      i++;
    }
  }

  if (allElementsCount % 2 === 0) {
    return (collection[index - 2] + collection[index - 1]) / 2;
  }

  return collection[index - 1];
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


/*console.log(solution(('2\n' +
  '1\n' +
  '1 3\n' +
  '2\n').split('\n')));
*/
