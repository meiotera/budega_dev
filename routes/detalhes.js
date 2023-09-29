const express = require('express');
const router = express.Router();
const path = require('path');
const carregaProduto = require('../carrega_produtos');
const caminho = path.join(__dirname, '../views');
router.use(express.json())


router.get('/detalhes', async (req, res) => {

    const produtoUrl = req.query.produto
    
    try {
       
        let produto = await carregaProduto(produtoUrl);
        

        res.render(`${caminho}/detalhes`, { produto });

    } catch (error) {
        console.log(error)
    }

});

module.exports = router