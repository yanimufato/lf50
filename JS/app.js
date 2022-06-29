import { productos } from './datos.js'; 
import { carritoIndex } from './carritoIndex.js';

const mostrarProductos = (productos) => { //donde va ubicado los libros
    const contenedorProductos = document.getElementById('producto-contenedor');

    productos.forEach( (producto) => {
        const div = document.createElement('div')
        div.classList.add('card') //contenedor de la info del libro
        div.innerHTML +=`<div class="card">
                            <img src="${producto.img}">
                            <div class="card-body">
                                <h3 class="card-title">${producto.titulo}</h3>
                                <p class="card-text">Autor: ${producto.autor}</p>
                                <p class="card-text">ISBN: ${producto.isbn}</p>
                                <p class="card-text">Precio: $ ${producto.precio}</p>
                                <button class="btn" id=boton ${producto.id}>Comprar</button>
                            </div>
                        </div>`

    contenedorProductos.appendChild(div)  
    
    const boton = document.getElementById(`boton ${producto.id}`)
    boton.addEventListener('click', ()=>{
        carritoIndex(producto.id)
        alert(`Se agrego ${producto.titulo}`)
    })
    });
}

mostrarProductos (productos)