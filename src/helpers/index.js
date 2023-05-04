const triggerJWT = require('./triggerJWT.helper')
const uploadFile = require('./Upload_file.herper')

module.exports = {
  ...triggerJWT,
  ...uploadFile,
}
