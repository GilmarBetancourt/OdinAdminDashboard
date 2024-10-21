const myLibrary = [];

function Book(author, title, pages, read){
    //here goes the constructor
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

document.getElementById('bookForm').addEventListener('submit', 
    function(event) {
        event.preventDefault();
        
        //get the information from the form
        const author =  document.getElementById("author").value;
        const title = document.getElementById("title").value;
        const pages = document.getElementById("pages").value;
        const read = document.getElementById("status").value;
        
        //create a new book instance
        const newBook = new Book(author, title, pages, read);
        
        addBookToLibrary(newBook);

        //to reset the form
        this.reset();

});

///here we add the books to the library
function addBookToLibrary(){

    //this is the idea display the new book in the DOM
    const booksList = document.getElementById('booksList');
    const bookDiv = document.createElement('div');
    bookDiv.textContent = `Author: ${book.author}, Title: ${book.title}, Pages: ${book.pages}, Read: ${book.read ? 'Yes' : 'No'}`;
    booksList.appendChild(bookDiv);
            
}