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



