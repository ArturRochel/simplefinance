export default function initMenuMobile() {
  const hamburguer = document.querySelector(".hamburguer");
  const menuMobile = document.querySelector(".menu-mobile");

  function toggleMenu(event) {
    event.preventDefault();
    hamburguer.classList.toggle("active");
    menuMobile.classList.toggle("active");
  }

  ["touchstart", "click"].forEach((userEvent) => {
    hamburguer.addEventListener(userEvent, toggleMenu);
  });
}
