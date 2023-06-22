function Book(title, author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

let myLibrary = [];

const popup = document.querySelector('.popup')
const addButton = document.querySelector(".addButton")
const submit = document.querySelector(".submit")
const remove = document.querySelectorAll(".remove")
const form = document.querySelector(".form")
const grid = document.querySelector(".grid")
const exit = document.querySelector(".exit")

const inputTitle = document.getElementById("title")
const inputAuthor = document.getElementById("author")
const inputPages = document.getElementById("pages")
const inputRadioCheckBox = document.querySelectorAll(".checkbox");

let bookCount = 0;


// Pop up appears on add button click
addButton.addEventListener('click',()=>{
  popup.style.display = "flex"
})

//Clear form content after submision
function clearForm(){
  inputTitle.value = ""
  inputAuthor.value = ""
  inputPages.value = ""
  inputRadioCheckBox.forEach(radioBox => {
    radioBox.checked = false;
  })
}

//Form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();
  addBook(getBookValues());
  clearForm();
  popup.style.display = "none";
  addBooksToScreen()
});

// Close popup event listener
exit.addEventListener('click', (e) =>{
  popup.style.display = "none"
  clearForm();
})

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
}
//Removes card when remove button is clicked
remove.forEach(removeButton =>{
  removeButton.addEventListener('click', () =>{
    removeButton.parentNode.parentNode.remove();
  })
})

//Change status button color
function changeColor(readingStatusButton){
    //Button color
    if(readingStatusButton.textContent == "Completed"){
      readingStatusButton.style.color = "#1e5c33";
    }
    else if(readingStatusButton.textContent == "Reading"){
      readingStatusButton.style.color = "#ffa450";
    }
    else{
      readingStatusButton.style.color = "#e04b3e";
    }
}

// Add books to screen
function addBooksToScreen() {
    let book = myLibrary.length - 1; 
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

    //Text contnet is added to card from form
    bookDisplay.textContent = myLibrary[book].title
    authorDisplay.textContent = myLibrary[book].author
    pageDisplay.textContent = myLibrary[book].pages + " pages"
    readingStatusButton.textContent = myLibrary[book].read
    remove.textContent = "Remove"

    grid.appendChild(card)
    card.appendChild(bookDisplay)
    card.appendChild(authorDisplay)
    card.appendChild(pageDisplay)
    card.appendChild(buttons)
    buttons.appendChild(readingStatusButton)
    buttons.appendChild(remove)

    remove.addEventListener('click', () =>{
      remove.parentNode.parentNode.remove();
    })

//Read status button
  readingStatusButton.addEventListener('click',button =>{
    const status = ["Completed", "Reading", "Plan to Read"]
    if(readingStatusButton.textContent == "Completed"){
      readingStatusButton.textContent = "Reading"
    }
    else if(readingStatusButton.textContent == "Reading"){
      readingStatusButton.textContent = "Plan to Read"
    }
    else if(readingStatusButton.textContent == "Plan to Read"){
      readingStatusButton.textContent = "Completed"
    }
    changeColor(readingStatusButton)
  })  
  changeColor(readingStatusButton)
}




