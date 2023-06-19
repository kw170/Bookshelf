function Book(title, author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function(){
        return (title + "  by " + author + ", " + pages
        + " pages, " + read)
    }
}


let myLibrary = [];


function addBookToLibrary() {
  // do stuff here
}

const addButton = document.querySelector(".addButton")