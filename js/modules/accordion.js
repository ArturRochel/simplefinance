export default function initAccordion() {
  const perguntas = document.querySelectorAll('[data-accordion="pergunta"]');
  const respostas = document.querySelectorAll('[data-accordion="resposta"]');

  if (perguntas.length && respostas.length) {
    perguntas[0].closest(".teste").classList.add("ativo");
    perguntas[0].classList.add("ativo");
    respostas[0].classList.add("ativo");
    function openAnswer(event) {
      event.preventDefault();
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
      this.closest(".teste").classList.toggle("ativo");
    }

    perguntas.forEach((pergunta) => {
      ["touchstart", "click"].forEach((userEvent) => {
        pergunta.addEventListener(userEvent, openAnswer);
      });
    });
  }
}
