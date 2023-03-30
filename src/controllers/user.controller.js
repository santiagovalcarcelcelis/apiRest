const {response,request} = require("express");
const { v4 } =require("uuid")
const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");

const  UsersGet = async (req = request, res = response) => { 
        const user = req.body
        console.log(user)
        res.send('Hello World!')
      
    }


const UsersPost = async  (req, res = response) => {

    const {name,email,password,role} = req.body;
    let uuid = v4();
    const user = new User({name,email,role,password,uuid});
  
// encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password,salt);
// guardar en base de datos
    await user.save();
    res.json({
        user
    });
}

module.exports={
    UsersGet,
    // UsuariosPut,
    UsersPost,
    // UsuariosDelete,
    // usuariosPath
}