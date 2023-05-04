const { pictureService, updateImageCollections, getImage } = require("../services/picture.service")


const uploadImage = async (req, res = response) => {
  const uploadFile= await pictureService(req,res)
  const name = uploadFile
  res.json({
    name
  })
}
const updateImage = async (req, res = response) => {
  const updateImage= await updateImageCollections(req,res)
  const model = updateImage
  res.json({
    model
  })
}
const showImage= async (req, res = response) => {
  const Image= await getImage(req,res)
  res.sendFile(Image)
}

module.exports = {
  uploadImage,
  updateImage,
  showImage
}