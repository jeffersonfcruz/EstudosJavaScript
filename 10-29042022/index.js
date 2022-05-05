const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

const urldb =
  "mongodb+srv://jefferson:Pipoca98513@jefferson.bea7u.mongodb.net/tabelaprodutos?retryWrites=true&w=majority";
mongoose.connect(urldb, { useNewUrlParser: true, useUnifiedTopology: true });

const tabela = mongoose.Schema({
  Nomeproduto: { type: String, require },
  Descrição: { type: String, require },
  Categoria: { type: String },
  Quantidade: { type: Number },
  Preco: { type: Number },
});
const Produto = mongoose.model("tabelaprodutos", tabela);
const default_route = "/api/produtos";

app.get(`${default_route}/listar`, (req, res) => {
  Produto.find()
    .then((dados) => {
      res.status(200).send({ dados });
    })
    .catch((erro) =>
      res
        .status(500)
        .send({ output: `Erro interno ao processar a consulta -> ${erro}` })
    );
});

app.post(`${default_route}/cadastrar`, (req, res) => {
  const pro = new Produto(req.body);
  pro
    .save()
    .then((dados) => {
      res.status(201).send({ output: `Cadastro realizado`, payload: dados });
    })
    .catch((erro) => console.error(`erro ao tentar cadastrar ${erro}`));
});

//rota para atualizar os clientes com endpoint atualizar
//passagem de argumentos pela url com o id do cliente
app.put(`${default_route}/atualizar/:id`, (req, res) => {
  Produto.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (erro, dados) => {
      if (erro) {
        return res
          .status(500)
          .send({ output: `Erro ao tentar atualizar -> ${erro}` });
      }
      res.status(200).send({ output: "Dados atualizados" });
    }
  );
});

//rota para apagar cliente com endpoint deletar
app.delete(`${default_route}/apagar/:id`, (req, res) => {
  Produto.findByIdAndDelete(req.params.id, (erro, dados) => {
    if (erro) {
      return res
        .status(500)
        .send({ output: `Erro ao tentar apagar -> ${erro}` });
    }
    res.status(204).send({ output: "apagado" });
  });
});

//definir a porta de comunicação do servidor
app.listen(5001, () =>
  console.log("Servidor on-line em http://localhost:5001")
);
