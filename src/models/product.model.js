const {Schema,model} = require("mongoose");


const productShema = Schema({

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
        ref: "user"
    }
})

  module.exports=model("product",productShema);