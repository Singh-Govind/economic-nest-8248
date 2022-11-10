const { string } = require('i/lib/util')
const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        name: String,
        image: String,
        brand: String,
        discount_price: String,
        price: String,
        _id: mongoose.Schema.Types.ObjectId
    }
    , {
        versionKey: false
    }
)


const mensModal = mongoose.models.mens || mongoose.model('mens', schema)

module.exports = mensModal