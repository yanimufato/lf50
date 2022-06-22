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
function stockLibro () {
    let libroIngresado = prompt("Ingrese nombre del libro")
    console.log ("Resultado: ", calcularStock (libroIngresado))
}
function calcularLibro (libroIngresado) {
    switch (libro){
        case "El libro de los abrazos":
            alert ("Tenemos el libro seleccionado")
        case "El libro de los abrazos":
            alert ("Tenemos el libro seleccionado")        
        case "El libro de los abrazos":
            alert ("Tenemos el libro seleccionado")
        case "El libro de los abrazos":
            alert ("Tenemos el libro seleccionado")
        case "El libro de los abrazos":
            alert ("Tenemos el libro seleccionado") 
        case "El libro de los abrazos":
            alert ("Tenemos el libro seleccionado")
        default:
            alert ("No tenemos el libro seleccionado")       
    }
}

const libros =[]
const carrito =[]

class Libro {
    constructor (titulo, autor, editorial, codigo, ){
        this.titulo = titulo,
        this.autor = autor,
        this.editorial = editorial,
        this.codigo = codigo
    }
}
function listarLibros (){
    console.table (libros)
}
function agregarLibro (){
    let titulo = prompt("Ingrese titulo del libro")
    let autor = prompt("Ingrese el autor del libro")
    let editorial = prompt("Ingrese el nombre de la editorial")
    let codigo = parseInt (prompt("Ingrese el código del libro"))
    libros.push (new Libro(titulo, autor, editorial, codigo))
}

const fasiculos = [Enero, Febrero, Marzo, Abril, Mayo, Junio]

function listarFasiculos () {
    debugger
    fasiculos.forEach ( (fas)=> {
        console.table(fas)
    })
}


function cargarLibros ()
    for (const libro of libros){
        const li = document.createElement ("li")
        li.className = "coleccionLibro"
        li.innerText = libro
        li.id = libro + "lib"
        li.addEventListener("click", ()=> {
            agregarCarrito (`${libro}`)
        })
        listadoLibro.append(li)
    }