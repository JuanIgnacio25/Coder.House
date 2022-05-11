const express = require('express');

const app = express();

let visitas = 0;
app.get('/',(req,res,next) =>{
    res.send('<h1>Bienvenidos al Servidor Express!!</h1>');
});

app.get('/visitas',(req,res,next) => {
    visitas++
    res.send(`La cantidad de visitas es ${visitas}`);
});

const fecha = new Date().toDateString();
const hora = new Date().toTimeString();

app.get('/fyh', (req,res,next) => {
    res.send({fecha:`${fecha}`, hora:`${hora}`}
    );
});

const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`Esta escuchando el puerto ${PORT}`);
});