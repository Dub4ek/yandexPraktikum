/**
 *  Алла ошиблась при копировании из одной структуры данных в другую. Она хранила массив чисел в кольцевом буфере. Массив был отсортирован по возрастанию, и в нём можно было найти элемент за логарифмическое время. Алла скопировала данные из кольцевого буфера в обычный массив, но сдвинула данные исходной отсортированной последовательности. Теперь массив не является отсортированным. Тем не менее, нужно обеспечить возможность находить в нем элемент за
 O(logn).
 Можно предполагать, что в массиве только уникальные элементы.
 Задачу необходимо сдавать, выбрав компилятор Make! Решение отправляется файлом. Требуемые сигнатуры функций лежат в заготовках кода на диске.

 От вас требуется реализовать функцию, осуществляющую поиск в сломанном массиве. Файлы с заготовками кода, содержащими сигнатуры функций и базовый тест для поддерживаемых языков, находятся на Яндекс.Диске по ссылке. Обратите внимание, что считывать данные и выводить ответ не требуется.
 Разрешение файла должно соответствовать языку, на котором вы пишете (.cpp, .java, .go, .js, .py). Если вы пишете на Java, назовите файл с решением Solution.java. Для остальных языков название может быть любым, кроме solution.ext, где ext – разрешение для вашего языка.

 Формат ввода
 Функция принимает массив натуральных чисел и искомое число k. Длина массива не превосходит 10000. Элементы массива и число k не превосходят по значению 10000.
 В примерах:
 В первой строке записано число n –— длина массива.
 Во второй строке записано положительное число k –— искомый элемент.
 Далее в строку через пробел записано n натуральных чисел, каждое из которых не превосходит 200000.

 Формат вывода
 Функция должна вернуть индекс элемента, равного k ,если такой есть в массиве (нумерация с нуля). Если элемент не найден, функция должна вернуть−1.
 Изменять массив нельзя.
 */

function brokenSearch(arr, k) {
  function findMin(arr, low, high) {

    while(low < high) {
      let mid = Math.floor(low + (high - low) / 2);

      if (arr[mid] == arr[high]) {
        high--;
      } else if (arr[mid] > arr[high]) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    return high;
  }

  function getIndex(shift, length) {
    return function (index) {
      if (index + shift > length - 1) {
        return index + shift - length;
      }

      return index + shift;
    }
  }

  function findElement(arr, index, element) {
    let start = 0;
    let end = arr.length;
    let result = -1;
    let getCurrentIndex = getIndex(index, arr.length);

    while (start < end) {
      let mid = Math.floor(start + (end - start) / 2);
      let midElement = arr[getCurrentIndex(mid)];

      if (midElement === element) {
        result = mid;
        break;
      } else if (element < midElement) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }

    if (result === -1) {
      return result;
    }

    return getCurrentIndex(result);
  }

  const minElemIndex = findMin(arr, 0, arr.length);

  return findElement(arr, minElemIndex, k);
}

function test() {
  const arr = '12 41 122 411 412 1222 3000 12222 122222'.split(' ').map(item => parseInt(item, 10));
  console.log(brokenSearch(arr, 3000))
  /*if (brokenSearch(arr, 5) !== 6)  {
    console.error("WA");
  } */
}

//test();
