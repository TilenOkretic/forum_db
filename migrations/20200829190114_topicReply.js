const Knex = require('knex');
const table_names = require('../libs/table_names');

/**
 * Creating all tables
 * @param {Knex} knex 
 */
exports.up = async (knex) => {
    await Promise.all([
        knex.schema.createTable(table_names.topic_reply, (table) => {
            table.increments();
            table.integer('topic_id').unsigned().references('id').inTable(table_names.topic).notNullable().onDelete('cascade');
            table.integer('user_id').unsigned().references('id').inTable(table_names.user).notNullable().onDelete('cascade');
            table.text('description').notNullable();
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
        knex.schema.dropTableIfExists(table_names.topic_reply)
    ]);
};