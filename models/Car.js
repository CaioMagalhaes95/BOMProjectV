const { Int32 } = require('mongodb')
const mongoose = require('mongoose')

const Car = mongoose.model('Car', {
    ID: Int32,
    nome: String,
    descricao: String
})

module.exports = Car