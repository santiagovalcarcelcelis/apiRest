const {Schema,model} = require("mongoose");

const DetailsSaleShema = Schema({
    id_product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    },
    amount:{
        type:Number
    },
    id_sale:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "sale"
    },
    full_sale:{
        type:String
        
    },
    full_vat:{
        type:String
        
    },
})

module.exports=model("Detail",DetailsSaleShema);
const Detail = mongoose.model("Product", DetailsSaleShema);
module.exports={Detail}