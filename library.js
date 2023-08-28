"use strict";

export default class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  removeBook(ISBN) {
    this.books = this.books.filter((book) => book.ISBN !== ISBN);
  }
  findBooksByAuthor(author) {
    this.books = this.books.filter((book) => book.author === author);
  }
  getBooksWithTitleContaining(keyword) {
    this.books = this.books.filter((book) => book.title.includes(keyword));
  }
  getTotalBooksByAuthor(author) {
    console.log(
      this.books.reduce((total, book) => {
        if (book.author === author) {
          return total + 1;
        }
        return total;
      }, 0)
    );
  }
  hasAnyBooksByAuthor(author) {
    console.log(this.books.some((book) => book.author === author));
  }
  haveAllBooksByAuthor(author) {
    console.log(this.books.every((book) => book.author === author));
  }
  getBookTitles() {
    console.log(this.books.map((book) => book.title));
  }
}
