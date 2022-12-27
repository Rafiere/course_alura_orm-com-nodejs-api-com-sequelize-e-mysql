const express = require("express");
const bodyParser = require("body-parser");

const app = express();

/* Estamos avisando para o Express que a biblioteca "Body Parser" fará o meio de campo entre as requisições e a aplicação, convertendo o corpo das requisições para o formato JSON. */
app.use(bodyParser.json());

const port = 3000;

app.get("/teste", (req, res) => {
  res.status(200).send({ message: "Olá!" });
});

/* O Express estará escutando a porta 3000. */
app.listen(port, () => {
  console.log(`O servidor está sendo executado na porta ${port}.`);
});
