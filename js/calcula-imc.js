

/**
 *  Calcular imc 
 * @param {float} peso 
 * @param {float} altura 
 */
function calculaImc(peso,altura) {
  return (peso / (altura * altura)).toFixed(2);
}