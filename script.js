const banner = document.querySelector(".banner-details")
const mascara = document.querySelector(".mascara")
const botaoContrato = document.querySelector("#botao-contrato")

function cliqueiNoBotao (idDoBanner) {

    const imgBanner = document.querySelector(".img-1")

    const imagens = {
        1: "./assets/tabela-morango.jpg",
        2: "./assets/tabela-chocolate.jpg",
        3: "./assets/tabela-leitinho-cokie.jpg",
        4: "./assets/tabela-coco.jpg",
        5: "./assets/tabela-leitinho-cokie.jpg",
    }

    imgBanner.src = imagens[idDoBanner];
    banner.style.display = "block"
    mascara.style.display = "block"
}

function cliqueiNaMascara () {

    const mascara = document.querySelector(".mascara")

    banner.style.display = "none"
    mascara.style.display = "none"
}

mascara.addEventListener("click", cliqueiNaMascara)