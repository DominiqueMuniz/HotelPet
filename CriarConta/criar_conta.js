const formulario = document.querySelector("form");
formulario.addEventListener("submit", (event) => {
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    if (!email || !senha) {
        alert("Por favor, preencha todos os campos!");
        event.preventDefault();
        return;
    }

    if (senha.length < 5) {
        alert("A senha deve ter no mínimo 5 caracteres.");
        event.preventDefault();
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const novoUsuario = { email, senha };

    const usuarioExistente = usuarios.find((usuario) => usuario.email === email);
    if (usuarioExistente) {
        alert("Este email já está cadastrado.");
        event.preventDefault();
        return;
    }

    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Conta criada com sucesso!");
});