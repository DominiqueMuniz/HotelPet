const formulario = document.querySelector("form");
formulario.addEventListener("submit", (event) => {
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    if (!email || !senha) {
        alert("Por favor, preencha todos os campos!");
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    // Obter os usuários cadastrados do localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar se o login é válido
    const usuarioValido = usuarios.find(
        (usuario) => usuario.email === email && usuario.senha === senha
    );

    if (!usuarioValido) {
        alert("Login ou senha incorretos!");
        event.preventDefault(); // Impede o envio do formulário
        return;
    }
});