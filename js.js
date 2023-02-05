/* PREENTREGA 1 */
//Variables globales
let precioMedia = 450
let precioEntera = 650

/*
let precioTotal = 0
document.getElementById('total').innerHTML = precioTotal
let cantPedidos = 0
document.getElementById('cantidad_pedidos').innerHTML = cantPedidos

//Contadores lunes
let cantidadLunesMediasTradicional = 0
document.getElementById('lunes_medias_tradicional').innerHTML = cantidadLunesMediasTradicional
let cantidadLunesEnterasTradicional = 0
document.getElementById('lunes_enteras_tradicional').innerHTML = cantidadLunesEnterasTradicional
let cantidadLunesMediasLight = 0
document.getElementById('lunes_medias_light').innerHTML = cantidadLunesMediasLight
let cantidadLunesEnterasLight = 0
document.getElementById('lunes_enteras_light').innerHTML = cantidadLunesEnterasLight

//let viandas = []

//Funcion para agregar una vianda al carrito
function agregarVianda(tamano, dia, tipo){

    //Sumo una vianda al contador que corresponda (según el día, el tamaño y el tipo)
    switch(dia){
        case "lunes":
            if (tamano == 'media'){
                if (tipo == 'tradicional'){
                    cantidadLunesMediasTradicional += 1
                    precioTotal += precioMedia
                    document.getElementById('lunes_medias_tradicional').innerHTML = cantidadLunesMediasTradicional
                }
                else {
                    cantidadLunesMediasLight += 1
                    precioTotal += precioMedia
                    document.getElementById('lunes_medias_light').innerHTML = cantidadLunesMediasLight
                }
            }
            else {
                if (tipo == 'tradicional'){
                    cantidadLunesEnterasTradicional += 1
                    precioTotal += precioEntera
                    document.getElementById('lunes_enteras_tradicional').innerHTML = cantidadLunesEnterasTradicional
                }
                else {
                    cantidadLunesEnterasLight += 1
                    precioTotal += precioEntera
                    document.getElementById('lunes_enteras_light').innerHTML = cantidadLunesEnterasLight
                }
            }
            document.getElementById('total').innerHTML = precioTotal

        case "martes":
            break
        case "miercoles":
            break
        case "jueves":
            break
        case "viernes":
            break
    }

}

//Funcion para quitar una vianda del carrito
function restarVianda(tamano, dia, tipo){

    switch(dia){
        case "lunes":
            if (tamano == 'media'){
                if (tipo == 'tradicional' && cantidadLunesMediasTradicional > 0){
                    cantidadLunesMediasTradicional -= 1
                    precioTotal -= precioMedia
                    document.getElementById('lunes_medias_tradicional').innerHTML = cantidadLunesMediasTradicional
                }
                else if (tipo == 'light' && cantidadLunesMediasLight > 0){
                    cantidadLunesMediasLight -= 1
                    precioTotal -= precioMedia
                    document.getElementById('lunes_medias_light').innerHTML = cantidadLunesMediasLight
                }
                else{
                    alert('No hay viandas para quitar')
                }
            }
            else {
                if (tipo == 'tradicional' && cantidadLunesEnterasTradicional > 0){
                    cantidadLunesEnterasTradicional -= 1
                    precioTotal -= precioEntera
                    document.getElementById('lunes_enteras_tradicional').innerHTML = cantidadLunesEnterasTradicional
                }
                else if (tipo == 'light' && cantidadLunesEnterasLight > 0){
                    cantidadLunesEnterasLight -= 1
                    precioTotal -= precioEntera
                    document.getElementById('lunes_enteras_light').innerHTML = cantidadLunesEnterasLight
                }
                else{
                    alert('No hay viandas para quitar')
                }
            }
            document.getElementById('total').innerHTML = precioTotal

        case "martes":
            break
        case "miercoles":
            break
        case "jueves":
            break
        case "viernes":
            break
    }

}

//Funcion para limpiar el carrito
function vaciarCarrito(){
    cantidadLunesMediasLight = 0
    document.getElementById('lunes_medias_light').innerHTML = cantidadLunesMediasLight
    cantidadLunesMediasTradicional = 0
    document.getElementById('lunes_medias_tradicional').innerHTML = cantidadLunesMediasTradicional
    cantidadLunesEnterasLight = 0
    document.getElementById('lunes_enteras_light').innerHTML = cantidadLunesEnterasLight
    cantidadLunesEnterasTradicional = 0
    document.getElementById('lunes_enteras_tradicional').innerHTML = cantidadLunesEnterasTradicional
    precioTotal = 0
    document.getElementById('total').innerHTML = precioTotal
}

//Funcion para confirmar el pedido
function confirmarPedido(){
    if (precioTotal != 0){
        alert("Pedido realizado!!")
        vaciarCarrito()
        cantPedidos +=1
        document.getElementById('cantidad_pedidos').innerHTML = cantPedidos
        let salir = false
        do{
            let respuesta = prompt('Desea realizar otro pedido? (SI / NO)').toUpperCase()
            if (respuesta == 'SI'){
                break
            }
            else if (respuesta == 'NO'){
                alert("Gracias por realizar tu pedido! Hasta la próxima!")
                salir = true
                cantPedidos = 0
                document.getElementById('cantidad_pedidos').innerHTML = cantPedidos
            }
        }while(!salir)
    }
    else {
        alert("El carrito se encuentra vacío")
    }
}
*/

/* PREENTREGA 2 */
//-----------------------------------------------
//Creación del objeto vianda
class Vianda{
    constructor(id, dia, tamano, tipo, descripcion, precio){
        //propiedades
        this.id = id,
        this.dia = dia.toUpperCase(),
        this.tamano = tamano.toUpperCase(),
        this.tipo = tipo.toUpperCase(),
        this.descripcion = descripcion 
        this.precio = precio
    }
}

//Instancias del objeto
const vianda1 = new Vianda(1, "LUNES", "MEDIA", "TRADICIONAL", "Milanesa de carne a la pizza con papas al horno", 450)
const vianda2 = new Vianda(2, "LUNES", "ENTERA", "TRADICIONAL", "Milanesa de carne a la pizza con papas al horno", 650)
const vianda3 = new Vianda(3, "LUNES", "MEDIA", "LIGHT", "Milanesa de berenjena a la pizza con ensalada", 450)
const vianda4 = new Vianda(4, "LUNES", "ENTERA", "LIGHT", "Milanesa de berenjena a la pizza con ensalada", 650)


//Estructura donde almacenamos toda las viandas
//Agregamos a storage
//Array de objetos
let menu = []
if(localStorage.getItem("menu")){
    menu = JSON.parse(localStorage.getItem("menu"))
} else {
    //Entra por primera vez
    menu.push(vianda1, vianda2, vianda3, vianda4)
    localStorage.setItem("menu", JSON.stringify(menu))
}

//Functions - Carga de viandas
function cargarViandas(){
    let diaIngresado = prompt("Ingrese el dia")
    let tamanoIngresado = prompt("Ingrese el tamaño")
    let tipoIngresado = prompt("Ingrese el tipo")
    let descripcionIngresada = prompt("Ingrese la comida")
    let precioIngresado = 0

    //Creamos el nuevo objeto
    if (tamanoIngresado == "MEDIA"){
        precioIngresado = precioMedia
    } else{
        precioIngresado = precioEntera
    }
    const viandaNueva = new Vianda(diaIngresado, tamanoIngresado, tipoIngresado, descripcionIngresada, precioIngresado)

    //Sumamos a los menus
    menu.push(viandaNueva)
    console.log(menu)
}

function eliminarVianda(array){
    console.log("A partir del menú, ingrese el id que desea eliminar")
    for(let elem of array){
        console.log(`${elem.id} - ${elem.dia} - ${elem.tipo} - ${elem.tamano} - ${elem.descripcion}`)
    }
    let idEliminar = parseInt(prompt("Ingrese el id a eliminar"))

    //Copia del array con solo las id
    let arrayID = array.map((vianda) => vianda.id)
    console.log(arrayID)

    //Obtener el indice
    let indice = arrayID.indexOf(idEliminar)

    //Primer parametro posición donde empieza a trabajar, Segundo parametro cuantos elementos elimina
    array.splice(indice, 1)
    verMenu(array)

}

function verMenu(menu){
    console.log("Bienvenido! Nuestro menu es:")
    menu.forEach((vianda)=>{
        console.log(vianda.id, vianda.dia, vianda.tamano, vianda.tipo, vianda.descripcion)
    })
}

//Aplicación de filter
function buscarPorDia(menu){
    let diaBuscado = prompt("Ingrese el dia que desea buscar")
    let diaEncontrado = menu.filter(
        (vianda)=> vianda.dia == diaBuscado.toUpperCase()
    )
    //si hay coincidencia nos devuelve un array con los objetos, sino un array vacío
    if(diaEncontrado.length == 0){
        console.log(`No hay ninguna comida para el dia ${diaBuscado}`)
    } else{  
        console.log(diaEncontrado) 
    }
}

function opciones(){
    let salir = false
    do{
        salir = preguntarOpcion(salir)
    } while(!salir)
}

function preguntarOpcion(salir){
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
        1 - Agregar vianda
        2 - Borrar vianda
        3 - Consultar menú
        4 - Buscar por día
        0 - Salir`))

    switch(opcionIngresada){
        case 1:
            cargarViandas();
            break
        case 2:
            eliminarVianda(menu)
            break
        case 3:
            verMenu(menu)
            break
        case 4:
            buscarPorDia(menu)
            break
        case 0:
            console.log("Gracias por utilizar nuestra app!")
            salir = true
            return salir
        default:
            console.log("Ingrese una opción válida")
            break
    }

}

//opciones()


/* -------------------------- PREENTREGA 3 -------------------------- */

//Capturas DOM
let viandas = document.getElementById("viandas")
let guardarViandaBtn = document.getElementById("guardarViandaBtn")
let verMenuBtn = document.getElementById("verMenu")
let ocultarMenuBtn = document.getElementById("ocultarMenu")



//PLANTILLA PARA LAS VIANDAS

function mostrarMenu(array){
    viandas.innerHTML = ""
    for (let vianda of array){
        let nuevaVianda = document.createElement("div")
        nuevaVianda.classList.add("col-12", "col-md-6", "mt-4")
        nuevaVianda.innerHTML = `<div id="${vianda.id}" class="card" style="width: 25rem;" >
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

    if (tamanoInput.value == "MEDIA" || tamanoInput.value == "media"){
        precioInput = precioMedia
    } else{
        precioInput = precioEntera
    }

    //creamos nuevo objeto 
    //para id dinámica usamos propiedad length
    const viandaNueva = new Vianda(array.length+1, diaInput.value, tamanoInput.value, tipoInput.value, descripcionInput.value, precioInput)
    console.log(viandaNueva)
    //sumarlo al menu
    array.push(viandaNueva)
    console.log(array)
    //guardar en localStorage
    localStorage.setItem("menu", JSON.stringify(array))
    mostrarMenu(array)

    //resetear los input 
    diaInput.value = ""
    tamanoInput.value = ""
    tipoInput.value = ""
    descripcionInput.value = ""
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


//MODO OSCURO:
let modoOscuro 

//Si existe lo guarda, sino lo crea
if(localStorage.getItem("modoOscuro")){
    modoOscuro = localStorage.getItem("modoOscuro")
    console.log(modoOscuro)
}else{
    console.log("Entra por primera vez")
    localStorage.setItem("modoOscuro", false)
    modoOscuro = localStorage.getItem("modoOscuro")
} 


if(modoOscuro == "true"){
    document.body.classList.add("darkMode")
}else{
    document.body.classList.remove("darkMode")
}

//Eventos DarkMode
botonDarkMode.addEventListener("click",()=>{
    document.body.classList.add("darkMode")
    //Edita el localStorage para que guarde darkMode
    localStorage.setItem("modoOscuro", true)
})

botonLightMode.addEventListener("click",()=>{
    document.body.classList.remove("darkMode")
    //localStorage edit
    localStorage.setItem("modoOscuro", false)
})

//cómo eliminar un item de Storage --> removeItem
let eliminarModeBtn = document.getElementById("eliminarMode")
eliminarModeBtn.addEventListener("click", function(){
    localStorage.removeItem("modoOscuro")
    localStorage.clear()
})


//CARRITO DE COMPRAS
let productosEnCarrito
if(localStorage.getItem("carrito")){
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
}else{
    productosEnCarrito = []
}

function agregarAlCarrito(vianda){
 
    console.log(`La vianda ${vianda.id} ha sido agregada.`)
    productosEnCarrito.push(vianda)
    console.log(productosEnCarrito)
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))

}