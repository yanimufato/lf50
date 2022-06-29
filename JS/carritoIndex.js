import { productos } from "./datos.js";

let carritoCompras = [];

export const carritoIndex = (productoCodigo) =>{
    const contenedorCarrito = document.getElementById("carrito-contenedor")

    const renderProductoCarrito = ()=> {
        let producto = productos.find(producto => producto.codigo == productoCodigo)
        carritoCompras.push(producto)

        producto.cantidad = 1

        let div = document.createElement ('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `<h3 class="card-title">${producto.titulo}</h3>
                        <p class="card-text">Autor: ${producto.autor}</p>
                        <p class="card-text">Precio: $ ${producto.precio}</p>

                        <button id="eliminar ${producto.codigo}" class="btn-eliminar"></button>
                        `
        contenedorCarrito.appendChild(div)
    }        
    renderProductoCarrito ()           
}