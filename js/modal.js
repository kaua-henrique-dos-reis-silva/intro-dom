// Capturando elementos
const modal = document.querySelector("#modal-inscricao");
const btnModal = document.querySelector("#modal-fechar");

window.addEventListener("load", function () {
  setTimeout(function () {
    modal.showModal();
  }, 6000);
});

// Fechando modal ao clicar no button
btnModal.addEventListener("click", function () {
  modal.close();
});

// Fechando modal ao clicar no fundo
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.close();
  }
});
