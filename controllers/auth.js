const usuario = require('../modules/usuario')
//importa la libreria bcrypts para el cifrado y comparacion de contraseña
const bcrypt = require('bcrypts')

//Funcion asincronica para comparar la contraseña proporcionada con el hash almacenado
async function comparePassword(plaintexPassword, hash) {
    const result=await bcrypt.compare(plaintexPassword, hash);
    return result;
}

//funcion de inicio de sesion
const login=async(req, res)=>{
    const {email, password}=req.body //extrae el email y la contraseña


    const usuario = await Usuario.findOne((email))
    try{
        if(!usuario){
            return res.status(400).json({
                msg: 'correo electronico no encontrado'
        })
        }
    
    if(!usuario.estado){
        return res.status(400).json({
            msg: 'usuario inactivo'
            })
    }

    //compara la contraseña proporcionada
    resultado = await comparePassword(password, usuario.password)
    if(resultado=true){
        return res.status(400).json({
            msg: 'El password es correcto'
            })
    }
    else{
        return res.status(400).json({
            msg: 'el password es incorrecto'
            })
        }
    }
    catch(error){
        return res.status(400).json({
            msg: 'apreciado usuario contacte al administrador'
            })
    }
}


//exporta la funcion de inicio de sesion para que este disponible en otros modulos
module.exports={
    login
}
