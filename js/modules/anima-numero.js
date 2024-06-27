export default function initAnimaNumero() {
  const numeros = document.querySelectorAll("[data-numero]");

  // Tenho que conseguir um forma de colocar pontos vírgulas no texto, mas ele não aparecer na hora de transformar os numeros em number
  if (numeros.length) {
    function animacao() {
      numeros.forEach((numero) => {
        const valor = numero.innerText;
        const teste = +valor.replace(/,/g, ".");
        console.log(teste);
      });
    }
    animacao();
  }
}
