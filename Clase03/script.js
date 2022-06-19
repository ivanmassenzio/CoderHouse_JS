let opcion = 0
let time = new Date();

do {
    console.log("1. Preguntar la hora")
    console.log("2. Preguntar el mes")
    console.log("3. Preguntar el año")
    console.log("9. Salir")

    opcion = parseInt(prompt("Ingrese una opcion: "))

    if (opcion == 1){
        alert("Son las: "+ time.getHours())
    }
    if (opcion == 2){
        alert("El mes es: "+ time.getDay())
    }
    if (opcion == 3){
        alert("El año es: "+ time.getFullYear())
    }
} while (opcion !== 9)
