document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form-editar-reserva');

    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

    // Função para editar a reserva
    function editarReserva(event) {
        event.preventDefault();
        const proprietario = document.getElementById('proprietario').value;
        const pet = document.getElementById('pet').value;
        const periodo = document.getElementById('periodo').value;
        const total = document.getElementById('total').value;
        const notas = document.getElementById('notas').value;

        if (!proprietario || !pet || !periodo || !total) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Encontrar a reserva que será editada 
        const reserva = reservas.find(r => r.status === "finalizado" && r.proprietario === proprietario && r.pet === pet);
        
        if (!reserva) {
            alert("Reserva não encontrada ou já editada.");
            return;
        }

        // Atualizar a reserva
        reserva.total = total;
        reserva.notas = notas;

        localStorage.setItem("reservas", JSON.stringify(reservas));

        alert("Reserva editada com sucesso!");

        form.reset();
    }

    const reserva = reservas.find(r => r.status === "finalizado");
    if (reserva) {
        document.getElementById('proprietario').value = reserva.proprietario;
        document.getElementById('pet').value = reserva.pet;
        document.getElementById('periodo').value = reserva.periodo;
        document.getElementById('total').value = reserva.total;
        document.getElementById('notas').value = reserva.notas;
    }

    form.addEventListener('submit', editarReserva);
});
