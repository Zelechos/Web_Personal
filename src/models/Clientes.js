/* 
La información que las agencias necesitan sobre cada uno de los clientes es la
siguiente: código del cliente, CI, nombre, apellidos, dirección, código postal, ciudad,
país y teléfono de contacto.

IMPORTANTE:
El proceso de venta/alquiler será el siguiente: cuando un cliente acude a una agencia
se le asignará un vendedor (podrá tener varios clientes a su cargo). El vendedor
informará al cliente sobre los inmuebles disponibles y que se ajusten a sus
necesidades. Finalmente, cuando se llegue a un acuerdo, el cliente podrá reservar el
inmueble dejando una señal establecida
*/
const {Schema, model} = require('mongoose');

const ClienteSchema = new Schema({
    codigo_cliente : {
        type : String,
        required : true
    },
    CI : {
        type : Number,
        required : true
    },
    nombre : {
        type : String,
        required : true
    },
    apellidos : {
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
    pais : {
        type : String,
        required : true
    },
    telefono : {
        type : Number,
        required : true
    },


},{
    reserva : {
        type : Function,
        required : true
    }
})

//Para Exportar el modelo Cliente a diferentes lados
module.exports = model('Cliente', ClienteSchema);