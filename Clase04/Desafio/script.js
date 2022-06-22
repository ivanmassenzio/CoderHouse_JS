// Objetos de articulos
let mate = {
    precio: 300
}

let termo = {
    precio: 500
}

let mochila = {
    precio: 1500
}

// Menu principal
function mostarMenu() {
    let opcion = parseInt(prompt("Bienvenido, seleccione un articulo (9 para salir)\n 1 Mate\n 2 Termo\n 3 Mochila"))
    return opcion

}


// Funcion para calular el monto a pagar
function calcularMonto(precio, cuotas) {
    return precio / cuotas    
}



let opcionSeleccionada = mostarMenu()

while (opcionSeleccionada !== 9) {
    let opcionPago = 0
    if (opcionSeleccionada == 1) {
        opcionPago = parseInt(prompt("El Mate cuesta " + mate.precio + ", en cuantas cuotas quiere pagarlo? (1-3)"))
        switch (opcionPago){
            case 1:
            case 2:
            case 3:
                let cuotas = calcularMonto(mate.precio, opcionPago)
                alert("Serian " + opcionPago + " cuotas de " + cuotas)
                break
            default:
                alert("cantidad de cuotas invalidas")
                break
        }
    }
    if (opcionSeleccionada == 2) {
        opcionPago = parseInt(prompt("El Termo cuesta " + termo.precio + ", en cuantas cuotas quiere pagarlo? (1-3)"))
        switch (opcionPago){
            case 1:
            case 2:
            case 3:
                let cuotas = calcularMonto(termo.precio, opcionPago)
                alert("Serian " + opcionPago + " cuotas de " + cuotas)
                break
            default:
                alert("cantidad de cuotas invalidas")
                break
        }        
    }
    if (opcionSeleccionada == 3) {
        opcionPago = parseInt(prompt("La Mochila cuesta " + mochila.precio + ", en cuantas cuotas quiere pagarlo? (1-3)"))
        switch (opcionPago){
            case 1:
            case 2:
            case 3:
                let cuotas = calcularMonto(mochila.precio, opcionPago)
                alert("Serian " + opcionPago + " cuotas de " + cuotas)
                break
            default:
                alert("cantidad de cuotas invalidas")
                break
        }        
    }
    opcionSeleccionada = mostarMenu()
}

