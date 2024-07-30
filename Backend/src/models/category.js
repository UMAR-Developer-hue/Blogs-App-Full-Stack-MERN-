const mongoose = require("mongoose")

let categorySchema = mongoose.Schema({
    title: String,
    created_at: {
        type: Date,
        default: Date.now,
        required: true
    },
    updated_at: {
        type: Date,
        required: true
    }
})

const categoryModel= mongoose.model("categories", categorySchema)

module.exports = categoryModel