const express = require('express')
const app = express()

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