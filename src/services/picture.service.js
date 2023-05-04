const { uploadFile } = require('../helpers')
const Product = require('../models/product.model')
const User = require('../models/user.model')
const Customer = require('../models/customer.model')
const path = require('path')
const fs = require('fs')

const pictureService = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
    res.status(400).json({ msg: 'No files were uploaded.' })
    return
  }
  try {
    // const name  = await  uploadFile (req.files,["txt","md"],"texts")
    const name = await uploadFile(req.files, undefined, 'imgs')
    return name
  } catch (msg) {
    res.status(400).json({ msg })
  }
  //imagenes
}
const updateImageCollections = async (req, res) => {
  
  const { id, collection } = req.params
  let model

  switch (collection) {
  case "users":
    model = await User.findById(id)
    if (!model) {
      return res.status(400).json({
        msg:`No existe un usuario con el id ${id}`
      })
    }
    break
  case "products":
    model = await Product.findById(id)
    if (!model) {
      return res.status(400).json({
        msg:`No existe un producto con el id ${id}`
      })
    }
    break
  case "customer":
    model = await Customer.findById(id)
    if (!model) {
      return res.status(400).json({
        msg:`No existe un producto con el id ${id}`
      })
    }
    break
  default:
    return res.status(500).json({ msg: 'se me oolvido validar esto' })
  }
  const name = await uploadFile(req.files, undefined, collection)
  model.img = name
  await model.save()
  return model
}
const  getImage= async (req, res) => {
  const { id, collection } = req.params
  let model

  switch (collection) {
  case "users":
    model = await User.findById(id)
    if (!model) {
      return res.status(400).json({
        msg:`No existe un usuario con el id ${id}`
      })
    }
    break
  case "products":
    model = await Product.findById(id)
    if (!model) {
      return res.status(400).json({
        msg:`No existe un producto con el id ${id}`
      })
    }
    break
  case "customer":
    model = await Customer.findById(id)
    if (!model) {
      return res.status(400).json({
        msg:`No existe un producto con el id ${id}`
      })
    }
    break
  default:
    return res.status(500).json({ msg: 'se me oolvido validar esto' })
  }
  if (model.img) {
    //path ayuda a moverse desde un punto empezar a moverse en los directorios
    const pathImage = path.join(__dirname,"../uploads",collection,model.img)
    //file system es el modulo de node js que nos va a permitir ya sea escribir en archivos validar si existen 
    if (fs.existsSync(pathImage)) {
      return pathImage
    }
  }
}

module.exports = {
  pictureService,
  updateImageCollections,
  getImage
}
