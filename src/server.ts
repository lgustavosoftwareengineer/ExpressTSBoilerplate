import app from './app'

/* AQUI FICARÁ AS CONFIGURAÇÕES DO SERVIDOR, CORS E ETC... */

    // Mensagem do terminal
        function msgInTerminal() {
            console.log(` --> The server its running in the link: \n -> https://localhost:${port}...`)
        }
    // Definindo a porta
        const port = 3000;

 // Rodando o servidor
app.listen(port, msgInTerminal)