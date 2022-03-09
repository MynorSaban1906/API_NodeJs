const mysql = require('mysql');


// crea la conexion a la base de datos de la pc o maquina virtual
const connection = mysql.createConnection({
    host:'localhost',     //localhost o ip de de la maquina en la nube
    user:'root',          //usuario 
    password:'password',  //contraseña del usuario
    database:'practica6', //nombre de la base de datos
    port:'3306'           // puerto por defecto
});

connection.connect(err => {
    if(err) console.log(`Error al conectarse a la base de datos!\nERROR: ${err}`)
    else console.log('Conexión a la base de datos establecida')
});


module.exports = connection