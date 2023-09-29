const fs = require('fs').promises;

async function carregaProdutos(paramUrl) {

    try {
        console.log(paramUrl)
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

        if(paramUrl) {
            function encotrarNome(array, nome) {
                return array.find(item => item.nome === nome);
            }

            const intemEncontrado = encotrarNome(produtos, paramUrl);

        }

        return produtos;

    } catch (error) {
        console.log(error);
    }
}

module.exports = carregaProdutos;