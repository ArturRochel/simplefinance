export default function initAnimaScroll() {
  const sections = document.querySelectorAll("[data-scroll]");
  const windowHalf = window.innerHeight * 0.55;

  if (sections.length) {
  }

  function animaScroll() {
    sections.forEach((section) => {
      const sectioTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectioTop - windowHalf < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else {
        section.classList.remove("ativo");
      }
    });
  }

  animaScroll();

  window.addEventListener("scroll", animaScroll);
}
