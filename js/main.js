document.addEventListener("DOMContentLoaded", function () {
  const selectSobreNosotros = document.getElementById("sobreNosotrosSelect");

  if (selectSobreNosotros) {
    selectSobreNosotros.addEventListener("change", function () {
      const url = this.value;
      if (url) {
        window.location.href = url;
      }
    });
  }
});

const track = document.querySelector(".carousel__track");
const nextBtn = document.querySelector(".carousel__btn.next");
const prevBtn = document.querySelector(".carousel__btn.prev");
const slides = document.querySelectorAll(".carousel__track img");

let index = 0;

// Detecta ancho dinámico
function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(${-index * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  index++;
  if (index >= slides.length) index = 0;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = slides.length - 1;
  updateCarousel();
});

// Auto-play infinito
setInterval(() => {
  index++;
  if (index >= slides.length) index = 0;
  updateCarousel();
}, 3000);

// Ajusta al redimensionar
window.addEventListener("resize", updateCarousel);
