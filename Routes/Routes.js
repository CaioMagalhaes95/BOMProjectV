const router = require('express').Router()
const bodyParser = require('body-parser')
const con = require('../dbconn');
const { QueryTypes } = require('sequelize');
// const { ResultType } = require('@remix-run/router/dist/utils');


router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true }))

//material routes

router.post('/Materiais', (req,res) => {
    const {nome, descricao, datacompra, quantidade, sistema, massa, custo, unidadedemedida, comp} = req.body


 var insert = "INSERT INTO Materiais (nome, descricao, datacompra, quantidade, sistema, massa, custo, unidadedemedida, comp) VALUES ?";
 var valuesinsert = [nome, descricao, datacompra, quantidade, sistema,  massa, custo, unidadedemedida, comp];


 con.query(insert, valuesinsert , function (err, res) {
    if(err) throw err;
    console.log("Number of records inserted: " + res.affectedRows);
    
 })

})
 


module.exports = router;