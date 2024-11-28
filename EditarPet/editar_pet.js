document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");

    // Obtém o índice do pet da URL ou assume que é um novo pet
    const petIndex = new URLSearchParams(window.location.search).get("index");

    // Verifica se o índice é válido e se o pet existe no localStorage
    if (petIndex !== null) {
        const pets = JSON.parse(localStorage.getItem("pets")) || [];
        const pet = pets[petIndex];

        if (pet) {
            // Preenche o formulário com os dados do pet
            document.getElementById("nome").value = pet.nome;
            document.getElementById("tipo").value = pet.tipo;
            document.getElementById("tamanho").value = pet.tamanho;
            document.getElementById("raca").value = pet.raca;
        }
    }

    // Evento de envio do formulário
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const nome = document.getElementById("nome").value;
        const tipo = document.getElementById("tipo").value;
        const tamanho = document.getElementById("tamanho").value;
        const raca = document.getElementById("raca").value;
        const imagem = document.getElementById("imagem").files[0]; 

        const petData = {
            nome: nome,
            tipo: tipo,
            tamanho: tamanho,
            raca: raca,
            imagem: imagem ? imagem.name : null, // Salva apenas o nome da imagem
        };

        // Atualiza o pet ou cria um novo, dependendo se há um índice
        const pets = JSON.parse(localStorage.getItem("pets")) || [];
        if (petIndex !== null && pets[petIndex]) {
            pets[petIndex] = petData;
        } else {
            pets.push(petData);
        }

        localStorage.setItem("pets", JSON.stringify(pets));

        window.location.href = "/Pets/pets.html";
    });
});
