import app from './app';
import connect from './data-source';
import 'dotenv/config'

(
    async () => {
        await connect();
        app.listen(process.env.PORT, () => {
            console.log(`[INFO]: Servidor rodando na porta ${process.env.PORT}`);
        })
    }
)()