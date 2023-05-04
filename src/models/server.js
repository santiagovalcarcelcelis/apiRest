const express = require('express')
const cors = require('cors')
const { dbConection } = require('../database/config')
const fileUpload = require('express-fileupload')
class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.authPath = '/api/auth'
    this.authPathCustomer = '/api/authCustomer'
    this.app.use(express.json())
    this.app.use(cors())
    // conectar a base de datos
    this.conectarDB()

    // Middlewares
    //fileupload - carga de archivos
    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp/',
        createParentPath: true,
      })
    )
    // this.middlewares();
    // rutas de mi aplicacion
    this.routes()
  }
  async conectarDB() {
    await dbConection()
  }
  // middlewares(){
  // //cors
  //     this.app.use(cors());
  // // lectura y parseo del body
  //     this.app.use( express.json() );
  // // directorio publico
  //     this.app.use(express.static("public"));
  // }
  routes() {
    this.app.use('/api/users', require('../routes/user.route')),
    this.app.use(this.authPath, require('../routes/auth.route')),
    this.app.use(
      this.authPathCustomer,
      require('../routes/authCustomer.route')
    ),
    this.app.use('/api/products', require('../routes/product.route')),
    this.app.use('/api/customers', require('../routes/customer.route')),
    this.app.use('/api/sales', require('../routes/sale.route')),
    this.app.use('/api/detailsales', require('../routes/detail_sale.route'))
    this.app.use('/api/pictures', require('../routes/picture.route'))
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`servidor corriendo en el puerto`, this.port)
    })
  }
}

module.exports = Server
