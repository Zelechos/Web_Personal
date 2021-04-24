/* Este archivo es el responsable de arrancar la aplicacion , 
el servidor ,la base de datos y otras configuraciones basicas*/

//PARA PROTEGER LA URL DE LA BASE DE DATOS
require('dotenv').config();
console.log("Mensaje del Backend Developer ==> ",process.env.ADVERTENCIA);

//Aqui importamos el objeto app que es el servidor de la web y lo guardamos en la constante app
const app = require('./server');
require('./database');


//Incializamos el servidor y obtenemos el puerto y muestra el mensaje
app.listen(app.get('port'), () => {
    console.log("Server connect in Port => ",app.get('port'));
});