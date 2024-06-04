const myLibrary = [];
const cardContainer = document.querySelector('#card-container');


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read == true ? 'read' : 'not read yet'}`;
    }
};

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    myLibrary.forEach(
        function(book) {
            let bookCard = document.createElement('div');
            bookCard.setAttribute('class', 'card');
            bookCard.innerText = book.info();
            cardContainer.appendChild(bookCard);
    });
}

let dune = new Book('Dune', 'Frank Herbert', '896', true);
addBookToLibrary(dune);
displayBooks();

console.log(dune);
console.log(myLibrary);