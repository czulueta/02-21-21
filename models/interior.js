const mongoose = require("mongoose")
const Schema = mongoose.Schema

const interiorSchema = new Schema({
    small: {
        type: String,
    },
    medium: {
        type: String,
    },
    large: {
        type: String
    }
})
module.exports = mongoose.model("Interior", interiorSchema)