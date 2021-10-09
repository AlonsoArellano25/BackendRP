const mongoose = require("mongoose")
const Schema = mongoose.Schema

const StoreSchema = Schema({
	name: String,
	location: String,
	local: Boolean,
})

module.exports = mongoose.model("Store", StoreSchema)