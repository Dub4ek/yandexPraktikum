/**
 * Гоше дали задание написать красивую сортировку слиянием. Поэтому Гоше обязательно надо реализовать отдельно функцию merge и функцию merge_sort.
 Функция merge принимает два отсортированных массива, сливает их в один отсортированный массив и возвращает его. Если требуемая сигнатура имеет вид merge(array, left, mid, right), то первый массив задаётся полуинтервалом
 [left,mid)
 массива array, а второй – полуинтервалом
 [mid,right)
 массива array.
 Функция merge_sort принимает некоторый подмассив, который нужно отсортировать. Подмассив задаётся полуинтервалом — его началом и концом. Функция должна отсортировать передаваемый в неё подмассив, она ничего не возвращает.
 Функция merge_sort разбивает полуинтервал на две половинки и рекурсивно вызывает сортировку отдельно для каждой. Затем два отсортированных массива сливаются в один с помощью merge.
 Заметьте, что в функции передаются именно полуинтервалы
 [begin,end)
 , то есть правый конец не включается. Например, если вызвать merge_sort(arr, 0, 4), где
 a
 r
 r
 =
 [
 4
 ,
 5
 ,
 3
 ,
 0
 ,
 1
 ,
 2
 ]
 , то будут отсортированы только первые четыре элемента, изменённый массив будет выглядеть как
 a
 r
 r
 =
 [
 0
 ,
 3
 ,
 4
 ,
 5
 ,
 1
 ,
 2
 ]
 .

 */

function merge_sort(arr, left, right) {
  console.log(left, right)
  if (right - left === 1) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  } else {
    let mid = Math.floor((left + right) / 2);
    merge_sort(arr, left, mid);
    merge_sort(arr, mid, right);
  }
}

function merge(arr, left, mid, right) {
  let l = left;
  let k = 0;
  let r = mid;
  const result = new Array(mid - left + right - mid);

  while(l < mid && r < right) {
    if (arr[l] <= arr[r] ) {
      result[k] = arr[l];
      l++;
    } else {
      result[k] = arr[r];
      r++;
    }

    k++;
  }

  while (l < mid) {
    result[k] = arr[l];
    l++;
    k++;
  }

  while (r < right) {
    result[k] = arr[r];
    r++;
    k++;
  }

  return result
}

function test() {
  var a = [1, 4, 9, 2, 10, 11];
  var b = merge(a, 0, 3, 6);
  var expected = [1, 2, 4, 9, 10, 11];

  var c = [1, 4, 2, 10, 1, 2];
  merge_sort(c, 0, 6)
  expected = [1, 1, 2, 2, 4, 10];

  console.log(c);
}

console.log(test())