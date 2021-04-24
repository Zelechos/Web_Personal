/*
IMPORTANTE:
Los vendedores del grupo inmobiliario deberán pertenecer a cada una de las agencias,
sin poder trabajar para dos de ellas simultáneamente.

Sobre cada vendedor se conoce su código de vendedor, CI, nombre, apellidos, fecha
de nacimiento, fecha de contratación, dirección, código postal, ciudad, país, teléfono
del domicilio y móvil de contacto

IMPORTANTE CLIENTE:
El proceso de venta/alquiler será el siguiente: cuando un cliente acude a una agencia
se le asignará un vendedor (podrá tener varios clientes a su cargo). El vendedor
informará al cliente sobre los inmuebles disponibles y que se ajusten a sus
necesidades. Finalmente, cuando se llegue a un acuerdo, el cliente podrá reservar el
inmueble dejando una señal establecida
*/
const {Schema, model} = require('mongoose');

const VendedorSchema = new Schema({
    codigo_vendedor : {
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
    fecha_nacimiento : {
        type : Date,
        required : true
    },
    fecha_contratacion : {
        type : Date,
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
    telefono_movil : {
        type : Number,
        required : true
    },


},{
    clientes : {
        type : Function,
        required : true
    }
})

//Para Exportar el modelo Cliente a diferentes lados
module.exports = model('Vendedor', VendedorSchema);