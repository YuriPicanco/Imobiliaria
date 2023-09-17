const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3030;

app.use(cors());
app.use(express.json());

//DB Connection
const conn = require('./db/conn');
conn();

//Routes
const routes=require('./routes/router');
app.use('/api', routes)

app.listen(PORT, ()=>{
  console.log(`Servidor rodando na porta ${PORT}`);
});