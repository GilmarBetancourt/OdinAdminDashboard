const myLibrary = [];

function Book(author, title, pages, read){
    //here goes the constructor
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

document.getElementById('formButton').addEventListener('click', 
    function(event) {
        event.preventDefault();
       
        //get the information from the form
        const author =  document.getElementById("author").value;
        const title = document.getElementById("title").value;
        const pages = document.getElementById("pages").value;
        const read = document.getElementById("status").value;
        
        //create a new book instance
        let newBook = new Book(author, title, pages, read);
        
        //add the book to the array
        myLibrary.push(newBook);

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
    const bookStatus = document.createElement('button');
    const trashIcon = document.createElement('span');

    //adding the classes to the DOM elements
    cardDiv.classList.add("card");
    bookTitle.classList.add("title");
    bookAuthor.classList.add("author");
    bookPages.classList.add("pages");
    bookStatus.classList.add("status");
    trashIcon.classList.add("trash");

    //Set the onclick functions
    bookStatus.onclick = function(){changeStatus(bookStatus);}
  
    trashIcon.onclick = function(){removeBook(cardDiv, book);};

    // Setting text content for the elements
    bookTitle.textContent = book.title; 
    bookAuthor.textContent = book.author; 
    bookPages.textContent = `Pages: ${book.pages}`; 
    bookStatus.textContent = book.read;
    trashIcon.textContent = "✗";

    //appending the elements to the card
    cardDiv.appendChild(bookTitle);
    cardDiv.appendChild(bookAuthor);
    cardDiv.appendChild(bookPages);
    cardDiv.appendChild(bookStatus);
    cardDiv.appendChild(trashIcon);

    //appending the card to the article
    articleDiv.appendChild(cardDiv);
            
}

//To change the status
function changeStatus(button) {
    
    if (button.textContent === "Read") {
        button.textContent = "Not Read";
    } else {
        button.textContent = "Read";
    }
}

//To eliminate the book
function removeBook(cardDiv, book) {
    // Remove the book from the library array
    const index = myLibrary.indexOf(book);
    if (index > -1) {
        myLibrary.splice(index, 1); // Remove the book from the array
    }

    // Remove the card from the DOM
    cardDiv.remove();
}