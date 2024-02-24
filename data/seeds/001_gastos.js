/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return knex("contas")
    .del()
    .then(function () {
      return knex("contas").insert([
        {
          descricao: "Internet",
          valor: 100.0,
          mes: 1,
          ano: 2024,
          situacao: "pago",
        },
        {
          descricao: "Luz",
          valor: 210.0,
          mes: 1,
          ano: 2024,
          situacao: "pago",
        },
        {
          descricao: "Água",
          valor: 47.83,
          mes: 1,
          ano: 2024,
          situacao: "pago",
        },
        {
          descricao: "Faculdade",
          valor: 185.0,
          mes: 1,
          ano: 2024,
          situacao: "aberto",
        },
        {
          descricao: "Internet",
          valor: 100.0,
          mes: 2,
          ano: 2024,
          situacao: "pago",
        },
        {
          descricao: "Luz",
          valor: 181.2,
          mes: 2,
          ano: 2024,
          situacao: "pago",
        },
        {
          descricao: "Água",
          valor: 37.52,
          mes: 2,
          ano: 2024,
          situacao: "pago",
        },
        {
          descricao: "Faculdade",
          valor: 185.0,
          mes: 2,
          ano: 2024,
          situacao: "aberto",
        },
      ]);
    });
};
