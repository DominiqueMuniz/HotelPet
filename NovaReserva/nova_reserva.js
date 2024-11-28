document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form-nova-reserva');

    // Função para salvar a nova reserva
    function salvarReserva(event) {
        event.preventDefault(); 

        const proprietario = document.getElementById('proprietario').value;
        const pet = document.getElementById('pet').value;
        const periodo = document.getElementById('periodo').value;
        const status = document.getElementById('status').value;
        const notas = document.getElementById('notas').value;

        if (!proprietario || !pet || !periodo) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        const novaReserva = {
            id: Date.now().toString(),
            proprietario: proprietario,
            pet: pet,
            periodo: periodo,
            status: status,
            notas: notas
        };

        const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

        reservas.push(novaReserva);

        localStorage.setItem("reservas", JSON.stringify(reservas));

        alert("Reserva salva com sucesso!");

        form.reset();
    }

    form.addEventListener('submit', salvarReserva);
});
