
const imagensGaleria = [
{ src: "/images/Galeria/Flash Frontal.png", alt: "Foto da galeria JOVI Vision AI" },
{ src: "/images/Galeria/IA - Ativação.png", alt: "Foto da ativação da IA" },
{ src: "/images/Galeria/Melhoria IA - Cores.png", alt: "Melhoria na qualidade das cores" },
{ src: "/images/Galeria/Melhoria IA - Fundo+Cores.png", alt: "Melhoria no fundo e nas cores" },
{ src: "/images/Galeria/Melhoria IA - Fundo.png", alt: "Melhoria no fundo" },
{ src: "/images/Galeria/Melhoria IA - nada.png", alt: "Foto original, sem melhorias aplicadas" },
{ src: "/images/Galeria/Melhoria IA - Nitidez.png", alt: "Melhoria na nitidez" },
];

let indiceAtual = 0;

function atualizarCarousel() {
const imagem = document.getElementById("carousel-imagem");
const contador = document.getElementById("carousel-contador");
if (!imagem) return;

const atual = imagensGaleria[indiceAtual];
imagem.src = atual.src;
imagem.alt = atual.alt;

if (contador) {
    contador.textContent = `${indiceAtual + 1} / ${imagensGaleria.length}`;
}

document.querySelectorAll(".carousel-dot").forEach((dot, i) => {
    dot.classList.toggle("ativo", i === indiceAtual);
});
}

function irParaImagem(indice) {
const total = imagensGaleria.length;
indiceAtual = (indice + total) % total; 
atualizarCarousel();
}

function proximaImagem() {
irParaImagem(indiceAtual + 1);
}

function imagemAnterior() {
irParaImagem(indiceAtual - 1);
}

function montarDots() {
const container = document.getElementById("carousel-dots");
if (!container) return;

container.innerHTML = "";
imagensGaleria.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot" + (i === 0 ? " ativo" : "");
    dot.setAttribute("aria-label", `Ir para imagem ${i + 1}`);
    dot.addEventListener("click", () => irParaImagem(i));
    container.appendChild(dot);
});
}

document.addEventListener("DOMContentLoaded", () => {
const btnPrev = document.querySelector(".carousel-prev");
const btnNext = document.querySelector(".carousel-next");

if (btnPrev) btnPrev.addEventListener("click", imagemAnterior);
if (btnNext) btnNext.addEventListener("click", proximaImagem);

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") imagemAnterior();
    if (e.key === "ArrowRight") proximaImagem();
});

montarDots();
atualizarCarousel();
});