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

