//Clase constructora
class Vianda{
    constructor(id, dia, tamano, tipo, descripcion, precio){
        //propiedades
        this.id = id,
        this.dia = dia.toUpperCase(),
        this.tamano = tamano.toUpperCase(),
        this.tipo = tipo.toUpperCase(),
        this.descripcion = descripcion 
        this.precio = precio
        this.cantidad = 1
    }

    sumarUnidad(){
        this.cantidad = this.cantidad + 1
        return this.cantidad 

    }

    restarUnidad(){
        this.cantidad = this.cantidad - 1
        return this.cantidad 
    }

}


//Estructura donde almacenamos toda las viandas
//Agregamos a storage
let menu = []

const cargarMenu = async ()=>{
    const response = await fetch("viandas.json")
    const data = await response.json()

    for(let vianda of data){
        let viandaNueva = new Vianda(vianda.id, vianda.dia, vianda.tamano, vianda.tipo, vianda.descripcion, vianda.precio)
        menu.push(viandaNueva)
    }
    
    localStorage.setItem("menu", JSON.stringify(menu))
}




if(localStorage.getItem("menu")){
    menu = JSON.parse(localStorage.getItem("menu"))
} else {
    //Cuando entra por primera vez
    cargarMenu()
}