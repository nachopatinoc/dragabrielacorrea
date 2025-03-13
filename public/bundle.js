'use strict';

const imagenesPc = ["images/img2.jpg", "images/img1.jpg"];
const imagenesMovil = ["images/img2_movil.jpg", "images/img1_movil.jpg"];
let contador$1 = 0;
const img = document.getElementById("imagen_dra");
img.style.transition = "opacity 0.55s";
img.style.WebkitTransition = "opacity 0.55s"; // para Safari

function cambiarImagen(lista) {
    contador$1 = (contador$1 + 1) % lista.length;
    img.style.opacity = 0; // Suaviza la transición

    setTimeout(() => {
        img.src = lista[contador$1];
        img.style.opacity = 1;
    }, 500);
}

var datosInfo = {
    tarjeta: [
        {   
            titulo: "Mi propósito",
            descripcion: "Empoderar a las personas para que se reconecten con su esencia, comprendan el mensaje que su cuerpo les transmite a través de los síntomas y tomen consciencia de que son los principales responsables de su bienestar. Mi misión es guiarlos en este camino hacia la salud integral, ayudándolos a rediseñar su estilo de vida desde la raíz, con herramientas que promuevan la prevención, el equilibrio y la acción consciente para lograr cambios en los hábitos sostenibles en el tiempo.",
        },

        { 
            titulo: "Mis estudios",
            descripcion: "Soy médica egresada de la Universidad Nacional de Cuyo en 1998 y realicé la especialidad en Medicina de Familia. Desde el inicio de mi carrera, sentí la necesidad de ir más allá de la medicina tradicional, buscando una mirada más holística, personalizada y enfocada en tratar las causas profundas de las enfermedades, no solo sus síntomas. A lo largo de los años, estudié disciplinas como la medicina Ayurveda, la medicina estética orthomolecular y antienvejecimiento, 5 Leyes Biológicas, Alimentación funcional consciente, osteología y Medicina Funcional Integrativa. Este camino de aprendizaje y evolución profesional me llevó a encontrar mi verdadera misión en la Medicina del Estilo de Vida, un enfoque que integra cuerpo, mente y espíritu para ayudar a las personas a transformar sus hábitos y alcanzar una mejor calidad de vida.",
        },

        {   
            titulo: "Mi estilo de vida",
            descripcion: `A los 51 años mi vida es el reflejo de lo que creo: que nuestro bienestar está en nuestras manos y que pequeños cambios conscientes pueden transformar nuestra existencia, para disfrutar la vida y vivir MÁS Y MEJOR. Dejé de fumar a los 30 años, marcando el inicio de un cambio profundo en mi salud. Poco después, comencé a correr y, con el tiempo, me convertí en maratonista. Soy profesora de yoga (200 hs RYT), una práctica que me conecta con el presente, fortalece mi cuerpo y aporta serenidad a mi mente. 
                        
                        Me alimento de manera consciente con una nutrición basada en plantas, eligiendo cada comida como una oportunidad para nutrir mi cuerpo. Cultivo relaciones significativas que enriquecen mi vida y dedico tiempo a mi descanso y bienestar emocional.`
        },

        {
            titulo: "Mi misión",
            descripcion: "Mi misión es acompañar a las personas a partir de los 40 años a transformar su salud y su vida a través de la toma de conciencia y la implementación de hábitos sostenibles. Trabajo desde una mirada integral, ayudando a identificar y tratar las causas profundas de las enfermedades, y no solo sus síntomas, utilizando los principios de la Medicina del Estilo de Vida. Mi objetivo es inspirar a mis pacientes a reconectar con su cuerpo y su esencia, adoptando prácticas que promuevan el equilibrio, la prevención y el bienestar. Todo esto, con el propósito de que cada persona pueda envejecer con vitalidad, disfrutando de una vida plena, saludable y alineada con sus valores.",
        },
    ]
};

const cargarTargeta = (titulo, descripcion) => {
    document.querySelector(".light").innerText = titulo;
    document.querySelector(".p_dra_info").innerText = descripcion;
    
};

const tarjetas = datosInfo.tarjeta;
let contador = 0;

const slideClickAdelante = () => {    if ((contador + 1) != tarjetas.length){
        contador += 1;
        cargarTargeta(tarjetas[contador].titulo, tarjetas[contador].descripcion);
        
    } else {
        contador = 0;
        cargarTargeta(tarjetas[contador].titulo, tarjetas[contador].descripcion);
    }
};

const slideClickAtras = () => {
    if ((contador - 1) != (-1)){
        contador -= 1;
        cargarTargeta(tarjetas[contador].titulo, tarjetas[contador].descripcion);
        
    } else {
        contador = 3;
        cargarTargeta(tarjetas[contador].titulo, tarjetas[contador].descripcion);
    }
};

// scrollAnimations.js


// Selección de los elementos del DOM
const textos1 = document.querySelector(".textos1");
const div_dra_info = document.querySelector(".div_dra_info");
const cuadro = document.querySelector(".cuadro");
const div_acordeon = document.querySelector(".div_acordeon");
const div_viñetas = document.querySelector(".div_viñetas");
const viñeta1 = document.querySelector("#viñeta1");
const viñeta2 = document.querySelector("#viñeta2");
const viñeta3 = document.querySelector("#viñeta3");
const viñeta4 = document.querySelector("#viñeta4");
const txt_pagina5 = document.querySelector(".txt_pagina5");
const cuadro_info1 = document.querySelector("#cuadro_info1");
const cuadro_info2 = document.querySelector("#cuadro_info2");

textos1.classList.add("animate__animated", "animate__fadeInLeft");

// Función para verificar si el elemento está visible en el viewport
function isInViewport(element, offset = 100) {
    const rect = element.getBoundingClientRect();
    return rect.top <= (window.innerHeight - offset) && rect.bottom >= 0;
}

// Función que se ejecuta en el scroll
function checkScroll() {
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
        txt_pagina5.classList.add("animate__animated", "animate__bounceIn");
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
        txt_pagina5.classList.contains("animate__bounceIn") &&
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

// IMPORTS


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
