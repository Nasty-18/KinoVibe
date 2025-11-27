const express = require('express');
const filmController = require('../controllers/filmController')
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/',(req,res) =>{
    res.json({name:'Liza'})
});
app.get('/film',(req, res) => {filmController.getFilms()})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});