document.addEventListener("DOMContentLoaded", function () {
    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    const reservaId = new URLSearchParams(window.location.search).get("id");

    // Função para preencher os campos do formulário com os dados da reserva
    function preencherFormulario(reserva) {
        document.getElementById("proprietario").value = reserva.proprietario;
        document.getElementById("pet").value = reserva.pet;
        document.getElementById("periodo").value = reserva.periodo;
        document.getElementById("status").value = reserva.status;
        document.getElementById("total").value = reserva.total || "00,00";
        document.getElementById("notas").value = reserva.notas || '';
    }

    // Função para atualizar a reserva no localStorage
    function atualizarReserva(event) {
        event.preventDefault();

        const proprietario = document.getElementById("proprietario").value;
        const pet = document.getElementById("pet").value;
        const periodo = document.getElementById("periodo").value;
        const status = document.getElementById("status").value;
        const total = document.getElementById("total").value;
        const notas = document.getElementById("notas").value;

        // Validação dos campos obrigatórios
        if (!proprietario || !pet || !periodo || !total) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        const reservaAtualizada = {
            id: reservaId,
            proprietario,
            pet,
            periodo,
            status,
            total,
            notas,
        };

        // Atualiza a reserva no localStorage
        const index = reservas.findIndex(reserva => reserva.id === reservaId);
        if (index !== -1) {
            reservas[index] = reservaAtualizada; // Substitui a reserva existente
            localStorage.setItem("reservas", JSON.stringify(reservas));
            alert("Reserva atualizada com sucesso!");
        } else {
            alert("Erro ao atualizar a reserva.");
        }
    }

    if (reservaId) {
        const reserva = reservas.find(r => r.id === reservaId);

        if (reserva) {
            preencherFormulario(reserva);
        } else {
            alert("Reserva não encontrada.");
        }
    } else {
        alert("ID da reserva não fornecido.");
    }

    // Adiciona o evento de submit no formulário para salvar a reserva atualizada
    const form = document.getElementById("editReservaForm");
    form.addEventListener("submit", atualizarReserva);
});
