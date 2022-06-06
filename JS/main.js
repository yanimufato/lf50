let usuarioIngresado = prompt("Ingrese su usuario")
let passwordIngresado = prompt("Ingrese su contraseña")

if ((usuarioIngresado != "") && (passwordIngresado != "")){
    console.log("Bienvenido", usuarioIngresado)
}


debugger
function stockAutor () {
    let nombreIngresado = prompt("Ingrese nombre del autor")
    console.log ("Resultado: ", calcularStock (nombreIngresado))
}
function calcularStock (nombreIngresado){
    switch (autor) {
        case "Galeano":
            alert("Tenemos al autor seleccionado")
        case "Storni":
            alert("Tenemos al autor seleccionado")
        case "Cortazar":
            alert("Tenemos al autor seleccionado")
        default:
            alert("No tenemos al autor seleccionado")
        break               
    }
}
