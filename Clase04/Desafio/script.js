// Clase Articulos
class Articulo {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
    calcularMonto = (precio, cuotas) => precio / cuotas
}

// Creacion de 3 articulos
const mate = new Articulo(1, "Mate", 300)
const termo = new Articulo(2, "Termo", 500)
const mochila = new Articulo(3, "Mochila", 1500)

//  Creacion array de objetos
const articulos = new Array(mate,termo)

// Agrego un articulo mas al array
articulos.push(mochila)

// Menu principal
let mostarMenu = () => {
    let menu = ""
    articulos.forEach(element => {
    menu += `${element.id} ${element.nombre}\n`
    });

    let opcion = parseInt(prompt(`Bienvenido, seleccione un articulo (9 para salir)\n ${menu}`))
    return opcion
}

let menuPago = (articulo) => {
    let opcionPago = parseInt(prompt(`El articulo ${articulo.nombre} cuesta ${articulo.precio}, en cuantas cuotas quiere pagarlo? (1-3)`))
    console.log(opcionPago)
    if(!(opcionPago === 1 || opcionPago === 2 || opcionPago === 3)){
        alert("Cantidad de cuotas invalidas")
    }
    else{
        let cuotas = articulo.calcularMonto(articulo.precio, opcionPago)
        alert("Serian " + opcionPago + " cuotas de " + cuotas)
    }
}

let opcionSeleccionada = mostarMenu()

while (opcionSeleccionada !== 9) {
    let opcionPago = 0
    if (opcionSeleccionada == 1) {
        menuPago(articulos[0])       
    }
    if (opcionSeleccionada == 2) {
        menuPago(articulos[1])
    }
    if (opcionSeleccionada == 3) {
        menuPago(articulos[2])
    }
    opcionSeleccionada = mostarMenu()
}