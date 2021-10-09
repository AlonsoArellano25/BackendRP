const express = require("express");
const StoreController = require("../controllers/local");

const api = express.Router()

api.get("/get-locals", StoreController.getLocals)
api.post("/add-local", StoreController.addLocal)

module.exports= api