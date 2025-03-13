const imagenesPc = ["images/img2.jpg", "images/img1.jpg"];
const imagenesMovil = ["images/img2_movil.jpg", "images/img1_movil.jpg"];
let contador = 0;
const img = document.getElementById("imagen_dra");
img.style.transition = "opacity 0.55s";
img.style.WebkitTransition = "opacity 0.55s"; // para Safari

export function cambiarImagen(lista) {
    contador = (contador + 1) % lista.length;
    img.style.opacity = 0; // Suaviza la transición

    setTimeout(() => {
        img.src = lista[contador];
        img.style.opacity = 1;
    }, 500);
}

export { imagenesPc, imagenesMovil };