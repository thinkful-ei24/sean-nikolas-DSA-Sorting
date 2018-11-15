
const books = ['c', 'a', 'b', 'z', 'd', 'e'];

function sortBooks(books) {
  for(let i=0; i<books.length; i++) {
    for(let j=0; j<books.length; j++) {
      if(books[i] < books[j]) {
        swap(books, i, j);
      }
    }
  }
  return books;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(sortBooks(books));