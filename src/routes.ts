import * as express from 'express';

/*Algo que possibilitará eu usar o intellisense em qualquer metodo:
 request e response no meu código fora do app.ts */
 import { Request, Response } from 'express'; 

/* AQUI FICARÃO AS ROTAS */
    // Método por possibilar o desacoplamento das rotas do app.ts
        const routes = express.Router();
    
    // Rotas
        routes.get('/', (request: Request, response: Response) => {
            response.json({msg:'hello world'});
        })

export default routes;