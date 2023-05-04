
const allowedcollections = (collection="",collections = []) =>{
  const included =  collections.includes(collection)
  if (!included) {
    throw new Error(`la coleccion ${collection} no es permitida, ${collections}`)
  }
  return true;
}
module.exports = {
  allowedcollections
}