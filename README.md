# 📚 Alexandria - Loja Virtual de Livros

Este projeto é uma **loja virtual de livros** desenvolvida como exercício prático de front-end, com funcionalidades completas para cadastro, login, visualização de produtos, carrinho de compras e gerenciamento de estoque, utilizando **Local Storage** para persistência dos dados.

---

## 🔧 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **TypeScript**
- **Angular**
- **LocalStorage (nativo do navegador)**
- JSON Server (API mockada)



---

## ✨ Funcionalidades

### 👥 Autenticação (Login e Cadastro)

- Cadastro de novos usuários com:
  - Validação de campos obrigatórios
- Login com:
  - Verificação de credenciais
  - Armazenamento de sessão no LocalStorage
  - Redirecionamento após login

---

### 📚 Catálogo de Livros

- Listagem dos livros disponíveis com:
  - Capa, título, autor, editora, sinopse e valor
  - Estoque visível ao usuário
- Botão "Visualizar" leva para uma página com mais detalhes

---

### 🛒 Carrinho de Compras

- Adição de livros ao carrinho
- Validação de estoque disponível
- Exclusão de itens individualmente
- Cálculo automático do valor total
- Persistência dos itens no **LocalStorage**

---

### ⚙️ Painel do Usuário

- Edição de informações cadastrais
- Atualização da senha

---

## 🧠 Lógica de Programação

- Toda a lógica foi escrita em TypeScript
- Utilização de componentes modulares com Angular
- Serviços (Services) para manipulação de dados
- Armazenamento e recuperação de dados com `localStorage` (sem banco de dados)

---

## 🎨 Créditos Visuais

- Algumas imagens utilizadas foram retiradas de: [Freepik](https://br.freepik.com)
- Ícones usados no projeto foram obtidos em: [Feather Icons](https://feathericons.com)

---

## 📦 Como Executar o Projeto

1. Clone o repositório: https://github.com/Erick-Badaro/PI-lbiblioteca

2. Instale as dependências: npm install

3. Rode o projeto: ng serve --open

4. Suba o JSON-SERVER: npx json-server db.json
 (O json-server rodará por padrão na porta 3000, simulando uma API RESTful.)

![image](https://github.com/user-attachments/assets/e1006ef0-21e8-43fc-8893-4257e2b553f2)
![image](https://github.com/user-attachments/assets/f55bf0e0-8084-4273-aabc-9c771240c557)


