const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos() {
  const produtosEscondidos = catalogoProdutos.querySelectorAll(".hidden");

  produtosEscondidos.forEach(produto => {
    produto.classList.remove("hidden");
  });
}

function esconderPorClasse(classeParaEsconder) {
  exibirTodos();

  const produtosParaEsconder = catalogoProdutos.querySelectorAll(`.${classeParaEsconder}`);

  produtosParaEsconder.forEach(produto => {
    produto.classList.add("hidden");
  });
}

function esconderFemininos() {
  esconderPorClasse("feminino");
}

function esconderMasculinos() {
  esconderPorClasse("masculino");
}

export function inicializarFiltros() {
  document.getElementById("exibir-todos")
    .addEventListener("click", exibirTodos);

  document.getElementById("exibir-masculino")
    .addEventListener("click", esconderFemininos);

  document.getElementById("exibir-femininos")
    .addEventListener("click", esconderMasculinos);
}
