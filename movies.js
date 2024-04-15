import {createCards2 , renderCards2, cardsFiltradasContainer, containerCheckbox, inputSearch} from "./functions.js"
let movies = []
fetch("https://moviestack.onrender.com/api/movies",{
    headers: {"x-api-key":"0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"}
    })
.then(response => response.json())
.then(data => {movies = data.movies;
    console.log(movies);
    renderCards2(movies.map(createCards2));
    containerCheckbox.innerHTML = checkboxGenres(filteredbygenre(filterMoviesCheckboxSearch));
})
.catch (error => console.log(error))
let filteredbygenre = array => Array.from(new Set(movies.flatMap(movie => movie.genres)));
function createCheckbox (nombre) {
    return `
    <label> ${nombre} 
        <input type="checkbox" name="${nombre}" value="${nombre}">
    </label> 
    ` 
}
function checkboxGenres (movies) {
   return movies.map(createCheckbox).reduce((a, b) => a + b)
} 
function filterMoviesCheckboxSearch() {
    let checkedGenres = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value);
    let filteredMovies = movies.filter(movie => {
        let genreMatch = checkedGenres.length === 0 || movie.genres.some(genre => checkedGenres.includes(genre));
        let titleMatch = movie.title.toLowerCase().includes(inputSearch.value.trim().toLowerCase());
        return genreMatch && titleMatch;
    });
    return filteredMovies;
}
containerCheckbox.addEventListener("change", () => {
      renderCards2(filterMoviesCheckboxSearch().map(createCards2));
})
inputSearch.addEventListener("keyup", () => {
      renderCards2(filterMoviesCheckboxSearch().map(createCards2));
}); 
function loadFavoriteMovies() {
    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    return favoriteMovies;
}
// Función para manejar clics en botones de favoritos
function choosingFavorites(event) {
    if (event.target.classList.contains('favoriteButton')) {
        const movieId = event.target.dataset.id;
        const isFavorite = event.target.dataset.favorite === 'true';
        // Obtener las películas actuales de localStorage
        let favoriteMovies = loadFavoriteMovies();
        // Actualizar estado de la película como favorita
        movies = movies.map(movie => {
            if (movie.id === movieId) {
                movie.favorite = !isFavorite;
            }
            return movie;
        });
        // Guardar películas favoritas en localStorage
        localStorage.setItem('favoriteMovies', JSON.stringify(movies.filter(movie => movie.favorite)));
    }
}
// Escuchar clics en el contenedor de las tarjetas para manejar los clics en los botones de favoritos
cardsFiltradasContainer.addEventListener('click', choosingFavorites);


// ABAJO SE REPITE EL CODIGO HASTA SPRINT 2 Y HAY COMENTARIOS UTILES.

// Función para crear las tarjetas de películas
/* let createCards = array => {
    return `
    <section class="max-w-sm flex flex-col items-center m-1 p-3 gap-4 bg-purple-500 font-sans text-black">  
        <img src=${array.image} alt=${array.title} class="w-80 h-40 rounded-lg">
        <h6 class="font-bold">${array.title}</h6>
        <p class="italic">${array.tagline}</p>
        <p>${array.overview.slice(0, 50)}...</p>
        <a href="./detail.html?id=${array.id}">View more</a>
    </section>
    `
}
console.log(createCards) */
// Función para renderizar las tarjetas de películas
/* function renderCards(movies) {
    cardsContainer.innerHTML = movies.join('');
} */
//Array.prototype.join(): El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
// Convierte un Array a un String.
// Split convierte un string en un array.
// reduce NO es un metodo de SET (ES DE ARRAY).El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.


//SIGUIENDO LA CLASE DE MARTIN DE PRAC. INTEGRADORA y EL REPASO DE JOSE Y GUILLE.

// Obtener lista de géneros únicos.
/* let filteredbygenre = array => Array.from(new Set(movies.flatMap(movie => movie.genres)));
console.log(filteredbygenre(movies))
 */
/* filteredbygenre = [...new Set (movies.map(movie=>movie.genres).flat())]
console.log(filteredbygenre(movies)) */
/* let genres = array => Array.from( new Set( array.map( e => e.genres ) ) )
console.log(genres(filterMovies)) */
/* function filteredbygenre(movies) {
    let flatMapGenres = movies.flatMap(movie => movie.genres);
    let setGenres = new Set(flatMapGenres);
    let genre = Array.from(setGenres)
    return genre;
} */
/* console.log(filteredbygenre(movies)) */
// new: es una palabra reservada que se usa para crear una instancia o un objeto de una clase.
//From transforma string en array.
/* El método flatMap() primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en una nueva matriz. Es idéntico a un map seguido de un flatten (en-US)de profundidad 1, pero flatMap es a menudo útil y la fusión de ambos en un método es ligeramente más eficiente. */

/* const arr = [1, 2, 3];

const result = arr.flatMap(x => [x, x * 2]);

console.log(result); // Output: [1, 2, 2, 4, 3, 6] */

//Función que genera un checkbox HTML con el nombre del género como su etiqueta y su valor, lo que permite al usuario seleccionar uno o más géneros de películas utilizando checkboxes.
/* let createCheckbox = nombre => `
    <label> ${nombre} 
        <input type="checkbox" name="${nombre}" value="${nombre}">
    </label>
`  */
/* function createCheckbox (nombre) {
    return `
    <label> ${nombre} 
        <input type="checkbox" name="${nombre}" value="${nombre}">
    </label> 
    ` 
} */
/*//Función que toma un array de películas, crea checkboxes HTML para cada película utilizando la función createCheckbox, y luego los concatena en una sola cadena de texto que representa todos los checkboxes HTML. Esto es útil para insertar todos los checkboxes en el DOM de una vez. */
/* let checkboxGenres = movies => movies.map(createCheckbox).reduce((a, b) => a + b) */
//LO QUE VA ANTES DE LA FLECHA SON LOS PARAMETROS QUE RECIBE LA FUNCION Y LO QUE VA DEPUES DE LA FECHA ES EL CUERPO DE LA FUNCION {}. no lleva llaves cuando el cuerpo de la funcion es una sola linea, como la linea 93.
/* function checkboxGenres (movies) {
    return movies.map(createCheckbox).reduce((a, b) => a + b)
}  */
/* console.log(checkboxGenres(filteredbygenre(filterMoviesChechboxSearch))) */
//reduce
/* containerCheckbox.innerHTML = checkboxGenres(filteredbygenre(filterMoviesChechboxSearch)) */

/* // FILTRO SELECTOR
let containerSelect = document.getElementById("genreSelectContainer")
let optionGenreSelect = document.getElementById("genreSelect")
//CREAR SELECT
let createOption = (e) => `<option value="${e}">${e}</option>`;
//Renderizar las opciones
let renderOptions = (array, containerSelect) => {
    for (const iterator of array) {
        optionGenreSelect.innerHTML += createOption(iterator);
    }
  };
  
renderOptions(filteredbygenre(movies), containerSelect);
//no le paso movies, les paso el filtro que arme para filtrar cruzado el selector y el search */
/* console.log(document.querySelectorAll("option")); */
/* for...of La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable (en-US), como lo son: String, Array, objetos similares a array (por ejemplo, arguments or NodeList), TypedArray, Map (en-US), Set e iterables definidos por el usuario.
Sintaxis
for (variable of iterable) {
  statement
}
variable
En cada iteración el elemento (propiedad enumerable) correspondiente es asignado a variable.
iterable
Objeto cuyas propiedades enumerables son iteradas. 
Es posible usar const en lugar de let si no se va a modificar la variable dentro del bloque.
Diferencia entre for...of y for...in
El bucle for...in iterará sobre todas las propiedades de un objeto. Más tecnicamente, iterará sobre cualquier propiedad en el objeto que haya sido internamente definida con su propiedad [[Enumerable]] configurada como true.
La sintaxis de for...of es específica para las colecciones, y no para todos los objetos. Esta Iterará sobre cualquiera de los elementos de una colección que tengan la propiedad [Symbol.iterator].
El siguiente ejemplo muestra las diferencias entre un bucle for...of y un bucle for...in:
let arr = [3, 5, 7];
arr.foo = "hola";

for (let i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); // logs "3", "5", "7"
}
*/

// Función para crear las tarjetas de películas 2
/* let createCard2 = array => `
    <section class="max-w-sm flex flex-col items-center m-1 p-3 gap-4 bg-purple-500 font-sans text-black">  
        <img src=${array.image} alt=${array.title} class="w-80 h-40 rounded-lg">
        <h6 class="font-bold">${array.title}</h6>
        <p class="italic">${array.tagline}</p>
        <p>${array.overview.slice(0, 88)}...</p>
        <a href="./detail.html?id=${array.id}">View more</a>
    </section>
` */
// Función para renderizar las tarjetas de películas 2
/* function renderCards2(movies) {
    cardsFiltradasContainer.innerHTML = movies.join('');
} */
// Función para filtrar películas por género y título
/* function filterMoviesChechboxSearch() {
    let checkedGenres = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value);
    let filteredMovies = movies.filter(movie => {
        let genreMatch = checkedGenres.length === 0 || movie.genres.some(genre => checkedGenres.includes(genre));
        let titleMatch = movie.title.toLowerCase().includes(inputSearch.value.trim().toLowerCase());
        return genreMatch && titleMatch;
    });
    return filteredMovies;
} */

/* function filterMoviesSelectorSearch() {
    let optionSelected = Array.from(document.querySelector('input[type="select"]')).map(input => input.value);
    let filteredMovies = movies.filter(movie => {
        let genreMatch = optionSelected.length === 0 || movie.genres.some(genre => optionSelected.includes(genre));
        let titleMatch = movie.title.toLowerCase().includes(inputSearch.value.trim().toLowerCase());
        return genreMatch && titleMatch;
    });
    return filteredMovies;
} */
// 
// Averiguar some
// Renderizar las tarjetas de películas al cargar la página
/* renderCards2(movies.map(createCard2)); */
// Que hace una funcion callback: es cuando una funcion retorna otra funcion o recibe como parametro otra funcion. Son funciones de orden superior.

// Event listener para cambios en los checkboxes de género
/* containerCheckbox.addEventListener("change", () => {
    renderCards2(filterMoviesChechboxSearch().map(createCard2));
}); */
/* el addEventListener recibe 2 parametros, 1 evento y una function como segundo parametro */ 
/* inputSearch.addEventListener("keyup", () => {
    renderCards2(filterMoviesChechboxSearch().map(createCard2));
});  */

/* inputSearch.addEventListener("keyup", () => {
    renderCards2(filterMoviesSelectorSearch().map(createCard2));
});
 */
// Key dowm es para cuando el usuario presione la tecla.
//Element: evento keyup. El evento keyup se activa cuando se suelta una tecla.
/* Los eventos keydown y keyup brindan un código que indica qué tecla se presiona, mientras que keypress indica qué carácter se ingresó. Por ejemplo, una "a" minúscula será reportada como 65 por keydown y keyup, pero como 97 por keypress. Todos los eventos notifican una "A" mayúscula como 65.
Los eventos de teclado solo son generados por <input>, <textarea>, <summary> y cualquier cosa con el atributo contentEditable o tabindex.*/

/* 
//tp de marie ver si me ayuda a entender
nameSearch.addEventListener("keyup", (e) => {
    //console.log(nameSearch.value);
    let inputName = nameSearch.value.trim().toLowerCase();
    console.log(inputName)
    console.log(check);
    
    if(check != ""){
      movieConteiner.innerHTML =""
      if (filterName(filterGenre(data,check),inputName)==0){ 
          
          movieConteiner.innerHTML ="<h2>Movie not founded</h2> " 
  
      }else{
          renderCard(filterName(filterGenre(data,check),inputName),movieConteiner)
      }
    }else if(filterName(data,inputName)){
      movieConteiner.innerHTML =""
      if (filterName(data,inputName)==0){
          movieConteiner.innerHTML ="<h2>Movie not founded</h2> "
      }else{
         renderCard(filterName(data,inputName),movieConteiner)
      }
    }
  }); */
  
 /*  let check=""
  conteinerGenre.addEventListener("change", (e) => {
    console.log(conteinerGenre.selectedIndex); //sale la posicion del index seleccionada
    console.log(check);
    check = conteinerGenre.options[conteinerGenre.selectedIndex].value; //Busco el value la opcion seleccionada


containerSelect.addEventListener("change", () => {
    renderCards2(filterMoviesSelectorSearch().map(createCard2));
});
 */

//APUNTES CLASES:
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



/* // Función para crear el HTML de un option del select de género
let createOption = nombre => `
    <option value="${nombre}">${nombre}</option>
`;
// SELECTOR DE GENERO
/* // Función para crear el HTML de un option del select de género
let createOption = nombre => `
    <option value="${nombre}">${nombre}</option>
`;

// Generar HTML de options para el select de género
let selectOptions = movies.map(createOption).flat
containerSelect.innerHTML = `<select id="genreSelect"><option value="">All genres</option>${selectOptions}</select>`;
console.log(selectOptions)

// Función para filtrar películas
function filterMovies() {
    let selectedGenre = document.getElementById("genreSelect").value;
    let filteredMovies = movies.filter(movie => {
        let genreMatch = selectedGenre === "" || movie.genres.includes(selectedGenre);
        let titleMatch = movie.title.toLowerCase().includes(inputSearch.value.trim().toLowerCase());
        return genreMatch && titleMatch;
    });
    return filteredMovies;
}

// Función para crear las tarjetas de películas 2
let createCard2 = array => `
    <section class="max-w-sm flex flex-col items-center m-1 p-3 gap-4 bg-purple-500 font-sans text-black">  
        <img src=${array.image} alt=${array.title} class="w-80 h-40 rounded-lg">
        <h6 class="font-bold">${array.title}</h6>
        <p class="italic">${array.tagline}</p>
        <p>${array.overview.slice(0, 88)}...</p>
        <a href="./detail.html?id=${array.id}">View more</a>
    </section>
`
// Función para renderizar las tarjetas de películas 2
function renderCards2(movies) {
    cardsFiltradasContainer.innerHTML = movies.join('');
}

// Event listener para cambios en el select de género y el campo de búsqueda
containerSelect.addEventListener("change", () => {
    renderCards2(filterMovies().map(createCard2));
});

inputSearch.addEventListener("keyup", () => {
    renderCards2(filterMovies().map(createCard2));
});
 */

//otro modo de hacer un selector...

/* // Obtener elementos HTML
let genreSelect = document.getElementById("genreSelect");
let moviesContainer = document.getElementById("movies_container");
let containerSelect = document.getElementById("genreSelectContainer")

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


///////////////////////////////////
/* containerCheckbox.addEventListener("change", e => {
    let checkChecked = Array.from(document.querySelectorAll(`input[type="checkbox"]:checked`)).map(input => input.value)
    console.log(checkChecked)
    movies_container.innerHTML = renderCards2((filterMovies.filter(array => checkChecked.includes(movies.genres))))
})

search.addEventListener("keyup", e => {
    let insertedTitle = e.target.value
    movies_container.innerHTML = renderCards2((filterMovies.filter(movie => movie.title.toLowerCase().includes(insertedTitle.trim().toLowerCase()))))
})  */


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
// reduce NO es un metodo de SET (ES DE ARRAY).El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.


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
genreSelect_container.innerHTML = genreSelect(genres(movies)) 
*/