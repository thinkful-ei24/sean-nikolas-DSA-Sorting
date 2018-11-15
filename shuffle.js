
const arr = [1, 2, 3, 4, 5, 6];

function shuffle(arr) {
  for(let i=0; i<arr.length; i++) {
    const randomIndex = Math.floor(Math.random()*arr.length);
    swap(arr, randomIndex, i);
  }
  return arr;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


console.log(shuffle(arr));