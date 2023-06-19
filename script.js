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

const popup = document.querySelector('.popup')
const addButton = document.querySelector(".addButton")
const submit = document.querySelector(".submit")


// Pop up appears on add button click
addButton.addEventListener('click',()=>{
  popup.style.display = "flex"
})

submit.addEventListener('submit',()=>{
  popup.style.display = "none"
})