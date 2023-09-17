const mongoose = require('mongoose');
const dotenv = require('dotenv/config');

async function main(){
  try{
    //imobiliaria
    const urlDb = `mongodb+srv://imobiliaria:${process.env.PASSWORD_DB}@cluster0.hmqxu4t.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;

    const mongooseOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    
    await mongoose.connect(urlDb, mongooseOptions);

    console.log("Conectado ao banco");
  }catch(err){
    console.log("ERRO:",err);
  }
}

module.exports = main;