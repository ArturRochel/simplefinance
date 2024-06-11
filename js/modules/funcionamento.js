export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");

  if (funcionamento) {
    const diaSemana = funcionamento.dataset.semana.split(",").map(Number);
    const horaSemana = funcionamento.dataset.horario.split(",").map(Number);
    const agora = new Date();
    const horaAgora = agora.getHours();
    const diaAgora = agora.getDay();
    const diaAberto = diaSemana.includes(diaAgora);
    const horaAberto = horaAgora >= horaSemana[0] && horaAgora < horaSemana[1];

    if (diaAberto && horaAberto) {
      funcionamento.classList.add("aberto");
    } else {
      funcionamento.classList.remove("aberto");
    }
  }
}
