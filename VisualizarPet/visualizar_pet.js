document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar e exibir os dados do pet
    function loadPetDetails() {
        const urlParams = new URLSearchParams(window.location.search);
        const petIndex = urlParams.get('index');
        
        if (petIndex === null) {
            alert("Pet não encontrado!");
            return;
        }

        const pets = JSON.parse(localStorage.getItem("pets")) || [];
        
        if (petIndex < 0 || petIndex >= pets.length) {
            alert("Pet não encontrado!");
            return;
        }

        const pet = pets[petIndex];

        document.getElementById("petNome").textContent = pet.nome;
        document.getElementById("petTipo").textContent = pet.tipo;
        document.getElementById("petRaca").textContent = pet.raca;
        document.getElementById("petTamanho").textContent = pet.tamanho;

        if (pet.imagem) {
            document.getElementById("petImagem").src = pet.imagem;
        } else {
            document.getElementById("petImagem").alt = "Imagem não disponível";
        }
    }

    loadPetDetails();
});
