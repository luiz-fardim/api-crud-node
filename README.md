# 📚 Biblioteca API

Uma API REST simples e funcional para o gerenciamento de acervo de livros. Este projeto foi desenvolvido em **Node.js** utilizando o framework **Express** e o banco de dados **SQLite** para fins de estudo sobre operações CRUD.

---

## 🚀 Tecnologias Utilizadas

* **Node.js**: Ambiente de execução para o servidor.
* **Express**: Framework para criação de rotas e middleware.
* **better-sqlite3**: Driver rápido e eficiente para persistência em SQLite.
* **Nodemon**: Para reinicialização automática do servidor durante o desenvolvimento.

---

## 🛠️ Como Instalar e Rodar

1.  **Clone este repositório:**
    ```bash
    git clone https://github.com/luiz-fardim/api-crud-nod
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd biblioteca-api
    ```

3.  **Instale as dependências necessárias:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O servidor estará disponível em: **`http://localhost:3000`**

---

## 📌 Rotas da API

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| **GET** | `/livros` | Lista todos os livros cadastrados no banco. |
| **GET** | `/livros/:id` | Busca os detalhes de um livro específico pelo ID. |
| **POST** | `/livros` | Cadastra um novo livro no acervo. |
| **PUT** | `/livros/:id` | Atualiza os dados de um livro existente. |
| **DELETE** | `/livros/:id` | Remove um livro do banco de dados. |

### 📥 Exemplo de JSON (POST e PUT)
Para enviar dados para a API, utilize o seguinte formato no corpo (**body**) da requisição:

```json
{
  "titulo": "A Cartomante",
  "autor": "Machado de Assis",
  "ano": 1871
}