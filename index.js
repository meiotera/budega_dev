const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;

// Instância do mecânisco de renderização
const hbs = exphbs.create({
    // Diretório onde os partials estão localizados
    partialsDir: ['views/partials']
});

app.engine('handlebars', hbs.engine);
// Definindo hanldebars como mecânismo de visualização padrão
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home')
})


app.listen(port);