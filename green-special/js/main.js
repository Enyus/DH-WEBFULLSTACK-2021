// getElementsByTagName('tag') - seleciona elementos pela tag, retornando uma lista HTML collection

let logo = document.querySelector("img.logo")

// logo.addEventListener("mouseover", function(e) {
//     logo.style.transform = "rotate(180deg)";
// });

// logo.addEventListener("mouseout", function(e) {
//     logo.style.transform = "rotate(0)";
// });

logo.onmouseover = () => setTimeout( () => {logo.style.transform = "rotate(180deg)"}, 500 )

logo.onmouseout = () => setTimeout( () => {logo.style.transform = "rotate(0)"}, 1000 )

// Fazer o header ficar transparente ao dar scroll
let header = document.querySelector("nav#mainNav")

window.onscroll = () => {
    if (window.scrollY > 78) {
        header.style.backgroundColor = "rgba(255, 255, 255, 0.7)"
    } else {
        header.style.backgroundColor = "rgba(255, 255, 255, 1)"
    }
}

// Fazer as imagens do card aumentarem de tamanho ao passar o mouse

let imagensDosCards = document.querySelectorAll("div.ser-icon img.img-fluid")

// imagensDosCards.forEach( (imagem) => {
//     imagem.onmouseover = () => {
//         imagem.classList.toggle("grow")
//     };
//     imagem.onmouseout = () => {
//         imagem.classList.toggle("grow")
//     };
// });

imagensDosCards.forEach( imagem => {
    imagem.onmouseover = function() {
        this.classList.toggle("grow")
    };
    imagem.onmouseout = function () {
        this.classList.toggle("grow")
    };
});