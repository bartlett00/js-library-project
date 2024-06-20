let myLibrary = [];
const cardContainer = document.querySelector('#card-container');

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function() {
            return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read == 'true' ? 'have read' : 'not read yet'}`;
        }
    }

    addBookToLibrary = () => {
        myLibrary.push(this);
    }

    displayBook = () => {
        let bookCard = document.createElement('div');
        let removeBtn = document.createElement('button');
        let readStatusBtn = document.createElement('button');

        bookCard.setAttribute('class', 'card');
        bookCard.setAttribute('data-index', myLibrary.indexOf(this));
        bookCard.innerText = this.info();    

        readStatusBtn.setAttribute('class', 'readStatusBtn');
        readStatusBtn.innerText = 'Toggle Read';
        readStatusBtn.addEventListener('click', (e) => {
            if(this.read == 'true') {
                this.read = 'false';
            } else {
                this.read = 'true';
            }
            bookCard.textContent = this.info();
            bookCard.appendChild(removeBtn);
            bookCard.appendChild(readStatusBtn);
        });

        removeBtn.setAttribute('class', 'removeBtn');
        removeBtn.innerText = 'Remove';
        removeBtn.addEventListener('click', (e) => {
            cardContainer.removeChild(bookCard);
            let newLibraryArr = myLibrary.filter((entry) => {
                return entry !== myLibrary[myLibrary.indexOf(this)];
            });
            myLibrary = newLibraryArr;
        });


        cardContainer.appendChild(bookCard);
        bookCard.appendChild(removeBtn);
        bookCard.appendChild(readStatusBtn);
    }
}

let bookForm = document.getElementById('add-book');

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let newTitle = document.getElementById('title').value;
    let newAuthor = document.getElementById('author').value;
    let newPageNum = document.getElementById('page-num').value;
    let newRead = bookForm.elements['read'].value;

    addBookCard(newTitle, newAuthor, newPageNum, newRead);
});

function addBookCard(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    book.addBookToLibrary();
    book.displayBook();
}

let sidebarBtn = document.querySelector('#new-book');

sidebarBtn.addEventListener('click', (e) => {
    bookForm.classList.toggle('hidden');
});

let dune = new Book('Dune', 'Frank Herbert', '896', 'true');
dune.addBookToLibrary();
dune.displayBook();
