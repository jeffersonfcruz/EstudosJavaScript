// importação do modulo do express
const express = require("express");
// realizar a aplicação da função do express
// em uma variavel de aplicativo do express
const app = express();
// Permitir com que o servidos receba dados no formato JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("bem vindo");
});

const clientes = [
  {
    id: 12,
    nome: "Helena",
    idade: 13,
  },
  {
    id: 45,
    nome: "Raphael",
    idade: 21,
  },
];
// rota para clientes
app.get("/api/clientes/listar", (req, res) => {
  res.status(200).send({ output: clientes });
});
// cadastrar novos clientes
app.post("/api/clientes/cadastrar", (req, res) => {
  clientes.push(req.body);
  res.status(201).send({ output: `Cliente Cadastrado` });
});
app.listen(5000, () => console.log("http://localhost:5000"));
