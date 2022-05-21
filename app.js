const express = require('express');
const app = express();
const path = require('path')

const mainRouter = require('./routes/mainRouter');
const productosRouter = require('./routes/productosRouter');
const usuarioRouter = require('./routes/usuarioRouter');

app.use('/', mainRouter);
app.use('/productos', productosRouter);
app.use('/usuarios', usuarioRouter);

app.use(express.static("public")); 

app.listen(3000, () =>{
    console.log("Servidor funcionando en http://localhost:3000/");
})