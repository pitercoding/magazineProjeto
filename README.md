# Magazine E-commerce

Bem-vindo ao projeto de um **E-commerce Magazine** desenvolvido com **Tailwind CSS** e **Vite**. Este projeto simula um site de compras online, com funcionalidades de navegação por catálogo de produtos, adição ao carrinho, checkout e visualização de pedidos realizados.

## 🚀 Funcionalidades

- **Catálogo de Produtos**: Exibição de produtos com filtros de categorias.
- **Carrinho de Compras**: Adição de produtos ao carrinho e visualização de itens selecionados.
- **Checkout**: Preenchimento de dados de pagamento, entrega e finalização da compra.
- **Histórico de Pedidos**: Armazenamento e exibição de pedidos realizados pelo usuário.

## 📦 Tecnologias Utilizadas

- **Tailwind CSS**: Para estilização rápida e responsiva.
- **Vite**: Ferramenta de build para otimização do fluxo de desenvolvimento.
- **PostCSS**: Para a configuração e otimização do CSS.
- **JavaScript**: Para a implementação das funcionalidades de interação e manipulação de dados.

## 🔧 Como rodar o projeto

### 1. Clone este repositório

```bash
git clone https://github.com/seu-usuario/magazine-ecommerce.git

2. Navegue até a pasta do projeto

cd magazine-ecommerce

3. Instale as dependências

npm install

4. Inicie o servidor de desenvolvimento
npm run dev

Isso vai abrir o projeto localmente no endereço http://localhost:3000.

5. Acesse o projeto
Abra seu navegador e acesse o endereço http://localhost:3000.

🛠️ Estrutura do Projeto
index.html: Página inicial com a exibição do catálogo de produtos.

checkout.html: Página onde o usuário realiza o checkout.

pedidos.html: Página que exibe o histórico de pedidos realizados.

src/: Contém os arquivos JavaScript para funcionalidades do site e utilitários.

utilidades.js: Funções utilitárias para manipulação de localStorage, renderização de produtos no carrinho, etc.

catalogo.js: Contém as informações dos produtos do catálogo.

cartaoProduto.js: Função para desenhar os produtos no carrinho e checkout.

filtrosCatalogo.js: Funções para filtrar os produtos do catálogo.

menuCarrinho.js: Funções para controlar a exibição e interação do carrinho de compras.

checkout.js: Funções para processar o checkout e salvar pedidos.

pedidos.js: Funções para exibir os pedidos anteriores no histórico.

tailwind.config.js: Configuração do Tailwind CSS.

postcss.config.js: Configuração do PostCSS.

vite.config.js: Configuração do Vite para otimização do build.

style.css: Estilos globais, incluindo o Tailwind CSS.

⚡ Melhorias Futuras
Implementar uma API para gerenciar os produtos e pedidos de forma dinâmica.

Adicionar mais funcionalidades ao carrinho de compras, como alteração de quantidades e remoção de produtos.

Melhorar a interface do usuário para uma experiência de compra mais intuitiva.

💡 Contribuindo
Faça um fork do projeto.

Crie uma branch para sua feature (git checkout -b minha-feature).

Faça o commit das suas alterações (git commit -am 'Adicionando nova feature').

Envie para a branch principal (git push origin minha-feature).

Abra um pull request.

📄 Licença
Este projeto está licenciado sob a MIT License.