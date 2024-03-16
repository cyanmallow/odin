function cloneBooks(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}

const proSeka = new cloneBooks('Project Sekai', 'Colorful Palette', 'read');
const ak = new cloneBooks('Arknights', 'HyperGryph', 'not read');
const nuC = new cloneBooks('Nu Carnival', 'PinkCore', 'read');
const tgcf = new cloneBooks("Heaven Official's Blessing", 'MXTX', 'read');



function displayBook(book, read) {
    var bookList = document.getElementById("books");
    var li = document.createElement("li");
    li.textContent = `${book.title} by ${book.author} (${read === "option1" ? "Read" : "Not read"})`;
    bookList.appendChild(li);
    }

function addBook(){
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var read = document.querySelector('input[name="read"]:checked').value;

    var newBook = new cloneBooks(title, author);
    displayBook(newBook, read)
}

function removeBook(){

}