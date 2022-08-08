import { productos } from "./stock.js";
import { carritoIndex } from "./carritoindex.js";

const mostrarProductos = (productos) => {
    const contenedorProductos = document.querySelector("#producto-contenedor")

    productos.forEach( producto => {
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML += `<div class="card">
                            <img src="${producto.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.titulo}</h5>
                                <p class="card-text">Autor:  ${producto.autor}</p>
                                <p class="card-text">Precio: $${producto.precio}</p>
                                <button class="btn btn-primary" id=boton${producto.id}>Comprar</button>
                            </div>
                        </div>       
        `
    contenedorProductos.appendChild(div)    

    const boton = document.getElementById (`boton${producto.id}`)
    boton.addEventListener("click", () => {
        carritoIndex(producto.id)
        swal("Excelente", "El libro se agregó al carrito", "success");
    })

    })
}

mostrarProductos(productos)