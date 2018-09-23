//Botão de adicionar paciente
var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener('click', (event) => {
  event.preventDefault()

  let form = document.querySelector('.form')

  let paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(this.peso, this.altura)
  }

  let tabelaPacientes = document.querySelector("#tabela-pacientes")
  let rowPaciente = tabelaPacientes.appendChild(document.createElement('tr'))
  rowPaciente.classList.add("paciente");

  for (let i = 0; i < Object.keys(paciente).length; i++) {
    // Popular colunas dinamicamente
    let columnPaciente = rowPaciente.appendChild(document.createElement('td'))
    columnPaciente.textContent = paciente[Object.keys(paciente)[i]]
    columnPaciente.classList.add(`info-${Object.keys(paciente)[i]}`);
  }
  validarDados() // validar se as informações estão corretas
})