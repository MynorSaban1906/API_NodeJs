
const express = require('express');
const router  = express.Router();
const connection = require('../db/dbConnection')




// login
router.post('/Login', (req,res)=>{

    const {correo,contra } = req.body;

    const sql = `SELECT * FROM estudiante WHERE correo = '${correo}' and contra='${contra}'`

    connection.query(sql, (error,result)=>{
        if (error){

            res.status(400);
            res.json({
                Description : "Inicio de Sesion",
                Message: "ERROR AL EJECUTAR SQL"});
        }
        else {

            res.status(200);
            var user=result[0]
            if (result.length >0){
                res.json({Data: [user],
                    Description : "Inicio de Sesion",
                    Message: "Operacion Exitosa"});
            }
            else{
                res.json({
                    Description : "Inicio de Sesion",
                    Message: "Operacion no Exitosa"});
            }
        }
    })

});



// register

router.put('/Register', (req,res)=>{

    const {correo,contra,nombre,carnet } = req.body;

    const sql = `INSERT INTO estudiante VALUES(${carnet},'${nombre}','${correo}','${contra}');`;

    connection.query(sql, (error,result)=>{
        if (error){

            res.status(400);
            res.json({
                Description : "Registro correcto",
                Message: "ERROR AL EJECUTAR SQL"});
        }
        else {

            res.status(200);
            res.json({
                Description : "Registro correcto",
                Message: "Operacion Exitosa"});
        }
    });

});

module.exports = router;

