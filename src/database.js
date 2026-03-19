import Database from 'better-sqlite3'

const db = new Database('biblioteca.db')

// criar tabela caso ela não exista
db.exec(`
    CREATE TABLE IF NOT EXISTS livros (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    autor TEXT NOT NULL,
    ano INTEGER
    )
`)
export default db