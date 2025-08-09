//VARIABLES GLOBALES
let amigos = [];

//FUNCIONES INICIALES
limpiarCampo();
limpiarLista();

//FUNCIONES GLOBALES
function limpiarCampo() {
    document.querySelector('#amigo').value = '';
}

function limpiarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
}

function limpiarResultado() {
    let lista = document.getElementById('resultado');
    lista.innerHTML = "";
}

//AGREGAR NOMBRES AL ARREGLO Y VERIFICAR SÍ EL CAMPO ESTÁ VACÍO
function agregarAmigo() {

    let nombreAgregado = document.getElementById('amigo').value;

    if (nombreAgregado == "") {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(nombreAgregado);
        imprimirLista(nombreAgregado);
    }
    
    limpiarCampo();
    limpiarResultado()
}

//MOSTRAR LA LISTA DE AMIGOS CONFORME SE VAYAN INGRESANDO LOS NOMBRES
function imprimirLista() {

    let elemento = document.getElementById('listaAmigos');
    let listaAmigos = "";

    for (let i = 0; i < amigos.length; i++) {
        listaAmigos = listaAmigos + `<li>${amigos[i]}</li>`;
    }

    elemento.innerHTML = listaAmigos;
}


//SORTEAR EL NOMBRE DEL AMIGO SECRETO Y MOSTRARLO
function sortearAmigo() {

    let elemento = document.getElementById('resultado');

    if (amigos.length == 0) {

        elemento.innerHTML = `No has ingresado ningún nombre.\nInténtalo de nuevo, por favor.`;

    } else {

        let numeroMax = amigos.length;
        let numeroSorteado = Math.floor(Math.random() * numeroMax) + 1;

        limpiarLista();
        elemento.innerHTML = `El amigo secreto sorteado es: ${amigos[numeroSorteado - 1]}`;

    }

}

