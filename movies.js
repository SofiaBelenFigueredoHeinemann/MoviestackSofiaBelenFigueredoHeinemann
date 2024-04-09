let container = document.getElementById("cards_container")
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
let movies_container = document.getElementById("movies_container")
let search = document.getElementById("search")

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
let nombreIngresado = ""
containerCheckbox.addEventListener("change", event => {
    checkChecked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(input  => input.value)
    movies_container.innerHTML = renderCards2(
    filtrarPorNombre( filtrarPorCheck( filterMovies, checkChecked ) , nombreIngresado ) )
})

search.addEventListener("keyup", event => {
    nombreIngresado = event.target.value
    search.innerHTML = renderCards2(
        filtrarPorNombre( filtrarPorCheck( filterMovies, checkChecked ) , nombreIngresado ) )
}) 

let filtrarPorCheck = (array, arrayChecks) => arrayChecks.length > 0 ? array.filter( filterMovies => arrayChecks.includes(filterMovies.genre)) : array


let filtrarPorNombre = (array, nombreIngresado ) => array.filter( filterMovies => filterMovies.name.toLowerCase().includes(nombreIngresado.trim().toLowerCase())) 


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
