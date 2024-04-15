import {createCards2} from "./functions.js"
// Función para cargar las películas favoritas desde localStorage
let favoritesContainer = document.getElementById('favoritesContainer');
let movies = []
fetch("https://moviestack.onrender.com/api/movies", {
    headers: { "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd" }
})
    .then(response => response.json())
    .then(data => {
        movies = data.movies;
        renderFavoriteCards();
    })
    .catch(error => console.log(error));
function loadFavoriteMovies() {
    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    return favoriteMovies;
}
// Función para guardar las películas favoritas en el almacenamiento local
function saveFavoriteMovies(movies) {
    localStorage.setItem('favoriteMovies', JSON.stringify(movies));
    return saveFavoriteMovies;
}
/* // Función para agregar una película a la lista de favoritos
function addToFavorites(movieId, favoriteMovies) {
    const movieToAdd = movies.find(movie => movie.id === movieId);
    if (movieToAdd && !favoriteMovies.some(movie => movie.id === movieId)) {
        favoriteMovies.push(movieToAdd);
        saveFavoriteMovies(favoriteMovies);
        renderFavoriteCards();
    }
} */
// Función para eliminar una película de la lista de favoritos
function removeFromFavorites(movieId, favoriteMovies) {
    favoriteMovies = favoriteMovies.filter(movie => movie.id !== movieId);
    saveFavoriteMovies(favoriteMovies);
    renderFavoriteCards();
}
// Función para renderizar las tarjetas de películas favoritas
function renderFavoriteCards() {
    const favoriteMovies = loadFavoriteMovies();
    const favoriteCards = favoriteMovies.map(createCards2);
    // Renderizar las tarjetas en el contenedor de favoritos (debes tener un elemento en tu HTML con el ID 'favoritesContainer')
    favoritesContainer.innerHTML = favoriteCards.join('');
}
// Event listener para manejar clics en botones de favoritos
document.addEventListener('click', event => {
    if (event.target.classList.contains('favoriteButton')) {
        const movieId = event.target.dataset.id;
        const isFavorite = event.target.dataset.favorite === 'true';

        const favoriteMovies = loadFavoriteMovies()

        if (isFavorite) {
            addToFavorites(movieId, favoriteMovies);
        } else {
            addToFavorites(movieId, favoriteMovies);
        }
    }
});

//ej. de Diego filteredbygenre = [...new Set (peliculas.map(pelicula=>pelicula.genres).flat())]
/* let cardConstructor = pelicula =>
`${listPelId.includes(pelicula.id) ? `<div class="bg-red-500 w-[25px] h-[23px] self-end rounded-md absolute top-5" data-pelicula-id="${pelicula.id}"><img class="w-full cursor-pointer" src="../assets/img/heartCheck.png" data-pelicula-id="${pelicula.id}" alt="favorite symbole"></div>
  <img class="w-[220px] lg:w-[120px] xl:w-[250px] image-cover rounded-lg self-center border border-purple-800" src="https://moviestack.onrender.com/static/${pelicula.image}" alt="${pelicula.title}"> `:
  ` <div class="bg-purple-300 w-[25px] h-[23px] self-end rounded-md absolute top-5" data-pelicula-id="${pelicula.id}"><img class="w-full cursor-pointer" src="../assets/img/favoriteHeart.png" data-pelicula-id="${pelicula.id}" alt="favorite symbole"></div>
  <img class="w-[220px] lg:w-[120px] xl:w-[250px] image-cover rounded-lg self-center border border-purple-800" src="https://moviestack.onrender.com/static/${
    pelicula.image}" alt="${pelicula.title}">`}
  <h3 class="font-semibold text-base">${pelicula.title}</h3>
  <p class="font-sm">${pelicula.tagline}</p>
  <p class="text-justify text-xs h-[60px] ">${pelicula.overview.slice(
    0,140)} <a href="./details.html?id=${pelicula.id}" class="text-red-700 bg-black px-2 pb-[2px] pt-[1px] rounded-lg">...more</a></p>`;

   contenedor.addEventListener("click",e=>{
    dataSetPelId = e.target.dataset.peliculaId
      if(dataSetPelId){
        listCards = listCards.filter(id => id != dataSetPelId)
        peliculasFav = peliculasFav.filter(peli => peli.id != dataSetPelId)
    localStorage.setItem("favList",JSON.stringify(listCards))
    elRenderPeli(peliculasFav,contenedor,fragmento)
}
}) */