const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model


const UsersShema = Schema({
    name:{
        type:String,
        required:[true,"el nombre es obligatorio"]
    },
    uuid:{
        type:String
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
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }]
})
UsersShema.methods.toJSON = function(){
  const {__v,password, ...user} = this.toObject(); 
  return user; 
}
module.exports=model("User",UsersShema);