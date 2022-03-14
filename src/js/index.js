const listaSelecaoClubes = document.querySelectorAll(".clube");
const clubesCard = document.querySelectorAll(".cartao-clube");

listaSelecaoClubes.forEach((clube) => {
    clube.addEventListener("click", () => {
        const cartaoClubeAberto = document.querySelector(".aberto");
        cartaoClubeAberto.classList.remove("aberto");

        const idClubeSelecionado = clube.attributes.id.value;

        const idDoCartaoClubeParaAbrir = "cartao-" + idClubeSelecionado;
        const cartaoCluabeParaAbrir = document.getElementById(idDoCartaoClubeParaAbrir)
        cartaoCluabeParaAbrir.classList.add("aberto")

        const clubeAtivoNaListagem = document.querySelector(".ativo")
        clubeAtivoNaListagem.classList.remove("ativo")

        const clubeSelecionadoNaListagem = document.getElementById(idClubeSelecionado)
        clubeSelecionadoNaListagem.classList.add("ativo")
    })
})