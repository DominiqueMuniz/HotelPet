document.addEventListener("DOMContentLoaded", function () {
    function loadUser() {
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const userTableBody = document.querySelector("#usuariosTabela tbody");
        userTableBody.innerHTML = "";
        usuarios.forEach((usuario, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${usuario.email}</td>
                <td>${usuario.nome}</td>
                <td>${usuario.funcao}</td>
                <td>${usuario.status || "Ativo"}</td>
                <td>${usuario.criadoEm || new Date().toLocaleDateString()}</td>
                <td>
                    <a href="/VisualizarUser/visualizar_user.html?index=${index}">Visualizar</a> |
                    <a href="/EditarPerfil/editar_perfil.html?index=${index}">Editar</a>
                </td>
            `;
            userTableBody.appendChild(row);
        });
    }

    loadUser();
});
