//Importar la libreria express para crear el servidor web
const express=require('express');

//importa la funcion de conexion a la base de datos
const {dbConnection}=require('../database/config');

//Importar la libreria CORS para permitir las peticiones desde otros dominios
const cors=require('cors');

//Importar la libreria body-parser para guardar datos del cuerpo de las peticiones HTTP
const bodyParser=require('body-parser');

class Server{
    constructor(){
        this.app=express(); //Inicializa la aplicacion express
        this.port=process.env.PORT; //Obtiene el puerto de conexion de las variables de entorno
        this.usuarioPath='api/usuario'//define la ruta base para las operaciones relacionadas con los usuarios
        this.authPath='api/auth'//define la ruta base para las operaciones de autenticacion
        this.middlewares(); //Configura los middlewares de la aplicacion
        this.routes(); //Configura las rutas de la aplicacion
        this.connectionDb(); //inicializa la conexion con la base de datos
        //conecta con la base de datos MongoDB
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Escuchando por el puerto ${this.port}`);
        })
    }

    middlewares(){
        //Configura los CORS para permitir peticiones desde otros dominios
        this.app.use(cors());

        //Congfigura el body-parser para parsear los datos del cuerpo de las peticiones HTTP
        this.app.use(bodyParser.json());

        //Configura express.static para servir archivos estaticos
        this.app.use(express.static(__dirname+"/public"));
    }

    routes(){
        //Configurar las rutas de la aplicacion
        this.app.use(this.usuarioPath, require('../routes/usuarios'))

        //Define las rutas para las operaciones de autenticacion
        this.app.use(this.authPath, require('../routes/auth'))
    }

    async connectionDb(){
        //Conecta con la base de datos de MongoDB al inicio del servidor
        await dbConnection();

    }
}

//exporto la clase Server para que este disponible para otros modulos
module.exports=Server