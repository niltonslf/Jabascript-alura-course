
var titulo = document.querySelector('.titulo')
titulo.textContent = "Curso javascript"

validarDados()

function validarDados(){
  var pacientes = document.querySelectorAll(".paciente")
  console.log(pacientes);
  pacientes.forEach(paciente => {
    var tdPeso = paciente.querySelector('.info-peso')
    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector('.info-altura')
    var altura = tdAltura.textContent

    var tdImc = paciente.querySelector('.info-imc')

    var pesoValido = true
    var AlturaValido = true

    if (peso <= 0 || peso >= 1000) {
      tdImc.textContent = "Peso inválido"
      pesoValido = false
      paciente.classList.add('paciente-invalido')
    }

    if (altura <= 0 || altura >= 4) {
      tdImc.textContent = "Altura inválida"
      AlturaValido = false
      paciente.classList.add('paciente-invalido')
    }

    if (pesoValido && AlturaValido) {
      tdImc.textContent = calculaImc(peso, altura)
    }
  }) //endForeach
}






