const mongoose = require("mongoose")
const foodSchema = mongoose.Schema({
type: String,
name: String,
price: Number
})
module.exports = mongoose.model("food",foodSchema)