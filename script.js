const entrada = document.querySelector(".entradaDatos");
const salida = document.querySelector(".salidaDatos");
const imagen = document.querySelector(".cuadroSalida");

const matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"],]

/*
La letra "e" es convertida en "enter"
la letra "i" es convertida en "imes"
la letra "a" es convertida en "ai"
la letra "o" es convertida en "ober"
la letra "u" es convertida en "ufat"
*/

function encriptar(){
    let mensaje = entrada.value;
    const procedimiento = 0
    
    procesamientoDatos(mensaje, procedimiento);
}

function desencriptar(){
    let mensaje = entrada.value;
    const procedimiento = 1

    procesamientoDatos(mensaje, procedimiento);
}

function copiar(){
    imagen.style.backgroundImage = "url(images/Muñeco.png)";
    salida.style.backgroundImage = "url(images/Frame5.png)";

    salida.select();
    document.execCommand("copy");
    salida.value = "";
}

function procesamientoDatos(mensaje, procedimiento){
    imagen.style.backgroundImage = "none";
    salida.style.backgroundImage = "none";

    mensaje = mensaje.toLowerCase();
    let reemplazar = 0;

    if(procedimiento == 0){
        reemplazar = 1;
    }

    for(let i = 0; i < matrizCodigo.length; i++){
        // si procedimiento es igual a 0 entonces va a encriptar el mensaje
        // si procedimiento es igual a 1 entonces va a desencriptar el mensaje
        if(mensaje.includes(matrizCodigo[i][procedimiento])){
            mensaje = mensaje.replaceAll(matrizCodigo[i][procedimiento],matrizCodigo[i][reemplazar]);
        }
    }

    entrada.value = "";
    salida.value = mensaje;
}