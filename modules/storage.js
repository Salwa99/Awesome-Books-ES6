
export default class BooksLocalStorage {
    static getBookStorage() {
      let books;
      if (localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
      return books;
    }
  
    static addBookStorage(book) {
      const books = BooksLocalStorage.getBookStorage();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
  
    static removeBookStorage(id) {
      const books = BooksLocalStorage.getBookStorage();
      books.forEach((book, index) => {
        if (book.id === id) books.splice(index, 1);
      });
  
      localStorage.setItem('books', JSON.stringify(books));
    }
  }