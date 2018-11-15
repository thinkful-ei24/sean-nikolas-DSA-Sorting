const numbers = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';

const arr = numbers.split(' ').map(element => parseInt(element, 10));

function quicksort(arr, start=0, stop=arr.length) {
  if(start >= stop) {
    return arr;
  }

  const middle = partition(arr, start, stop);
  quicksort(arr, start, middle);
  quicksort(arr, middle+1, stop);
  return arr;
}

function partition(arr, start, stop) {
  let j = start;
  const pivot = arr[stop-1];
  for(let i=start; i<stop-1; i++) {
    if(arr[i] <= pivot) {
      swap(arr, i, j);
      j++;
    }
  }
  swap(arr, j, stop-1);
  return j;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(quicksort(arr));