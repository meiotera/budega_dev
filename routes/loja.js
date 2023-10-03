const express = require('express');
const router = express.Router()
const path = require('path');
const carregaProdutos = require('../carrega_produtos')
const caminho = path.join(__dirname, '../views');

router.get('/loja', async (req, res) => {

    try {
        let produtos = await carregaProdutos();        

        res.render(`${caminho}/produtos`, { produtos })

    } catch (error) {
        console.log(error)
    }

});


module.exports = router;