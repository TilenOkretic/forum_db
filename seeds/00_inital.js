const Knex = require('knex');
const table_names = require('../libs/table_names');
const users = require('../libs/users');


/**
 * 
 * @param {Knex} knex 
 */
exports.seed = async (knex) => {
  await Promise.all([
    //knex(table_names.role).del(),
    console.log('Clearing table:', table_names.role),
    knex(table_names.role).insert(users)
  ]);
};