const Knex = require('knex');
const table_names = require('../libs/table_names');

/**
 * Creating all tables
 * @param {Knex} knex 
 */
exports.up = async (knex) => {
    await Promise.all([
        knex.schema.createTable(table_names.topic, (table) => {
            table.increments();
            table.integer('category_id').unsigned().references('id').inTable(table_names.category).onDelete('cascade');
            table.integer('user_id').unsigned().references('id').inTable(table_names.user).onDelete('cascade');
            table.string('title').notNullable();
            table.text('description');
            table.timestamps(false, true);
        }),
    ]);
  
};

/**
 * 
 * @param {Knex} knex 
 */
exports.down = async (knex) => {
    await Promise.all([
    ]);
};
