let movies = []
fetch("https://moviestack.onrender.com/api/movies",{
    headers: {"x-api-key":"0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"}
    })
.then(response => response.json())
.then(data => {movies = data.movies;
    console.log(movies);
    detailContainer.innerHTML = renderMovie(movie(movies, id));
    renderTable(movies, container_table);
    renderTable2(movies, container_table2);
})
.catch (error => console.log(error))

let detailContainer = document.getElementById("detail_container");
let url = new URLSearchParams(location.search);
let id = url.get("id");
let movie = (array, key) => array.find(element => element.id == key);
console.log(movie(movies, id))
// new: es una palabra reservada que se usa para crear una instancia o un objeto de una clase.
function renderMovie(array) {
    return `
    <section class="max-w-sm flex flex-col items-center text-center m-1 p-3 gap-4 bg-purple-500 font-sans text-black border rounded-md md:max-w-full md:flex-row md:m-5 md:p-4 lg:m-10 md:text-left">  
    <img src="https://moviestack.onrender.com/static/${array.image}" alt=${array.title} class="w-80 h-40 rounded-lg md:w-[25rem] md:h-[17rem] lg:w-[38rem] lg:h-[27rem]">
    <div class="md:flex md:flex-col md:items-start md:gap-2 lg:gap-4 lg:p-4 xl:gap-8 xl:p-7">
    <h6 class="font-bold md:text-2xl">${array.title}</h6>
    <p class="italic">${array.tagline}</p>
    <p>${array.genres[0]}</p>
    <p>${array.overview}</p>
    </div>
    </section>`
}
/* detailContainer.innerHTML = renderMovie(movie(movies, id)); */

let container_table = document.getElementById("table1_container");
function renderTable(array, container) {
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    headerRow.innerHTML = "<th class= border border-solid>Original language</th><th class= border border-solid>Release date</th><th class= border border-solid>Runtime</th><th class= border border-solid>Status</th>";
    array.forEach(element => {
        if (element.id == id) {
            const row = table.insertRow();
            row.innerHTML = `<td class=border border-solid>${element.original_language}</td><td class=border border-solid>${element.release_date}</td><td class=border border-solid>${element.runtime}</td><td class= border border-solid>${element.status}</td>`;
        }
    });
    container_table.appendChild(table);
}
/* renderTable(movies, container_table); */

let container_table2 = document.getElementById("table2_container");
function renderTable2(array, container) {
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    headerRow.innerHTML = "<th class= border border-solid>Vote average</th><th class= border border-solid>Budget</th><th class= border border-solid>Revenue</th>";
    array.forEach(element => {
        if (element.id == id) {
            const row = table.insertRow();
            row.innerHTML = `<td class= border border-solid>${element.vote_average.toFixed(2)} %</td><td class= border border-solid>U$D${element.budget.toLocaleString()}</td><td class= border border-solid>U$D${element.revenue.toLocaleString()}</td>`;
        }
    });
    container_table2.appendChild(table);
}
/* renderTable2(movies, container_table2); */

//Averiguar si existe insertar Columna y como se llama. 
