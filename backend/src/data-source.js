import mongoose from "mongoose";

async function connect() {
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("[INFO]: Conectado ao banco de dados");
    }catch(err){
        console.log("[ERRO]: Banco não conectado, encerrando aplicação.");
        process.exit(1);
    }
}

export default connect;