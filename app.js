const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const lista_produtos = {
    produtos: [
        { id: 1, descricao: "Arroz parboilizado 5Kg", valor: 25.00, marca: "Tio João"  },
        { id: 2, descricao: "Maionese 250gr", valor: 7.20, marca: "Helmans"  },
        { id: 3, descricao: "Iogurte Natural 200ml", valor: 2.50, marca: "Itambé"  },
        { id: 4, descricao: "Batata Maior Palha 300gr", valor: 15.20, marca: "Chipps"  },
        { id: 5, descricao: "Nescau 400gr", valor: 8.00, marca: "Nestlé"  },
    ]
}

// Criar um novo produto
app.post('/produtos', (req, res) => {
    let data = req.body;
    data.id = lista_produtos.produtos.length + 1;
    lista_produtos.produtos.push(data);
    res.status(200).json(lista_produtos);
});

// Obter a lista de produtos
app.get('/produtos', (req, res) => {
    res.status(200).json(lista_produtos);
});

// Obter um produto específico
app.get('/produtos/:id', (req, res) => {
    let product = lista_produtos.produtos.find(p => p.id == req.params.id);

    if (!product) return res.status(404).json({ erro: 'Produto não encontrado' });

    res.status(200).json(product);
});

// Alterar um produto
app.put('/produtos/:id', (req, res) => {
    const produto = lista_produtos.produtos.find(p => p.id == req.params.id);

    if (!produto) {
        return res.status(404).json({ erro: 'Produto não encontrado' });
    }

    produto.descricao = req.body.descricao || produto.descricao;
    produto.valor = req.body.valor || produto.valor;
    produto.marca = req.body.marca || produto.marca;

    res.status(200).json(produto);
});

// Excluir um produto
app.delete('/produtos/:id', (req, res) => {
    lista_produtos.produtos = lista_produtos.produtos.filter(p => p.id != req.params.id);
    res.status(200).json(lista_produtos);
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});