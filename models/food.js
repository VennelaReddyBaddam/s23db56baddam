const mongoose = require("mongoose")
const foodSchema = mongoose.Schema({
type: {
    type: String,
    required: true
},
name: {
    type: String,
    required: true
},
price: {
    type: Number,
    required: true,
    min: 0,
    max: 500
}
})
module.exports = mongoose.model("food",foodSchema)