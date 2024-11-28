// Recuperar as configurações salvas no localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    const valorDiaria = localStorage.getItem('valor_diaria');
    const vagas = localStorage.getItem('vagas');

    // Preencher os campos com os valores salvos, caso existam
    if (valorDiaria) {
        document.getElementById('valor_diaria').value = valorDiaria;
    }
    if (vagas) {
        document.getElementById('vagas').value = vagas;
    }
});

// Salvar as configurações quando o formulário for enviado
document.getElementById('configForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const valorDiaria = document.getElementById('valor_diaria').value;
    const vagas = document.getElementById('vagas').value;

    localStorage.setItem('valor_diaria', valorDiaria);
    localStorage.setItem('vagas', vagas);

    alert('Configurações salvas com sucesso!');
});
