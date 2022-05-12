const express = require('express');

const app = express();

const Contenedor = require('./contenedor');

const productos = new Contenedor('productos.txt');



app.get('/productos', async (req,res) =>{
    const array = await productos.getAll();
    res.send(array);
});

app.get('/productoRandom',async (req,res) => {
    const array = await productos.getAll();
    const max = array.length;
    const aleatorio = (Math.floor(Math.random() * max)) + 1
    const arrayPorId = await productos.getById(aleatorio);
    res.send(arrayPorId);
});



const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`Esta escuchando el puerto ${PORT}`);
});