// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://Shadow:admin@localhost:5432/myforum'
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.DATABASE_URL + '?sll=true',
      database: 'd46i3end27svki',
      user: 'mtmxdsdgvqqaje',
      password: 'af3c004e1663fa5a78b52a578fe93f87b32d386cc8d6b5713074d84f0dff3e69'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    }
  }
};

//'postgres://postgres:<password>@localhost/smartbrain1'