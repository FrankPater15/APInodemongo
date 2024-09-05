require('dotenv').config();//Importa y carga las variables de entorno
//Desde el archivo .env
const Server=require('./modules/server');//Importa la clase Server desde './modules/server'

const server=new Server();//Crea una nueva instancia de la clase Server
server.listen(); //Inicia el servidor llamando el metodo listen() de la instancia server