export default function initModalMobile() {
  const abrirLoginMobile = document.querySelector('[data-modal="abrir-login"]');
  const fecharLoginMobile = document.querySelector(
    '[data-modal="fechar-login"]'
  );
  const loginMobile = document.querySelector('[data-modal="login-mobile"]');
  const abrirDonwloadMobile = document.querySelector(
    '[data-modal="abrir-download"]'
  );
  const donwloadMobile = document.querySelector(
    '[data-modal="download-mobile"]'
  );

  if (
    (abrirLoginMobile && fecharLoginMobile && loginMobile) ||
    (abrirDonwloadMobile && donwloadMobile)
  ) {
    function toggleEvent(event) {
      event.preventDefault();
      if (event.target == abrirLoginMobile) {
        loginMobile.classList.toggle("active");
      } else if (event.target == abrirDonwloadMobile) {
        donwloadMobile.classList.toggle("active");
      }
      const hamburguer = document.querySelector(".hamburguer");
      const menuMobile = document.querySelector(".menu-mobile");
      hamburguer.classList.remove("active");
      menuMobile.classList.remove("active");
    }

    function verifica(event) {
      event.preventDefault();
      if (event.target === this) {
        donwloadMobile.classList.remove("active");
        loginMobile.classList.remove("active");
      }
    }

    ["touchstart", "click"].forEach((userEvent) => {
      abrirLoginMobile.addEventListener(userEvent, toggleEvent);
      fecharLoginMobile.addEventListener(userEvent, toggleEvent);
      loginMobile.addEventListener(userEvent, verifica);
      donwloadMobile.addEventListener(userEvent, verifica);
      abrirDonwloadMobile.addEventListener(userEvent, toggleEvent);
    });
  }
}
