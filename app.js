const express = require("express");
const { API_VERSION } = require("./config");
var cors = require('cors')

const app = express();

const useRoutes = require("./routers/store")
const useLocal = require("./routers/local")

app.use(express.urlencoded({extended: false}))
app.use(express.json())
//app.use(cors())

//Rutas
app.use(`/api/${API_VERSION}`, useRoutes)
app.use(`/api/${API_VERSION}`, useLocal)

module.exports = app