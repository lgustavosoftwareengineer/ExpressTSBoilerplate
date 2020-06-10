import * as express from 'express'; 
import routes from './routes'

const app = express();

/* AQUI FICARÁ OS MIDDLEWARES PRINCIPAIS DO APP */

    // Fazendo com que meu express entenda json
    app.use(express.json());

    // Adicionando as minhas rotas
    app.use(routes);


export default app;
