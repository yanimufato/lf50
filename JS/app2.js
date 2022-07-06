const galeria = document.querySelector('#productoContenedor');
const carritoCargado = document.querySelector('#carritoContenedor');


function mostrarLibros (){
    libros.forEach((libro) =>{    
        const div = document.createElement('div')
        div.innerHTML += 
                        `<div class="card">
                            <img src="${libro.img}">
                            <div class="card-body"
                                <h3 class="card-title">${libro.titulo}</h3>
                                <p class="card-text">Autor: ${libro.autor}</p>
                                <p class="card-text">ISBN: ${libro.isbn}</p>
                                <p class="card-text">Precio: $ ${libro.precio}</p>
                                <button class="btn" id=boton${libro.id}>Comprar</button>
                            </div>
                        </div>`
        div.id = libro + "lib"                
        galeria.appendChild(div) 
        const boton = document.getElementById(`boton${libro.id}`);
        boton.addEventListener("click", ()=>{
            agregarAlCarrito(`${libro}`)
            Swal.fire(
                'Genial',
                'Se agregó el producto al carrito',
                'success'
              )
           // alert(`Se agrego ${libro.titulo}`)
        })
    })

}
mostrarLibros ()

function agregarAlCarrito (lib){
    carrito.push(lib)
    guardoCarrito()
    const div = 
                `<div class="card">
                        <div class="card-body"
                        <h3 class="card-title">${lib}</h3>
                        <p class="card-text">Autor: ${lib}</p>
                        <p class="card-text">Precio: $ ${lib}</p>
                    </div>
                </div>`
               
    document.querySelector('#carritoContenedor').innerHTML += div
    
    const cerrar = document.getElementById("cerrar")
    cerrar.addEventListener('click', ()=>{                        
        removerDelCarrito(div)
        
    })
    let str = JSON.stringify(div)  
    localStorage.setItem("div", str)
}
agregarAlCarrito ()

function removerDelCarrito (lib) {
    const libroAremover = document.getElementById(`${lib}`)
            libroAremover.remove()
}
removerDelCarrito ()

function guardoCarrito(){
    if(carrito.length > 0) {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
}

guardoCarrito()
