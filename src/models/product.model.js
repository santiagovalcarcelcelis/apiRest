const {Schema,model} = require("mongoose");


const ProductsShema = Schema({

    id:{
        type:Number
    },
    uuid:{
        type:Number
    },
    name:{
        type:String,
        required:[true,"El nombre es obligatorio"]
    },
    description:{
        type:String,
        required:[true,"La descripcion es obligatoria"]
    },
    picture:{
        type:String
    },
    date_create:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

  module.exports=model("Product",ProductsShema);
  const Product = mongoose.model("Product", ProductsShema);
module.exports={Product}