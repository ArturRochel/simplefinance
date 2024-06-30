export default function initPlanos() {
  const planos = document.querySelectorAll(".plano");

  if (planos.length) {
    function selecao(plano) {
      planos.forEach((plano) => {
        plano.classList.remove("ativo");
      });
      plano.classList.add("ativo");
    }

    ["touchstart", "click"].forEach((userEvent) => {
      planos.forEach((plano) => {
        plano.addEventListener(userEvent, function () {
          selecao(plano);
        });
      });
    });
  }
}
