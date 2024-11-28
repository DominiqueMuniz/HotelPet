document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar e exibir os pets na tabela
    function loadPets() {
        const pets = JSON.parse(localStorage.getItem("pets")) || [];
        const petsTableBody = document.querySelector("#petsTable tbody");
        petsTableBody.innerHTML = ""; 

        // Adiciona os pets à tabela
        pets.forEach((pet, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${pet.nome}</td>
                <td>${pet.tipo}</td>
                <td>${pet.raca}</td>
                <td>${pet.tamanho}</td>
                <td>
                    <a href="/VisualizarPet/visualizar_pet.html?index=${index}">Visualizar</a> | 
                    <a href="/EditarPet/editar_pet.html?index=${index}">Editar</a>
                </td>
            `;
            petsTableBody.appendChild(row);
        });
    }

    loadPets();
});
