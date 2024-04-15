export let createCards2 = array => `
      <section class="max-w-sm flex flex-col items-center justify-center m-2 p-3 gap-4 bg-purple-500 font-sans text-black text-center rounded-lg">  
          <img src="https://moviestack.onrender.com/static/${array.image}" alt=${array.title} class="w-72 h-40 rounded-lg">
          <h6 class="font-bold">${array.title}</h6>
          <p class="italic font-medium">${array.tagline}</p>
          <p>${array.overview.slice(0, 88)}...</p>
          <button class="favoriteButton" data-id="${array.id}" data-favorite="${array.favorite ? 'true' : 'false'}">
            ${array.favorite ? '❤️' : '🤍'}
        </button>
          <a href="./detail.html?id=${array.id}" class="active border border-solid border-white p-3 font-extrabold">View more</a>
      </section>
  `
export function renderCards2(movies) {
      cardsFiltradasContainer.innerHTML = movies.join('');
  }

/* Las primeras cuatro líneas obtienen elementos HTML por su ID. Estos elementos se utilizarán para mostrar tarjetas de películas y casillas de verificación de géneros, y para escuchar las acciones del usuario. */
export let cardsFiltradasContainer = document.getElementById("cardsFiltradasContainer")
export let containerCheckbox = document.getElementById("genreCheckboxContainer")
export let inputSearch = document.getElementById("inputSearch")



//VER SI LAS USO

/* export let cardsContainer = document.getElementById("cardsContainer") */

/* // 1- Función para crear las tarjetas de películas
export let createCards = array => {
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
// 2- 
export function renderCards(movies) {
    cardsContainer.innerHTML = movies.join('');}
 */