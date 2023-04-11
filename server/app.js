if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require("express")
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
const routes = require('./routes/index')

app.use('/', routes)



module.exports = app
