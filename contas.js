const express = require("express");
const router = express.Router();

const dbKnex = require("./data/db_config");
const knex = require("knex");

//select
router.get("/", async (req, res) => {
  try {
    const contas = await dbKnex("contas").orderBy("id", "asc");
    res.status(200).json(contas);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});
//insert
router.post("/", async (req, res) => {
  const { descricao, valor, mes, ano, situacao } = req.body;

  if (!descricao || !valor || !mes || !ano || !situacao) {
    res
      .status(400)
      .json({ msg: "Há dados não preenchidos, revise o cadastro!" });
    return;
  }

  try {
    const novo = await dbKnex("contas").insert({
      descricao,
      valor,
      mes,
      ano,
      situacao,
    });
    res.status(201).json({ id: novo[0] });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

//Update
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { valor } = req.params;

  try {
    await dbKnex("contas").update({ valor }).where("id", id);
    res.status(200).json;
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await dbKnex("contas").del().where({ id });
    res.status(200).json();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
