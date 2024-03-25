// Função para mudar a cor do texto do header ao rolar a página
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("header").style.backgroundColor = "#333";
        document.querySelector("header").style.padding = "5px 0";
    } else {
        document.querySelector("header").style.backgroundColor = "transparent";
        document.querySelector("header").style.padding = "10px 0";
    }
}

// Função para exibir uma mensagem ao clicar no botão "Saiba Mais"
document.getElementById("saiba-mais-btn").onclick = function() {
    alert("Cliquei no botão!");
};
