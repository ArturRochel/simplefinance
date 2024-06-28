export default function initAnimaNumero() {
  const numeros = document.querySelectorAll("[data-numero]");

  if (numeros.length) {
    function animaNumero() {
      numeros.forEach((numero) => {
        const stringValue = numero.innerText;
        const valor = +stringValue.replace(/\./g, "");
        const incremento = Math.floor(valor / 10);
        let start = 0;
        const timer = setInterval(() => {
          start = start + incremento;
          numero.innerText = start;

          if (start > valor) {
            clearInterval(timer);
            numero.innerText = stringValue;
          }
        }, 150);
      });
    }

    function handleMutation(mutation) {
      if (mutation[0].target.classList.contains("ativo")) {
        animaNumero();
        observer.disconnect();
      }
    }

    const observer = new MutationObserver(handleMutation);
    const observerTarget = document.querySelector(".curadoria");
    observer.observe(observerTarget, { attributes: true });
  }
}
