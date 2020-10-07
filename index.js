
// ==========    Inicio de los selectores ============= 

const shoppingCartButton = document.getElementById ("view-cart")
const closeCartButton = document.getElementById ("close-cart")
const menuCart = document.getElementById ("menu")
const overlay = document.getElementById("overlay")

// ==========    Final de los selectores ============= 

//  ===============   Empiezan funciones para el carrito ===================

// Funcion para abrir el carrito

shoppingCartButton.onclick = () => {
    overlay.classList.remove ("hidden")
}

// Funcion para cerrar el carrito

 closeCartButton.onclick = () => {
     overlay.classList.add("hidden")
 }