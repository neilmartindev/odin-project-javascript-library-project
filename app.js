// Book class: represents a book
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI class: handles UI tasks
class UI {
    static displayBooks() {
        const storedBooks = [
            {
                title: '1984',
                author: 'George Orwell',
                isbn: '9780140817744'
            },

            {
                title: 'Sapiens',
                author: 'Yuval Noah Harari',
                isbn: '9780099590088'
            }
        ];

        const books = storedBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }
}
// Store class: handles local storage within the browser

// Events: display books

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: add a book

document.querySelector('#book-form').addEventListener('submit', (e)=> {

    //Prevent action submit
    e.preventDefault();
    //Get from values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Instatiate book
    const book = new Book(title, author, isbn);

    console.log(book)

})

// Event: remove a book