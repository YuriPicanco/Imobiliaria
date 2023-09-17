import AppError from "../../errors/AppError";
import fs from "fs";
import path from "path";

export default function errorHandler(err, req, res, next){
    if(err instanceof AppError){
        return res.status(err.status).json({
            error: err.message
        });
    }

    const log = `${new Date().toISOString()} - ${err.message}\n`;
    fs.appendFile(path.resolve(__dirname, "../../../logs/errors.log"), log, (err) => {
        if(err){
            console.log("[ERRO]: Não foi possível salvar o erro no arquivo de log");
        }
    });

    return res.status(500).json({
        error: "Internal server error"
    });
}