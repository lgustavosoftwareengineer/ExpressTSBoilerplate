import app from './app'

/* AQUI FICARÁ AS CONFIGURAÇÕES DO SERVIDOR, CORS E ETC... */

    // Mensagem do terminal
        function msgInTerminal() {
            console.log(" --> The server its running in the link: \n -> https://localhost:8081...")
        }
    // Definindo a porta
        const port = 8081;

 // Rodando o servidor
app.listen(port, msgInTerminal)