// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://Shadow:admin@localhost:5432/myforum'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};

//'postgres://postgres:<password>@localhost/smartbrain1'