const body = document.querySelector('body');
const bookDiv = document.querySelector('#books');
const bookForm = document.querySelector('#book-form');
const buttonDumpBooks = document.querySelector('#dump-books');
const buttonAddBook = document.querySelector('#add-book');
const submit = document.querySelector('button[type="submit"]');
let books = [];
let dumpFlag = 0;

if (localStorage.getItem('books') != '') {
  books = JSON.parse(localStorage.getItem('books'));
  books.reverse();
}

function Book(title, author, publishYear, rating) {
  this.title = title;
  this.author = author;
  this.publishYear = publishYear;
  this.rating = rating;
}

function dumpBooks() {
  if (dumpFlag) {
    return;
  }
  for (let i = 0; i < books.length; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', 'book');
    bookDiv.appendChild(div);
    for (property in books[i]) {
      div.innerHTML += `${property}: ${books[i][property]}`;
      div.innerHTML += '<br>';
    }
  }
  dumpFlag = 1;
}

function addBook() {
  let bookValues = document.querySelectorAll('label input');
  let bookObj = {};
  flag = 0;
  bookValues.forEach(val => {
    if (val.value != "") {
      bookObj[val.name] = val.value;
    } else {
      flag = 1;
    }
  });
  if (!!!flag) {
    books.push(bookObj);
    localStorage.setItem('books', JSON.stringify(books));
  };
}

buttonDumpBooks.onclick = () => {
  buttonDumpBooks.pressed = true;
  bookDiv.style.display = '';
  if (buttonAddBook.pressed) {
    bookForm.style.display = 'none';
  }
  dumpBooks();
}

buttonAddBook.onclick = () => {
  buttonAddBook.pressed = true;
  bookForm.style.display = '';
  if (buttonDumpBooks.pressed) {
    bookDiv.style.display = 'none';
  }
}

function submition() {
  addBook();
}