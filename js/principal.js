
var titulo = document.querySelector('.titulo')
titulo.textContent = "Curso javascript"

validarPacientes();

//Botão de adicionar paciente
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", event => {
  event.preventDefault();

  let form = document.querySelector(".form"); // seleciona o form de inserçao
  let paciente = obtemPacienteDoFormulario(form); // returna um objeto paciente
  montaTabela(paciente); // criar colunas com os dados do form
  validarPacientes(); // validadar os dados da tabela
  form.reset(); // limpar o formulário
});


