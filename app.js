/*alert('algo')*/

const Ventana_Emergente =document.getElementById("Ventana_Emergente");
const cerrar =document.getElementById("cerrar");
const abrir = document.getElementById("abrir")


Ventana_Emergente.classList.add("show");

cerrar.addEventListener("click", () => {
    Ventana_Emergente.classList.remove("show");
    Ventana_Emergente.classList.add("hide");
})

abrir.addEventListener("click", () =>{
    Ventana_Emergente.classList.add("show");
    Ventana_Emergente.classList.remove("hide");
})