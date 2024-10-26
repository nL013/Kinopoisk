const API_KEY = "b21f1939";

async function fetchData(title) {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&t="${title}"`
  );
  const data = await response.json();
  return data;
}

const searchInputElement = document.querySelector("#movie-search-input");
const searchButtonElement = document.querySelector("#movie-search-button");

let movieTitleValue = "";

searchButtonElement.addEventListener("click", async () => {
  movieTitleValue = searchInputElement.value;
  const movie = await fetchData(movieTitleValue);
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
    </div>`;

  const searchResultsContainer = document.querySelector(".search-results");

  console.log(searchResultsContainer.children);

  searchResultsContainer.insertAdjacentHTML("beforeend", cardElementTemplate);
});

//22.10.2024

console.log(localStorage.getItem("dateNow"));

const phoneNumbers = ["998909632050", "998901234567"];
localStorage.setItem("phoneNumbers", phoneNumbers);

const myData = {
  age: 25,
  sex: "male",
  pets: ["dogName"],
};

localStorage.setItem("MyData", JSON.stringify(myData));

let myDataJson = localStorage.getItem("myData");
let MyParsedData = JSON.parse(myDataJson);
myData.pets[0];

// localStorage.setItem(length)
print.localStorage(length)