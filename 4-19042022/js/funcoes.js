// Encontra o maior valor em um array
function maior(numeros) {
  // tranformar os numeros em inteiros para a programação
  for (var c = 0; c < numeros.length; c++) {
    numeros[c] = parseInt(numeros[c]);
  }
  var m = numeros[0];
  for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] > m) {
      m = numeros[i];
    }
  }
  return m;
}
// Encontra o menor valor em um array
function menor(numeros) {
  var m = numeros[0];
  for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] < m) {
      m = numeros[i];
    }
  }
  return m;
}
// verificar se um campo esta vazio e alertar um usuario

function verificarvazio(controle) {
  if (controle.value == "" || controle.value == null) {
    alert("O campo " + controle.id + " não pode ser vazio");
    controle.focus();
  }
}
// função data hora do sistema
function datahora() {
  return (
    new Date().toLocaleTimeString() + " - " + new Date().toLocaleDateString()
  );
}
