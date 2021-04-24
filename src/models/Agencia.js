/*
Cada agencia del grupo inmobiliario se caracteriza por su código de agencia, dirección,
código postal, ciudad, fax, teléfonos y zona de actuación.

IMPORTANTE SOBRE VENDEDORES:
Los vendedores del grupo inmobiliario deberán pertenecer a cada una de las agencias,
sin poder trabajar para dos de ellas simultáneamente.

IMPORTANTE SOBRE INMUEBLES:
El grupo inmobiliario ha decidido que cada agencia sólo podrá gestionar la
venta/alquiler de un conjunto de inmuebles. Es decir, dos agencias del grupo no podrán
tener asignado un mismo inmueble.
*/
const {Schema, model} = require('mongoose');

const AgenciaSchema = new Schema({
    codigo_de_agencia : {
        type : String,
        required : true 
    },
    direccion : {
        type : String,
        required : true
    },
    codigo_postal : {
        type : Number,
        required : true
    },
    ciudad : {
        type : String,
        required : true
    },
    fax : {
        type : Number,
        required : true
    },
    telefonos : {
        type : Array,
        required : true
    },
    zona_de_actuacion : {
        title : {
            type : String,
            required : true
        },
        //Poner en esta funcion los inmuebles que sean unicos para esta agencia
        type : Function
    }
},{
    //Sera para traer datos de los vendedores y verificar si son de alguna otra agencia
    type : Function,
    required : true
}
)

//Para Exportar el modelo Agencia a diferentes lados
module.exports = model('Agencia', AgenciaSchema);
