const { Schema } = require("mongoose");

const {schema, model} = required('mongoose'); //Importa las funciones schema y model de mongoose para definir
//esquemas y modelos de datos

//define el esquema del modelo Usuario
const UsuarioSchema=Schema({
    nombre:{
        type:String,
        required:[true, 'El nombre es obligatorio']//define que el campo nombre es obligatorio
    },
    email:{
        type:String,
        required:[true, 'El email es obligatorio']//define que el campo email es obligatorio
    },
    password:{
        type:String,
        required:[true, 'El password es obligatorio'],//define que el campo password es obligatorio
        minlength:3, //Define la longitud minima del campo para password
        maxlength:[60, 'El password debe tener una longitud de 60 caracteres']
    },
    rol:{
        type:String,
        required:true, //define que el campo rol es obligatorio
        enum:['Admin', 'Usuario']//Define que el campo rol solo puede tener los valores
        //'Admin' o 'Usuario' 
    },
    estado:{
        type:Boolean,
        default:true,
        required:[true, 'El estado es obligatorio']//define que el campo estado es obligatorio
    }
});

//crea y exporta el modelo de usuario a partir del esquema UsuarioSchema

module.exports=model('Usuario', UsuarioSchema);

