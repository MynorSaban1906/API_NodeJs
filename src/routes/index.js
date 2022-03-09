const express = require('express');

const router  = express.Router();
const connection = require('../db/dbConnection');



router.get('/', (req,res)=>{
    res.json({Message:"welcome home api"})
});

router.get('/students', (req,res)=>{
    const sql = `SELECT * FROM estudiante;`;

    connection.query(sql, (error,result)=>{
        if (error){

            res.status(400);
            res.json({
                Description : "Listar estudiantes",
                Message: "ERROR AL EJECUTAR SQL"});
        }
        else {

            res.status(200);
            if(result.length>0){
                res.json({
                    Estudiantes: result,
                    Description : "Listar estudiantes",
                    Message: "Operacion Exitosa"});
            }else{
                res.json({
                    Description : "Listar estudiantes",
                    Message: "No hay estudiantes"});
            }
        }
    });
});



module.exports = router;
