/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("contas", (table) => {
    table.increments();
    table.string("descricao", 80).notNullable();
    table.decimal("valor", 9.2).notNullable();
    table.integer("mes", 2).notNullable();
    table.integer("ano", 4).notNullable();
    table.string("situacao", 10);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("contas");
};
