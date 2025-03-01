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