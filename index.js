const API_KEY = "b21f1939"

async function fetchData(title) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t="${title}"`)
    const data = await response.json()
    return data
}

const searchInputElement = document.querySelector('#movie-search-input')
const searchButtonElement= document.querySelector('#movie-search-button')

let movieTitleValue = ''

searchButtonElement.addEventListener('click', async () => {
    movieTitleValue = searchInputElement.value
    const movie = await fetchData(movieTitleValue)
    const cardElementTemplate = `<div class="card" style="width: 18rem">
        <img
        src="${movie.Poster}"
        class="card-img-top"
        alt="${movie.Title} movie poster"
        />
        <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p class="card-text">${movie.Plot}</p>
            <a
                href="#"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                >
                Подробнее
            </a>
        </div>
    </div>`
    
    const searchResultsContainer = document.querySelector('.search-results')

    console.log(searchResultsContainer.children)
    
    searchResultsContainer.insertAdjacentHTML('beforeend', cardElementTemplate)
})





