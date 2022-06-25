// Constructor de articulos
function Articulo(nombre, precio){
    this.nombre = nombre
    this.precio = precio
    // Arrow Function para calular el monto a pagar
    this.calcularMonto = (precio, cuotas) => precio / cuotas
}

// Creacion de 3 articulos
const mate = new Articulo("Mate", 300)
const termo = new Articulo("Termo", 500)
const mochila = new Articulo("Mochila", 1500)


// Menu principal
let mostarMenu = () => {
    let opcion = parseInt(prompt("Bienvenido, seleccione un articulo (9 para salir)\n 1 Mate\n 2 Termo\n 3 Mochila"))
    return opcion
}

let menuPago = (articulo) => {
    let opcionPago = parseInt(prompt(`El articulo ${articulo.nombre} cuesta ${articulo.precio}, en cuantas cuotas quiere pagarlo? (1-3)`))
    switch (opcionPago){
        case 1:
        case 2:
        case 3:
            let cuotas = articulo.calcularMonto(articulo.precio, opcionPago)
            alert("Serian " + opcionPago + " cuotas de " + cuotas)
            break
        default:
            alert("cantidad de cuotas invalidas")
            break
    }    
}

let opcionSeleccionada = mostarMenu()

while (opcionSeleccionada !== 9) {
    let opcionPago = 0
    if (opcionSeleccionada == 1) {
        menuPago(mate)       
    }
    if (opcionSeleccionada == 2) {
        menuPago(termo)
    }
    if (opcionSeleccionada == 3) {
        menuPago(mochila)
    }
    opcionSeleccionada = mostarMenu()
}

