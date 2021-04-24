const mongoose = require('mongoose');

//Creamos una constante con la direccion URL de la BD 
//Advertencia : en produccion la palabra localhost es sustituida por la IP del servidor
const {INMOSUCRE_HOST , INMOSUCRE_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${INMOSUCRE_HOST}/${INMOSUCRE_DATABASE}`;
/*process.env.MONGODB_URI es una variable que se guarda 
en el archivo .env para proteger la URL de la base de datos*/


//Aqui nos conectamos al mongod con la URL
mongoose.connect(MONGODB_URI , {
    //Aqui obtenesmos estos datos de la advertencia si se deja vacio este objeto
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("Database is Connected"))
    .catch(err => console.log(err));