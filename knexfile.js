// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/day7'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

}
