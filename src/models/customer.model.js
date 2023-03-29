const {Schema,model} = require("mongoose");

const customerShema = Schema({

    name:{
        type:String,
        required:[true,"El nombre es obligatorio"]
    },
    id:{
        type:Number
    },
    password:{
        type:String,
        required:[true,"la contraseña es obligatorio"],
    },  
    google:{
        type:Boolean,
        default:false
    },
    email:{
        type:String,
        required:[true,"el correo es obligatorio"],
        unique:true
    },
    picture:{
        type:String
    },
    rol:{
        type:String,
        required:true,
        emun:["USER_ROLE"]
    },
    uuid:{
        type:Number
    },
    status:{
        type:Boolean,
        default:true
    },
    sales:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "sale"
    }]
})
customerShema.methods.toJSON = function(){
    const {__v,password, ...customer} = this.toObject(); 
    return customer; 
  }
module.exports=model("customer",customerShema);