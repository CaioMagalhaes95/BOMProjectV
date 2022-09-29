const { Int32 } = require('mongodb')
const mongoose = require('mongoose')

const Material = mongoose.model('Material', {
    ID: Int32,
    nome: String,
    descricao: String,
    data_de_compra: Date,
    quantidade: Int32,
    sistema: String,
    massa: Int32,
    custo: Int32,
    unidade_de_medida: Int32

})

module.exports = Material