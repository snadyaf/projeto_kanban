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

/* Funcão que abre o modal de tarefas para adiconar novas tarefas */
function abrirModalNovaTarefa(){
  const modal = document.getElementById('modal-tarefa');

  modal.classList.remove('hidden');
}

/* array para adicinar as tarefas */
const tarefas = []

/* Salvando os valores de cada campo */
function salvarTarefa(){
  const titulo = document.getElementById('modal-tarefa-titulo').value
  const descricao = document.getElementById('modal-tarefa-desc').value
  const data = document.getElementById('modal-tarefa-data').value
  const status = document.getElementById('modal-tarefa-status').value
  const tag = document.getElementById('modal-tarefa-tag').value

  const tarefa = {
    titulo: titulo, 
    descricao: descricao, 
    data: data, 
    status: status, 
    tag: tag
  }

  tarefas.push(tarefa)
  renderizarTarefa(tarefa)


  // limpando os campos do modal depois de salvar
  document.getElementById('modal-tarefa-titulo').value = ''
  document.getElementById('modal-tarefa-desc').value = ''
  document.getElementById('modal-tarefa-data').value = ''
  document.getElementById('modal-tarefa-status').value = ''
  document.getElementById('modal-tarefa-tag').value = ''

  const modal = document.getElementById('modal-tarefa');
  modal.classList.add('hidden');
}

function renderizarTarefa(tarefa) {
  const novaDiv = document.createElement('div')
  novaDiv.innerHTML = `

  <article
  class="card"
  draggable="true"
  data-id="1"
  data-status="afazer"
  ondragstart="arrastarTarefa(event)"
  aria-label="Tarefa: Criar wireframes do projeto"
  >

  <div class="card-header">
  <span class="card-tag tag-design">${tarefa.tag}</span>
  <div class="card-actions">
  <button class="card-btn" onclick="editarTarefa(1)" aria-label="Editar tarefa">✎</button>
  <button class="card-btn card-btn-danger" onclick="removerTarefa(1)" aria-label="Remover tarefa">✕</button>
  </div>
  </div>

  <h3 class="card-title">${tarefa.titulo}</h3>
  <p class="card-desc">${tarefa.descricao}</p>
  <div class="card-footer">
  <span class="card-date">
  <span aria-hidden="true">📅</span>
  <time datetime="2026-06-05">${tarefa.data}</time>
  </span>
  </div>
  </article>
  `

  if(tarefa.status === 'afazer'){
    const afazer = document.getElementById('col-afazer')
    afazer.appendChild(novaDiv)
  }
  else if(tarefa.status === 'fazendo'){
    const fazendo = document.getElementById('col-fazendo')
    fazendo.appendChild(novaDiv)
  }
  else{
    const concluido = document.getElementById('col-concluido')
    concluido.appendChild(novaDiv)
  }
}
