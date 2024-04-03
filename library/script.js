document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.getElementById('addBookDialog');
    const bookshelf = document.getElementById('bookshelf');

    // Open dialog
    document.getElementById('add-books').addEventListener('click', () => {
        dialog.showModal();
    });

    // Handle form submission
    dialog.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        // Extract book details
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const author = formData.get('author');
        const read = formData.get('read');

        // Add book to the table
        addBookToShelf({ name, author, read });

        // Reset the form for the next input
        e.target.reset();

        // Close dialog
        dialog.close();
    });

    function addBookToShelf(book) {
        const row = bookshelf.insertRow(-1); // Add at the end of the table
        row.insertCell(0).textContent = bookshelf.rows.length - 1; // Assuming the first row is headers
        row.insertCell(1).textContent = book.name;
        row.insertCell(2).textContent = book.author;

        let readCell = row.insertCell(3);
        let toggleButton = document.createElement("button");
        toggleButton.textContent = book.read;
        readCell.appendChild(toggleButton);
    }


    // Event delegation for handling clicks on any toggle button within the bookshelf
    bookshelf.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.parentElement.cellIndex === 3) { // Ensure we're only toggling read status buttons
            e.target.textContent = e.target.textContent === 'Yes' ? 'No' : 'Yes';
        }
    });
});
