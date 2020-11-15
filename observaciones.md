Querida Rebe, 

Qué hermosa quedó tu tienda. Me encanta la temática y la elección de colores. Como con tu ultimo trabajo, lograste respetar el diseño propuesto y a la vez hacerlo propio, dando un producto que cumple las consignas y además se siente muy original. 

Ire comentando tu trabajo de acuerdo a las consignas propuestas, y al final dejare algunos comentarios sueltos sobre tu codigo en general. Como siempre, la idea es darte las herramientas para que tu trabajo quede mejor aun. 

### Accesibilidad

En general tu sitio es accesible. En general utilizas correctamente las etiquetas semanticas, por lo que un lector de pantalla puede orientarse facilmente en tu web. Los colores y contrastes son en general adecuados, con una excepcion: Tus botones de "comprar" no tienen el contraste adecuado. Podes ver si tus colores tienen un contraste correcto en este link: https://webaim.org/resources/contrastchecker/?fcolor=FFFFFF&bcolor=C3AACA. El requisito del contraste es muy dificil de notar para quienes no tenemos problemas de visión, por lo que es importante siempre confirmar que sea correcto aunque creamos estar seguras. 

Tus imagenes no tienen atributos "alt". Recorda que estos sirven para que un lector de pantalla le pueda decir al usuario de que se trata esa imagen. Si bien hay debate respecto de la conveniencia de utilizarlos en e-commerce, era un requisito de este trabajo. 

Hay muchas ocasiones en las que usas div en las que habria sido mejor encontrar una alternativa semantica - section, article, etc. 


### Filtros y búsqueda

Tus filtros funcionan a la perfeccion. Habria sido bueno que los agregaras tambien en la parte responsive, y que lograras que se actualizara la cantidad de productos mostrados. Con respecto a eso ultimo, podemos encararlo asi:

Al momento de filtrar las tarjetas, seleccionamos los productos que estan ocultos, es decir, los que tienen la clase product-card y la clase hidden a la vez

```js
const productCardsFilter = () => {
    for (let singleProductCard of allProductCards) {
        if (passForFilter(singleProductCard)) {
            showCard(singleProductCard)
        }
        else {
            hideCard(singleProductCard)
        }
    }
    const productosOcultos = document.querySelector('.product-card.hidden')
    contarProductos(productosOcultos.length);
}
```
Luego definimos la funcion contarProductos:

```js
const contarProductos = (cantidad) => {
   const textoProductos = document.querySelector(".showing-productos")
    cantidad = 12 - cantidad
    cantidadProducto.textContent = `Mostrando ${cantidad} producto(s) de 12`
}
```

### Carrito

Tu carrito esta muy bien! A nivel estetico, quiza creo que haria falta prestarle mas atencion al diseño original y respetar mejor distancias, padding, etc, pero salvo ese detalle todo esta funcionando correctamente. 

La excepcion es el modal de vaciar, que por lo que veo no esta implementado. Deberia aparecer al hacer click en "empty-cart-button". 

### Checkout

Falta mucha atencion al maquetado aqui, se ve todo algo desprolijo. 

Todo deberia estar rodeado de una etiqueta "form", ya que es propiamente un formulario. El boton de "Finalizar" deberia ser un input type="submit" o un button type="submit" para permitir que el formulario se pueda enviar. Los dos input de email y nombre deberian incluir el atributo "required" para que se hagan obligatorios, y el usuario no pueda terminar la compra si no estan completados. 

Los resultados nos dan NaN. Eso ocurre porque calculas el total con estas variables: subTotalofOrder, priceDelivery, priceCharge, priceDiscount. 

subtotalofOrder nos da NaN porque esta definida asi:

```js
const subtotal = document.querySelector (".subtotal-value")
let subTotalofOrder = Number(subtotal.dataset.price)
```

"subtotal.dataset.price" no es 194, es $194.9 (con un signo pesos adelante), por lo que al convertirlo a numero nos da NaN. Pasa lo mismo con priceCharge: como lo definis en base a subtotalOfOrder, tambien se vuelve NaN. 

```js
const cardCharge =()=>{
    priceCharge = subTotalofOrder * 0.1
    charge.textContent = priceCharge
    return priceCharge

}
```

Con esos cambios resueltos, entiendo que tu subtotal deberia funcionar correctamente, pero escribime por cualquier cosa. 

### Misc 

Tu HTML esta muy bien en general, aunque con algunas desprolijidades (hay etiquetas que se cierran pero nunca se abren, y un tabulado confuso). tu CSS esta muy prolijo. 

Con respecto al aspecto visual de tu web, creo que te faltó tiempo. En donde se nota que pusiste tiempo y esfuerzo, el resultado es excelente. Donde no se ve tan bien, entiendo que el tiempo no fue tu aliado. Pero esa es una buena noticia: significa que, cuando tenes el tiempo para invertirlo, ya tenes dominada la parte visual de la programacion web. Y eso es algo a celebrar. 

Un detalle importante a tener en cuenta es que *nunca* debemos agregar transition en el hover. Fijate que al hacer hover sobre tus imagenes y luego sacar el mouse, vuelven a su lugar de una manera algo brusca, sin transicion. Eso es porque tenes el transition en el hover en lugar de en el elemento:

```css
.image:hover {
    transform: scale(1.2);
    transition: 0.2s;
}
```

Otro detalle, pero en el que valdria la pena invertir, es que habria apreciado mas efectos de hover en botones e iconos, para mostrarle al usuario que habia mas opcion de acciones. Un cambio de color en el hover de un boton le comunica muy rapidamente al usuario que ahi hay una accion que vale la pena tomar. 

Entiendo que el tiempo no estuvo de tu lado, pero eventualmente valdria la pena que te sentaras a acomodar el responsive. Muchisima gente va a ver tu web desde su celular y esta bueno darles una muestra de lo que podes hacer cuando no tenes una fecha de entrega persiguiendote, especialmente si queres agregar este trabajo a un portfolio. 

Menciono la calidad de tu css, prolijo, claro, bien hecho. Se nota muchisimo tu avance y aprendizaje aqui. Lo mismo ocurre con tu Javascript: mas alla de los detalles que te menciono, lo veo muy bien hecho, ordenado, prolijo, con poquisimos errores y con un evidente esfuerzo involucrado.  

### Nota 

Veo relativamente pocos problemas en tu TP, lo que no funcionó se nota que fue por falta de tiempo, y sí veo muchas cosas muy bien resueltas. Tu codigo es prolijo y correcto, y con atencion al detalle. 

Con respecto a los restantes factores de evaluación: 
❌ No cumplido
✔️ Puede mejorar
✅ Cumplido

✅ Respeta la consigna.
✅ Estructura correcta de documento HTML.
✅ Respeta el diseño dado.
✅ Respeta el funcionamiento.
❌  Responsive funciona correctamente.
✅ Buena estructura de proyecto.
✔️ Código bien indentado.
✅ Comentarios que permiten mejorar la legibilidad del código.
✅ Uso correcto de etiquetas semánticas.
✅ Buenos nombres de clases.
✅ Buenos nombres de funciones y variables.
✔️ Reutilización de estilos.
✔️  Funciones pequeñas.
✔️ Commits con mensajes adecuados.
✔️ Cumple con las condiciones de accesibilidad avanzada.

NOTA FINAL: 8




