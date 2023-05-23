import mongoose from "mongoose";
import config from "config";
import Looger from "../config/logger";

async function connect() {
    const dbUri = config.get<string>("dbUri")

    try {
        await mongoose.connect(dbUri)
        Looger.info('Banco de dados Conectado');
    } catch (err) {
        Looger.error('Sem conexão com o banco');
        Looger.error(`Erro: ${err}`);
        process.exit(1);
    }
}

export default connect