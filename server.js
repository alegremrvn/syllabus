const express = require('express')
const app = express()
const api = require('./routes/api')

app.use('/public', express.static(__dirname + '/public'))

api(app)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/files', (req, res) => {
  res.download(__dirname + '/files/intro-to-computing.txt')
})

const PORT = 3000
app.listen(PORT, () => {
  console.log('Now listening at ' + PORT)
})