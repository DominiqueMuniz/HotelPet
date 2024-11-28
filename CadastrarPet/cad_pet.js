document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const proprietario = document.querySelector("#proprietario").value.trim();
        const nome = document.querySelector("#nome").value.trim();
        const tipo = document.querySelector("#tipo").value.trim();
        const tamanho = document.querySelector("#tamanho").value.trim();
        const raca = document.querySelector("#raca").value.trim();
        const imagemInput = document.querySelector("#imagem");

        if (!proprietario || !nome || !tipo || !tamanho || !raca) {
            alert("Por favor, preencha todos os campos obrigatórios (*)!");
            return;
        }

        const novoPet = {
            proprietario,
            nome,
            tipo,
            tamanho,
            raca,
            imagem: imagemInput.files[0] ? URL.createObjectURL(imagemInput.files[0]) : null // Converte a imagem em um URL local
        };

        // Recupera o array de pets do localStorage
        const pets = JSON.parse(localStorage.getItem("pets")) || [];
        pets.push(novoPet);
        localStorage.setItem("pets", JSON.stringify(pets));

        alert("Pet cadastrado com sucesso!");

        formulario.reset();
    });
});
