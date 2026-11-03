const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });
}

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const subject = encodeURIComponent("Consulta desde la web de BIO MOTOR");
    const body = encodeURIComponent(
      `Nombre: ${formData.get("name")}\nCorreo: ${formData.get("email")}\nInterés: ${formData.get("interest")}\n\nMensaje:\n${formData.get("message")}`
    );
    window.location.href = `mailto:hola@biomotor.example?subject=${subject}&body=${body}`;
  });
}
