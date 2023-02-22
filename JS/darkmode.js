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