const express = require('express');
const router = express.Router()
const path = require('path');
const fs = require('fs').promises;
const caminho = path.join(__dirname, '../views');

router.get('/loja', (req, res) => {

    async function carregaProdutos() {
        try {
            const produtosJSON = await fs.readFile('./json/produtos.json', 'utf8');
            const dados = JSON.parse(produtosJSON);
            let produtos = [];

            dados.forEach(produto => {
                produtos.push({
                    nome: produto.nome,
                    descricao: produto.descricao,
                    preco: produto.preco
                });
            });

            return res.render(`${caminho}/produtos`, { produtos });

        } catch (error) {
            console.log(error);
        }
    }
    
    carregaProdutos();

});


module.exports = router;