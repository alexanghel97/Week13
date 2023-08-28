"use strict";

import Book from "./book.js";
import Magazine from "./magazine.js";
import Library from "./library.js";

const myLibrary = new Library("First Library");

const book1 = new Book("Lord of the Rings", "Tolkein", 45566546525);
const book2 = new Book("Harry Potter", "J. K. Rowling", 878965468498);
const book3 = new Book("The Book Thief", "Markus Zusak", 5666849826);
const book4 = new Book("Game Of Thrones", "George R.R Martin", 2226654884);
const book5 = new Book("1984", "George Orwell", 6678459845692);
const book6 = new Book("The Lord and the Fallen", "Samuel Murry", 88521654883);

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);
myLibrary.addBook(book6);
// myLibrary.removeBook(6678459845692);
// myLibrary.findBooksByAuthor("Tolkein");
console.log(myLibrary);
myLibrary.getTotalBooksByAuthor("Tolkein");
myLibrary.hasAnyBooksByAuthor("Tolkein");
myLibrary.haveAllBooksByAuthor("Tolkein");
myLibrary.getBookTitles();
// myLibrary.getBooksWithTitleContaining("Lord");
