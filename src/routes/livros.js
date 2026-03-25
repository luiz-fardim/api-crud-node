import { Router } from 'express'
import db  from '../database.js'
import { livroSchema, livroUpdateSchema } from '../schemas/livroSchema.js'

const router = Router()

// GET - buscar todos os livros
router.get('/', (req, res) => {
    const livro = db.prepare('SELECT * FROM livros').all()
    res.json(livro)
})

// GET - buscar livro pelo id 
router.get('/:id', (req, res) => {
    const livro = db.prepare('SELECT * FROM livros WHERE id = ?').get(req.params.id)
    if (!livro) return res.status(404).json({ mensagem: "Livro não encontrado."})
    res.json(livro)
})

// POST - criar livro
router.post('/', (req, res) => {
    // validação de dados com zod
    const resultado = livroSchema.safeParse(req.body)
    if (!resultado.success) return res.status(400).json({ erros: resultado.error.flatten().fieldErrors})

    // lógica da rota
    const { titulo, autor, ano} = resultado.data
    const result = db.prepare('INSERT INTO livros (titulo, autor, ano) VALUES (?, ?, ?)').run(titulo, autor, ano)
    res.status(201).json({id: result.lastInsertRowid, titulo, autor, ano})
})

// PUT - atualizar livro
router.put("/:id",(req, res) => {
    // validação com zod
    const resultado = livroUpdateSchema.safeParse(req.body)
    if (!resultado.success) return res.status(400).json({ erros: resultado.error.flatten().fieldErrors})

    // lógica da rota 
    const {titulo, autor, ano, id} = resultado.data
    const result = db.prepare('UPDATE livros SET titulo = ?, autor = ?, ano = ? WHERE id = ?').run(titulo, autor, ano, id)

    if (result.changes === 0) return res.status(404).json({mensagem: "Livro não encontrado."})
    res.json({mensagem: "Livro atualizado com sucesso!"})
})

// DELETE - deletar rota
router.delete("/:id",(req, res) => {
    const result = db.prepare('DELETE FROM livros WHERE id = ?').run(req.params.id)
    if (result.changes === 0) return res.status(404).json({mensagem: "Livro não encontrado."})
    res.json({mensagem: "Livro deletado com sucesso!"})
})

export default router