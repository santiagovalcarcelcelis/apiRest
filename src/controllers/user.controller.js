const { getIdUserService, createUserService, updateUserService, deleteUserService, getAllUserService } = require("../services/user.service")

  const getAllUserController = async (req, res = response)=>
  {
    const getAllUser = await getAllUserService(req)
    const {users,total} = getAllUser
    res.json({
      total,
      users
    })
    
  }
  const getIdUserController = async(req,res=response)=>{
    const getIdUser = await getIdUserService(req)
    res.json({
      getIdUser
    })
  }
 const createUserController = async (req, res = response)=>{
  const createUser = await createUserService(req)
  res.json({
    createUser,
  })
  
}
const updateUserController = async (req, res = response)=>{
  const updateUser = await updateUserService(req)
  const {id,user} = updateUser
  res.json({
    id,
    user
  })
  
}
const deleteUserController = async (req, res = response)=>{
  const deleteUser = await deleteUserService(req)
  const user = deleteUser
  res.json(user)
}

module.exports = {
  createUserController,
  getAllUserController,
  getIdUserController,
  updateUserController,
  deleteUserController
}
