let container = document.getElementById("cards_container")
function createCard(array) {
    return `
    <section class="w-3/12 flex flex-col m-3 p-3 bg-purple-500 font-sans text-black gap-4">  
        <img src=${array.image} alt=${array.title} class="w-80 h-40 rounded-lg">
        <h6 class="font-bold">${array.title}</h6>
        <p class="italic">${array.tagline}</p>
        <p>${array.overview.slice(0,100)}...</p>
    </section>
    `
}
function renderCards (array, container){
    container.innerHTML = array.map(createCard)
}
renderCards(movies, container)