document.addEventListener("DOMContentLoaded", () => {
    
    const elementosParaDigitar = document.querySelectorAll(".efeito-digitar");
    
    elementosParaDigitar.forEach((elemento) => {
        const textoOriginal = elemento.innerHTML;
        const textoPuro = elemento.textContent; 
        elemento.textContent = "";
        let index = 0;

        function digitar() {
            if (index < textoPuro.length) {
                elemento.textContent += textoPuro.charAt(index);
                index++;
                setTimeout(digitar, 50); 
            } else {
                elemento.innerHTML = textoOriginal; 
            }
        }
        digitar();
    });


    const botaoCarimbo = document.getElementById("botaoCarimbo");
    const carimbo = document.getElementById("carimbo");

    if (botaoCarimbo && carimbo) {
        botaoCarimbo.addEventListener("click", () => {
            carimbo.classList.toggle("escondido");
            if (carimbo.classList.contains("escondido")) {
                botaoCarimbo.textContent = "Autenticar Ficha";
            } else {
                botaoCarimbo.textContent = "Remover Autenticação";
            }
        });
    }

    const botaoCarimboFoto = document.getElementById("botaoCarimboFoto");
    const carimboFoto = document.getElementById("carimboFoto");

    if (botaoCarimboFoto && carimboFoto) {
        botaoCarimboFoto.addEventListener("click", () => {
            carimboFoto.classList.toggle("escondido");
            if (carimboFoto.classList.contains("escondido")) {
                botaoCarimboFoto.textContent = "Autenticar Foto";
            } else {
                botaoCarimboFoto.textContent = "Remover Foto";
            }
        });
    }
});