const {Schema,model} = require("mongoose");

const roleShema = Schema({
    rol:{
        type:String,
        required:[true,"El rol es obligatorio"]
    }
})

module.exports = model ("role",roleShema);