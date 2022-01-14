const express = require('express')
const app = express()
const PORT = 3000
const productRoutes = require('./routes/product')
const userRoutes = require("./routes/user")

app.set('view engine', 'ejs')
app.use(express.json());

app.use('/',userRoutes)
app.use('/me',productRoutes)


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })