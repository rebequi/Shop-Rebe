
// ==========    Inicio de los selectores ============= 

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


// ======================== AQUI EMPIEZAN LOS FILTROS ============================

// Selectores para los filtros

const filterByCategory = document.getElementsByClassName("checkbox-category")
const filterByReview = document.getElementsByClassName("checkbox-review")
const filterBySearch = document.querySelector("#search-bar")
const allProductCards = document.querySelectorAll(".product-card")



const passForFilter =(singleProductCard)=>{
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

const compareInputWithSingleCard = (singleProductCard) => {
    if (singleProductCard.dataset.nombre.includes(filterBySearch.value.toLowerCase())) {
        return true
    }
    else {
        return false
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
    // productCardsFilter()
    for (let singleProductCard of allProductCards) {
        console.log(compareInputWithSingleCard(singleProductCard))
    }


}

for (let checkboxCategory of filterByCategory) {
    checkboxCategory.oninput = () => {
        // productCardsFilter()
        console.log(someCheckboxIsCheckedForCategory())
    }

}

for (let checkboxReview of filterByReview) {
    checkboxReview.oninput = () => {
        console.log(someCheckboxIsCheckedForReview())
        //     productCardsFilter()

    }

}


