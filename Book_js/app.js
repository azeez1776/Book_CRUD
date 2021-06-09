class AddBook {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    // Method for adding Book
    add() {
        const table = document.getElementById('table');

        let row = document.createElement('tr');
        row.innerHTML = `<td>${this.title}</td>
                     <td>${this.author}</td>
                     <td>${this.isbn}</td>
                     <td><a href="#" class="del">❌<a><td>`;

        table.appendChild(row);
    }


    // Method for clearing input fields
    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }


    // Method for removing item
    removeItem(target) {
        if (target.className == 'del') {
            target.parentElement.parentElement.remove()
        }
    }

}


const form = document.getElementById('form');

form.addEventListener('submit', (e) => {

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let isbn = document.getElementById('isbn').value;

    if (title == '' || author == '' || isbn == '') {
        document.getElementById('fail').style.display = '';
        document.getElementById('success').style.display = 'none';
        document.getElementById('fail').innerHTML = 'Fill all fields';

        setTimeout(() => {
            document.getElementById('fail').style.display = 'none'
        }, 2000);

        e.preventDefault();
        return false
    }
    else {
        document.getElementById('success').style.display = '';
        document.getElementById('fail').style.display = 'none';
        document.getElementById('success').innerHTML = 'Details Added';
        const addBook = new AddBook(title, author, isbn);

        setTimeout(() => {
            document.getElementById('success').style.display = 'none'
        }, 2000);


        addBook.add();
        addBook.clearFields();

        e.preventDefault();
    }
})

document.getElementById('table').addEventListener('click', (e) => {
    const addBook = new AddBook(title, author, isbn);
    addBook.removeItem(e.target);
})


