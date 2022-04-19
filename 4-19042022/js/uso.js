// Verificar qual a pagina que irá abrir este arquivo
// javascript
// peça a url completa do navegador
var pagina = window.location;
console.log(pagina);
// vamos quebrar a url onde houver barra
pagina = pagina.href.split("/");
console.log(pagina);
// pegar o ultimo elemento do array pagina criado acima
pagina = pagina[pagina.length - 1];
console.log(pagina);
if (pagina == "home.html") {
  document.body.style.backgroundColor = "rgb(150,150,150)";
  // acessar a caixa chamada numeros, capturar esses numeros e utilizar a função maior para encontrar o maior valor entre eles.
  const txtN = document.getElementById("txtN");
  // aplicar um evento chamado chamado unblur
  // quando a caixa perder o foco
  txtN.onblur = function () {
    // vamos capturar o valor contido em txtN , ou seja os numeros dentro desta caixa e alocar dentro de um array
    var valores = txtN.value.split(",");
    alert(maior(valores));
  };
}
if (pagina == "formulario.html") {
  document.body.style.backgroundColor = "rgb(0,255,255)";
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const cpf = document.getElementById("cpf");
  const tel = document.getElementById("tel");

  nome.onblur = () => {
    verificarvazio(nome);
  };
  email.onblur = () => {
    verificarvazio(email);
  };
  cpf.onblur = () => {
    verificarvazio(cpf);
  };
  tel.onblur = () => {
    verificarvazio(tel);
  };
}
