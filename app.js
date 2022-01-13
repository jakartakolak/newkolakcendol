const express = require('express')
const app = express()
const PORT = 3000
// const productRoutes = require('./routes/products_routes')
const userRoutes = require("./routes/user")

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.use('/',userRoutes)
// app.use('/me',productRoutes)


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })