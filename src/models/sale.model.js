const {Schema,model} = require("mongoose");

const SalesShema = Schema({
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

module.exports=model("Sale",SaleShema);
const Sale = mongoose.model("Sale", SalesShema);
module.exports={Sale}