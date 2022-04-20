// Objetos e coleções
// vamos criar uma coleção de nomes
var nomes = ["Paula", "Henrique", "Vanessa"];

// usando
for (var i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}
// Outra forma  de ler coleções é usando iteradores, neste caso, você pode usar "foreach ou map"
//nomes.forEach()...
//nomes.map()...
nomes.forEach(saida);

function saida(valor, indice) {
  console.log("Do forEach ->" + valor);
}

// Variação do foreach com a função dentro da estrutura
nomes.forEach(function (valor, indice) {
  console.log(valor);
});
nomes.forEach((valor, indice) => {
  console.log("Arrow Function-> " + valor);
});
// --------------------------MAP---------------------------
nomes.map((valor, indice) => {
  console.log("Posição: " + indice + " Nome: " + valor);
});
// vamos criar um objeto chamado cliente
// para a definição dos dados do cliente é importante que estes fiquem entrem chaves
// Esta estrutura é do tipo Chave - valor.
const endereco = {
  tipo: "rua",
  logradouro: "Soldado Fernandes",
  numero: "73",
  complemento: "Casa dos Fundos",
  bairro: "Jardim Novo",
};
const cliente = {
  id: 1,
  nome: "paula de oliveira",
  idade: "25",
  cpf: "2201547854",
  endereco: endereco,
};
const prodCalca = {
  id: 1,
  nome: "Calça Jeans",
  preco: "R$150,00",
};
const prodBlusa = {
  id: 2,
  nome: "Blusa Jeans",
  preco: "R$150,00",
};
const prodTenis = {
  id: 3,
  nome: "Tenis Jeans",
  preco: "R$150,00",
};
const pedido = {
  id: 5514,
  data: "20/04/2022",
  hora: "15:00",
  cliente: cliente,
  produtos: [prodBlusa, prodCalca, prodTenis],
  entrega: endereco,
};

console.log("saida do objeto cliente");
console.log(pedido);
const out = document.getElementById("output");
out.innerHTML += `ID do Pedido: ${pedido.id}`;
out.innerHTML += `<br>Nome do Cliente: ${pedido.cliente.nome}`;

pedido.produtos.map((pr, ix) => {
  out.innerHTML += `<br>Pedido do Cliente: ${pr.nome}`;
});

out.innerHTML += `<br>Entrega do Pedido: ${pedido.entrega.logradouro}`;
