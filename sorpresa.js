// Carta
const regalo = document.querySelector(".regalo");
const regalos = document.querySelector(".regalos");
const modalCarta = document.getElementById("modalCarta");

regalo.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

regalos.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

modalCarta.addEventListener("click", () => {
  modalCarta.classList.remove("activo");
});

// Todo Oscuro + Soplido + Canción
const overlay = document.querySelector(".overlay");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");
const llama = document.querySelector(".llama");

llama.addEventListener("click", () => {
  soplido.currentTime = 0;  // Reinicia el audio de soplido
  soplido.play();  // Reproduce el soplido

  llama.style.animation = "apagar 0.5s forwards";  // Animación de la llama

  setTimeout(() => {
    cancion.currentTime = 0;  // Reinicia la canción
    cancion.play();  // Reproduce la canción

    overlay.classList.add("hidden");  // Oculta el overlay
  }, 1000);  // Espera 1 segundo antes de iniciar la canción
});
