// Task 1 - Creating a Book Class 
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title; // stores title
        this.author = author; // stores author 
        this.isbn = isbn; // stores ISBN
        this.copies = copies; // stores copies 
    }
    getDetails() { // returns book details in a sting 
        return `Title: ${this.title}, Author: ${this.author},
         ISBN: ${this.isbn}, Copies: ${this.copies}`;

    }
    updateCopies(quantity) { // modifies the available copies 
        this.copies += quantity;
    }
}
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5); // declared book1 
console.log(book1.getDetails());// logged book1 
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1); // updated copies 
console.log(book1.getDetails()); // logged updated book1 
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Task 2- Created a borrower class 
class Borrower {
    constructor(name, borrowerId) {
        this.name = name; // stores name 
        this.borrowerId = borrowerId; // stores borrower ID 
        this.borrowedBooks = [] // stores name of borrowed books
    }
    borrowBook(book) { // adds book title to borrowedBooks 
        this.borrowedBooks.push(book);
    }
    returnBook(book) { // removes book from borrowedBooks 
        let index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
        }
    }
}
const borrower1 = new Borrower("Alice Johnson", 201); // declared borrower1 
borrower1.borrowBook("The Great Gatsby"); // added book title to borrowedBooks 
console.log(borrower1.borrowedBooks); // logged 
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby"); // removed book title 
console.log(borrower1.borrowedBooks); // logged 
// Expected output: []

// Task 3 - Creating a library class 
class Library {
    constructor() {
        this.books = [];// stores books array 
        this.borrowers = []; // stores borrowers array 
    }
    addBook(book) { // adds new book to library 
        this.books.push(book);
    }
    listBooks() { // logs book details 
        this.books.forEach(book => {console.log(book.getDetails());

        });
    }
    // Task 4- Implementing book borrowing 
    lendBook(borrowerId, isbn) { 
        let book = this.books.find(b => b.isbn === isbn); // find book by ISBN
        let borrower = this.borrowers.find(b => b.borrowerId === borrowerId); // find book by borrower 
        // shows amount of books left 
        if(book && book.copies > 0 && borrower) {
            book.updateCopies(-1);
            borrower.borrowBook(book.title);
        }
    }
    // Task 5 - Implementing book returns 
    returnBook(borrowerId, isbn) {
        let book = this.books.find(b => b.isbn === isbn);
        if(!book) {
            console.log('Book not found');
            return;
        }
        let borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
        if(!borrower) {
            console.log('Borrower not found');
            return;
        }
        book.updateCopies(1);
        borrower.returnBook(book.title);
    }
}
const library = new Library(); 
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Task 4 test cases 
library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

// Task 5 test cases 
library.returnBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(borrower1.borrowedBooks);
// Expected output: []