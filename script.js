const myLibrary = [];

function Book(author, title, pages, read){
    //here goes the constructor
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

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
function addBookToLibrary(book){
    
    const articleDiv = document.getElementById('article');

    //creating the DOM elements
    const cardDiv = document.createElement('div');
    const bookTitle = document.createElement('h2');
    const bookAuthor = document.createElement('h3');
    const bookPages = document.createElement('p');
    const bookStatus = document.createElement('p');

    //adding the classes to the DOM elements
    cardDiv.classList.add("card");
    bookTitle.classList.add("title");
    bookAuthor.classList.add("author");
    bookPages.classList.add("pages");
    bookStatus.classList.add("status");

    // Setting text content for the elements
    bookTitle.textContent = book.title; 
    bookAuthor.textContent = book.author; 
    bookPages.textContent = `Pages: ${book.pages}`; 
    bookStatus.textContent = `Status: ${book.read}`; 

    //appending the elements to the card
    cardDiv.appendChild(bookTitle);
    cardDiv.appendChild(bookAuthor);
    cardDiv.appendChild(bookPages);
    cardDiv.appendChild(bookStatus);

    //appending the card to the article
    articleDiv.appendChild(cardDiv);
            
}