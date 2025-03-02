//Task 1: Creating a book class
class Book{
    constructor (title, author, isbn, copies){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    };// creating a class with properties


getDetails(){
    return`Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
};

updateCopies(quantity){
    this.copies += quantity;
};

};

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log (book1.getDetails());
book1.updateCopies(-1);
console.log(book1.getDetails());

//Task 2: Creating a borrower class

class Borrower{
    constructor(name, borrowerId, borrowedBooks = []){
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = borrowedBooks;
    };

    borrowBook(book){
        this.borrowedBooks.push(book);
    }

    returnBook(book){
        this.borrowedBooks = this.borrowedBooks.filter(a => a !== book);//creates new array without specified book
    }
};

const borrower1 = new Borrower ("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);

