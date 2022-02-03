
const BASE_API = `https://newsapi.org/v2/top-headlines?country=br`
const noticiasContainer = document.getElementById("listaDeNoticias")

async function getNoticias () {
    const response = await fetch (`${BASE_API}`, {
        headers: {
            "Authorization": '66aada1717864729a0817d6bd29121cb',
        },
        method: "GET",
    });

    const listaNoticias = await response.json();

    // console.log(listaNoticias)

    listaNoticias.articles.forEach( (noticia) => {
        noticiasContainer.insertAdjacentHTML ('beforeend', `
        <div class="col-3">
          <div class="card">
            <img src=${noticia.urlToImage} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${noticia.title}</h5>
              <p class="card-text">
                ${noticia.description}
              </p>
              <a href=${noticia.url} class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        `);
    });
}

getNoticias();