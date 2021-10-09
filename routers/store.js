const express = require("express");
const StoreController = require("../controllers/store");

const api = express.Router()

api.get("/get-stores", StoreController.getStores)
api.post("/add-store", StoreController.addStore)

module.exports= api