document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const userIndex = new URLSearchParams(window.location.search).get("index");

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    if (userIndex !== null && usuarios[userIndex]) {
        const usuario = usuarios[userIndex];
        document.getElementById("email").value = usuario.email;
        document.getElementById("nome").value = usuario.nome;
        document.getElementById("sobrenome").value = usuario.sobrenome;
        document.getElementById("telefone").value = usuario.telefone;
        document.getElementById("funcao").value = usuario.funcao;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const nome = document.getElementById("nome").value.trim();
        const sobrenome = document.getElementById("sobrenome").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const funcao = document.getElementById("funcao").value;

        if (!email || !nome || !telefone) {
            alert("Por favor, preencha todos os campos obrigatórios (*)!");
            return;
        }

        const usuarioAtualizado = {
            email,
            nome,
            sobrenome,
            telefone,
            funcao,
            status: usuarios[userIndex].status,
            criadoEm: usuarios[userIndex].criadoEm,
        };

        usuarios[userIndex] = usuarioAtualizado;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Usuário atualizado com sucesso!");
        window.location.href = "/Usuarios/usuarios.html";
    });
});
