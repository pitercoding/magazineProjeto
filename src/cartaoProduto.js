import { adicionarAoCarrinho } from "./menuCarrinho.js";
import { catalogo } from "./utilidades.js";

export function renderizarCatalogo() {
  const container = document.getElementById("container-produto");
  container.innerHTML = ""; // Evita duplicação se renderizado mais de uma vez

  for (const produto of catalogo) {
    const cartaoProduto = `
      <div 
        class="border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${produto.feminino ? 'feminino' : 'masculino'}" 
        id="card-produto-${produto.id}">
        
        <img 
          src="./assets/img/${produto.imagem}" 
          alt="${produto.nome}" 
          class="group-hover:scale-110 duration-300 my-3 rounded-lg"
        />
        <p class="text-sm font-semibold">${produto.marca}</p>
        <p class="text-sm">${produto.nome}</p>
        <p class="text-sm text-green-700 font-bold">$${produto.preco}</p>
        
        <button 
          id="adicionar-${produto.id}" 
          class="mt-2 bg-slate-950 hover:bg-slate-700 text-slate-200 py-1 rounded">
          <i class="fa-solid fa-cart-plus"></i> Adicionar
        </button>
      </div>`;

    container.innerHTML += cartaoProduto;
  }

  // Adiciona os eventos aos botões após renderizar os cards
  for (const produto of catalogo) {
    document
      .getElementById(`adicionar-${produto.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(produto.id));
  }
}
