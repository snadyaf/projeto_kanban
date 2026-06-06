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

function iniciarPomodoro() {

    const display = document.getElementById("timer-display");

    contagemTempo = setInterval(() => {

        const minutos = Math.floor(tempo / 60);
        const segundos = tempo % 60;

        display.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

        tempo--;

    }, 1000);

    
}

function pausarPomodoro() {

    clearInterval(contagemTempo);

    contagemTempo = null;

}

function reiniciarPomodoro() {

    clearInterval(contagemTempo);
    contagemTempo = null;

    tempo = 25 * 60;

    document.getElementById("timer-display").textContent = "25:00";

    iniciarPomodoro();
}

function selecionarModoPomodoro(modo) {

    document.querySelectorAll(".mode-btn").forEach(botao => {
        botao.classList.remove("active");
    });

    document.querySelector(`[data-mode="${modo}"]`).classList.add("active");

    if (modo === "foco") {
        tempo = 25 * 60;
    }

    if (modo === "pausa") {
        tempo = 5 * 60;
    }

    if (modo === "pausaLonga") {
        tempo = 15 * 60;
    }

    const minutos = Math.floor(tempo / 60);

    document.getElementById("timer-display").textContent = `${minutos.toString().padStart(2, "0")}:00`;

    document.getElementById("timer-mode-label").textContent = modo === "foco" ? "Foco" : modo === "pausa" ? "Pausa" : "Pausa Longa";
}
