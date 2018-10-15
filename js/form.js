/**
 *  Montar linha e colunas da tabela dinamicamente
 * @param {object} paciente
 */
function montaTabela(paciente) {
  let tabelaPacientes = document.querySelector("#tabela-pacientes");
  let rowPaciente = tabelaPacientes.appendChild(document.createElement("tr"));
  rowPaciente.classList.add("paciente");

  for (let i = 0; i < Object.keys(paciente).length; i++) {
    // Popular colunas dinamicamente
    let columnPaciente = rowPaciente.appendChild(document.createElement("td"));
    columnPaciente.textContent = paciente[Object.keys(paciente)[i]];
    columnPaciente.classList.add(`info-${Object.keys(paciente)[i]}`);
  }
}

/**
 * Retorna um objeto com os dados do paciente retirados do form
 * @return object
 */
function obtemPacienteDoFormulario(form) {
  let paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(this.peso, this.altura)
  };
  return paciente;
}

/**
 * Validar dados do paciente
 * @param {*} paciente
 */
function validarPacientes() {
  var pacientesLinhas = document.querySelectorAll(".paciente");
  pacientesLinhas.forEach(pacienteTd => {
    // peso
    var peso = pacienteTd.querySelector(".info-peso").textContent;
    // altura
    var altura = pacienteTd.querySelector(".info-altura").textContent;
    // column with result
    var tdImc = pacienteTd.querySelector(".info-imc");
    // check data
    var pesoValido = validaPeso({ peso: peso });
    var AlturaValido = validaAltura({ altura: peso });

    if (peso <= 0 || peso >= 1000) {
      tdImc.textContent = "Peso inválido";
      pesoValido = false;
      pacienteTd.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 4) {
      tdImc.textContent = "Altura inválida";
      AlturaValido = false;
      pacienteTd.classList.add("paciente-invalido");
    }

    if (pesoValido && AlturaValido) {
      tdImc.textContent = calculaImc(peso, altura);
    }
  }); //endForeach
}
/**
 * Validar peso do paciente
 * @param {*} paciente
 */
function validaPeso(paciente) {
  if (paciente.peso > 0 && paciente.peso < 100) return true;
  return false;
}

/**
 * Validar altura do paciente
 * @param {*} paciente
 */
function validaAltura(paciente) {
  if (paciente.altura > 0 && paciente.altura < 100) return true;
  return false;
}
