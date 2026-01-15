const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const quoteForm = document.querySelector("#quote-form");
const quoteModal = document.querySelector("#quote-modal");
const quoteModalClose = document.querySelector("#quote-modal-close");

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(quoteForm);
    const subject = "Richiesta preventivo FERJET";
    const body = [
      `Nome e cognome: ${formData.get("nome") || ""}`,
      `Email: ${formData.get("email") || ""}`,
      `Telefono: ${formData.get("telefono") || ""}`,
      `Tipo di progetto: ${formData.get("progetto") || ""}`,
      `Descrizione: ${formData.get("messaggio") || ""}`,
    ].join("\n");
    const mailtoUrl = `mailto:samuelebruzzi@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    if (quoteModal) {
      quoteModal.classList.add("show");
      quoteModal.setAttribute("aria-hidden", "false");
    }
    quoteForm.reset();
  });
}

if (quoteModal && quoteModalClose) {
  const closeModal = () => {
    quoteModal.classList.remove("show");
    quoteModal.setAttribute("aria-hidden", "true");
  };

  quoteModalClose.addEventListener("click", closeModal);
  quoteModal.addEventListener("click", (event) => {
    if (event.target === quoteModal) {
      closeModal();
    }
  });
}

const zoomableImages = document.querySelectorAll(".zoomable");

if (zoomableImages.length > 0) {
  let lightbox = document.querySelector(".image-lightbox");
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.className = "image-lightbox";
    lightbox.setAttribute("aria-hidden", "true");
    lightbox.innerHTML = '<img alt="Zoom immagine" />';
    document.body.appendChild(lightbox);
  }

  const lightboxImage = lightbox.querySelector("img");

  const closeLightbox = () => {
    lightbox.classList.remove("show");
    lightbox.classList.remove("tende");
    lightbox.setAttribute("aria-hidden", "true");
  };

  zoomableImages.forEach((image) => {
    image.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (image.dataset.lightbox === "tende") {
        lightbox.classList.add("tende");
      } else {
        lightbox.classList.remove("tende");
      }
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt || "Zoom immagine";
      lightbox.classList.add("show");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  lightbox.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });
}
