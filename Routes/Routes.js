const router = require('express').Router()
const Armazem = require('./models/Armazem.js')
const Car = require('./models/Car.js')
const Material = require('./models/Material.js')
const bodyParser = require('body-parser')



router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true }))



router.get('/Car', async (req,res) =>{
    
    try{
        const car = await Car.find()

        res.status(200).json(car)
    }
    catch(error){
        res.status(500).json({error: error})
    }
})

router.get('/Material', async (req,res) =>{

    try{
        const material = await Material.find()

        res.status(200).json(material)
    }
    catch(error){
        res.status(500).json({error: error})
    }
})

router.get('/Armazem', async (req, res) =>{
    try{
        const armazem = await Armazem.find()
        res.status(200).json(armazem)
    }
    catch(error){
        res.status(500).json({error: error})
    }
})


router.post('/Car', async (req, res) =>{


    const {ID, nome, descricao} = req.body

    if(!nome){
        res.status(422).json({error: 'nome invalido'})
    }

    const car = {
        ID,
        nome,
        descricao
    }

    try{
        

        await Car.create(car)
        res.status(201).json({message: 'Carro inserido'})

    } catch (error){
        res.status(500).json({error: error})
    }

})


router.post('/Material', async (req, res) =>{

   
    const {ID, nome, descricao, data_de_compra, quantidade, sistema, massa, custo, unidade_de_medida} = req.body

    if(!ID || !nome || !descicao || !quantidade){
        res.status(422).json({error: 'Favor preencher todos os campos'})
    }

    const material = {
            ID,
            nome,
            descricao,
            data_de_compra,
            quantidade,
            sistema,
            massa,
            custo,
            unidade_de_medida
    }

    try{

        await Material.create(material)
        res.status(201).json({message: 'Material inserido'})

    } catch (error){
        res.status(500).json({error: error})
    }

})

router.post('/Armazem', async(req, res) =>{
    const {ID, prateleira} = req.body;
    if(!ID) {
        res.status(422).json({error: 'ID invalido'})
    }

    const armazem = {
        ID,
        prateleira
    }
    try{
        await Armazem.create(armazem)
        res.status(201).json({message: 'Prateleira inserida'})
    }
    catch(error){
        res.status(500).json({error: error})
    }
})

router.delete('/Car/:nome', async (req, res) =>{

    const nome = req.params.nome

    const car = await Car.findOne({ nome: nome})
    try {
            if(!car){
                res.status(422).json({message: "Carro não encontrado"})
            }
                await Car.deleteOne({nome: nome})

                console.log({message: "Deletado!"})
                res.status(200).json(car)
            
        } catch (error) {
        res.status(500).json({error: error})
    }
})

router.delete('/Material/:ID', async (req, res) =>{

    const ID = req.params.ID

    const material = await Material.findOne({ _id: ID})
    try {
            if(!material){
                res.status(422).json({message: "Material não encontrado"})
            }
                await Material.deleteOne({_id: ID})
                console.log({message: "Deletado!"})
                res.status(200).json(material)
            
        } catch (error) {
        res.status(500).json({error: error})
    }
})

router.delete('/Armazem/:ID', async(req,res)=>{
    const ID = req.params.ID

    const armazem = await Armazem.findOne({_id: ID})
    try{
        if(!armazem){
            res.status(422).json({message: "Prateleira não encontrada"})
        }
        await Armazem.deleteOne({_id: ID})
        console.log({message: "Deletado!"})
        res.status(200).json(armazem)
    } catch(error){
        res.status(500).json({error: errror})
    }
})


router.patch('/Car/:id', async (req, res) =>{

    const id = req.params.ID

    
    const {ID, nome, descricao} = req.body

    if(!nome){
        res.status(422).json({error: 'nome invalido'})
    }

    const car = {
        ID,
        nome,
        descricao
    }

    try{
        

        await Car.updateOne({ _id: id}, car)
        res.status(201).json(car)

    } catch (error){
        res.status(500).json({error: error})
    }

})


router.patch('/Material/:ID', async (req, res) =>{

    
    const id = req.params.ID
    const {ID, nome, descricao, data_de_compra, quantidade, sistema, massa, custo, unidade_de_medida} = req.body

    if(!ID || !nome){
        res.status(422).json({error: 'Favor preencher todos os campos'})
    }

    const material = {
        ID,
        nome,
        descricao,
        data_de_compra,
        quantidade,
        sistema,
        massa,
        custo,
        unidade_de_medida
    }

    try{

        await Material.updateOne({ _id: id}, material)
        res.status(201).json(material)

    } catch (error){
        res.status(500).json({error: error})
    }

})

router.patch('/Armazem/:ID', async (req, res)=>{
    const id = req.params.ID
    const {ID, prateleira} = req.body

    if(!ID || !prateleira){
        res.status(422).json({error: 'Favor preencher todos os campos'})
    }

    const armazem = {
        ID,
        prateleira
    }

    try{
        await Armazem.updateOne({_id: id}, armazem)
        res.status(201).json(armazem)
    }catch(error){
        res.status(500).json({error: error})
    }

})


module.exports = router;