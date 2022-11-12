require('dotenv').config()
const { Client } = require('pg')

module.exports = function(app) {
  app.route('/api/recentlyadded')
    .get((req, res) => {
      const client = new Client({
        user: process.env.USER,
        host: process.env.HOST,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        post: process.env.POST
      })

      client.connect()

      client.query('SELECT * FROM syllabi ORDER BY date_added DESC;', (err, result) => {
        console.log(err, result.rows)
        res.json(result.rows)
        client.end()
      })
    })
}
