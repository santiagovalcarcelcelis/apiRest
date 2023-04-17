const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const SalesShema = new mongoose.Schema(
{
    id_customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },
    id_sale:{
        type:Number
    },
    detail:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Detail"
    }
})

module.exports= mongoose.model("sale",SalesShema);