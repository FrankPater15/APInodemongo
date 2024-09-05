//importamos la funcion response desde el modulo express
const { response } = require("express")

//importa la libreria bcrypts para el cifrado y comparacion de contraseña
const bcrypt = require('bcrypts')

//importar modelos
//importa el modelo de usuario desde el modulo de usuario '../modules/usuario'
const Usuario = require('../modules/usuario')
//Controlador para la solicitud get a la ruta de usuarios
const usuarioGet=async (req, resp=response)=>{
    const body=req.query;//Extrae los parametros de la consulta
    const{q, nombre, page=1, limit}=req.query;
    //consulta todos los documentos de la coleccion de Usuarios
    const usuarios=await Usuario.find();

    resp.json({
        //devuelve un objeto JSON con los usuarios obtenidos de la base de datos
        usuarios
    })
}

//Controlador para la solicitud GET de promedio de usuarios
const PromGet=async(req, res=response)=>{
    const body=req.query;//Extrae los parametros de la consulta
    const{q, nombre, page=1, limit}=req.query;
    //consulta todos los documentos de la coleccion de Usuarios
    const usuarios=await Usuario.find();
    //Muestra cada documento de usuario por consola
    usuarios.forEach(numero => console.log(numero));

    res.json({
        //Devuelve un mensaje indicando que es el controlador del promedio
        msg: 'Prom API Controlador',
        q,
        nombre,
        page,
        limit,
        //devuelve los usuarios obtenidos de la base de datos
        usuarios
    });
}

//Controlador para la solicitud POST a la ruta de usuarios
const usuarioPost=async (req, resp=response)=>{
    const body=req.query;//Extrae los parametros de la consulta
    let msg=''; //Inicializamos una variable para el mensaje de respuesta
    //Crea un nievo objeto usuario con los datos del cuerpo de la solicitud
    const usuario=new Usuario(body);
    //extraer los datos del cuerpo de la solicitud
    const {nombre, email, password, rol, estado}=req.body;
    try{
        //encripta la contraseña antes de guardarla en la base de datos
        const salt=bcrypt.genSaltSync(10);//Genera una cadena de cifrado
        usuario.password=bcrypt.hashSync(password, salt); //Cifra la contraseña con la
        //cadena(salt) generada

        //guarda el usuario en la base de datos
        await usuario.save()
        //asigna un mensaje de exito
        msg='Usuario registrado';
    }
    catch(error){
        console.log(error); //Muestra el error por consola
        if (error){
            if(error.name=='ValidationError'){
                console.log(Object.values(error.errors).map(val=>
                    //muestra los mensajes de error de validacion
                    msg=Object.values(error.errors).map(val=>
                        val.message
                        //Asigna el mensaje de error a los errores de respuesta
                    )
                ))
            }
        }
    }
    console.log(msg);//Muestra el mensaje de respuesta por consola

    res.json({
        //Devuelve el mensaje de respuesta como un objeto JSON
        msg:msg
    });
}

//Controlador para la solicitud PUT a la ruta de usuarios
const usuarioPut=async (req, res=response)=>{
    const body=req.query;//Extrae los parametros de la consulta
    //Muestra los parametros de consulta por consola
    console.log(log)
    //extraer los datos del cuerpo de la solicitud
    const {nombre, email, password, rol, estado}=req.body;
    
    //Busca y actualiza un usuario en la base de datos
    const usuario=await Usuario.findOneAndUpdate({email:email},{nombre:nombre},{rol:rol})

    res.json({
        //Devuelve un mensaje indicando que se actualizo el usuario
        msg:'Usuario modificado',
        //devuelve el usuario modificado
        usuario
    });
    }

    //Controlador para la solicitud DELETE a la ruta de usuarios
const usuarioDelete=async (req, res=response)=>{
    const body=req.query;//Extrae los parametros de la consulta
    
    //Muestra los parametros de consulta por consola
    console.log(body)
    //extraer los datos del cuerpo de la solicitud
    const {nombre, email, password, rol, estado}=req.body;

    //Busca y elimina un usuario en la base de datos
    const usuario=await Usuario.findOneAndDelete({email:email});


    res.json({
        //Devuelve un mensaje indicando que se elimino el usuario
        msg:'Usuario eliminado',
        //devuelve el usuario modificado
        usuario
    });
}

//exporto los controladores de las rutas de usuarios para que esten disponibles
//para otros modulos
module.exports={
    usuarioGet,
    PromGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}