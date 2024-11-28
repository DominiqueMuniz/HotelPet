document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("#form-novo-usuario");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.querySelector("#email").value.trim();
        const nome = document.querySelector("#nome").value.trim();
        const sobrenome = document.querySelector("#sobrenome").value.trim();
        const telefone = document.querySelector("#telefone").value.trim();
        const funcao = document.querySelector("#funcao").value;

        if (!email || !nome || !telefone) {
            alert("Por favor, preencha todos os campos obrigatórios (*)!");
            return;
        }

        const novoUsuario = {
            email,
            nome,
            sobrenome,
            telefone,
            funcao,
            status: "Ativo",
            criadoEm: new Date().toLocaleDateString(),
        };

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuarios.push(novoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Usuário cadastrado com sucesso!");
        formulario.reset();
    });
});
