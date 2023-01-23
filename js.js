/* PREENTREGA 1 */
//Variables globales
let precioTotal = 0
document.getElementById('total').innerHTML = precioTotal
let precioMedia = 450
let precioEntera = 650
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


/* PREENTREGA 2 */
//-----------------------------------------------
//Creación del objeto vianda
class Vianda{
    constructor(dia, tamano, tipo, descripcion){
        //propiedades
        this.dia = dia.toUpperCase(),
        this.tamano = tamano.toUpperCase(),
        this.tipo = tipo.toUpperCase(),
        this.descripcion = descripcion 
    }
}

//Instancias del objeto
const vianda1 = new Vianda("LUNES", "MEDIA", "TRADICIONAL", "Milanesa de carne a la pizza con papas al horno")
const vianda2 = new Vianda("LUNES", "ENTERA", "TRADICIONAL", "Milanesa de carne a la pizza con papas al horno")
const vianda3 = new Vianda("LUNES", "MEDIA", "LIGHT", "Milanesa de berenjena a la pizza con ensalada")
const vianda4 = new Vianda("LUNES", "ENTERA", "LIGHT", "Milanesa de berenjena a la pizza con ensalada")


//Estructura donde almacenamos toda las viandas
//Array de objetos
const menu = [vianda1, vianda2, vianda3, vianda4]
console.log(menu)


//Functions - Carga de viandas
function cargarVianda(){
    let diaIngresado = prompt("Ingrese el dia")
    let tamanoIngresado = prompt("Ingrese el tamaño")
    let tipoIngresado = prompt("Ingrese el tipo")
    let descripcionIngresada = prompt("Ingrese la comida")

    //Creamos el nuevo objeto
    const viandaNueva = new Vianda(diaIngresado, tamanoIngresado, tipoIngresado, descripcionIngresada)

    //Sumamos a los menus
    menu.push(viandaNueva)
    console.log(menu)
}

function verMenu(menu){
    console.log("Bienvenido! Nuestro menu es:")
    menu.forEach((vianda)=>{
        console.log(vianda.dia, vianda.tamano, vianda.tipo, vianda.descripcion)
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
            cargarVianda();
            break
        case 2:
            //borrar vianda
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

opciones()

//------------------------------------------------- 


