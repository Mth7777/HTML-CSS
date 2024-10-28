const listaSelecaoheroi = document.querySelectorAll(".heroi");

listaSelecaoheroi.forEach(heroi => {
	heroi.addEventListener("click", () => {
		esconderCartaoHeroi();

		const idHeroiSelecionado = mostrarCartaoHeroiSelecionado(heroi);

		desativarHeroiNaListagem();
		ativarHeroiSelecionadoNaListagem(idHeroiSelecionado);
	})
})

function ativarHeroiSelecionadoNaListagem(idheroiSelecionado) {
	const heroiSelecionadoNaListagem = document.getElementById(idHeroiSelecionado);
	heroiSelecionadoNaListagem.classList.add("ativo");
}

function desativarHeroiNaListagem() {
	const heroiAtivoNaListagem = document.querySelector(".ativo");
	if (heroiAtivoNaListagem) {
		heroiAtivoNaListagem.classList.remove("ativo");
	}
}

function mostrarCartaoHeroiSelecionado(heroi) {
	const idPHeroiSelecionado = heroi.attributes.id.value;
	const idDoCartaoHeroiParaAbrir = "cartao-" + idPHeroiSelecionado;
	const cartaoHeroiParaAbrir = document.getElementById(idDoCartaoHeroiParaAbrir);
	cartaoHeroiParaAbrir.classList.add("aberto");
	return idPHeroiSelecionado;
}

function esconderCartaoHeroi() {
	const cartaoHeroiAberto = document.querySelector(".aberto");
	if (cartaoHeroiAberto) {
		cartaoHeroiAberto.classList.remove("aberto");
	}
}
