//lógica de login - Snádya 

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

//lógica das opções - Snádya 

function navegarPara(secao) {

      document.querySelectorAll(".section").forEach(section => {
      section.classList.remove("active");
      section.hidden = true;
    }); 

      const destino = document.getElementById(`section-${secao}`);

    destino.hidden = false;
    destino.classList.add("active");
}

//lógica do pomodoro - Snádya

let tempo = 25 * 60;
let contagemTempo = null;
let modoAtual = "foco";

const tempos = {
    foco: 25 * 60,
    pausa: 5 * 60,
    pausaLonga: 15 * 60
};

function atualizarDisplay() {

    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;

    document.getElementById("timer-display").textContent = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
}

function iniciarPomodoro() {

    if (contagemTempo) return;

    contagemTempo = setInterval(() => {

        tempo--;

        atualizarDisplay();

        if (tempo <= 0) {

            clearInterval(contagemTempo);
            contagemTempo = null;

            tempo = 0;
            atualizarDisplay();
            
        }

    }, 1000);
}

function pausarPomodoro() {

    clearInterval(contagemTempo);
    contagemTempo = null;

}

function reiniciarPomodoro() {

    clearInterval(contagemTempo);
    contagemTempo = null;

    tempo = tempos[modoAtual];

    atualizarDisplay();

}

function selecionarModoPomodoro(modo) {

    modoAtual = modo;

    clearInterval(contagemTempo);
    contagemTempo = null;

    document.querySelectorAll(".mode-btn").forEach(botao => {
        botao.classList.remove("active");
    });

    document.querySelector(`[data-mode="${modo}"]`).classList.add("active");

    tempo = tempos[modo];

    atualizarDisplay();

    document.getElementById("timer-mode-label").textContent = modo === "foco"  ? "FOCO" : modo === "pausa" ? "PAUSA" : "PAUSA LONGA";
}

atualizarDisplay();

//lógica da barra de progresso - Junior

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
