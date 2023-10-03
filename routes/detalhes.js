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
           
        let nome = produto[0].nome;
        let descricao = produto[0].descricao;
        let preco = produto[0].preco;
        let anoLancamento = produto[0].detalhes.anoLancamento;
        let criador = produto[0].detalhes.criador;
        let paradigma = produto[0].detalhes.paradigma;
        let utilizacao = produto[0].detalhes.utilizacao;

        res.render(`${caminho}/detalhes`, { nome, descricao, preco, anoLancamento, criador,paradigma, utilizacao });

    } catch (error) {
        console.log(error)
    }

});

module.exports = router