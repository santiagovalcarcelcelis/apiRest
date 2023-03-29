const {Schema,model} = require("mongoose");

const saleShema = Schema({
    id_customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer"
    },
    id_sale:{
        type:Number
    },
    detail:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "detail"
    }
})

module.exports=model("sale",saleShema);