export default function initMenuMobile() {
  const abrirMenu = document.querySelector(".abrirMenu");
  const fecharMenu = document.querySelector(".fecharMenu");
  const menuMobile = document.querySelector(".menu-mobile");
  const eventos = ["touchstart", "click"];

  if (abrirMenu && fecharMenu && menuMobile) {
    function handleClick() {
      menuMobile.classList.add("ativo");
      outsideClick(menuMobile, () => {
        menuMobile.classList.remove("ativo");
      });
    }

    function outsideClick(element, callback) {
      const html = document.documentElement;
      const outside = "data-oustide";

      if (!html.hasAttribute(outside)) {
        setTimeout(() => {
          html.setAttribute(outside, "");
          eventos.forEach((evento) => {
            html.addEventListener(evento, handleOutsideClick);
          });
        });
      }

      function handleOutsideClick(event) {
        if (!element.contains(event.target)) {
          callback();
          html.removeAttribute(outside);
          eventos.forEach((evento) => {
            html.removeEventListener(evento, handleOutsideClick);
          });
        }
      }
    }

    function removeClass() {
      menuMobile.classList.remove("ativo");
    }

    eventos.forEach((evento) => {
      abrirMenu.addEventListener(evento, handleClick);
      fecharMenu.addEventListener(evento, removeClass);
    });
  }
}
