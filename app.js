//VARIABLES GLOBALES
let amigos = [];


//FUNCIONES INICIALES
limpiarCampo();

//FUNCIONES GLOBALES
function limpiarCampo(){
    document.querySelector('#amigo').value = '';
}

function insertarNombre(){
    let elemento = document.querySelector('li');
    elemento.innerHTML();
}

//AGREGAR NOMBRES AL ARREGLO
function agregarAmigo(){
    let nombreAgregado = document.getElementById('amigo').value;
    
    if (nombreAgregado=="") {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(nombreAgregado);
    }
    console.log(amigos);
    limpiarCampo();
    
}



for (let i = 0; i < amigos.length; i++) {
    let elemento = document.querySelector('li');
    elemento.innerHTML(amigos[i]);
}