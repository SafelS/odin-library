let myLibrary = [];

function Book(id, name, author, year) {
    this.id = id
    this.name = name;
    this.author = author;
    this.year = year;
}

function callAddBookToLibrary(){
    const bookValue = document.querySelector(".bookInput").value;
    const authorValue = document.querySelector(".authorInput").value;
    const yearValue = document.querySelector(".yearInput").value;

    addBookToLibrary(bookValue,authorValue,yearValue);

}

function addBookToLibrary(bookName, bookAuthor, bookYear){
    
    let id = crypto.randomUUID();
    const newBook = new Book(id, bookName, bookAuthor, bookYear);
    myLibrary.push(newBook);
    console.log("A book has been created and is now in the Array");

    displayLibrary()

}

function displayLibrary(){
 
    const mainDiv = document.querySelector(".book-container");

    mainDiv.innerHTML = "";

    myLibrary.forEach((item) => {
        const bookDiv = document.createElement("div");
        const deleteButton = document.createElement("button");

        deleteButton.className = "bookDelete-btn";
        deleteButton.innerHTML = "Delete";
        deleteButton.dataset.id = item.id;

        deleteButton.addEventListener("click", (e)=>{

            const bookID= e.target.dataset.id;
            removeBook(bookID);

        });

        bookDiv.innerText = item.name + " wirtten by " + item.author + " in " + item.year ;
        bookDiv.appendChild(deleteButton);
        mainDiv.appendChild(bookDiv); 

    });

}

function removeBook(bookID){

    myLibrary = myLibrary.filter(book => book.id != bookID);
    displayLibrary();

}

function openForm(){
    document.querySelector(".form-popup").style.display = "block";

}

function closeForm(){
    document.querySelector(".form-popup").style.display = "none";
    
}
