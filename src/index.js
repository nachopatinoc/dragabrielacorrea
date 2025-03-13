// IMPORTS
import { cambiarImagen, imagenesMovil, imagenesPc } from "./modules/imageChange";
import { slideClickAdelante, slideClickAtras } from "./modules/slideClick";
import { viewportHeight, textos1, div_dra_info, cuadro, div_acordeon, div_viñetas, viñeta1, viñeta2, viñeta3, viñeta4, checkScroll } from "./modules/scrollAnimations";


document.addEventListener("DOMContentLoaded", function () {
    // cambiarImagenes
    const img = document.querySelector("#imagen_dra");
    if (window.innerWidth <= 768) {
        img.src = imagenesMovil[0]; 
        setInterval(() => cambiarImagen(imagenesMovil), 3000);
    } else {
        setInterval(() => cambiarImagen(imagenesPc), 3000);
    }

    // carrusel
    const flecha_adelante = document.getElementById("flecha_adelante");
    const flecha_atras = document.getElementById("flecha_atras");

    setTimeout(() => {
        flecha_adelante.addEventListener("click", slideClickAdelante);
    }, 1000);
    
    setTimeout(() => {
        flecha_atras.addEventListener("click", slideClickAtras);
    }, 1000);
    
});

