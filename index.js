const express = require('express');
const exphbs = require('express-handlebars');
const fs = require('fs').promises;
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
// Instância do mecânisco de renderização
const hbs = exphbs.create({
    // Diretório onde os partials estão localizados
    partialsDir: ['views/partials']
});

app.engine('handlebars', hbs.engine);
// Definindo hanldebars como mecânismo de visualização padrão
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

    async function carregaComentarios() {
        try {
            const comentariosJSON = await fs.readFile('./json/comentarios.json', 'utf8');
            const dados = JSON.parse(comentariosJSON);
            const comentarios = dados.comentarios
            let comentariosArray = []

            comentarios.forEach(com => {
                comentariosArray.push({
                    nome: com.nome,
                    mensagem: com.mensagem,
                    data: com.data
                })
            });

            return res.render('home', { comentariosArray });

        } catch (error) {
            console.log(error)
        }
    }

    carregaComentarios();

})


app.listen(port);