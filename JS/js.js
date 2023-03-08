//Variables globales
let precioMedia = 450
let precioEntera = 650

//Capturas DOM
let viandas = document.getElementById("viandas")
let guardarViandaBtn = document.getElementById("guardarViandaBtn")
let verMenuBtn = document.getElementById("verMenu")
let ocultarMenuBtn = document.getElementById("ocultarMenu")
let botonCarrito = document.getElementById("botonCarrito")
let modalBodyCarrito = document.getElementById("modal-bodyCarrito")
let formAgregarVianda = document.getElementById("formAgregarVianda")
let precioTotal = document.getElementById("precioTotal")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let buscador = document.getElementById("buscador")
let coincidencia = document.getElementById("coincidencia")

//PLANTILLA PARA LAS VIANDAS

function mostrarMenu(array){

    viandas.innerHTML = ""
    for (let vianda of array){
        let nuevaVianda = document.createElement("div")
        nuevaVianda.classList.add("col-12", "col-md-6", "mt-4")
        nuevaVianda.innerHTML = `<div id="${vianda.id}" class="card ${vianda.dia} " style="width: 25rem;" >
                                    <div class="card-body">
                                        <h4 class="card-title">${vianda.dia}-${vianda.tipo}-${vianda.tamano}</h4>
                                        <p>${vianda.descripcion}</p>
                                        <p>Precio: ${vianda.precio}</p>
                                        <button id="agregarBtn${vianda.id}" class="btn btn-outline-success">Agregar al carrito</button>
                                    </div>
                                </div>`
        viandas.appendChild(nuevaVianda)

        let btnAgregar = document.getElementById(`agregarBtn${vianda.id}`)
        btnAgregar.addEventListener("click", ()=>{
            agregarAlCarrito(vianda)
        })
    
    }
}


function cargarVianda(array){
    
    let diaInput = document.getElementById("diaInput")
    let tamanoInput = document.getElementById("tamanoInput")
    let tipoInput = document.getElementById("tipoInput")
    let descripcionInput = document.getElementById("descripcionInput")
    let precioInput = 0

    if (tamanoInput.value.toUpperCase() == "MEDIA"){
        precioInput = precioMedia
    } else{
        precioInput = precioEntera
    }

    //creamos nuevo objeto 
    //para id dinámica usamos propiedad length
    const viandaNueva = new Vianda(array.length+1, diaInput.value, tamanoInput.value, tipoInput.value, descripcionInput.value, precioInput)
    //sumarlo al menu
    array.push(viandaNueva)
    //guardar en localStorage
    localStorage.setItem("menu", JSON.stringify(array))
    mostrarMenu(array)

    
    formAgregarVianda.reset()
    //Toastify
    Toastify({
        text: `Vianda "${viandaNueva.descripcion}" ha sido agregada al menú.`,
        gravity: "top",
        position: "right",
        style:{
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            color: "black"
        },
        duration: 2000
      }).showToast()

}


//Buscador
function buscarInfo(buscado, array){
    //método filter
    let busquedaArray = array.filter(
        (vianda) => vianda.dia.toLowerCase().includes(buscado.toLowerCase()) || vianda.tipo.toLowerCase().includes(buscado.toLowerCase()) || vianda.tamano.toLowerCase().includes(buscado.toLowerCase())
    ) 
    
    
    busquedaArray.length == 0 ? 
    (coincidencia.innerHTML = `<h3>No hay coincidencias con su búsqueda</h3>`, 
    mostrarMenu(busquedaArray)) 
    : 
    (coincidencia.innerHTML = "", 
    mostrarMenu(busquedaArray))
}

//CARRITO DE COMPRAS
let productosEnCarrito = []
if(localStorage.getItem("carrito")){
    for(let vianda of JSON.parse(localStorage.getItem("carrito"))){
        let cantStorage = vianda.cantidad
        let viandaCarrito = new Vianda(vianda.id, vianda.dia, vianda.tamano, vianda.tipo, vianda.descripcion, vianda.precio)
        viandaCarrito.cantidad = cantStorage
        productosEnCarrito.push(viandaCarrito)
    }
}else{
    productosEnCarrito = []
}

function agregarAlCarrito(vianda){
 
    let viandaAgregada = productosEnCarrito.find((elem)=> elem.id == vianda.id)

    if(viandaAgregada == undefined){
        productosEnCarrito.push(vianda)
        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
        
        //Sweet Alert
        Swal.fire({
            title: "Vianda agregada al carrito",
            text: `La vianda ${vianda.id} ha sido agregada.`,
            icon: "success",
            confirmButtonText: 'Entendido',
            confirmButtonColor: "green",
            timer: 3000
        })
    } else{
        Swal.fire({
            title: `Producto ya existente`,
            text: `La vianda ${vianda.id} ya existe en el carrito.`,
            icon: "info",
            timer: 2000,

        })
    }

}


//MODAL CARRITO DE COMPRAS
function cargarProductosCarrito(array){
    modalBodyCarrito.innerHTML = ""
    array.forEach((productoEnCarrito) => {

        modalBodyCarrito.innerHTML += `
        <div class="card border-primary mb-3" id ="productoCarrito${productoEnCarrito.id}" style="max-width: 540px;">
                 <div class="card-body">
                        <h4 class="card-title">${productoEnCarrito.dia}-${productoEnCarrito.tipo}-${productoEnCarrito.tamano}</h4>

                        <p class="card-text">${productoEnCarrito.descripcion}</p>
                        <p class="card-text">Precio: $${productoEnCarrito.precio}</p> 
                        <p class="card-text">Total de unidades: ${productoEnCarrito.cantidad}</p>
                        <p class="card-text">SubTotal: $ ${productoEnCarrito.precio * productoEnCarrito.cantidad}</p>
                        
                        <button class= "btn btn-success" id="botonSumarUnidad${productoEnCarrito.id}"><i class=""></i>+</button>
                        <button class= "btn btn-danger" id="botonEliminarUnidad${productoEnCarrito.id}"><i class=""></i>-</button>
                        <button class= "btn btn-danger" id="botonEliminar${productoEnCarrito.id}"><i class="fas fa-trash-alt"></i></button>
                 </div>    
            </div>
        `
    })

    //Boton de eliminar del carrito
    array.forEach((productoEnCarrito)=> {
        //Eliminar producto del carrito
        document.getElementById(`botonEliminar${productoEnCarrito.id}`).addEventListener("click", ()=>{
            //eliminar del DOM
            let cardProducto = document.getElementById(`productoCarrito${productoEnCarrito.id}`)
            cardProducto.remove()
            //eliminar del array de compras
            
            //hago un find para buscar en el array el objeto a eliminar
            let productoEliminar = array.find((vianda)=>vianda.id == productoEnCarrito.id)
            //indexOf para saber el indice en el array
            let posicion = array.indexOf(productoEliminar)
            array.splice(posicion,1)
            //eliminar el storage
            localStorage.setItem("carrito", JSON.stringify(array))
            //recalcular el total
            calcularTotal(array)
        })

        //Sumar unidad
        document.getElementById(`botonSumarUnidad${productoEnCarrito.id}`).addEventListener("click", ()=>{
            productoEnCarrito.sumarUnidad()
            localStorage.setItem("carrito", JSON.stringify(array))
            cargarProductosCarrito(array)
        })

        //Restar unidad
        document.getElementById(`botonEliminarUnidad${productoEnCarrito.id}`).addEventListener("click", ()=>{
            let eliminar = productoEnCarrito.restarUnidad()
            if(eliminar < 1){
                let cardProducto = document.getElementById(`productoCarrito${productoEnCarrito.id}`)
                cardProducto.remove()
                let productoEliminar = array.find((libro)=>libro.id == productoEnCarrito.id)
                let posicion = array.indexOf(productoEliminar)
                array.splice(posicion,1)
                localStorage.setItem("carrito", JSON.stringify(array))
                calcularTotal(array)
            }else{
                localStorage.setItem("carrito", JSON.stringify(array))
            }
            cargarProductosCarrito(array)
        })

    })

    calcularTotal(array)
}



function calcularTotal(array){

    let total = array.reduce((acc, productoCarrito)=> acc + (productoCarrito.precio * productoCarrito.cantidad) ,0)
    total == 0 ? precioTotal.innerHTML = `No hay productos en el carrito` :
    precioTotal.innerHTML = `El total del carrito es <strong>$ ${total}</strong>`

    return total
    
}

function finalizarCompra(){
    Swal.fire({
        title: 'Está seguro de realizar la compra',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
    }).then((result)=>{
        if(result.isConfirmed){
            Swal.fire({
                title: 'Compra realizada',
                icon: 'success',
                confirmButtonColor: 'green',
                text: `Muchas gracias por su compra. `,
                })
                //resetear carrito
                productosEnCarrito = []
                //removemos storage
                localStorage.removeItem("carrito")
        }else{
            Swal.fire({
                title: 'Compra no realizada',
                icon: 'info',
                text: `La compra no ha sido realizada! Sus productos siguen en el carrito.`,
                confirmButtonColor: 'green',
                timer:3500
            })
        }
    })
}



//EVENTOS:
guardarViandaBtn.addEventListener("click", () =>{
    cargarVianda(menu)
})

verMenuBtn.onclick = () => {
    mostrarMenu(menu)
}

ocultarMenuBtn.ondblclick = () => {
    viandas.innerHTML = ""
}

botonCarrito.addEventListener("click", ()=>{
    cargarProductosCarrito(productosEnCarrito)
})

botonFinalizarCompra.addEventListener("click", ()=>{
    finalizarCompra()
})

buscador.addEventListener("input", ()=>{
    buscarInfo(buscador.value.toLowerCase(), menu)
})



