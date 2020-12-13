document.addEventListener('DOMContentLoaded', () => {
    const newMovieform = document.querySelector('#new-movie-form');
    newMovieform.addEventListener('submit', handleNewMovieItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewMovieItemFormSubmit = function (event) {
    event.preventDefault();

    const movieListItem = createMovieListItem(event.target);
    const movieList = document.querySelector('#movie-list');
    movieList.appendChild(movieListItem);

    event.target.reset();
}

const createMovieListItem = function (form) {
    const movieListItem = document.createElement('li');
    movieListItem.classList.add('movie-list-item');

    const movieName = document.createElement('h2');
    movieName.textContent = form.movieName.value;
    movieListItem.appendChild(movieName);

    const year = document.createElement('h3');
    year.textContent = form.year.value;
    movieListItem.appendChild(year);

    const genre = document.createElement('p');
    genre.textContent = form.genre.value;
    movieListItem.appendChild(genre);

    return movieListItem;
}

const handleDeleteAllClick = function (event) {
    const movieList = document.querySelector('#movie-list');
    movieList.innerHTML = '';
}
