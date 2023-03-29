const {Schema,model} = require("mongoose");

const userShema = Schema({
    name:{
        type:String,
        required:[true,"el nombre es obligatorio"]
    },
    email:{
        type:String,
        required:[true,"el correo es obligatorio"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"la contraseña es obligatorio"],
    },
    profile:{
        type:String,
    },
    role:{
        type:String,
        required:true,
        emun:["ADMIN_ROLE","USER_ROLE"]
    },
    status:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    },
})
usuarioShema.methods.toJSON = function(){
  const {__v,password, ...user} = this.toObject(); 
  return usuario; 
}
module.exports=model("User",userShema);