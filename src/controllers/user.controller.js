

// const UsersGet = async (req = request, res = response) => {
//   const { limite = 5, desde = 0 } = req.query
//   const query = { deletedAt: undefined }

const { createUserService } = require("../services/user.service")



//   const [total, users] = await Promise.all([
//     User.countDocuments(query),
//     User.find(query).skip(Number(desde)).limit(Number(limite)),
//   ])
//   res.json({
//     total,
//     users,
//   })
// }
// const UsersGetId = async (req, res) => {
//   const id = req.params.id
//   const user = await User.findOne({_id:id}).populate('products')
//   res.json({
//     user
//   })

 
// }
const createUserController = async (req, res = response)=>
{
  const createUser = await createUserService(req)
  console.log(createUser)
  res.json({
    createUser,
  })
  
}


// const UsersPut = async (req, res = response) => {
//   const id = req.params.id
//   const { password, google, ...data } = req.body
//   // todo validar contra la base de datos
//   if (password) {
//     const salt = bcryptjs.genSaltSync()
//     data.password = bcryptjs.hashSync(password, salt)
//   }
//   const user = await User.findOneAndUpdate({ _id: id }, data)
//   res.json({
//     id,
//     user,
//   })
// }
// const UsersDelete = async (req, res = response) => {
//   const { id } = req.params
//   // fisicamente lo borramos
//   // const usuario = await Usuario.findByIdAndDelete(id)
//   const user = await User.findByIdAndUpdate(
//     { _id: id },
//     { deletedAt: new Date() }
//   )

//   res.json(user)
// }
// const usuariosPath = (req, res = response) => {
//   res.json({
//     msg: 'patch api - controlador',
//   })
// }

module.exports = {
  createUserController
}
