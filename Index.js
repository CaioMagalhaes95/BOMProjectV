const express = require('express');

const app = express();
const cors = require('cors');

var path = require('path')

const router = require('./Routes/Routes.js');
const sequelize = require('./comoseeuquiser')

const port = 3000;

app.use(cors());
app.use(router);
app.use(express.json());


sequelize.authenticate()
.then(function(){
    console.log("Conexão realizada");
    app.listen(port, ()=>{
        
    })
}).catch(function(err){
    console.log("Erro de conexão")
    console.error(err);
})

// app.engine('html', require('ejs').renderFile)
// app.set('view engine', 'html')
// app.set('views', path.join(__dirname, './views'))



