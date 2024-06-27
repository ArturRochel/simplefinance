export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const abrirBaixar = document.querySelector('[data-modal="download"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const modalContainer = document.querySelector('[data-modal="container"]');
  const modalDownload = document.querySelector(
    '[data-modal="container-download"]'
  );

  if (botaoAbrir && botaoFechar && modalContainer) {
    function toggleModal(event) {
      event.preventDefault();
      if (
        event.target === botaoAbrir ||
        event.target === botaoFechar ||
        event.target === modalContainer
      ) {
        modalContainer.classList.toggle("ativo");
      } else if (
        event.target === abrirBaixar ||
        event.target === modalDownload
      ) {
        modalDownload.classList.toggle("ativo");
      }
    }

    function verifica(event) {
      event.preventDefault();
      if (event.target === this) {
        toggleModal(event);
      }
    }

    function apertouEsc(event) {
      if (event.key === "Escape") {
        toggleModal(event);
      }
    }

    botaoAbrir.addEventListener("touchstart", toggleModal);
    abrirBaixar.addEventListener("touchstart", toggleModal);
    botaoFechar.addEventListener("touchstart", toggleModal);
    modalContainer.addEventListener("toucshstart", verifica);
    modalDownload.addEventListener("touchstart", verifica);

    botaoAbrir.addEventListener("click", toggleModal);
    abrirBaixar.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    modalContainer.addEventListener("click", verifica);
    modalDownload.addEventListener("click", verifica);
    window.addEventListener("keydown", apertouEsc);
  }
}

// Na última atualização do códgio eu coloquei o item de container-download, adicionei addEventListener e como callback coloquei a função verificar, nela verificamos se o click é realizado fora do modal para que seja fechado, mas para aproveitar a função podemos verificar qual target aciona a função, ou então implementar ambos para toggleModal, mas dentro criar uma lógica if para ver qual modal vai acionar, se vai ser o modal de donwload ou login
