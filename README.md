# Os exemplos podem ser testados em um servidor local ou remoto. Para testar remotamente basta trocar a rota das requisições para

```
http://localhost:3000/produtos
```

# GIT

```
Git: https://github.com/wiusmarquespucmg/nodee1
```

# Exemplo de requisição Criar Produto

POST http://localhost:3000/produtos

BODY (JSON) raw (application/json)

```json
{
    "nome": "Produto 1",
    "descricao": "Descrição do produto 1",
    "preco": 10.00,
    "quantidade": 10
}
```

# Exemplo para obter a lista de produtos

GET http://localhost:3000/produtos

# Exemplo para obter um produtos específico

GET http://localhost:3000/produtos/1

# Exemplo para alterar um produto

PUT http://localhost:3000/produtos/1

BODY (JSON) raw (application/json)

```json
{
    "descricao": "Descrição do produto 1 alterada",
    "valor": 10.00,
    "marca": "Marca do produto 1 alterada"
}
```

# Exemplo para excluir um produto

DELETE http://localhost:3000/produtos/1


