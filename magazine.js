import Book from "./book.js";

export default class Magazine extends Book {
  constructor(title, author, ISBN, IssueNumber) {
    super(title, author, ISBN);
    this.IssueNumber = IssueNumber;
  }
}
