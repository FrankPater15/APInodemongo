const {Router} = require('express'); //Exporta la funcion Router de express para crear un
//router
const router=Router(); //Crea una instancia de Router

const {usuarioGet, usuarioPost, usuarioPut, usuarioDelete, PromGet}=require('../controllers/usuario')
//desde el archivo '../controllers/usuario'

//Define rutas y asigna controladores a cada ruta para obtener todos los usuarios (GET '/')
router.get('/', usuarioGet)

//Ruta para obtener el promedio de los usuarios(GET '/promedio')
router.get('/promedio', PromGet);

//Ruta para crear un nuevo usuario(POST '/')
router.post('/', usuarioPost)

//Ruta para obtener el promedio de los usuarios(PUT '/')
router.put('/', usuarioPut)

//Ruta para obtener el promedio de los usuarios(DELETE '/')
router.delete('/', usuarioDelete)

module.exports= router;