require('dotenv').config()
const express = require("express")
const dbConnection = require('./src/config/dbconfig')
const router = require('./src/route')
const app = express()
const port = process.env.PORT || 5000

//database connection
dbConnection()

//router middelware
app.use(router)

app.listen(port, () => {
  console.log(`server is running port number ${process.env.PORT}`);
})