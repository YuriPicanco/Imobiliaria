import mongoose from "mongoose";

async function connect() {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("[INFO]: Conectado ao banco de dados");
    }catch(err){
        console.log("[ERRO]: Banco não conectado, encerrando aplicação.");
    }
}

export default connect;