alert('algo')

const Ventana_Emergente =document.getElementById("Ventana_Emergente");
const cerrar =document.getElementById("cerrar");

Ventana_Emergente.classList.add("show");

cerrar.addEventListener("click", () => {
    Ventana_Emergente.classList.remove("show");
    Ventana_Emergente.classList.add("hide");
})