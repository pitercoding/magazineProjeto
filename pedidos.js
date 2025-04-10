import { lerLocalStorage, desenharProdutoSimples } from "./src/utilidades";

// Função para criar e renderizar um pedido no histórico
function criarPedidoHistorico(pedidoComData) {
    const pedidoDate = new Date(pedidoComData.dataPedido);
    const pedidoDateFormatted = pedidoDate.toLocaleDateString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
    });

    // Criar o elemento para o pedido
    const elementoPedido = document.createElement('div');
    elementoPedido.classList.add('pedido', 'bg-slate-300', 'p-3', 'rounded-md', 'my-4');
    
    const pedidoTitle = document.createElement('p');
    pedidoTitle.classList.add('text-xl', 'font-bold');
    pedidoTitle.textContent = `${pedidoDateFormatted}`;
    elementoPedido.appendChild(pedidoTitle);

    // Container para os produtos do pedido
    const containerProdutos = document.createElement('section');
    containerProdutos.id = `container-pedidos-${pedidoComData.dataPedido}`;
    elementoPedido.appendChild(containerProdutos);

    // Adiciona os produtos no pedido
    for (const idProduto in pedidoComData.pedido) {
        desenharProdutoSimples(idProduto, `container-pedidos-${pedidoComData.dataPedido}`, pedidoComData.pedido[idProduto]);
    }

    // Adicionar o pedido no main
    const main = document.querySelector('main');
    main.appendChild(elementoPedido);
}

// Função para renderizar todos os pedidos do histórico
function renderizarHistoricoPedidos() {
    const historico = lerLocalStorage('historico') ?? [];

    if (historico.length === 0) {
        const main = document.querySelector('main');
        const noPedidosMessage = document.createElement('p');
        noPedidosMessage.classList.add('text-center', 'text-red-500');
        noPedidosMessage.textContent = 'Você ainda não fez nenhum pedido.';
        main.appendChild(noPedidosMessage);
        return;
    }

    // Renderiza cada pedido
    for (const pedidoComData of historico) {
        criarPedidoHistorico(pedidoComData);
    }
}

// Chama a função para renderizar os pedidos ao carregar o script
renderizarHistoricoPedidos();
