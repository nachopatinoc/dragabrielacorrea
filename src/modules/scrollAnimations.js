// scrollAnimations.js

// Obtener el alto del viewport
export const viewportHeight = window.innerHeight;

// Selección de los elementos del DOM
export const textos1 = document.querySelector(".textos1");
export const div_dra_info = document.querySelector(".div_dra_info");
export const cuadro = document.querySelector(".cuadro");
export const div_acordeon = document.querySelector(".div_acordeon");
export const div_viñetas = document.querySelector(".div_viñetas");
export const viñeta1 = document.querySelector("#viñeta1");
export const viñeta2 = document.querySelector("#viñeta2");
export const viñeta3 = document.querySelector("#viñeta3");
export const viñeta4 = document.querySelector("#viñeta4");
export const txt_pagina5 = document.querySelector(".txt_pagina5");
export const cuadro_info1 = document.querySelector("#cuadro_info1");
export const cuadro_info2 = document.querySelector("#cuadro_info2");

textos1.classList.add("animate__animated", "animate__fadeInLeft");

// Función para verificar si el elemento está visible en el viewport
function isInViewport(element, offset = 100) {
    const rect = element.getBoundingClientRect();
    return rect.top <= (window.innerHeight - offset) && rect.bottom >= 0;
}

// Función que se ejecuta en el scroll
export function checkScroll() {
    const innerWidth = window.innerWidth;

    // Activar las animaciones solo cuando los elementos estén entrando al viewport
    if (isInViewport(div_dra_info, 100)) {
        div_dra_info.classList.add("animate__animated", "animate__fadeIn");
    }
    if (isInViewport(cuadro, 100)) {
        cuadro.classList.add("animate__animated", "animate__fadeInLeft");
    }
    if (isInViewport(div_acordeon, 100)) {
        div_acordeon.classList.add("animate__animated", "animate__fadeInRight");
    }
    if (isInViewport(div_viñetas, 100) && innerWidth > 1919) {
        div_viñetas.classList.add("animate__animated", "animate__fadeInUp");
    }
    if (innerWidth <= 1919) {
        if (isInViewport(viñeta1, 100)) {
            viñeta1.classList.add("animate__animated", "animate__fadeInRight");
        }
        if (isInViewport(viñeta2, 100)) {
            viñeta2.classList.add("animate__animated", "animate__fadeInLeft");
        }
        if (isInViewport(viñeta3, 100)) {
            viñeta3.classList.add("animate__animated", "animate__fadeInRight");
        }
        if (isInViewport(viñeta4, 100)) {
            viñeta4.classList.add("animate__animated", "animate__fadeInLeft");
        }
    }
    if (isInViewport(txt_pagina5, 100)) {
        txt_pagina5.classList.add("animate__animated", "animate__fadeIn");
    }
    if (isInViewport(cuadro_info1, 100)) {
        cuadro_info1.classList.add("animate__animated", "animate__fadeInLeft");
    }
    if (isInViewport(cuadro_info2, 100)) {
        cuadro_info2.classList.add("animate__animated", "animate__fadeInRight");
    }
    

    // Verificar si todos los elementos ya tienen sus animaciones
    const allElementsAnimated = (
        textos1.classList.contains("animate__fadeInLeft") &&
        div_dra_info.classList.contains("animate__fadeIn") &&
        cuadro.classList.contains("animate__fadeInLeft") &&
        div_acordeon.classList.contains("animate__fadeInRight") &&
        (innerWidth > 1919 ? div_viñetas.classList.contains("animate__fadeInUp") : (
            viñeta1.classList.contains("animate__fadeInRight") &&
            viñeta2.classList.contains("animate__fadeInLeft") &&
            viñeta3.classList.contains("animate__fadeInRight") &&
            viñeta4.classList.contains("animate__fadeInLeft")
        )) &&
        txt_pagina5.classList.contains("animate__fadeIn") &&
        cuadro_info1.classList.contains("animate__fadeInLeft") &&
        cuadro_info2.classList.contains("animate__fadeInRight")
    );

    // Remover el listener de scroll cuando todas las animaciones se han ejecutado
    if (allElementsAnimated) {
        window.removeEventListener("scroll", checkScroll);
    }
}

// Agregar el listener de scroll para ejecutar la función cuando el usuario se desplaza
window.addEventListener("scroll", checkScroll);
