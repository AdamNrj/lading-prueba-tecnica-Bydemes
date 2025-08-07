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
