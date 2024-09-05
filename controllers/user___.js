//importamos la funcion response desde el modulo express
const { response } = require("express")

//controlador para la solucitud GET a la ruta de usuario
usuarioGet=(req, res=response)=>{
    res.json({
        msg: "GET API"//Devuelve un objeto JSON con un mensaje indicando que se esta accediendo a
        //API con GET
    })
}
//Controlador para la solicitud POST a la ruta de usuario
usuarioPost=(req, res=response)=>{
    res.json({
        msg: "POST API"//Devuelve un objeto JSON con un mensaje indicando que se esta accediendo a
        //API con POST
    })
}

//Controlador para la solicitud PUT a la ruta de usuario
usuarioPut=(req, res=response)=>{
    res.json({
        msg: "PUT API"//Devuelve un objeto JSON con un mensaje indicando que se esta accediendo a
        //API con PUT
    })
}

//Controlador para la solicitud DELETE a la ruta de usuario
usuarioDelete=(req, res=response)=>{
    res.json({
        msg: "DELETE API"//Devuelve un objeto JSON con un mensaje indicando que se esta accediendo a
        //API con DELETE
    })
}

module.exports={
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}