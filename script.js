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





function addBookToLibrary() {
  // do stuff here
}

let myLibrary = [];

const popup = document.querySelector('.popup')
const addButton = document.querySelector(".addButton")
const submit = document.querySelector(".submit")
const remove = document.querySelectorAll(".remove")
const form = document.querySelector(".form")

let bookCount = 0;


// Pop up appears on add button click
addButton.addEventListener('click',()=>{
  popup.style.display = "flex"
})

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addBook(getBookValues());

  popup.style.display = "none";
});



// Create book from form
function getBookValues(){
  const title = document.querySelector('#title').value;
  console.log(title)
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const readingStatus = document.querySelector('input[name="readingStatus"]:checked').value;

  return new Book(title,author,pages,readingStatus)

}

//add Book to array
function addBook(newBook){
  myLibrary.push(newBook)
  console.log("hello")
  console.table(myLibrary)
}

// addBook(getBookValues());

