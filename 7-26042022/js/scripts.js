function CarregarProdutos() {
  // fazer o carregamento da url com filmes
  // vamos usar o comando fetch para localizar e
  // carregar os filmes e exibir em pagina html
  fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  )
    .then((response) => response.json())
    .then((dados) => {
      console.log(dados);
      var saida = "<div id=produto>";
      dados.map((item, ix) => {
        saida += `
        <div>
        <img src=${item.image_link}>
        <a href="${item.product_link}"><center>${item.name}</center></a>
        <p class=avaliacao>${item.rating}</p>
        <p class=preco>R$ ${item.price}</p>
        </div>
      `;
      });
      saida += "</div>";
      document.body.innerHTML += saida;
    })
    .catch((erro) => console.error(`erro ao tentar executar a api -> ${erro}`));
}
