const { v4: uuidv4 } = require('uuid');
const path = require('path')

const uploadFile = (files,extensionesValidas = ['png', 'jpg', 'jpeg', 'gif'],carpeta="") => {
  return new Promise((resolve, reject) => {
    const { archivo } = files
    const nombreCortado = archivo.name.split('.')
    const extension = nombreCortado[nombreCortado.length - 1]
    //validar la extension
    if (!extensionesValidas.includes(extension)) {
      return  reject(`extencion ${extension} del archivo no valida, solo se permite ${extensionesValidas}`)
     
    }

    const nameTem = uuidv4() + '.' + extension
    const uploadPath = path.join(__dirname, '../uploads/',carpeta, nameTem)

    archivo.mv(uploadPath, (err) => {
      if (err) {
        return reject(err)
      }

      resolve(nameTem)
    })
  })
}

module.exports = {
  uploadFile,
}
