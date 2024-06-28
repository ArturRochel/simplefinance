export default function initEfeitWidth() {
  const logoFooter = document.querySelector(".logo-footer");
  const capsulas = document.querySelectorAll(".capsula");

  if (logoFooter && capsulas.length) {
    function updateWidth() {
      const width = window.innerWidth;

      if (width < 700) {
        logoFooter.src = "img/new-vertical-logo.png";
      }
    }

    const tamanho = window.innerWidth;
    if (tamanho < 700) {
      capsulas.forEach((capsula, index) => {
        const resto = index % 2;
        if (resto == 0) {
          capsula.setAttribute("data-scroll", "rightmobile");
        } else {
          capsula.setAttribute("data-scroll", "leftmobile");
        }
      });
    }

    window.addEventListener("resize", updateWidth);
  }
}
