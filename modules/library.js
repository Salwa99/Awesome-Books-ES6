import BooksLocalStorage from './storage.js';

export default class Library {
    static display() {
      const books = BooksLocalStorage.getBookStorage();
      books.forEach((book) => Library.addBook(book));
    }
  
    static addBook(book) {
      const list = document.querySelector('#bookList');
  
      const container = document.createElement('tr');
      container.innerHTML = `
             <td>"${book.title}" by ${book.author}</td>
             <td id="hide">${book.id}</td>
             <td id="caseDelete"><button class="delete">Remove</button></td>
         `;
  
      list.appendChild(container);
    }
  
    static delete(dl) {
      if (dl.classList.contains('delete')) {
        dl.parentElement.parentElement.remove();
      }
    }
  
    static clearFields() {
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
    }
  }

