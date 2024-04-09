let container = document.getElementById("cards_container")
let movies_container = document.getElementById("movies_container")
let search = document.getElementById("search")
function createCard(array) {
    return `
    <section class="max-w-sm flex flex-col items-center m-1 p-3 gap-4 bg-purple-500 font-sans text-black">  
        <img src=${array.image} alt=${array.title} class="w-80 h-40 rounded-lg">
        <h6 class="font-bold">${array.title}</h6>
        <p class="italic">${array.tagline}</p>
        <p>${array.overview.slice(0, 88)}...</p>
        <a href="./detail.html?id=${array.id}">View more</a>
    </section>
    `
}
function renderCards(array, container) {
    container.innerHTML = array.map (createCard)
}
renderCards(movies, container)

// borrador: section class w-3/12 flex flex-col m-3 p-3 bg-purple-500 font-sans text-black gap-4

//Siguiendo la clase de Martin de Practica Integradora.

let containerCheckbox = document.getElementById("genreCheckboxContainer")

let filterMovies = movies.filter(movie => movie.genres)
/* console.log(filterMovies) */

/* let filteredbygenre = array => Array.from( new Set( array.map( movie => movie.genres ) ) )
console.log(filteredbygenre(filterMovies)) */
// Obtener lista de géneros únicos
let filteredbygenre = array => Array.from(new Set(movies.flatMap(movie => movie.genres)));
console.log(filteredbygenre(filterMovies))
/* El método flatMap() primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en una nueva matriz. Es idéntico a un map seguido de un flatten (en-US)de profundidad 1, pero flatMap es a menudo útil y la fusión de ambos en un método es ligeramente más eficiente. */

let createCheckbox = nombre => `
    <label> ${nombre} 
        <input type="checkbox" name="${nombre}" value="${nombre}">
    </label>`

let checkboxGenres = array => array.map(createCheckbox).reduce( (a, b) => a + b)
/* console.log(checkboxGenres(filteredbygenre(filterMovies))) */
containerCheckbox.innerHTML = checkboxGenres(filteredbygenre(filterMovies))

let createCard2 = array => `
    <section class="max-w-sm flex flex-col items-center m-1 p-3 gap-4 bg-purple-500 font-sans text-black">  
        <img src=${array.image} alt=${array.title} class="w-80 h-40 rounded-lg">
        <h6 class="font-bold">${array.title}</h6>
        <p class="italic">${array.tagline}</p>
        <p>${array.overview.slice(0, 88)}...</p>
        <a href="./detail.html?id=${array.id}">View more</a>
    </section>
`
let renderCards2 = array => array.length != 0 ? array.map (createCard2).reduce( (a, b) => a + b, ""): "<h2> No se encontraron peliculas que coincidan con su busqueda </h2>"
movies_container.innerHTML = renderCards2(filterMovies)

let checkChecked = []
let insertedTitle = ""
containerCheckbox.addEventListener("change", event => {
    checkChecked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(input  => input.value)
    movies_container.innerHTML = renderCards2((filterMovies.filter(array => checkChecked.includes(array.genres))))
})

search.addEventListener("keyup", event => {
    insertedTitle = event.target.value
    movies_container.innerHTML = renderCards2((filterMovies.filter(movie => movie.title.toLowerCase().includes(insertedTitle.trim().toLowerCase()))))
}) 

s
    contenedorCards.innerHTML = crearCardsConPersonajes( filtrarPorNombre( filtrarPorCheck( personajes, checkChecked ) , nombreIngresado ) )
})

let filtrarPorCheck = (array, arrayChecks) => arrayChecks.length > 0 ? array.filter( personaje => arrayChecks.includes(personaje.house)) : array


let filtrarPorNombre = ( array , nombreIngresado ) => array.filter( personaje => personaje.name.toLowerCase().includes(nombreIngresado.trim().toLowerCase())) 




//A un String vacio lo reconoce como falso.
//Array = Lista ordenada que habilite repetidos, y que es iterable.
//Set = Lista desordenada, que no admite repetidos y que es iterable.

/* let genres = array => array.map (elemento => elemento.genres).reduce( (a, b) => a + b)
console.log(genres(movies)) */
//El reduce no sirve porque me devuelve todo seguido, repetido, no las separa en un array y no se se puede iterar. 

// El constructor es un metodo. ¿Cuando no se necesita usar un constructor? NO SE NECESITA UN CONSTRUCTOR CUANDO SEA DE USO COTIDIANO EN JS, como por ejemplo:
// {} objetos
// [] arrays
// "" strings
// 1234 numeros
// SI SE NECESITA CUANDO SE USA MENOS SEGUIDO COMO UN SET, ej:
// new Set(array)
// reduce NO es un metodo de SET (ES DE ARRAY).

/* let genres = array => new Set(array.map( e => e.genres)).reduce( (a, b) => a + b)
console.log(genres(filterMovies)) */

/* let genres = array => new Set(array.map( e => e.genres))
console.log(genres(filterMovies))  */
//AHORA TRANSFORMAMOS EL SET EN UN ARRAY

/*  siiiiiiiiiii !!!!!!!!!!!!!!
let genres = array => Array.from( new Set( array.map( e => e.genres ) ) )
console.log(genres(filterMovies))
//from sive para indicar desde donde queremos sacar la info, en este caso desde el set. */

/* let arrayConTodosLosGeneros = movies.map(elemento => elemento.genres)

let setConGenerosSinrepetir = new Set(arrayConTodosLosGeneros)
let arrayConGenerosSinrepetir = Array.from(setConGenerosSinrepetir)

console.log(arrayConGenerosSinrepetir)
console.log(genres(movies)) */

/* let genres = array => [... new Set( array.map( elemento => elemento.genres ) )] 
console.log(genres(filterMovies))*/
/// LOS ... se llaman let constitutive o como se escriba y hace lo mismo. AVERIGUAR MAS.



/* siiiiiiii !!!!!!!!!!! VER SI ESTA BIEN
let createGenreSelect = nombre => `
<select name="${nombre}" id="${nombre}">
   <option value="${nombre}">Genre</option> 
</select>
`
//  siiiiiiiiii !!!!!!!!!!!!!! 
let genreSelect = array => array.map(createGenreSelect).reduce( ( a , b ) => a + b )
genreSelect_container.innerHTML = genreSelect(genres(movies))
 */




/* function createGenreSelect_container(array) {
    return `
    <select>
     <option value="${array}">Genre</option>
    </select
    `;
}
 *//* function renderGenreSelect_container(array, container2) {
    container2.innerHTML = .map(createGenreSelect_container)
}
renderGenreSelect_container(filtermovies, container2) */



/* function createGenreSelect_container(genre) {
    return `
    <label for="${genre}">${genre}</label>
    <select name="${genre}" id="${genre}">
        <option value="">${genre}</option>
    </select>
    `;
} */

/* function renderGenreSelect_container(array, container) {
    container.innerHTML = array.map(genre => createGenreSelect_container(genre)).join('');
} */

/* // Suponiendo que tienes un elemento con el id "container2" en tu HTML
let container2 = document.getElementById("container2"); */

/* renderGenreSelect_container(genres, container2); // Aquí "genres" debe ser un array de géneros */



/* let createGenreSelect = nombre => `
<select name="${nombre}" id="${nombre}">
   <option value="${nombre}">Genre</option> 
</select>
` */

/* let createGenreSelect = nombre => `
            <select name="${nombre}" id="${nombre}">
                <option value="">${nombre}</option>
                ${movies.map(movie => movie.genres.includes(nombre) ? `<option value="${movie.title}">${movie.title}</option>` : '').join('')}
            </select>
        `;
console.log(createGenreSelect) */
/* let genreSelect = array => array.map(createGenreSelect).reduce( ( a , b ) => a + b )
genreSelect_container.innerHTML = genreSelect(genres(movies)) */

/* // Obtener elementos HTML
let genreSelect = document.getElementById("genreSelect");
let moviesContainer = document.getElementById("movies_container");

// Llenar el selector de género
 movies.forEach(genres => {
    let option = document.createElement("option");
    option.text = genres;
    option.value = genres;
    genreSelect(option);
});

// Función para filtrar películas por género
function filterMoviesByGenre(genres) {
    let filteredMovies = movies.filter(movie => {
        if (genres === "") return true; // Si se selecciona "Todos"
        return movie.genres.includes(genre);
    });

// Mostrar las películas filtradas
    moviesContainer.innerHTML = "";
    filteredMovies.forEach(movie => {
        let movieElement = document.createElement("div");
        movieElement.textContent = movie.title;
        moviesContainer.appendChild(movieElement);
    });
}

// Evento cuando se cambia la selección del género
genreSelect.addEventListener("change", function() {
    filterMoviesByGenre(this.value);
});

// Mostrar todas las películas inicialmente
filterMoviesByGenre("");

 */



/* /* CHAT GPT

Entiendo, entonces necesitas un selector de género donde puedas elegir un género y filtrar las películas según ese género. Aquí está la corrección:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Genre Selector</title>
</head>
<body>
    <div>
        <label for="genreSelect">Selecciona un género:</label>
        <select name="genreSelect" id="genreSelect">
            <option value="">Todos</option>
        </select>
    </div>

    <div id="movies_container">
        <!-- Aquí se insertarán las películas filtradas -->
    </div>

    <script>
        let movies = [
            { title: 'Pelicula 1', genres: ['Drama', 'Romance'] },
            { title: 'Pelicula 2', genres: ['Comedia'] },
            { title: 'Pelicula 3', genres: ['Acción', 'Aventura'] },
            { title: 'Pelicula 4', genres: ['Drama'] },
            // Agrega más películas si es necesario
        ];

        // Obtener lista de géneros únicos
        let genres = Array.from(new Set(movies.flatMap(movie => movie.genres)));

        // Obtener elementos HTML
        let genreSelect = document.getElementById("genreSelect");
        let moviesContainer = document.getElementById("movies_container");

        // Llenar el selector de género
        genres.forEach(genre => {
            let option = document.createElement("option");
            option.text = genre;
            option.value = genre;
            genreSelect.add(option);
        });

        // Función para filtrar películas por género
        function filterMoviesByGenre(genre) {
            let filteredMovies = movies.filter(movie => {
                if (genre === "") return true; // Si se selecciona "Todos"
                return movie.genres.includes(genre);
            });

            // Mostrar las películas filtradas
            moviesContainer.innerHTML = "";
            filteredMovies.forEach(movie => {
                let movieElement = document.createElement("div");
                movieElement.textContent = movie.title;
                moviesContainer.appendChild(movieElement);
            });
        }

        // Evento cuando se cambia la selección del género
        genreSelect.addEventListener("change", function() {
            filterMoviesByGenre(this.value);
        });

        // Mostrar todas las películas inicialmente
        filterMoviesByGenre("");
    </script>
</body>
</html>*/

// Obtener lista de géneros único. */