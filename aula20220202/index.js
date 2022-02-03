const BASE_API = "https://restcountries.com/v3.1"
const paisesContainer = document.querySelector("#paises")

async function getCountries () {
    const response = await fetch (`${BASE_API}/all`, {
        // headers : {
        //     'authorization':'XPTO',
        // }
        headers: {},
        method: 'GET',
    })

    const listCountries = await response.json();

    // console.log(listCountries)

    listCountries.forEach( (country) => {
        // innerHTML não é bom para performance, pois obriga o navegador a carregar todo o código novamente
        paisesContainer.insertAdjacentHTML ('beforeend', `
            <div class="card" style="width: 18rem;">
                <img src="${country.flags.png}" class="card-img-top" alt="${country.name.common}">
                <div class="card-body">
                  <h5 class="card-title">${country.name.common}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `) 
    });
}

getCountries();