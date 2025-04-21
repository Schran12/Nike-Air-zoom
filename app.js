        const body = document.querySelector("body");
        const tenis = document.querySelector(".imagem-tenis");
        const botao = document.querySelector(".botao-carrinho");

        function mudarVisual(cor, imagem) {
            tenis.classList.add("troca-efeito");
            body.style.background = cor;
            botao.style.background = cor;

            setTimeout(() => {
                tenis.src = imagem;
                tenis.classList.remove("troca-efeito");
            }, 500);
        }