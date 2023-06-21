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

const popup = document.querySelector('.popup')
const addButton = document.querySelector(".addButton")
const submit = document.querySelector(".submit")
const remove = document.querySelectorAll(".remove")
const form = document.querySelector(".form")
const grid = document.querySelector(".grid")

let bookCount = 0;


// Pop up appears on add button click
addButton.addEventListener('click',()=>{
  popup.style.display = "flex"
})

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addBook(getBookValues());

  popup.style.display = "none";
  addBooksToScreen()
});



// Create book from form
function getBookValues(){
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const readingStatus = document.querySelector('input[name="readingStatus"]:checked').value;
  return new Book(title,author,pages,readingStatus)

}

//add Book to array
function addBook(newBook){
  myLibrary.push(newBook)
  console.table(myLibrary)
}

// Add books to screen
function addBooksToScreen() {
  myLibrary.forEach(book =>{
    let card = document.createElement("div")
    card.classList.add("card")

    let bookDisplay = document.createElement("p")
    bookDisplay.classList.add("bookDisplay")

    let authorDisplay = document.createElement("p")
    authorDisplay.classList.add("authorDisplay")

    let pageDisplay = document.createElement("p")
    pageDisplay.classList.add("pageDisplay")


    let buttons = document.createElement("div")
    buttons.classList.add("buttons")

    let readingStatusButton = document.createElement("button")
    readingStatusButton.classList.add("readingStatusButton")

    let remove = document.createElement("button")
    remove.classList.add("remove")

    bookDisplay.textContent = book.title
    authorDisplay.textContent = book.author
    pageDisplay.textContent = book.pages + " pages"
    readingStatusButton.textContent = book.read
    remove.textContent = "Remove"

    grid.appendChild(card)
    card.appendChild(bookDisplay)
    card.appendChild(authorDisplay)
    card.appendChild(pageDisplay)
    card.appendChild(buttons)
    buttons.appendChild(readingStatusButton)
    buttons.appendChild(remove)



  })
}

