// Script para carregar dados em formato json
// Publicar em um arquivo html

// Fazer uma referencia do body do documento
const body = window.document.body;
// vamos criar um elemento html para inserir no body e exibir o titulo da pagina
const h1 = document.createElement("h1");
h1.setAttribute("class", "titulo");
h1.innerHTML = "Dados online";
// Adicionar o H1 ao Body do documento
body.appendChild(h1);
const geral = document.createElement("div");
geral.setAttribute("id", "geral");
const items = document.createElement("div");
items.setAttribute("class", "itens");
// O carregamento dos dados da url.
// Com o fetch temos 3 elementos: then, catch e finally, onde then é quando temos um resultado favoravel,
// catch quando temos algum erro
// e finally quando precisamos encerrar algo que passou por then ou catch
// fetch é uma promisse (promessa) que pode se concretizar com then ou não com o catch.
fetch("https://gbfs.citibikenyc.com/gbfs/en/station_information.json")
  .then((response) => response.json())
  .then((dados) => {
    dados.data.stations.map((info, ix) => {
      var h2 = document.createElement("h2");
      var p = document.createElement("p");
      h2.innerHTML = info.name;
      p.innerHTML = info.station_type;
      items.appendChild(h2);
      items.appendChild(p);
    });
  })
  .catch((erro) =>
    console.error(`Erro ao tentar carregar os dados -> ${erro}`)
  );
geral.appendChild(items);
body.appendChild(geral);
