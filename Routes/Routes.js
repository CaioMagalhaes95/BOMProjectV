const router = require('express').Router()
const bodyParser = require('body-parser')
const Sequelize = require('sequelize');
const port = 3000;

const sequelize = new Sequelize("BD_BENERGY_P5", "root", "", {
    host: 'localhost',
    dialect: 'mysql'
});
sequelize.authenticate()
.then(function(){
    console.log("Conexão realizada");
    app.listen(port, ()=>{
        
    })
}).catch(function(){
    console.log("Erro de conexão")
})

module.exports = sequelize;

router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true }))

//material routes

router.post('/material', (req,res) => {
    const {matNome, matDesc, matData, matquant, matSist, matMassa, matCusto, matUnidade, matcomp} = req.body
   

    sequelize.querry("SELECT * FROM Materiais where matNome = ?", [matNome],
    (err, res) =>{
        if(err){
            res.send(err)
        }
        res.send(res)
    })

})