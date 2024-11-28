document.addEventListener("DOMContentLoaded", function () {
    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    const reservaId = new URLSearchParams(window.location.search).get("id");

    console.log("Reservas carregadas do localStorage:", reservas);
    console.log("ID da reserva na URL:", reservaId);

    function exibirReserva(reserva) {
        document.getElementById("proprietario").textContent = reserva.proprietario;
        document.getElementById("pet").textContent = reserva.pet;
        document.getElementById("periodo").textContent = reserva.periodo;
        document.getElementById("status").textContent = reserva.status;
        document.getElementById("total").textContent = reserva.total || "00,00";
        document.getElementById("notas").textContent = reserva.notas || "Sem notas adicionais.";
    }

    if (reservaId) {
        const reserva = reservas.find(r => r.id === reservaId);

        if (reserva) {
            exibirReserva(reserva);
        } else {
            alert("Reserva não encontrada.");
        }
    } else {
        alert("ID da reserva não fornecido.");
    }
});
