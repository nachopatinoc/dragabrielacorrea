import datosInfo from "./slideshowInfo";

const cargarTargeta = (titulo, descripcion) => {
    document.querySelector(".light").innerText = titulo;
    document.querySelector(".p_dra_info").innerText = descripcion;
    
};

const tarjetas = datosInfo.tarjeta;
let contador = 0;

const slideClickAdelante = () => {;
    if ((contador + 1) != tarjetas.length){
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



export {cargarTargeta, slideClickAdelante, slideClickAtras};