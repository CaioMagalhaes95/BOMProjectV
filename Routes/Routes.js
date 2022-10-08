const router = require('express').Router()
const bodyParser = require('body-parser')
const sequelize = require('../comoseeuquiser');
const { QueryTypes } = require('sequelize');


router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true }))

//material routes

router.post('/material', (req,res) => {
    const {nome, descricao, matData, matquant, matSist, matMassa, matCusto, matUnidade, matcomp} = req.body
   
console.log(nome)
    sequelize.query("SELECT * FROM Materiais where nome = ?", {
        replacements: [nome],
        type: QueryTypes.SELECT,
    },
    (err, res) =>{
        if(err){
            res.end(err)
        }
        res.end(res)
    })

})


module.exports = router;