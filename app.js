const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080
const tires = require('./routes/tires.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/', tires)

app.listen(PORT, function() {
  console.log(`listening on port ${PORT} on day 7`)
})
