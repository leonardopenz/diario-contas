const express = require("express");
const contas = require("./contas");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Olá, bem vindo");
});

app.use(express.json());
// app.get("/contas", (req, res) => {

// });
app.use("/contas", contas);

app.listen(port, () => {
  console.log(`Servidor rodando em htts://localhost:${port}`);
});
