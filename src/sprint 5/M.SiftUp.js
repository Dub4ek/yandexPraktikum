function siftUp(heap, idx) {
  let currentIdx = idx;

  while (currentIdx > 1 && heap[currentIdx] > heap[currentIdx / 2]) {
    let temp = heap[currentIdx];
    heap[currentIdx] = heap[currentIdx / 2]
    heap[currentIdx / 2] = temp;
    currentIdx /= 2;
  }

  return currentIdx;
}