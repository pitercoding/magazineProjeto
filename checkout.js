import { desenharProdutoSimples, lerLocalStorage, apagarDoLocalStorage, salvarLocalStorage } from "./src/utilidades";

// Função para desenhar os produtos do checkout
function desenharProdutosCheckout() {
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};
    const containerProdutosCheckout = document.getElementById('container-produtos-chackout');

    // Se o carrinho estiver vazio, exibe uma mensagem
    if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
        containerProdutosCheckout.innerHTML = '<p class="text-center text-red-500">Seu carrinho está vazio.</p>';
        return;
    }

    // Desenha os produtos no checkout
    for (const idProduto in idsProdutoCarrinhoComQuantidade) {
        desenharProdutoSimples(idProduto, "container-produtos-chackout", idsProdutoCarrinhoComQuantidade[idProduto]);
    }
}

// Função para finalizar a compra
function finalizarCompra(evento) {
    evento.preventDefault();

    // Verificar se o carrinho está vazio
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};
    if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
        alert('Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.');
        return;
    }

    // Verificar se todos os dados de checkout estão preenchidos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const numeroCartao = document.getElementById('numero-cartao').value;
    const cvv = document.getElementById('cvv').value;
    const dataExpiracao = document.getElementById('data-expiracao').value;
    const cep = document.getElementById('cep').value;
    const endereco = document.getElementById('endereco').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;

    // Validar campos
    if (!nome || !email || !telefone || !numeroCartao || !cvv || !dataExpiracao || !cep || !endereco || !numero || !complemento) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Criar o pedido
    const dataAtual = new Date();
    const pedidoFeito = {
        dataPedido: dataAtual,
        pedido: idsProdutoCarrinhoComQuantidade
    }

    // Salvar o histórico de pedidos
    const historicoDePedidos = lerLocalStorage('historico') ?? [];
    const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];
    salvarLocalStorage('historico', historicoDePedidosAtualizado);

    // Apagar o carrinho
    apagarDoLocalStorage('carrinho');

    // Redirecionar para a página de pedidos
    window.location.href = './pedidos.html';
}

// Chama a função para desenhar os produtos no checkout
desenharProdutosCheckout();

// Adiciona o ouvinte de evento para o envio do formulário
const formCheckout = document.querySelector('form');
formCheckout.addEventListener('submit', (evento) => finalizarCompra(evento));
