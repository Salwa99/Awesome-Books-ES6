import Book from './modules/book.js';
import Library from './modules/library.js';
import BooksLocalStorage from './modules/storage.js';

//display books
document.addEventListener('DOMContentLoaded', Library.display);
// add a book
document.querySelector('.book-form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const generateId = () => Date.now().toString(36) + Math.random().toString(36).substring(2);
  
    const book = new Book(title, author, generateId());
  
    Library.addBook(book);
    BooksLocalStorage.addBookStorage(book);
    Library.clearFields();
  });

  // remove a book
document.querySelector('#bookList').addEventListener('click', (e) => {
    Library.delete(e.target);
    BooksLocalStorage.removeBookStorage(e.target.parentElement.previousElementSibling.textContent);
  });

const hideForm = document.querySelector('#hideForm');
const hideAddBook = document.querySelector('#hideAddBook');
const hideContact = document.querySelector('#hideContact');
const hidden = document.querySelector('#hidden');
const hidden2 = document.querySelector('#hidden2');
const hidden3 = document.querySelector('#hidden3');

hideForm.addEventListener('click', (e) => {
  document.querySelector('.book-form').style.display = 'none';
  document.querySelector('#bookList').style.display = 'block';
  hidden.style.display = 'block';
  hidden2.style.display = 'none';
  hidden3.style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
  e.preventDefault();
});

hideAddBook.addEventListener('click', (e) => {
  document.querySelector('#bookList').style.display = 'none';
  document.querySelector('.book-form').style.display = 'block';
  document.querySelector('.contact').style.display = 'none';
  hidden.style.display = 'none';
  hidden2.style.display = 'block';
  hidden3.style.display = 'none';
  e.preventDefault();
});

hideContact.addEventListener('click', (e) => {
  document.querySelector('.contact').style.display = 'flex';
  document.querySelector('#bookList').style.display = 'none';
  document.querySelector('.book-form').style.display = 'none';
  hidden.style.display = 'none';
  hidden2.style.display = 'none';
  hidden3.style.display = 'flex';
  e.preventDefault();
});
