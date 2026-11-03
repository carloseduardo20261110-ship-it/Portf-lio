// Atualiza o ano automaticamente no rodapé
const ano = document.querySelector("#ano");

ano.textContent = new Date().getFullYear();

// Anima os elementos quando aparecem na tela
const elementos = document.querySelectorAll(
    ".secao, .card-habilidade, .card-projeto"
);

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
            observador.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.12
});

elementos.forEach((elemento) => {
    elemento.classList.add("animar");
    observador.observe(elemento);
});

// Abre e fecha o menu de contatos
const botaoContato = document.querySelector("#botaoContato");
const menuContatos = document.querySelector("#menuContatos");

botaoContato.addEventListener("click", () => {
    menuContatos.classList.toggle("aberto");
});

// Fecha o menu quando clicar fora dele
document.addEventListener("click", (evento) => {
    if (
        !botaoContato.contains(evento.target) &&
        !menuContatos.contains(evento.target)
    ) {
        menuContatos.classList.remove("aberto");
    }
});