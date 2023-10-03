const express = require('express');
const router = express.Router();
const path = require('path');
const carregaProduto = require('../carrega_produtos');
const caminho = path.join(__dirname, '../views');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/detalhes/?', async (req, res) => {
    const produtoUrl = req.query.prod;    
   
    
    try {       
        let produto = await carregaProduto(produtoUrl);

        console.log(produto)
           
        let nome = produto[0].nome;
        let descricao = produto[0].descricao;
        let preco = produto[0].preco;
        let anoLancamento = produto[0].detalhes[0];
        

        /*
            "detalhes": {
            "anoLancamento": 1995,
            "criador": "Netscape Communications Corporation",
            "paradigma": "Multi-paradigma",
            "utilizacao": "Desenvolvimento web, aplicativos do lado do cliente, servidor, IoT"
        }
        
        */

        res.render(`${caminho}/detalhes`, { nome, descricao, preco, anoLancamento });

    } catch (error) {
        console.log(error)
    }

});

module.exports = router