const myLibrary = [];
const cardContainer = document.querySelector('#card-container');


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read == 'true' ? 'have read' : 'not read yet'}`;
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

function displayBook(book) {
    let bookCard = document.createElement('div');
    bookCard.setAttribute('class', 'card');
    bookCard.innerText = book.info();
    cardContainer.appendChild(bookCard);
}


let bookForm = document.getElementById('add-book');

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let newTitle = document.getElementById('title').value;
    let newAuthor = document.getElementById('author').value;
    let newPageNum = document.getElementById('page-num').value;
    let newRead = bookForm.elements['read'].value;

    bookFormSidebar(newTitle, newAuthor, newPageNum, newRead);
});

function bookFormSidebar(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    displayBook(book);
}



let dune = new Book('Dune', 'Frank Herbert', '896', true);
addBookToLibrary(dune);
displayBooks();

console.log(dune);
console.log(myLibrary);