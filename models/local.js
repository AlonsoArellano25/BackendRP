const mongoose = require("mongoose")
const Schema = mongoose.Schema

const LocalSchema = Schema({
	name: String,
	quantity: Number,
})

module.exports = mongoose.model("Local", LocalSchema)