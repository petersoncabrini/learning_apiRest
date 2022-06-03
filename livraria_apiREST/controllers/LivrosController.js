// Importando o banco de dados
const db = require ('../models')

const LivrosController = {
    listar: async (req, res) => {
        const colecaoLivros =  await db.Livro.findAll();

        res.send(colecaoLivros)
    },
    editar: async (req, res) => {
        const {id, titulo, quantidade_paginas, autor, ano_lancamento, estoque} = req.body

        const livro = await db.Livro.findByPk(id)
        if (livro == undefined){
            res.send(404);
        } else {
            db.Livro.update({
                titulo: titulo,
                quantidade_paginas: quantidade_paginas,
                autor: autor,
                ano_lancamento: ano_lancamento,
                estoque: estoque
            }, {where: {id: id}});

            const livroAtualizado = await db.Livro.findByPk(id);
            res.send(livroAtualizado)
        }
    }
}

module.exports = LivrosController