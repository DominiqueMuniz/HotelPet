document.addEventListener("DOMContentLoaded", () => {
    const tabelaCorpo = document.querySelector(".table tbody");
    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

    if (reservas.length === 0) {
        tabelaCorpo.innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center;">Nenhuma reserva cadastrada.</td>
            </tr>
        `;
        return;
    }

    reservas.forEach((reserva, index) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${reserva.id}</td>
            <td>${reserva.proprietario}</td>
            <td>${reserva.pet}</td>
            <td>${reserva.periodo.split(" - ")[0]}</td>
            <td>${reserva.periodo.split(" - ")[1]}</td>
            <td><span class="status ${reserva.status}">${reserva.status}</span></td>
            <td>R$ ${reserva.total || "00,00"}</td>
            <td>
                <a href="/EditarReserva/editar_reserva.html?id=${reserva.id}">Editar</a> | 
                <a href="/VerReserva/ver_reserva.html?id=${reserva.id}">Visualizar</a>
            </td>
        `;
        tabelaCorpo.appendChild(linha);
    });
});
