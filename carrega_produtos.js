const fs = require('fs').promises;

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

        return produtos;

    } catch (error) {
        console.log(error);
    }
}

module.exports = carregaProdutos;