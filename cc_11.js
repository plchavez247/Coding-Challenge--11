//Task 1: Creating a book class
class Book{
    constructor (title, author, isbn, copies){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    };// creating a class with properties


getDetails(){
    return`Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;//return details as a string
};

updateCopies(quantity){
    this.copies += quantity;//update the number of copies available
};

};

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log (book1.getDetails());
book1.updateCopies(-1);
console.log(book1.getDetails());//Test Cases

//Task 2: Creating a borrower class

class Borrower{
    constructor(name, borrowerId){
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = []; //using array that stores book titles
    };

    borrowBook(book){
        this.borrowedBooks.push(book);//adds a book title to the borrowed books list
        }
    

    returnBook(book){
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);//creates new array without specified book, removes the book title.
     
    };
};




const borrower1 = new Borrower ("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);//Test Cases

//Task 3: Creating a Library Class

class Library {
    constructor(){
        this.books = []
        this.borrowers =[];
    }

    addBook(book){
        this.books.push(book);//adds a new book to the library
    }

    listBooks(){
        this.books.forEach(book => {
            console.log(book.getDetails()); //Logs all book details
        })
    }
    lendBook(borrowerId, isbn){
        let borrower = this.borrowers.find(b => b.borrowerId === borrowerId)
        let book = this.books.find(b=> b.isbn === isbn);
        if (!borrower) return;// If borrower is not found
        if(!book || book.copies <= 0) return;// If book is not available
        book.updateCopies(-1);// Decrease amount of copies
        borrower.borrowBook(book.title);// Add book title to borrowers list
};
    returnBook(borrowerId, isbn){
        let borrower = this.borrowers.find(b=> b.borrowerId === borrowerId);
        let book = this.books.find(b => b.isbn === isbn);
        if (!borrower) return;// If borrower not found
        if (!book) return;//If book not found
        book.updateCopies(1)// Increase amount of copies
        borrower.returnBook(book.title);// Remove book title from borrowers list
    }
};

const library = new Library();
library.addBook(book1);
library.listBooks();//Test Cases
library.borrowers.push(borrower1);// Add to library before lending a book

//Task 4: Implementing Book Borrowing
library.lendBook(201, 123456);
console.log(book1.getDetails());
console.log(borrower1.borrowedBooks);//Test Cases

//Task 5: Implementing Book Returns
library.returnBook(201, 123456);
console.log(book1.getDetails());
console.log(borrower1.borrowedBooks);//Test Cases
