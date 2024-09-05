const {Router} = require('express') //Exporta la funcion Router de express para crear
//un router
const router=Router();//Crea una instancia de Router
const {login}=require('../controllers/auth');//Importa el controlador login desde el
//archivo '../controllers/auth'

//Define una ruta POST '/Login' que utilizara el controlador login
router.post('/login', login);
module.exports = router; //Exporta el router para que este disponible en otros modulos