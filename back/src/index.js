const express = require('express'); //servidor express
/*  Cuando no usa eso, obtiene la solicitud sin procesar, cuerpo y 
encabezados no están en el objeto raíz del parámetro de solicitud. 
Tendrás que manipular individualmente todos los campos.*/
const bodyParser = require('body-parser') 
const cors = require("cors");
//puerto del servidor
const port= 3000;
//inicializa servidor express
const app= express();

app.use(cors());

app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

//se llama a los endpoint desde nuestro index general
app.use(require('./routes'));
app.use(require('./routes/authentication'))

// se corre el servidor
app.listen(port, ()=> console.log(`servidor corriendo en el puerto ${port}`));
