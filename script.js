//acesso login

function validarLogin() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const emailCorreto = "teste@email.com";
  const senhaCorreta = "123456";

  if (email === emailCorreto && senha === senhaCorreta) {

    document.getElementById("login-screen").remove();

    const app = document.getElementById("app");

    app.classList.remove("hidden");
    app.style.display = "flex";

  } else {
    alert("Email ou senha inválidos.");
  }
} 

function atualizarProgresso() {
    // Todas as tarefas
    const totalTarefas = document.querySelectorAll('.card').length;

    // Apenas tarefas concluídas
    const tarefasConcluidas = document.querySelectorAll(
        '.card[data-status="concluido"]'
    ).length;

    // Evita divisão por zero
    const percentual = totalTarefas > 0
        ? Math.round((tarefasConcluidas / totalTarefas) * 100)
        : 0;

    // Atualiza barra
    const progressFill = document.getElementById('progress-fill');
    progressFill.style.width = `${percentual}%`;

    // Atualiza texto
    document.getElementById('progress-label').textContent =
        `${percentual}%`;

    document.querySelector('.progress-hint').textContent =
        `${tarefasConcluidas} de ${totalTarefas} tarefas concluídas`;

    // Atualiza atributos de acessibilidade
    const progressBar = document.querySelector('.progress-bar');
    progressBar.setAttribute('aria-valuenow', percentual);
    progressBar.setAttribute(
        'aria-label',
        `${percentual}% das tarefas concluídas`
    );
}

document.addEventListener('DOMContentLoaded', () => {
    atualizarProgresso();
});

function soltarTarefa(event, novoStatus) {
    event.preventDefault();

    const tarefaId = event.dataTransfer.getData("text");
    const card = document.querySelector(`[data-id="${tarefaId}"]`);

    if (card) {
        document.getElementById(`col-${novoStatus}`).appendChild(card);

        // Atualiza status
        card.dataset.status = novoStatus;

        atualizarProgresso();
    }
}

function atualizarContadores() {
    document.getElementById('count-afazer').textContent =
        document.querySelectorAll('.card[data-status="afazer"]').length;

    document.getElementById('count-fazendo').textContent =
        document.querySelectorAll('.card[data-status="fazendo"]').length;

    document.getElementById('count-concluido').textContent =
        document.querySelectorAll('.card[data-status="concluido"]').length;
}

atualizarContadores();
atualizarProgresso();
