const fs = require('fs').promises;

async function carregaProdutos(paramUrl) {
    try {
        const produtosJSON = await fs.readFile('./json/produtos.json', 'utf8');
        const dados = JSON.parse(produtosJSON);
        let produtos = [];

        dados.forEach(produto => {
            produtos.push({
                nome: produto.nome,
                descricao: produto.descricao,
                preco: produto.preco,
                detalhes: produto.detalhes
            });
        });

        if (paramUrl) {
            // Chame a função e retorne o resultado            
            return encontrarNome(produtos, paramUrl);
        }

        return produtos;
    } catch (error) {
        console.log(error);
    }
}

// Defina a função fora do escopo da carregaProdutos
function encontrarNome(array, nome) {    
    return array.filter(item => item.nome === nome);
}


module.exports = carregaProdutos;