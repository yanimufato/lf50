import { productos } from "./stock.js";

let carritoCompras = []

export const carritoIndex = (productoId) => {
    const contenedorCarrito = document.getElementById("carrito-contenedor");
  
    const renderProductoCarrito = ()=>{    
        let producto = productos.find( producto => producto.id == productoId)
        carritoCompras.push(producto)
        
        producto.cantidad = 1

        let div = document.createElement("div")
        div.classList.add("productoEnCarrito")
        div.innerHTML = `<div class="card-body">
                            <p>${producto.titulo}</p>
                            <p>Precio: $${producto.precio}</p>
                            <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                            <button id="eliminar"${producto.id} class= "boton-eliminar" >Quitar</button>
                        </div>    
                        `
        contenedorCarrito.appendChild(div)
        
            
    } 
    renderProductoCarrito()
    guardoCarrito()
    function guardoCarrito(){
        if(contenedorCarrito.length > 0) {
            localStorage.setItem("carrito",contenedorCarrito)
        }
    }
    
    guardoCarrito()
               
}
