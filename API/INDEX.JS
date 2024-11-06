const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

let produto = []
let idcounter = 1

app.get('/Produto', (req, res) => {
    res.json(produto)
})

app.post('/NovoProduto', (req, res) => {
    const {nome, quantidade, preco} = req.body
    const novoProduto = {id: idcounter++, nome, quantidade, preco}
    produto.push(novoProduto)
    res.status(201).json({ message: 'Produto criado' });
})

app.get('/produto', (req,res) =>{
    res.json(novoProduto)
})

app.put('/produto/:id', (req,res) =>{
    const produtoid = parseInt(req.params.id)
    const { nome, quantidade, preco} = req.body;
    
    const produto = produto.find(e => e.id === produtoid)
    if(produto) {
        produto.nome = nome || produto.nome
        produto.quantidade = quantidade || produto.quantidade
        produto.preco = preco || produto.preco
        res.json(produto)
    } else {
        res.status(404).json({ message: 'Produto não encontrado' })
    }
})

app.delete('/produto/:id', (req, res) =>{
    const produtoid = parseInt(req.params.id)
    const index = produto.findIndex(e => e.id === produtoid)
    if(index !== -1) {
        const produtoRemovido = produto.splice(index, 1)
        res.json({message: 'produto removido com sucesso'})
    } else {
        res.status(404).json({ message: 'Produto não encontrado' })
    }
})






app.listen(port, () => {
    console.log(`servidor esta rodando ${port}`)
})