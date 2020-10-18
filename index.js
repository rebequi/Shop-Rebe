
// ==========    Inicio de los selectores DE CARRITO ============= 


// ------------------>>>>

const shoppingCartButton = document.getElementById("view-cart")
const closeCartButton = document.getElementById("close-cart")
const menuCart = document.getElementById("menu")
const overlay = document.getElementById("overlay")


// ==========    Final de los selectores ============= 

//  ===============   Empiezan funciones para el carrito ===================

// Funcion para abrir el carrito

shoppingCartButton.onclick = () => {
    overlay.classList.remove("hidden")
    document.body.classList.add("no-scroll")
    menuCart.classList.add("show-menu")


}

// Funcion para cerrar el carrito

closeCartButton.onclick = () => {
    overlay.classList.add("hidden")
    document.body.classList.remove("no-scroll")
    menuCart.classList.remove("show-menu")

}


//  ===============   Empiezan funciones para Modal de Checkout ===================

// ----------->> Selectores de checkout

const proceedToBuyButton = document.getElementById ("buy-article-button")
const checkoutMenu = document.getElementById ("checkout-menu")
const closeCheckout = document.getElementById ("close-checkout")
const overlayCheckout = document.getElementById("overlay-checkout")


// ----------->> funcion para abrir el modal de checkout
proceedToBuyButton.onclick =()=> {
    overlayCheckout.classList.remove("hidden")
}
// ----------->> funcion para abrir el modal de checkout

closeCheckout.onclick =()=>{
    overlayCheckout.classList.add ("hidden")
}


// ======================== AQUI EMPIEZAN LOS FILTROS ============================

// Selectores para los filtros

const filterByCategory = document.getElementsByClassName("checkbox-category")
const filterByReview = document.getElementsByClassName("checkbox-review")
const filterBySearch = document.querySelector("#search-bar")
const allProductCards = document.querySelectorAll(".product-card")


 // ------------ > aqui empieza a filtrar por nombre

const passForFilterInput =(singleProductCard) => {
      
       if (somethingWrittenOnTheInput()) {
        if (compareInputWithSingleCard(singleProductCard)) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return true
    }

}


 // ------------ > aqui empieza a filtrar por categorias
const passForFilterCategory =(singleProductCard) => {

    if (someCheckboxIsCheckedForCategory()){
        if (compareCategoryWithSingleCard(singleProductCard)) {
            return true
        }
        else {
            return false
        }
     
    }
    
    else {
        return true
    }
   

}

// ------------ > aqui empieza a filtrar por review
const passForFilterReview = (singleProductCard) => {
    if (someCheckboxIsCheckedForReview()) {
        if (compareReviewWithSingleCard(singleProductCard)){
            return true

        }
        else {
            return false
        }
        
    }
    else {
        return true
    }

}

// ---------------> Aqui empiezo a filtrar la tarjeta


const passForFilter =(singleProductCard)=>{
if (passForFilterInput(singleProductCard) && passForFilterReview (singleProductCard) && passForFilterCategory(singleProductCard)) {
    return true
}
else {
    return false
}

 
}

// ------------ > comparo lo escrito en el input con tarjeta 
const compareInputWithSingleCard = (singleProductCard) => {
    if (singleProductCard.dataset.nombre.includes(filterBySearch.value.toLowerCase())) {
        return true
    }
    else {
        return false
    }

}


// ------------ > comparo la categoria con tarjeta 

const compareCategoryWithSingleCard = (singleProductCard) => {
    for (let checkboxCategory of filterByCategory){
        if (checkboxCategory.checked) {
            if (checkboxCategory.value === singleProductCard.dataset.category){
                return true
            }
        }
    }
    return false

}


// ------------ > comparo el "review" con tarjeta 

const compareReviewWithSingleCard =(singleProductCard) => {
    for (let checkboxReview of filterByReview) {
        if (checkboxReview.checked) {
            if (checkboxReview.value === singleProductCard.dataset.review){
                return true 
            }
        }
    }
    return false
}


const hideCard = (singleProductCard) => {
    return singleProductCard.classList.add("hidden")
}

const showCard = (singleProductCard) => {
    return singleProductCard.classList.remove("hidden")
}

const productCardsFilter = () => {
    for (let singleProductCard of allProductCards) {
        if (passForFilter(singleProductCard)) {
            showCard(singleProductCard)
        }

        else {
            hideCard(singleProductCard)
        }
    }
}




const someCheckboxIsCheckedForCategory = () => {
    for (let checkboxCategory of filterByCategory) {
        if (checkboxCategory.checked) {
            return true
        }
    }
    return false
}

const someCheckboxIsCheckedForReview = () => {
    for (let checkboxReview of filterByReview) {
        if (checkboxReview.checked) {
            return true
        }

    }
    return false
}

const somethingWrittenOnTheInput = () => {
    if (filterBySearch.value){
        return true
    }
    else {
        return false
    }
}

filterBySearch.oninput = () => {
    productCardsFilter()

}

for (let checkboxCategory of filterByCategory) {
    checkboxCategory.oninput = () => {
        
       productCardsFilter ()
    }

}

for (let checkboxReview of filterByReview) {
    checkboxReview.oninput = () => {
      productCardsFilter()

    }

}



// ==========    Inicio de los selectores de VISTAS: lista o grilla ============= 

const buttonGrid = document.getElementById("grid")
const buttonList = document.getElementById ("list")
const containerOfProduct = document.querySelector (".product-list")


// ------------ > empiezo funcion para vista de grilla

buttonGrid.onclick = () => {
    for (let singleProductCard of allProductCards){
        singleProductCard.classList.add ("product-card")
        singleProductCard.classList.remove ("view-as-list")
        let productSpecification = singleProductCard.querySelector(".product-specification")
        productSpecification.classList.add ("hidden")
        
    }
}

// ------------ > empiezo funcion para vista de lista

buttonList.onclick = () => {
    for (let singleProductCard of allProductCards) {
singleProductCard.classList.add("view-as-list")
singleProductCard.classList.remove("product-card")
let productSpecification = singleProductCard.querySelector(".product-specification")
productSpecification.classList.remove ("hidden")

    }
}


