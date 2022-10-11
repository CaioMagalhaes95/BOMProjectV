const express = require('express');

const app = express();
const cors = require('cors');

var path = require('path')

const router = require('./Routes/Routes.js');
const con = require('./dbconn');


const port = 3000;

app.use(cors());
app.use(router);
app.use(express.json());


con.connect(function(err){
    if(err) throw err;
    console.log("Conexão realizada");
    app.listen(port, ()=>{
        
    })
})

// app.engine('html', require('ejs').renderFile)
// app.set('view engine', 'html')
// app.set('views', path.join(__dirname, './views'))



