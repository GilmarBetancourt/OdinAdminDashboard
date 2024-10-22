const myLibrary = [];

function Book(author, title, pages, read){
    //here goes the constructor
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

let newBook={};

document.getElementById('formButton').addEventListener('click', 
    function() {
        //event.preventDefault();
        
        //get the information from the form
        const author =  document.getElementById("author").value;
        const title = document.getElementById("title").value;
        const pages = document.getElementById("pages").value;
        const read = document.getElementById("status").value;
        
        //create a new book instance
        newBook = new Book(author, title, pages, read);
        
        addBookToLibrary(newBook);

        //to reset the form
        this.reset();

});

///here we add the books to the library
function addBookToLibrary(){

    //this is the idea display the new book in the DOM
    const booksCards = document.getElementById('article');
    const cardDiv = document.createElement('div');
    cardDiv.textContent = `Author: ${newBook.author}, Title: ${newBook.title}, Pages: ${newBook.pages}, Read: ${newBook.read}`;
    booksCards.appendChild(cardDiv);
            
}