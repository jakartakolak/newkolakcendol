const express = require('express')
const app = express()
const timeout = require('connect-timeout');
const PORT = process.env.PORT || 4000
const productRoutes = require('./routes/product')
const userRoutes = require("./routes/user")
require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')
connection.end()

app.use(express.json());

app.use(timeout('10s'))
app.use('/',userRoutes)
app.use('/me',productRoutes)


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })