const express = require('express');

const app = express();
const port = 3000;
var path = require('path')

const router = require('./Routes/Routes.js')

app.use(router)
app.use(express.json());
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, './views'))
