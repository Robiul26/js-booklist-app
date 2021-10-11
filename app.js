const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const form = document.getElementById('form');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (title.value == '' || author.value == '' || year.value == '') {
        alert('Please Full Fill first!');
    } else {
        const newRow = document.createElement('tr');

        // for Title velue
        const newTitle = document.createElement('td');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        // for Author velue
        const newAuthor = document.createElement('td');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        // for Year velue
        const newYear = document.createElement('td');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        // for execute to tbody
        document.getElementById('bookList').append(newRow); console.log(newRow);

        //for empty input field
        title.value = '';
        author.value = '';
        year.value = '';
    }

});
