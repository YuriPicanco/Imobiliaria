import app from './app';
import connect from './data-source';

(
    async () => {
        await connect();
        app.listen(process.env.PORT, () => {
            console.log(`[INFO]: Servidor rodando na porta ${process.env.PORT}`);
        })
    }
)()