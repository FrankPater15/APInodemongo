//importa la libreria mongoose para interactuar con MongoDB
const mongoose=require('mongoose')
//funcion para establecer la conexion con la base de datos
const dbConnection=()=>{
    try{
        //intenta conectar con la base de datos utilizando la URL proporcionada
        //en la variable de entorno MONGODB_CNN
        mongoose.connect(process.env.MONGODB_CNN);
        /*muestra un mensaje por consola indicando que la conexion se ha establecido
        correctamente*/
        console.log('Datos en linea')
    }
    catch(error){
        //Muestra el error en consola si la conexion falla
        console.log(error)
        //Lanza una excepcion con el mensaje de error
        throw new Error("Error al conectarse con la base de datos")
    }
}

//exporto la funcion dbConnection para que este disponible para otros modulos
module.exports={
    dbConnection
}

