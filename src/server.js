//Usando Framework Express
const express = require('express');
//Importamos el modulo de nodejs path
const path = require('path');

//Importamos el modulo de express handlebar
const handlebar = require('express-handlebars');



//Inicializaciones

//Ejecutamos la funcion express
//la funcion nos retorn un Objeto que guardaremos en la constante app
const app = express();

//Configuraciones

//Estableciendo una configuracion para un puerto 
app.set('port', process.env.PORT || 4000);

//Estableciendo la configuracion para saber la ruta de el directorio views
app.set('views', path.join(__dirname,'views'));

//Continuar aqui video 6
// app.engine('.hbs',exphbs({
//     layoutsDir:{

//     }
// }))

//Middlewares
app.use(express.urlencoded({extended:false}));

//Variables Globales


//Rutas
app.get('/', (req , res) => {
    res.send("Hola Mundo . . .");
});

// Archivos Estaticos (estan guardados en la carpeta public)
app.use(express.static(path.join(__dirname, 'public')));



//Aqui exportamos la constante app
module.exports = app;

