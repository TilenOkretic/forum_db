const Knex = require('knex');
const table_names = require('../libs/table_names');

/**
 * Creating all tables
 * @param {Knex} knex 
 */
exports.up = async (knex) => {
    await Promise.all([
        knex.schema.createTable(table_names.role, (table) => {
            table.increments();
            table.string('name').notNullable();
        }),
        knex.schema.createTable(table_names.user, (table) => {
            table.increments();
            table.integer('role_id').unsigned().references('id').inTable(table_names.role);
            table.string('name').notNullable();
            table.string('email').notNullable();
            table.string('google_id').notNullable();
            table.string('img_url').notNullable();
            table.boolean('banned').notNullable().defaultTo(false);
        }),
        knex.schema.createTable(table_names.category, (table) => {
            table.increments();
            table.string('title').notNullable();
            table.text('description').notNullable();
            table.string('img_url');
        })
    ]);
};


/**
 * 
 * @param {Knex} knex 
 */
exports.down = async (knex) => {
    await Promise.all([
        knex.schema.dropTableIfExists(table_names.topic),
        knex.schema.dropTableIfExists(table_names.user),
        knex.schema.dropTableIfExists(table_names.role),
        knex.schema.dropTableIfExists(table_names.category),
    ]);
};