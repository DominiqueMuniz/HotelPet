document.addEventListener("DOMContentLoaded", function () {
    function loadUserDetails() {
        const urlParams = new URLSearchParams(window.location.search);
        const userIndex = urlParams.get("index");

        if (userIndex === null || isNaN(userIndex)) {
            alert("Usuário não encontrado!");
            return;
        }

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        if (userIndex < 0 || userIndex >= usuarios.length) {
            alert("Usuário não encontrado!");
            return;
        }

        const usuario = usuarios[userIndex];

        document.getElementById("userEmail").textContent = usuario.email || "Não informado";
        document.getElementById("userNome").textContent = usuario.nome || "Não informado";
        document.getElementById("userSobrenome").textContent = usuario.sobrenome || "Não informado";
        document.getElementById("userTelefone").textContent = usuario.telefone || "Não informado";
        document.getElementById("userFuncao").textContent = usuario.funcao || "Não informado";
        document.getElementById("userStatus").textContent = usuario.status || "Ativo";
        document.getElementById("userCriadoEm").textContent = usuario.criadoEm || "Data desconhecida";

        const userImagem = document.getElementById("userImagem");
        if (usuario.imagem) {
            userImagem.src = usuario.imagem;
            userImagem.alt = "Imagem do Usuário";
        } else {
            userImagem.src = ""; 
            userImagem.alt = "Imagem não disponível";
        }
    }

    loadUserDetails();
});
